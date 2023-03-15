import {withStoreContext} from '@snek-at/gatsby-theme-shopify'
import React from 'react'

import {BasketDrawer} from '../components/organisms/BasketDrawer'

import {useAuthentication} from './authentication'

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
  onOpen: () => {},
  onClose: () => {},
  addProduct: () => {},
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

    const [checkout, setCheckout] =
      React.useState<ShopifyBuy.Checkout | null>(null)

    const auth = useAuthentication()

    const wholesale = !!auth.user

    React.useEffect(() => {
      // get checkout id from local storage if it exists and set it to state
      const checkoutId = localStorage.getItem('checkoutId')

      if (checkoutId) {
        const getCheckout = async () => {
          const newCheckout = await props.client.checkout.fetch(checkoutId)
          setCheckout(newCheckout)
        }

        void getCheckout()
      }

      const createCheckout = async () => {
        const checkout = await props.client.checkout.create()
        setCheckout(checkout)
        localStorage.setItem('checkoutId', checkout.id.toString())
      }

      // if checkout id does not exist, create a new checkout
      if (!checkoutId) {
        void createCheckout()
      }
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
      const newCheckout = await props.client.checkout.addLineItems(
        checkout?.id as string,
        [
          {
            ...args,
            customAttributes: [
              {key: 'stepperQuantity', value: stepperQuantity.toString()}
            ]
          }
        ]
      )

      setCheckout(newCheckout)
      onOpen()
    }

    const updateProduct = async (args: {id: string; quantity: number}) => {
      const newCheckout = await props.client.checkout.updateLineItems(
        checkout?.id as string,
        [args]
      )

      setCheckout(newCheckout)
    }

    const removeProduct = async (id: string) => {
      try {
        const newCheckout = await props.client.checkout.removeLineItems(
          checkout?.id as string,
          [id]
        )

        setCheckout(newCheckout)
      } catch (e) {
        console.log(e)

        setCheckout(null)
      }
    }

    return (
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      <BasketContext.Provider value={{onOpen, onClose, addProduct, checkout}}>
        <BasketDrawer
          isOpen={open}
          onClose={onClose}
          products={cleanLineItems(checkout?.lineItems) as any}
          wholesale={wholesale}
          // @ts-expect-error
          subtotal={parseFloat(checkout?.lineItemsSubtotalPrice?.amount || '0')}
          onProductQuantityChange={(id, quantity) => {
            void updateProduct({id, quantity})
          }}
          onProductRemove={id => {
            void removeProduct(id)
          }}
          onClickCheckout={() => {
            if (wholesale) {
              alert(
                `Email sent to ${auth.user?.email}. Please check your inbox. (mock)`
              )
            } else {
              if (checkout?.webUrl) {
                window.open(checkout?.webUrl, '_blank')
              }

              setCheckout(null)
            }
          }}
        />
        {props.children}
      </BasketContext.Provider>
    )
  }
)
