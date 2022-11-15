import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { brandSettings } from "../../../constant/slider"

interface IBrandsProps {}

const Brands: FC<IBrandsProps> = () => {
  const brandsImg1 = [
    {
      url: "/images/großhandel/distributors/dist1.png",
    },
    {
      url: "/images/großhandel/distributors/dist2.png",
    },
    {
      url: "/images/großhandel/distributors/dist3.png",
    },
    {
      url: "/images/großhandel/distributors/dist4.png",
    },
    {
      url: "/images/großhandel/distributors/dist5.png",
    },
  ]

  return (
    <HStack
      pos="relative"
      justify="center"
      align="end"
      h={{ base: "800px", md: "1100px", lg: "1400px", "2xl": "1500px" }}
      overflow="hidden"
    >
      <Image
        pos="absolute"
        src="/images/großhandel/logo2_bg.svg"
        w="full"
        objectFit="cover"
        top="0"
        h="full"
      />
      <VStack
        maxW={CONTAINER_MAX_WIDTH}
        mx="auto"
        pos="relative"
        justify="end"
        h="full"
        pb={{ base: "24", md: "60" }}
      >
        <Heading mb="8" fontSize={{ base: "md", lg: "xl" }}>
          <Field.Text
            name="title"
            defaultValue={"<p>Wir sind Distributor von</p>"}
          />
        </Heading>
        <Box w="full">
          <Field.Section
            as={Stack}
            props={{
              spacing: 8,
            }}
            name="brands"
            displayName="Unsere Partner"
            sections={[BrandsSection]}
          />
        </Box>
      </VStack>
    </HStack>
  )
}
export default Brands

export const BrandsSection = connectSection(
  () => {
    return (
      <>
        <VStack>
          <Flex gap={{ base: 2, md: 4 }}>
            <Heading size="h5020" as="span" fontWeight="semibold">
              <Field.Text
                rtf
                name="partnerTitle"
                defaultValue="<p>Ein <i>Partner</i></p>"
              />
            </Heading>
          </Flex>
          <Text size="b2412" maxW="60%" mb="4 !important" textAlign="center">
            <Field.Text
              rtf
              name="partnerText"
              defaultValue={
                "<p>Profitieren Sie von einer unglaublichen Auswahl an Ideen, Produkten und Business-Boostern in unserem Netzwerk.</p>"
              }
            />
          </Text>

          <Box w="full">
            <Field.Section
              as={Slider}
              props={{ ...brandSettings }}
              name="partnerSlider"
              displayName="Partner Logos"
              sections={[BrandsLogoSection]}
            />
          </Box>
        </VStack>
      </>
    )
  },
  {
    name: "BrandsSection",
    displayName: "Partner",
  }
)

const BrandsLogoSection = connectSection(
  () => {
    return (
      <Box boxSize={"full"} display={"flex"} justifyContent="center">
        <Box
          boxSize={{ base: "10rem", sm: "12rem", lg: "15rem" }}
          borderRadius="xl"
          overflow="hidden"
        >
          <Field.Image
            name="partnerLogo"
            defaultValue="/images/großhandel/distributors/dist1.png"
          />
        </Box>
      </Box>
    )
  },
  {
    name: "BrandsLogoSection",
    displayName: "Partner Logo",
  }
)
