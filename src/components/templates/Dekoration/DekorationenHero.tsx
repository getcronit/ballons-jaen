import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import Slider, { Settings } from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import NextArrow from "../../CustomSlider/NextArrow"
import PrevArrow from "../../CustomSlider/PrevArrow"
import LinkButtonField from "../../fields/LinkButtonField"
interface IDekorationenHeroProps {}

export const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

const DekorationenHero: FC<IDekorationenHeroProps> = () => {
  return (
    <Stack pos="relative">
      <VStack
        pos="relative"
        top={{
          base: "4.25rem",
          md: "10.25rem",
          lg: "14.25rem",
          xl: "16.25rem",
        }}
        zIndex="3"
        mt={{ md: "-6.25rem", lg: "-8.25rem", xl: "-10.25rem" }}
      >
        <Text
          lineHeight={{ md: "50px", lg: "70px" }}
          as="h1"
          variant="cursive"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        >
          <Field.Text name="title" defaultValue={"Dekorationen"} />
        </Text>
        <Text
          pb="4"
          textAlign="center"
          fontSize={{ base: "sm", md: "md", "2xl": "lg" }}
        >
          <Field.Text
            name="titleText"
            defaultValue={
              "Wir dekorieren deine nächste Party. <br /> Egal ob Hochzeit, Firmenfeier, Geburtstag <br /> oder dein ganz eigener Anlass."
            }
          />
        </Text>
        <LinkButtonField
          name="ctaButton"
          size={{ base: "xs", md: "sm", xl: "lg" }}
          defaultValue={"Termin vereinbaren"}
        />
      </VStack>

      <Stack pos="relative" maxH="93.75rem" overflow="hidden">
        <Box pos="absolute" bottom="0" w="full">
          <Container maxW={CONTAINER_MAX_WIDTH} mb={{ base: "0", md: "16" }} >
            <Field.Section
              as={Slider}
              props={{
                ...settings,
              }}
              className="big_slider"
              name="slider"
              displayName="Slider"
              sections={[DekorationSliderItem]}
            />
          </Container>
        </Box>
        <Image
          src="/images/decorationen/dekorationen_hero_bg.svg"
          alt="decorationen"
        />
      </Stack>
    </Stack>
  )
}

const DekorationSliderItem = connectSection(
  () => {
    return (
      <Box
        m={{ base: 2, md: 4 }}
        borderRadius={{ base: "8", md: "16", lg: "24" }}
        overflow="hidden"
        boxShadow={{ base: "light", md: "dark" }}
      >
        <Field.Image
          name="image"
          defaultValue="/images/decorationen/slider/slider_image.png"
        />
      </Box>
    )
  },
  {
    name: "decorationSliderItem",
    displayName: "Slider Item",
  }
)

export default DekorationenHero
