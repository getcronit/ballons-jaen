import {forwardRef, HTMLChakraProps, ThemingProps} from '@chakra-ui/system'

import {ButtonOptions} from '@chakra-ui/button'

// import { useButtonGroup } from "@chakra-ui/button/dist/button-context"
// import { ButtonOptions } from "@chakra-ui/button/dist/button-types"
// import { ButtonSpinner } from "@chakra-ui/button/dist/button-spinner"

// import { ButtonIcon } from "@chakra-ui/button/dist/button-icon"
// import { useButtonType } from "@chakra-ui/button/dist/use-button-type"

import {Button} from '@chakra-ui/react'

export interface BallonButtonProps
  extends HTMLChakraProps<'button'>,
    ButtonOptions,
    ThemingProps<'Button'> {}

/**
 * Button component is used to trigger an action or event, such as submitting a form, opening a Dialog, canceling an action, or performing a delete operation.
 *
 * @see Docs https://chakra-ui.com/docs/components/button
 * @see WAI-ARIA https://www.w3.org/WAI/ARIA/apg/patterns/button/
 */
export const BallonButton = forwardRef<BallonButtonProps, 'button'>(
  (props, ref) => {
    return <Button ref={ref} {...props} />
  }
)
