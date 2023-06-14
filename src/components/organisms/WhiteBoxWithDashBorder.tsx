import {Box, Heading, Text, useToast, VStack} from '@chakra-ui/react'
import {Field, useField} from '@snek-at/jaen'
import React, {FC} from 'react'
import LinkButtonField from '../fields/LinkButtonField'

interface IWhiteBoxWithDashBorderProps {
  titleFieldName: string
  titleDefaultValue: string
  textFieldName?: string
  textDefaultValue?: string
  button: {
    textFieldName: string
    textDefaultValue: string
    outline?: boolean
  }
}

const WhiteBoxWithDashBorder: FC<IWhiteBoxWithDashBorderProps> = props => {
  return (
    <VStack
      bg="#FFFFFFDE"
      pos="relative"
      borderRadius="xl"
      bgImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='red' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`}
      maxW={{base: '90%', md: '80%', xl: '62.5rem'}}
      mx="auto"
      p="10">
      {props.titleFieldName && (
        <Field.Text
          as={Heading}
          //fontWeight="semibold"
          size="h8020"
          variant="cursive"
          name={props.titleFieldName}
          defaultValue={props.titleDefaultValue}
        />
      )}

      {props.textFieldName && (
        <Field.Text
          maxW={{lg: '50%'}}
          fontSize={{base: 'sm', lg: 'md'}}
          textAlign="center"
          name={props.textFieldName}
          defaultValue={props.textDefaultValue || ''}
        />
      )}
      <Box mt={{base: '4 !important', md: '8 !important'}}>
        {/* <LinkButtonField
          name={props.button.textFieldName}
          defaultValue={props.button.textDefaultValue}
          defaultUrl={`/kontakt`}
          variant={props.button.outline ? 'outline' : 'solid'}
          size={{ base: 'sm', md: 'md' }}
        /> */}
      </Box>
    </VStack>
  )
}

const ValidatorField: React.FC<{
  name: string
}> = ({name}) => {
  const field = useField<string>(name, 'IMA:TextField')

  const toast = useToast()

  React.useEffect(() => {
    if (field.value && field.value.length > 20) {
      field.write(field.staticValue || null)

      toast({
        title: 'Error',
        description: 'The value is too long',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }, [field.value])

  return (
    <>
      <Field.Text name={name} defaultValue={'Validator Text'} />
    </>
  )
}

export default WhiteBoxWithDashBorder
