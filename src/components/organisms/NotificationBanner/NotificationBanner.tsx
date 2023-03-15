import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  useModalContext
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'

// import "@fontsource/poppins/100.css"

export interface NotificationBannerProps {}

export const NotificationBanner = (props: NotificationBannerProps) => {
  const {onClose} = useModalContext()

  return (
    <>
      <ModalCloseButton onClick={onClose} size="4xl" p="4" />
      <ModalBody py="20" px="15">
        <Flex
          align="end"
          pos="relative"
          flexDir={{base: 'column-reverse', md: 'row'}}>
          <Box
            flex="1"
            pos="relative"
            left="-5rem"
            bottom={{base: 0, md: '-5rem'}}
            mb={{base: '-5rem !important', md: '0 !important'}}>
            <Image
              src="/images/contact/ballons_man.png"
              w={{base: '50%', md: 'auto'}}
            />
          </Box>
          <Stack flex="2" align={{base: 'center', md: 'start'}}>
            <Heading
              lineHeight="1rem"
              fontWeight="semibold"
              size="h2418"
              display={{base: 'none', md: 'block'}}>
              <Field.Text
                name="timespan"
                label="Zeitraum"
                defaultValue="27.07 - 05.08 2022"
              />
            </Heading>
            <Flex>
              <Heading fontWeight="semibold" size="h6020">
                <Field.Text
                  name="heading"
                  label="Überschrift"
                  defaultValue="<p>Wir sind auf <i>Urlaub</i></p>"
                  rtf
                />
              </Heading>
            </Flex>
            <Heading
              lineHeight="1rem"
              fontWeight="semibold"
              size="h2418"
              display={{base: 'block', md: 'none'}}>
              <Field.Text
                name="timespan"
                label="Zeitraum"
                defaultValue="27.07 - 05.08 2022"
              />
            </Heading>
            <Text
              size="b2015"
              maxW={{md: '70%'}}
              textAlign={{base: 'center', md: 'start'}}>
              <Field.Text
                name="message"
                label="Nachricht"
                defaultValue="Wir sind momentan auf Betriebsurlaub, unser Büro ist deshalb nicht besetzt. Wir bearbeiten deine Anfragen und Bestellungen natürlich wieder wie gewohnt ab 06.08.2022."
                rtf
              />
            </Text>
            <Box>
              <Button
                size={{base: 'sm', md: 'md'}}
                mt={{base: '4 !important', md: '8 !important'}}
                onClick={onClose}>
                Zur Website
              </Button>
            </Box>
          </Stack>
        </Flex>
      </ModalBody>
    </>
  )
}
