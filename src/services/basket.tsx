import { withStoreContext } from '@snek-at/gatsby-theme-shopify'
import { sq } from '@snek-functions/origin'
import { doNotConvertToString } from 'snek-query'
import React, { useCallback, useMemo } from 'react'

import { BasketDrawer } from '../components/organisms/BasketDrawer'

import { useAuthentication } from './authentication'
import { useToast } from '@chakra-ui/react'
import { OrderFormValues, OrderModal } from '../components/organisms/OrderModal'

export interface BaseketContextProps {
  onOpen: () => void
  onClose: () => void
  addProduct: (args: {
    variantId: string
    quantity: number
    stepperQuantity: number
  }) => void
  checkout: ShopifyBuy.Checkout | null
}

export const BasketContext = React.createContext<BaseketContextProps>({
  onOpen: () => { },
  onClose: () => { },
  addProduct: () => { },
  checkout: null
})

export const useBasket = () => {
  if (!BasketContext) {
    throw new Error('useBasket must be used within a BasketProvider')
  }

  return React.useContext(BasketContext)
}

const cleanLineItems = (lineItems: any[] = []) => {
  // Remove all line items that have a variant of null

  return lineItems.filter(lineItem => lineItem.variant !== null)
}

export interface BasketDrawerProps {
  children: React.ReactNode
}

export const BasketDrawerProvider = withStoreContext<BasketDrawerProps>(
  props => {
    const [open, setOpen] = React.useState(false)

    const toast = useToast()

    const [checkout, setCheckout] = React.useState<ShopifyBuy.Checkout | null>(
      null
    )

    const auth = useAuthentication()

    // Override wholesale to true for now until shopify checkout is implemented and tested
    const isRealWholesale = !!auth.user
    const wholesale = true || isRealWholesale

    React.useEffect(() => {
      void createOrFetchCheckout()
    }, [])

    const createOrFetchCheckout = useCallback(async () => {
      const checkoutId = localStorage.getItem('checkoutId')

      if (checkoutId) {
        const newCheckout = await props.client.checkout.fetch(checkoutId)
        setCheckout(newCheckout)
        return newCheckout
      }

      const checkout = await props.client.checkout.create()
      setCheckout(checkout)

      localStorage.setItem('checkoutId', checkout.id.toString())

      return checkout
    }, [])

    const onOpen = () => {
      setOpen(true)
    }

    const onClose = () => {
      setOpen(false)
    }

    const addProduct = async ({
      stepperQuantity,
      ...args
    }: {
      variantId: string
      quantity: number
      stepperQuantity: number
    }) => {
      const c = await createOrFetchCheckout()

      const newCheckout = await props.client.checkout.addLineItems(
        c.id as string,
        [
          {
            ...args,
            customAttributes: [
              { key: 'stepperQuantity', value: stepperQuantity.toString() }
            ]
          }
        ]
      )

      setCheckout(newCheckout)
      onOpen()
    }

    const updateProduct = async (args: { id: string; quantity: number }) => {
      const c = await createOrFetchCheckout()

      const newCheckout = await props.client.checkout.updateLineItems(
        c.id as string,
        [args]
      )

      setCheckout(newCheckout)
    }

    const removeProduct = async (id: string) => {
      const c = await createOrFetchCheckout()

      try {
        const newCheckout = await props.client.checkout.removeLineItems(
          c.id as string,
          [id]
        )

        setCheckout(newCheckout)
      } catch (e) {
        console.log(e)

        setCheckout(null)
      }
    }

    const [meta, setMeta] = React.useState<Record<string, any> | null>(null)
    const [isOrderOpen, setIsOrderOpen] = React.useState(false)

    const authentication = useAuthentication()

    const onOrderClose = () => {
      setIsOrderOpen(false)
    }

    const onOrderSubmit = async (data: OrderFormValues): Promise<void> => {
      // sleep 3 seconds to simulate a network request

      console.log(data, meta)

      const order = await createOrFetchCheckout()

      const [_, errors] = await sq.mutate(m =>
        m.mailpressMailSchedule({
          envelope: {
            replyTo: {
              value: data.email,
              type: doNotConvertToString('EMAIL_ADDRESS') as any
            }
          },
          template: {
            id: 'BALLOONS_ORDER_EMAIL',
            values: {
              cart: checkout?.lineItems.map(lineItem => ({
                name: lineItem.title.toString(),
                quantity: lineItem.quantity,
                sku: lineItem.variant?.sku,
                price: lineItem.variant?.price.amount,
                imgSrc: lineItem.variant?.image?.src
              })), 
              order: {
                id: order.id,
                totalPrice: order.totalPrice.amount,
                currency: order.totalPrice.currencyCode,
                note: data.message
              },
              customer: {
                emailAddress: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone
              },
              wholesale: authentication.user ? true : false,
              email: data.email,
              message: data.message,
              invokedOnUrl: meta?.url
            }
          }
        })
      )

      if (errors) {
        // Deutsch
        toast({
          title: 'Fehler',
          description: 'Es ist ein Fehler aufgetreten.',
          status: 'error',
          duration: 5000,
          isClosable: true
        })
      } else {
        toast({
          title: 'Erfolg',
          description: `Ihre Anfrage wurde erfolgreich abgeschickt. Sie erhalten eine Bestätigung per E-Mail.`,
          status: 'success',
          duration: 5000,
          isClosable: true
        })

        onClose()
        onOrderClose()
      }

      setCheckout(null)
      localStorage.removeItem('checkoutId')
    }

    const fixedValues = useMemo(() => {
      if (!authentication.user) {
        return undefined
      }

      return {
        firstName: authentication.user.firstName,
        lastName: authentication.user.lastName,
        email: authentication.user.email
      }
    }, [authentication.user])

    const onCheckout = async (): Promise<void> => {
      setIsOrderOpen(true)
      // if (wholesale) {
      //   const emailAddress = auth.user?.email

      //   if (!emailAddress) {
      //     throw new Error('No email address')
      //   }

      //   const c = await createOrFetchCheckout()

      //   const [_, errors] = await sq.mutate(m =>
      //     m.mailpressMailSchedule({
      //       envelope: {
      //         replyTo: {
      //           value: emailAddress,
      //           type: doNotConvertToString('EMAIL_ADDRESS') as any
      //         }
      //       },
      //       template: {
      //         id: 'BALLOONS_ORDER_EMAIL',
      //         values: {
      //           cart: checkout?.lineItems.map(lineItem => ({
      //             name: lineItem.title.toString(),
      //             quantity: lineItem.quantity,
      //             sku: lineItem.variant?.sku,
      //             price: lineItem.variant?.price.amount,
      //             imgSrc: lineItem.variant?.image?.src
      //           })),
      //           order: {
      //             id: c.id,
      //             totalPrice: c.totalPrice.amount,
      //             currency: c.totalPrice.currencyCode
      //           },
      //           customer: {
      //             fullName: auth.user?.name,
      //             emailAddress
      //           }
      //         }
      //       }
      //     })
      //   )

      //   if (errors) {
      //     // Deutsch
      //     toast({
      //       title: 'Fehler',
      //       description: 'Es ist ein Fehler aufgetreten.',
      //       status: 'error',
      //       duration: 5000,
      //       isClosable: true
      //     })
      //   } else {
      //     toast({
      //       title: 'Erfolg',
      //       description: `Ihre Bestellung wurde erfolgreich abgeschickt. Sie erhalten eine Bestätigung per E-Mail.`,
      //       status: 'success',
      //       duration: 5000,
      //       isClosable: true
      //     })

      //     onClose()
      //   }
      // } else {
      //   if (checkout?.webUrl) {
      //     window.open(checkout?.webUrl, '_blank')
      //     alert('onCheckout')
      //   }
      // }

      // setCheckout(null)
      // localStorage.removeItem('checkoutId')
    }

    return (
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      <BasketContext.Provider value={{ onOpen, onClose, addProduct, checkout }}>
        <BasketDrawer
          isOpen={open}
          onClose={onClose}
          products={cleanLineItems(checkout?.lineItems) as any}
          wholesale={isRealWholesale}
          requestCheckout={wholesale}
          // @ts-expect-error
          subtotal={parseFloat(checkout?.lineItemsSubtotalPrice?.amount || '0')}
          onProductQuantityChange={(id, quantity) => {
            void updateProduct({ id, quantity })
          }}
          onProductRemove={id => {
            void removeProduct(id)
          }}
          onClickCheckout={onCheckout}
        />
        {props.children}
        <OrderModal
          isOpen={isOrderOpen}
          onClose={onOrderClose}
          onSubmit={onOrderSubmit}
          fixedValues={fixedValues}
        />
      </BasketContext.Provider>
    )
  }
)
