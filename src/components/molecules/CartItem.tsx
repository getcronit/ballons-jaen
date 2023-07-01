import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
  useColorModeValue as mode
} from '@chakra-ui/react'
import * as React from 'react'

import {PriceTag} from '../PriceTag'

interface CartItemProps {
  readonly?: boolean
  name: string
  sku: string
  quantity: number
  price: number
  currency: string
  imageUrl: string | undefined
  onChangeQuantity?: (quantity: number) => void
  onClickGiftWrapping?: () => void
  onClickDelete?: () => void
  stepperQuantity: number
}

const QuantitySelect = (props: {
  stepperQuantity: number
  value: number
  onChange: (value: number) => void
}) => {
  const [value, setValue] = React.useState(props.value)

  return (
    <NumberInput
      aria-label="Select quantity"
      size="md"
      maxW={24}
      // focusBorderColor={mode("blue.500", "blue.200")}
      step={props.stepperQuantity}
      defaultValue={props.stepperQuantity}
      min={props.stepperQuantity}
      value={value}
      onChange={valueString => {
        const value = parseInt(valueString)
        setValue(value)
      }}
      onBlur={e => {
        props.onChange(value)
      }}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export const CartItem = (props: CartItemProps) => {
  const {
    name,
    sku,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    stepperQuantity,
    readonly
  } = props

  return (
    <Flex
      direction={{base: 'column', md: 'row'}}
      justify="space-between"
      align="center">
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          boxSize={readonly ? '16' : 28}
          fit="cover"
          src={imageUrl}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4" width="full">
          <Stack spacing="0.5" width="full">
            <HStack justifyContent="space-between">
              <Text fontWeight="medium" fontSize="md" noOfLines={1}>
                {name}
              </Text>
              <HStack>
                {readonly && <span>{quantity} x</span>}
                <PriceTag price={price} currency={currency} />
              </HStack>
            </HStack>
            <Text
              color={mode('gray.400', 'gray.400')}
              fontSize={{
                base: 'xs',
                md: 'sm'
              }}>
              Artikelnummer: {sku}
            </Text>
            {!readonly && (
              <HStack justifyContent="space-between">
                <QuantitySelect
                  stepperQuantity={stepperQuantity}
                  value={quantity}
                  onChange={value => {
                    onChangeQuantity?.(value)
                  }}
                />
                <Link
                  fontSize="sm"
                  color="blue.500"
                  _hover={{
                    textDecoration: 'underline'
                  }}
                  onClick={onClickDelete}>
                  Delete
                </Link>
              </HStack>
            )}
          </Stack>
        </Box>
      </Stack>

      {/* <Flex mt="4" align="center" width="full" justify="space-between">
          <Link fontSize="sm" textDecor="underline">
            Delete
          </Link>
          <QuantitySelect
            value={quantity}
            onChange={e => {
              onChangeQuantity?.(+e.currentTarget.value)
            }}
          />
          <PriceTag price={price} currency={currency} />
        </Flex> */}
    </Flex>
  )
}
