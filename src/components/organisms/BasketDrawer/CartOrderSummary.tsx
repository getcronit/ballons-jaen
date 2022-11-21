import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react"
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight"
import { FaBox } from "@react-icons/all-files/fa/FaBox"
import * as React from "react"

import { formatPrice } from "./PriceTag"

export interface CartOrderSummaryProps {
  subtotal: number
  currency: string
  infoText?: React.ReactNode
  checkoutButtonText: string
  onClickCheckout?: () => void
}

export const CartOrderSummary = ({
  subtotal,
  currency,
  infoText,
  checkoutButtonText,
  onClickCheckout,
}: CartOrderSummaryProps) => {
  return (
    <Stack spacing="8" width="full" px="2">
      <Stack spacing="6">
        <Box>
          <Text as={"span"} fontSize="xl" fontWeight="semibold">
            Zwischensumme:
          </Text>
          <Text fontSize="2xl" fontWeight="extrabold">
            {formatPrice(subtotal, { currency })}
          </Text>
        </Box>

        <>{infoText}</>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={onClickCheckout}
      >
        {checkoutButtonText}
      </Button>
    </Stack>
  )
}
