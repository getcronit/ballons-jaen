import {
  Alert,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Stack,
  Text,
  Link as CLink,
  AlertDescription
} from '@chakra-ui/react'
import {Link} from 'gatsby'
import {FaBox} from 'react-icons/fa'

import {CartItem} from './CartItem'
import {CartOrderSummary} from './CartOrderSummary'
import {CheckoutLineItem} from './stories/data'

export interface BasketDrawerProps {
  isOpen: boolean
  products: CheckoutLineItem[]
  wholesale: boolean
  requestCheckout: boolean
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
  wholesale,
  requestCheckout,
  subtotal
}: BasketDrawerProps) => {
  const currency = 'EUR'

  const temporaryProductRequestAlert = (
    <Alert status="warning" mt="4">
      <AlertDescription>
        <Stack>
          <Text>
            <strong>Achtung:</strong> Beim Absenden der Bestellung handelt es
            sich um eine <u>unverbindliche Anfrage</u>. Wir werden uns mit dir
            in Verbindung setzen, um die Bestellung zu bestätigen.
          </Text>

          {!wholesale && (
            <Text fontSize={'sm'}>
              Sind Sie ein Reseller?{' '}
              <CLink
                as={Link}
                to="/grosshandel"
                _hover={{
                  textDecoration: 'none'
                }}
                color="blue.500">
                Hier geht's zum Großhandel.
              </CLink>
            </Text>
          )}
        </Stack>
      </AlertDescription>
    </Alert>
  )

  return (
    <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton size="lg" />
        <DrawerHeader fontWeight="normal">
          <Heading fontSize="lg" as="h2" fontWeight="normal">
            Warenkorb ({products.length} Artikel)
          </Heading>
        </DrawerHeader>

        <Divider />

        <DrawerBody>
          <Stack spacing={{base: '8', md: '10'}}>
            <Stack spacing="6">
              {products.map(product => {
                const id = product.variant.id.toString()

                const stepperQuantity = parseInt(
                  (product.customAttributes as any[]).find(
                    attr => attr.key === 'stepperQuantity'
                  )?.value || '1'
                )

                return (
                  <CartItem
                    key={id}
                    name={product.title}
                    description="description"
                    quantity={product.quantity}
                    stepperQuantity={stepperQuantity}
                    price={parseFloat(product.variant.price.amount)}
                    imageUrl={product.variant.image?.src}
                    currency={currency}
                    onChangeQuantity={quantity => {
                      onProductQuantityChange(product.id.toString(), quantity)
                    }}
                    onClickDelete={() => {
                      onProductRemove(product.id.toString())
                    }}
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
            infoText={
              <>
                {wholesale ? (
                  <Text fontSize="sm" mt="0 !important">
                    Alle Preise exkl. 19% MwSt.
                  </Text>
                ) : (
                  <HStack color="gray.600" mt="0 !important">
                    <FaBox />
                    <Text fontSize="sm">
                      Versand + Steuern werden im nächsten Schritt berechnet.
                    </Text>
                  </HStack>
                )}
                {requestCheckout && temporaryProductRequestAlert}
              </>
            }
            checkoutButtonText={
              wholesale || requestCheckout ? 'jetzt bestellen' : 'zur Kassa'
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default BasketDrawer
