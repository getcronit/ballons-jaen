import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"

import AboutUsVideo from "./aboutus_presentation.mp4"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

interface IAboutHeroSectionProps {}

const AboutHeroSection: FC<IAboutHeroSectionProps> = () => {
  return (
    <Box
      bgRepeat="no-repeat"
      py="5rem"
      bgPos={{
        base: "0 15rem,5rem 8rem",
        md: "0 10rem,10rem",
        xl: "0 10rem,20rem",
        "2xl": "0 5rem,40rem 5rem",
      }}
      bgSize={{ base: "120%", md: "full,auto" }}
      bgImage="url('/images/about_us/redline1.svg'),url('/images/about_us/hero_bg_big.svg')"
    >
      <Container
        alignItems={"center"}
        justifyContent="space-between"
        flexDir={{ base: "column-reverse", md: "row" }}
        pos="relative"
        // top={{ base: "-18.75rem", md: "0" }}
        // mb={{ base: "-18.75rem", md: "5rem" }}
        py="8"
        as={Flex}
        gap="8"
        maxW={CONTAINER_MAX_WIDTH}
      >
        <VStack>
          <Flex gap={{ base: 2, md: 4 }}>
            <Heading
              size="h5020"
              as="span"
              fontWeight="semibold"
              whiteSpace="nowrap"
            >
              <Field.Text
                name="heroTitle"
                defaultValue="<p>Freude liegt in der <i>Luft</i></p>"
              />
            </Heading>
          </Flex>

          <Text size="b2012" variant="light" maxW={{ base: "80%", md: "90%" }}>
            <Field.Text
              name="heroDescription"
              defaultValue="<p>Wir sind ein junges Team aus kreativen Köpfen, die sich mit Leidenschaft für die Entwicklung von innovativen und nachhaltigen Produkten einsetzen.</p>"
            />
          </Text>

          <Button mt="4" size={{ base: "sm", md: "md" }}>
            Beraten lassen
          </Button>
        </VStack>

        <Box boxShadow="dark" borderRadius="xl" overflow="hidden">
          <video autoPlay muted width={"100%"} height="100%">
            <source src={`${AboutUsVideo}#t=1,14`} type="video/mp4" />
          </video>
        </Box>
      </Container>
    </Box>
  )
}
export default AboutHeroSection
