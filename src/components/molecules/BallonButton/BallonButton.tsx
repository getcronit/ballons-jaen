import {useMergeRefs} from '@chakra-ui/react-use-merge-refs'
import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useStyleConfig
} from '@chakra-ui/system'
import {cx, dataAttr} from '@chakra-ui/shared-utils'

import {useMemo} from 'react'

import {useButtonGroup, ButtonOptions, ButtonSpinner} from '@chakra-ui/button'

// import { useButtonGroup } from "@chakra-ui/button/dist/button-context"
// import { ButtonOptions } from "@chakra-ui/button/dist/button-types"
// import { ButtonSpinner } from "@chakra-ui/button/dist/button-spinner"

// import { ButtonIcon } from "@chakra-ui/button/dist/button-icon"
// import { useButtonType } from "@chakra-ui/button/dist/use-button-type"

import {ButtonIcon} from './button-icon'
import {useButtonType} from './use-button-type'

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
    const group = useButtonGroup()
    const styles = useStyleConfig('Button', {...group, ...props})

    const {
      isDisabled = group?.isDisabled,
      isLoading,
      isActive,
      children,
      leftIcon,
      rightIcon,
      loadingText,
      iconSpacing = '0.5rem',
      type,
      spinner,
      spinnerPlacement = 'start',
      className,
      as,
      ...rest
    } = omitThemingProps(props)

    /**
     * When button is used within ButtonGroup (i.e. flushed with sibling buttons),
     * it is important to add a `zIndex` on focus.
     *
     * So let's read the component styles and then add `zIndex` to it.
     */
    const buttonStyles: SystemStyleObject = useMemo(() => {
      // @ts-ignore
      const _focus = {...styles?.['_focus'], zIndex: 1}
      return {
        display: 'inline-flex',
        appearance: 'none',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        outline: 'none',
        ...styles,
        ...(!!group && {_focus})
      }
    }, [styles, group])

    const {ref: _ref, type: defaultType} = useButtonType(as)

    const contentProps = {rightIcon, leftIcon, iconSpacing, children}

    return (
      <chakra.button
        ref={useMergeRefs(ref, _ref)}
        as={as}
        type={type ?? defaultType}
        data-active={dataAttr(isActive)}
        data-loading={dataAttr(isLoading)}
        __css={buttonStyles}
        className={cx('chakra-button', className)}
        {...rest}
        disabled={isDisabled || isLoading}
        bg="none"
        boxShadow="none"
        outline="none"
        _hover={{
          '> svg path': {
            d: 'path("M22,5C12.4,7.1,4,13.1,4,23s8.4,16.3,18,18c13.4,2.4,73.3,2.5,88,0c9.7-1.6,18-8.1,18-18s-8.2-16.5-18-18 C96,2.8,35.6,2,22,5z")',
            //fill: 'red',
            transition: 'd 0.5s'
          },
          '> .button-text': {
            transform: 'scale(1.05)',
            transition: 'transform 0.5s'
          }
        }}
        _active={{
          '> svg path': {
            d: 'path("M22,5C11.9,3,4,13.1,4,23s8,19.8,18,18c38.8-7.4,64.1-4.2,88,0c9.7,1.7,18-8.1,18-18s-8.3-19.9-18-18 C87.8,9.3,50.2,10.5,22,5z")',
            //fill: 'red',
            transition: 'd 0.5s'
          },
          '> .button-text': {
            transform: 'scale(0.9)',
            transition: 'transform 0.5s'
          }
        }}>
        <chakra.svg
          pos={'absolute'}
          w="full"
          h="full"
          viewBox="0 0 132 46"
          preserveAspectRatio="none"
          color={buttonStyles.bg as string}>
          <path
            fill="currentColor"
            //stroke="currentColor"
            stroke="#E3000F"
            filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
            //strokeWidth="5"
            strokeWidth="2"
            d="M22,5C12.2,5.3,4,13.1,4,23s8.2,17.8,18,18c9.9,0.2,78.2,0.3,88,0c9.8-0.3,18-8.1,18-18s-8.1-17.8-18-18 C100.1,4.8,31.9,4.7,22,5z"
          />
        </chakra.svg>
        {isLoading && spinnerPlacement === 'start' && (
          <ButtonSpinner
            zIndex="1"
            className="chakra-button__spinner--start"
            label={loadingText}
            placement="start"
            spacing={iconSpacing}>
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <chakra.span className="button-text" opacity={0} zIndex="1">
              <ButtonContent {...contentProps} />
            </chakra.span>
          )
        ) : (
          <chakra.span className="button-text" opacity={1} zIndex="1">
            <ButtonContent {...contentProps} />
          </chakra.span>
        )}

        {isLoading && spinnerPlacement === 'end' && (
          <ButtonSpinner
            zIndex="1"
            className="chakra-button__spinner--end"
            label={loadingText}
            placement="end"
            spacing={iconSpacing}>
            {spinner}
          </ButtonSpinner>
        )}
      </chakra.button>
    )
  }
)

BallonButton.displayName = 'Button'

type ButtonContentProps = Pick<
  BallonButtonProps,
  'leftIcon' | 'rightIcon' | 'children' | 'iconSpacing'
>

function ButtonContent(props: ButtonContentProps) {
  const {leftIcon, rightIcon, children, iconSpacing} = props
  return (
    <>
      {leftIcon && <ButtonIcon marginEnd={iconSpacing}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && (
        <ButtonIcon marginStart={iconSpacing}>{rightIcon}</ButtonIcon>
      )}
    </>
  )
}
