import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  useBreakpointValue,
  useModalContext,
} from "@chakra-ui/react"
import { NotifyField } from "@jaenjs/jaen"

// import "@fontsource/poppins/100.css"
// import "@fontsource/poppins/200.css"
// import "@fontsource/poppins/300.css"
// import "@fontsource/poppins/400.css"
// import "@fontsource/poppins/500.css"
// import "@fontsource/poppins/600.css"
// import "@fontsource/poppins/700.css"
// import "@fontsource/poppins/800.css"
// import "@fontsource/poppins/900.css"

// import "slick-carousel/slick/slick-theme.css"
// import "slick-carousel/slick/slick.css"

// import "../styles/global.css"

import theme from "../../../styles/theme"

export interface NotificationBannerProps {}

export const NotificationBanner = (props: NotificationBannerProps) => {
  const { onClose } = useModalContext()

  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <>
        <ModalCloseButton onClick={onClose} size="4xl" p="4" />
        <ModalBody py="20" px="15">
          <Flex
            align="end"
            pos="relative"
            flexDir={{ base: "column-reverse", md: "row" }}
          >
            <Box
              flex="1"
              pos="relative"
              left="-5rem"
              bottom={{ base: 0, md: "-5rem" }}
              mb={{ base: "-5rem !important", md: "0 !important" }}
            >
              <Image
                src="/images/contact/ballons_man.png"
                w={{ base: "50%", md: "auto" }}
              />
            </Box>
            <Stack flex="2" align={{ base: "center", md: "start" }}>
              <Heading
                lineHeight="1rem"
                fontWeight="semibold"
                size="h2418"
                display={{ base: "none", md: "block" }}
              >
                <NotifyField.Text
                  name="timespan"
                  defaultValue={" 27.07 - 05.08 2022"}
                />
              </Heading>
              <Flex>
                <Heading fontWeight="semibold" size="h6020">
                  <NotifyField.Text
                    name="heading"
                    defaultValue={"Wir sind auf <i>Urlaub</i>"}
                    rtf
                  />
                </Heading>
              </Flex>
              <Heading
                lineHeight="1rem"
                fontWeight="semibold"
                size="h2418"
                display={{ base: "block", md: "none" }}
              >
                <NotifyField.Text
                  name="timespan"
                  defaultValue={"27.07 - 05.08 2022"}
                />
              </Heading>
              <Text
                size="b2015"
                maxW={{ md: "70%" }}
                textAlign={{ base: "center", md: "start" }}
              >
                <NotifyField.Text
                  name="message"
                  defaultValue={
                    "Wir sind momentan auf Betriebsurlaub, unser Büro ist deshalb nicht besetzt. Wir bearbeiten deine Anfragen und Bestellungen natürlich wieder wie gewohnt ab 06.08.2022."
                  }
                  rtf
                />
              </Text>
              <Box>
                <Button
                  size={{ base: "sm", md: "md" }}
                  mt={{ base: "4 !important", md: "8 !important" }}
                  onClick={onClose}
                >
                  Zur Website
                </Button>
              </Box>
            </Stack>
          </Flex>
        </ModalBody>
      </>
    </ChakraProvider>
  )
}
