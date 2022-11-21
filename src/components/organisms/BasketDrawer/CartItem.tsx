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
  useColorModeValue as mode,
} from "@chakra-ui/react"
import * as React from "react"

import { PriceTag } from "./PriceTag"

type CartItemProps = {
  name: string
  description: string
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
      }}
    >
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
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    stepperQuantity,
  } = props

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <Stack direction="row" spacing="5" width="full">
        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={imageUrl}
          alt={name}
          draggable="false"
          loading="lazy"
        />
        <Box pt="4" width="full">
          <Stack spacing="0.5" width="full">
            <HStack justifyContent={"space-between"}>
              <Text fontWeight="medium" noOfLines={1}>
                {name}
              </Text>
              <PriceTag price={price} currency={currency} />
            </HStack>
            <Text color={mode("gray.400", "gray.400")}>{description}</Text>
            <HStack justifyContent={"space-between"}>
              <QuantitySelect
                stepperQuantity={stepperQuantity}
                value={quantity}
                onChange={value => {
                  onChangeQuantity?.(value)
                }}
              />
              <Link
                fontSize="sm"
                color={"blue.500"}
                _hover={{
                  textDecoration: "underline",
                }}
                onClick={onClickDelete}
              >
                Delete
              </Link>
            </HStack>
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
