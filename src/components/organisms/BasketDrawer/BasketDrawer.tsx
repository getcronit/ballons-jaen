import {
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Stack
  } from '@chakra-ui/react'
  import React from 'react'
  
  import {CartItem} from './CartItem'
  import {CartOrderSummary} from './CartOrderSummary'
  import {CheckoutLineItem} from './stories/data'
  
  export interface BasketDrawerProps {
    isOpen: boolean
    products: Array<CheckoutLineItem>
    subtotal: number
    onClickCheckout: () => void
    onProductQuantityChange: (id: string, quantity: number) => void
    onProductRemove: (id: string) => void
    onClose: () => void
  }
  export const BasketDrawer = ({
    isOpen,
    onClose,
    onClickCheckout,
    onProductQuantityChange,
    onProductRemove,
    products,
    subtotal
  }: BasketDrawerProps) => {
    const currency = 'EUR'
  
    return (
      <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />
          <DrawerHeader>
            <Heading fontSize="lg" as="h2" fontWeight={'normal'}>
              Warenkorb ({products.length} Artikel)
            </Heading>
          </DrawerHeader>
  
          <Divider />
  
          <DrawerBody>
            <Stack spacing={{base: '8', md: '10'}}>
              <Stack spacing="6">
                {products.map(product => {
                  console.log(product)
                  const id = product.variant.id.toString()
  
                  return (
                    <CartItem
                      key={id}
                      name={product.title}
                      description={'description'}
                      quantity={product.quantity}
                      price={parseFloat(product.variant.price.amount)}
                      imageUrl={product.variant.image?.src}
                      currency={currency}
                      onChangeQuantity={quantity => {
                        onProductQuantityChange(product.id.toString(), quantity)
                      }}
                      onClickDelete={() => onProductRemove(product.id.toString())}
                    />
                  )
                })}
              </Stack>
            </Stack>
          </DrawerBody>
  
          <Divider />
  
          <DrawerFooter>
            <CartOrderSummary
              subtotal={subtotal}
              currency={currency}
              onClickCheckout={onClickCheckout}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }
  
  export default BasketDrawer
  