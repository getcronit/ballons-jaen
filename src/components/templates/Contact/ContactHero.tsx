import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC, ReactNode } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { GoogleMaps } from "../../molecules/GoogleMaps"

interface IContactHeroProps {
  contactDetails: {
    isEditing: boolean
    text: ReactNode
    icon: JSX.Element
    link?: string
  }[]
}

const ContactHero: FC<IContactHeroProps> = ({ contactDetails }) => {
  return (
    <>
      {" "}
      <Box
        bgImage="/images/contact/bg.svg"
        bgRepeat="no-repeat"
        bgSize={{ base: "70%", md: "auto" }}
        bgPos={{ base: "left -6rem top 0", md: "left -10rem top 0" }}
      >
        <Container maxW={CONTAINER_MAX_WIDTH} mt="20" pb="10">
          <VStack spacing={{ base: 8, md: 20 }}>
            <Flex gap={{ base: 2, md: 4 }}>
              <Heading
                size="h5020"
                as="span"
                fontWeight="semibold"
                whiteSpace="nowrap"
              >
                <Field.Text
                  name="heading1"
                  defaultValue="<p>Mitten in <i>Wien</i></p>"
                  rtf
                />
              </Heading>
            </Flex>
            <Stack
              spacing={{ base: 4, lg: 8 }}
              flex="1"
              display={{ base: "flex", md: "none" }}
            >
              <Heading size="h2415" fontWeight="semibold">
                <Field.Text
                  name="heading2"
                  defaultValue="Partyshop, Lager, Werkstatt & Büro"
                />
              </Heading>
              <Stack spacing={{ base: 4, lg: 8 }}>
                {contactDetails.map((item, index) => (
                  <HStack key={index}>
                    <Box fontSize="xl" color="red.500">
                      {item.icon}
                    </Box>{" "}
                    <Text size="b2012">
                      {!item.isEditing ? (
                        <Link href={item.link} target="_blank" rel="noreferrer">
                          {item.text}
                        </Link>
                      ) : (
                        item.text
                      )}
                    </Text>
                  </HStack>
                ))}
              </Stack>
            </Stack>
            <Box
              mt={{ base: "20 !important", md: "0" }}
              mb="8"
              bg="red"
              w="full"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="dark"
            >
              <GoogleMaps
                minH="12.5rem"
                objectFit="cover"
                h="full"
                w="100%"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10631.849472718279!2d16.3863148!3d48.2265992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab1f506f04a7844b!2sBalloons%20%26%20balloon%20e.U.!5e0!3m2!1sen!2sat!4v1668436597952!5m2!1sen!2sat"
              />
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  )
}
export default ContactHero
