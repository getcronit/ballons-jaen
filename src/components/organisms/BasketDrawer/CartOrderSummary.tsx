import {Box, Button, Stack, Text} from '@chakra-ui/react'
import {FaArrowRight} from '@react-icons/all-files/fa/FaArrowRight'
import * as React from 'react'

import {formatPrice} from '../../../common/utils'
import { BallonButton } from '../../molecules/BallonButton'

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
  onClickCheckout
}: CartOrderSummaryProps) => {
  return (
    <Stack spacing="8" width="full" px="2">
      <Stack spacing="6">
        <Box>
          <Text
            as="span"
            fontSize={{
              base: 'md',
              md: 'lg'
            }}
            fontWeight="semibold">
            Zwischensumme:
          </Text>
          <Text
            fontSize={{
              base: 'lg',
              md: 'xl'
            }}
            fontWeight="extrabold">
            {formatPrice(subtotal, {currency})}
          </Text>
        </Box>

        <>{infoText}</>
      </Stack>
      <BallonButton
        size="md"
        py="9 !important"
        rightIcon={<FaArrowRight />}
        onClick={onClickCheckout}>
        {checkoutButtonText}
      </BallonButton>
    </Stack>
  )
}
