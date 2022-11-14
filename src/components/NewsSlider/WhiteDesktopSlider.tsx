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
import { Field, navigate, useJaenPageIndex } from "@jaenjs/jaen"
import { FC } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { INewsSlides, JaenPageIndexType } from "../../types/commonTypes"

interface IWhiteDesktopSliderProps {
  showTitle?: boolean
  index: JaenPageIndexType
}

const WhiteDesktopSlider: FC<IWhiteDesktopSliderProps> = ({
  showTitle = false,
  index,
}) => {
  const slidesToShow = 2

  var settings = {
    dots: true,
    infinite: index.children.length > slidesToShow,
    speed: 500,
    slidesToShow,
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

      <Box
        borderRadius={{ base: "md", md: "lg", lg: "xl" }}
        boxShadow="dark"
        py="8"
        bg="white"
      >
        <Slider {...settings} className="white_slider">
          {index.children.map((page, i) =>
            index.withJaenPage(
              page.id,
              <Box key={i} py="8">
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
                  <Box
                    boxShadow="light"
                    overflow="hidden"
                    boxSize={{ md: "8rem", lg: "12rem", xl: "14.375rem" }}
                    bg="gray.800"
                    borderRadius="full"
                  >
                    <Field.Image
                      name="image"
                      defaultValue="/images/blog_page/hero_image.png"
                    />
                  </Box>
                  <Stack gap={{ md: 0, lg: 2, xl: 4 }} flex="1">
                    <Text fontSize={"md"} as="span">
                      <Field.Text
                        display={"inline-block"}
                        name="date"
                        defaultValue="12.12.2020"
                      />
                    </Text>
                    <Heading
                      color="black.500"
                      fontSize={{ md: "sm", lg: "md", xl: "xl" }}
                      fontWeight="semibold"
                      noOfLines={2}
                    >
                      <Field.Text
                        name="title"
                        rtf
                        defaultValue="Ballons & Ballons: Die Geschichte"
                      />
                    </Heading>
                    <Text
                      fontSize={{ md: "xs", lg: "sm", xl: "md" }}
                      as="span"
                      noOfLines={4}
                    >
                      <Field.Text
                        name="description"
                        defaultValue=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Faucibus in libero risus
                        semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
                        libero risus semper Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                        sit amet, consectetur adipiscing "
                      />
                    </Text>

                    <Box>
                      <Button
                        variant="outline"
                        size={{ md: "sm", lg: "sm", xl: "md" }}
                        onClick={() => {
                          navigate(`/news/${page.slug}`)
                        }}
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
      </Box>
    </Container>
  )
}
export default WhiteDesktopSlider
