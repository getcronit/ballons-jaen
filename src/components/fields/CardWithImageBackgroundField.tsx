import {Field, useField} from '@atsnek/jaen'
import {
  Box,
  Grid,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text
} from '@chakra-ui/react'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'

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

import {Link, navigate} from 'gatsby'
import React from 'react'
import {validateUrl} from '../../common/utils'

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
    const value = hiddenUrlField.value || hiddenUrlField.staticValue

    const valueWithoutHTML =
      value?.replace(/<[^>]*>?/gm, '') || hiddenUrlFieldDefaultValue || ''
    return valueWithoutHTML
  }, [
    hiddenUrlField.value,
    hiddenUrlField.staticValue,
    hiddenUrlFieldDefaultValue
  ])

  return (
    <LinkBox pos={'relative'} h="full" w="full" minW={minW || '20rem'}>
      <Stack
        onClick={!buttonTextField.isEditing ? handleButtonClick : undefined}
        position="relative"
        _hover={{
          transition: 'all 0.3s ease',
          transform: {
            md: 'scale(1.03) ',
            lg: 'scale(1.03) '
          },
          '.show_more': {
            textDecoration: 'underline',
            '&>div': {boxShadow: '0 0 5px 1px white'}
          }
        }}
        transition="ease-in 0.2s"
        boxShadow="dark"
        color="white"
        justify="end"
        h={h ?? 'full'}
        w={w ?? {}}
        borderRadius="xl"
        overflow={'hidden'}
        isolation="isolate"
        minW={minW || '20rem'}>
        {card.imageFieldName && <Field.Image name={card.imageFieldName} />}
        <Box position="absolute" w="full">
          {displayContent && (
            <Stack
              p="6"
              pb="4"
              w="full"
              bg="rgba(0,0,0,.2)"
              //backdropFilter='blur(7px)'
              borderRadius="xl"
              will-change="transform">
              <Stack spacing="0">
                {card.headingFieldName && (
                  <Field.Text
                    as={Heading}
                    fontSize={{base: 'lg', xl: 'xl'}}
                    fontWeight="700"
                    name={card.headingFieldName}
                    defaultValue={card.headingDefaultValue ?? ''}
                  />
                )}

                {card.textFieldName && (
                  <Field.Text
                    fontSize={{base: 'sm', lg: isSmallText ? 'sm' : 'md'}}
                    name={card.textFieldName}
                    defaultValue={card.textDefaultValue ?? ''}
                  />
                )}
              </Stack>

              <HStack
                className="show_more"
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
                <LinkOverlay as={Link} to={urlValue}>
                  <Text fontSize={{base: 'sm', lg: 'md'}} fontWeight="700">
                    Mehr anzeigen
                  </Text>
                </LinkOverlay>

                <Grid
                  placeItems="center"
                  h={{base: '4', lg: '6'}}
                  w={{base: '4', lg: '6'}}
                  color="red.500"
                  bg="white"
                  borderRadius="full"
                  boxShadow="0 0 0px 0px white"
                  transition="ease-in 0.2s">
                  <FaChevronRight />
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
    </LinkBox>
  )
}

export default CardWithImageBackgroundField
