import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Field, useJaenPageIndex } from "@jaenjs/jaen"
import { FC } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { INewsSlides } from "../../types/commonTypes"

interface IWhiteDesktopSliderProps {
  slides: INewsSlides[]
  showTitle?: boolean
}

const WhiteDesktopSlider: FC<IWhiteDesktopSliderProps> = ({
  slides,
  showTitle = false,
}) => {
  const index = useJaenPageIndex({
    jaenPageId: "JaenPage /news/",
  })

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Container
      maxW={CONTAINER_MAX_WIDTH}
      display={{ base: "none", md: "block" }}
    >
      {showTitle && (
        <Text
          variant="cursive"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        >
          News
        </Text>
      )}

      <Flex
        display={{ base: "none", md: "block" }}
        borderRadius={{ base: "md", md: "lg", lg: "xl" }}
        boxShadow="dark"
        py="8"
        bg="white"
      >
        <Slider {...settings} className="white_slider">
          {index.children.map((page, i) =>
            index.withJaenPage(
              page.id || "",
              <Box key={i}>
                <Flex
                  h={{ xl: "22.5rem" }}
                  pb="8"
                  flex="1"
                  px={{ base: 0, lg: "4" }}
                  align="center"
                  gap="6"
                  justify="center"
                  flexDir={{ base: "column", md: "row" }}
                >
                  <Grid placeItems="center">
                    <Box
                      boxShadow="light"
                      overflow="hidden"
                      boxSize={{ md: "8rem", lg: "12rem", xl: "14.375rem" }}
                      bg="gray.800"
                      borderRadius="full"
                    >
                      <Image src={"slide.image"} />
                    </Box>
                  </Grid>
                  <Stack gap={{ md: 0, lg: 2, xl: 4 }} flex="1">
                    <Text fontSize={{ md: "sm", lg: "md", xl: "xl" }}>
                      <Field.Text
                        display={"inline-block"}
                        name="date"
                        defaultValue="Alles"
                      />
                    </Text>
                    <Heading
                      color="black.500"
                      fontSize={{ md: "sm", lg: "md", xl: "xl" }}
                      fontWeight="semibold"
                    >
                      <Field.Text
                        display={"inline-block"}
                        name="heading"
                        defaultValue="Alles"
                      />
                    </Heading>
                    <Text fontSize={{ md: "xs", lg: "sm", xl: "md" }}>
                      <Field.Text
                        display={"inline-block"}
                        name="text"
                        defaultValue="Alles"
                      />
                    </Text>

                    <Box>
                      <Button
                        variant="outline"
                        size={{ md: "sm", lg: "sm", xl: "md" }}
                      >
                        Mehr anzeigen
                      </Button>
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            )
          )}
        </Slider>
      </Flex>
    </Container>
  )
}
export default WhiteDesktopSlider
