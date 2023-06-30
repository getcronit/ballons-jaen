import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Field, useField } from '@snek-at/jaen'
import { navigate } from 'gatsby'
import React from 'react'
import { validateUrl } from '../../common/utils'
import { BallonButton } from '../molecules/BallonButton'

const UpdateUrlForm: React.FC<{
  onSaved: (url: string) => void
  onCancle: () => void
  initUrl: string
}> = ({ onSaved, onCancle, initUrl }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<{
    url: string
  }>({
    defaultValues: {
      url: initUrl
    }
  })

  // Update default values when initUrl changes
  React.useEffect(() => {
    reset({
      url: initUrl
    })
  }, [initUrl, reset])

  const onSubmit = (data: { url: string }) => {
    onSaved(data.url)

    // reset the form
    onCancle()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack color="chakra-body-text">
        <FormControl isInvalid={!!errors.url}>
          <FormLabel htmlFor="url">Url</FormLabel>
          <Input
            id="url"
            placeholder={initUrl}
            {...register('url', {
              required: 'This is required',
              validate: value =>
                validateUrl(value) || 'Please enter a valid url'
            })}
          />
          <FormErrorMessage>
            {errors.url && errors.url.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancle}>
            Cancel
          </Button>
          <Button colorScheme="jaen" isLoading={isSubmitting} type="submit">
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  )
}

const LinkButtonField: React.FC<
  {
    name: string
    defaultValue?: string
    defaultUrl?: string
  } & ButtonProps
> = ({ name, defaultValue, defaultUrl, ...buttonProps }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  const hiddenUrlFieldName = `${name}.url`

  const buttonTextField = useField<string>(name, 'IMA:TextField')
  const hiddenUrlField = useField<string>(hiddenUrlFieldName, 'IMA:TextField')

  const handleUrlChange = (url: string) => {
    hiddenUrlField.write(url)
  }

  const [urlValue, setUrlValue] = React.useState<string>('/')

  React.useEffect(() => {
    const hiddenUrlFieldDefaultValue = defaultUrl || 'https://example.com'

    const valueWithoutHTML =
      (hiddenUrlField.value || hiddenUrlField.staticValue)?.replace(
        /<[^>]*>?/gm,
        ''
      ) ||
      hiddenUrlFieldDefaultValue ||
      ''

    setUrlValue(valueWithoutHTML)

  }, [defaultUrl, hiddenUrlField])

  const handleButtonClick = () => {
    navigate(urlValue)
  }

  return (
    <Box pos={'relative'} maxW={'fit-content'}>
      <Field.Text
        as={BallonButton}
        py="7 !important"
        asAs={'span'}
        bgColor={'blue'}
        {...buttonProps}
        // onClick only if not editing
        onClick={buttonTextField.isEditing ? undefined : handleButtonClick}
        mr={3}
        //disabled={buttonTextField.isEditing}
        cursor={
          buttonTextField.isEditing ? 'text !important' : 'pointer !important'
        }
        name={name}
        defaultValue={defaultValue || 'Button Text'}
      />
      {buttonTextField.isEditing && (
        <Box pos={'absolute'} right={0} top={0}>
          <Popover
            isLazy
            isOpen={isOpen}
            initialFocusRef={firstFieldRef}
            onOpen={onOpen}
            onClose={onClose}
            placement="right"
            closeOnBlur={false}>
            <PopoverTrigger>
              <IconButton
                size="sm"
                icon={<EditIcon />}
                aria-label={''}
                colorScheme="jaen"
              />
            </PopoverTrigger>
            <PopoverContent p={5}>
              <PopoverArrow />
              <PopoverCloseButton />
              <UpdateUrlForm
                onSaved={handleUrlChange}
                onCancle={onClose}
                initUrl={urlValue}
              />
            </PopoverContent>
          </Popover>
        </Box>
      )}
    </Box>
  )
}

export default LinkButtonField
