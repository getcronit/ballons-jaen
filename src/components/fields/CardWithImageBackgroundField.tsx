import {Box, Grid, Heading, HStack, Stack, Text} from '@chakra-ui/react'
import {Field, useField} from '@snek-at/jaen'
import {BiChevronRight} from 'react-icons/bi'

import {EditIcon} from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
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
  useDisclosure
} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'

import {navigate} from 'gatsby'
import React from 'react'

interface ICardWithImageBackgroundProps {
  card: {
    headingFieldName?: string
    headingDefaultValue?: string
    textFieldName?: string
    textDefaultValue?: string
    imageFieldName?: string
    imageDefaultValue?: string
    linkUrl?: string
  }
  displayContent?: boolean
  minW?: {} | string
  w?: {} | string
  h?: {} | string
  isSmallText?: boolean
}

const validateUrl = (value: string): boolean => {
  try {
    new URL(value)
    return true
  } catch (_) {
    return false
  }
}

const UpdateUrlForm: React.FC<{
  onSaved: (url: string) => void
  onCancle: () => void
  initUrl: string
}> = ({onSaved, onCancle, initUrl}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors, isSubmitting}
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

  const onSubmit = (data: {url: string}) => {
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

const CardWithImageBackgroundField: React.FC<
  ICardWithImageBackgroundProps & {
    name: string
    defaultValue?: string
    defaultUrl?: string
  }
> = ({
  name,
  defaultValue,
  defaultUrl,
  card,
  displayContent = true,
  minW,
  w,
  h,
  isSmallText = false
}) => {
  const {onOpen, onClose, isOpen} = useDisclosure()
  const firstFieldRef = React.useRef(null)

  const hiddenUrlFieldName = `${name}.url`
  const hiddenUrlFieldDefaultValue = defaultUrl || 'https://example.com'

  const buttonTextField = useField<string>(name, 'IMA:TextField')
  const hiddenUrlField = useField<string>(hiddenUrlFieldName, 'IMA:TextField')

  const handleUrlChange = (url: string) => {
    hiddenUrlField.write(url)
  }

  const handleButtonClick = () => {
    navigate(urlValue)
  }

  const urlValue = React.useMemo(() => {
    const valueWithoutHTML =
      hiddenUrlField.value?.replace(/<[^>]*>?/gm, '') ||
      hiddenUrlFieldDefaultValue ||
      ''
    return valueWithoutHTML
  }, [hiddenUrlField.value])

  return (
    <Box pos={'relative'} h="full" w="full" minW={minW || '20rem'}>
      <Stack
        onClick={!buttonTextField.isEditing ? handleButtonClick : undefined}
        position="relative"
        // _hover={{
        //   transition: 'all 0.3s ease',
        //   transform: {
        //     md: 'scale(1.03) ',
        //     lg: 'scale(1.03) '
        //   }
        // }}
        // transition="ease-in 0.2s"
        boxShadow="darker"
        color="white"
        justify="end"
        h={h ?? 'full'}
        w={w ?? {}}
        borderRadius="xl"
        overflow={'hidden'}
        minW={minW || '20rem'}>
        {card.imageFieldName && <Field.Image name={card.imageFieldName} />}
        <Box position="absolute">
          {displayContent && (
            <Stack p="6" pb="4">
              {card.headingFieldName && (
                <Heading fontSize={{base: 'lg', xl: 'xl'}} fontWeight="700">
                  <Field.Text
                    name={card.headingFieldName}
                    label="Heading"
                    defaultValue={card.headingDefaultValue ?? ''}
                  />
                </Heading>
              )}

              {card.textFieldName && (
                <Text
                  fontSize={{base: 'sm', lg: isSmallText ? 'sm' : 'md'}}
                  maxW="80%"
                  as="span">
                  <Field.Text
                    name={card.textFieldName}
                    label="Text"
                    defaultValue={card.textDefaultValue ?? ''}
                  />
                </Text>
              )}

              <HStack
                cursor="pointer"
                _hover={{
                  textDecoration: 'underline',
                  '&>div': {boxShadow: '0 0 5px 1px white'}
                }}
                // _hover={{
                //   transform: {
                //     md: "scale(1.05) translateX(0px)",
                //     lg: "scale(1.05) translateX(5px)",
                //   },
                // }}
                transition="ease-in 0.2s">
                <Text
                  onClick={
                    !buttonTextField.isEditing ? handleButtonClick : undefined
                  }
                  fontSize={{base: 'sm', lg: 'md'}}
                  fontWeight="700">
                  Mehr anzeigen
                </Text>
                <Grid
                  placeItems="center"
                  h={{base: '4', lg: '6'}}
                  w={{base: '4', lg: '6'}}
                  color="red.500"
                  bg="white"
                  fontSize={{lg: 'lg'}}
                  borderRadius="full"
                  boxShadow="0 0 0px 0px white"
                  transition="ease-in 0.2s">
                  <BiChevronRight />
                </Grid>
              </HStack>
            </Stack>
          )}
        </Box>
      </Stack>
      {buttonTextField.isEditing && (
        <Box pos={'absolute'} right={0} top={0}>
          <Popover
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

export default CardWithImageBackgroundField
