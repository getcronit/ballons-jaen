import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import Slider from "react-slick"
import { fonts } from "../../../../styles/theme"
interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const sliderData = [
    {
      mainImage: "/images/home/slider/slider_left.png",
      title: "Für unvergessliche",
      subtitle: "Momente",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam met, consetetur sadipscing elitr, sed diam ",
      rightImage: "/images/home/ballons3.png",
    },
    {
      mainImage: "/images/home/slider/slider_left.png",
      title: "Für unvergessliche",
      subtitle: "Momente",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam met, consetetur sadipscing elitr, sed diam ",
      rightImage: "/images/home/ballons3.png",
    },
    {
      mainImage: "/images/home/slider/slider_left.png",
      title: "Für unvergessliche",
      subtitle: "Momente",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam met, consetetur sadipscing elitr, sed diam  ",
      rightImage: "/images/home/ballons3.png",
    },
  ]
  return (
    <>
      {/* For Mobile */}
      <Box
        display={{ base: "block", md: "none" }}
        pos="relative"
        pb={{
          base: "43.75rem",
          sm: "50rem",
        }}
      >
        <Image
          top={{ base: "34.375rem" }}
          pos="absolute"
          left=""
          h={{ base: "auto" }}
          src="/images/home/hero_shape.svg"
          alt="herobackground"
          zIndex={{ base: "none", md: "50" }}
          display={{ base: "none", md: "block" }}
        />

        <Image
          overflow="hidden"
          pos="absolute"
          top={{ base: "33.75rem" }}
          left={{ base: "-3.125rem" }}
          src="/images/home/hero_line.svg"
          alt="herobackground"
        />
        <Box
          pos="absolute"
          w="100%"
          overflow="hidden"
          pb="12"
          zIndex={{ base: "none", md: "100" }}
        >
          <Slider {...settings}>
            {sliderData.map((item, i) => (
              <Flex key={i} overflow="hidden">
                <Flex
                  h={{ base: "37.5rem" }}
                  justify={{ base: "start" }}
                  w="100%"
                  pos="relative"
                  flexDirection={{ base: "column" }}
                >
                  <Image
                    pos="relative"
                    src={item.mainImage}
                    alt="slider_img"
                    boxShadow="light"
                    mb="4"
                    objectFit="cover"
                    height={{
                      base: "25rem",
                    }}
                  />
                  <Flex
                    padding={{ base: "0", md: "5", lg: "10" }}
                    pos="absolute"
                    left={{
                      base: "-10%",
                    }}
                    borderRadius={{ base: "md" }}
                    transform="skewX(-7deg)"
                    zIndex="100"
                    top={{
                      base: "12.5rem",
                    }}
                    h={{ base: "23.625rem" }}
                    width={{
                      base: "95%",
                    }}
                    justify={{ base: "center" }}
                    boxShadow="light"
                    bg="#FFFAFA"
                  >
                    <Stack
                      transform="skewX(7deg)"
                      flex="2"
                      pl="4"
                      pt={{ base: "8" }}
                      maxW="80%"
                      pos={{ base: "relative" }}
                      left={{ md: "9.375rem" }}
                    >
                      <Heading
                        fontSize={{ base: "md" }}
                        mb="4 !important"
                        fontWeight="semibold"
                      >
                        {item.title}
                      </Heading>
                      <Heading
                        color="red.500"
                        lineHeight={{ base: "1.875rem" }}
                        fontSize={{ base: "2.125rem" }}
                        fontFamily={fonts.font_RB}
                        mb={{ base: "4 !important" }}
                        fontWeight="semibold"
                      >
                        {item.subtitle}
                      </Heading>
                      <Text
                        maxW="75%"
                        fontWeight="light"
                        fontSize={{ base: "sm" }}
                        mt="-4 !important"
                        mb="2 !important"
                      >
                        {item.description}
                      </Text>
                      <HStack>
                        <Button
                          size={{ base: "sm", md: "xs", lg: "sm", "2xl": "lg" }}
                        >
                          Mehr erfahren
                        </Button>
                      </HStack>
                    </Stack>
                    <Image
                      flex="1"
                      transform="skewX(7deg)"
                      pos="absolute"
                      right={{ base: "-10%", sm: "-15%" }}
                      top={{ md: "-10%" }}
                      w={{ base: "12.5rem", sm: "18.75rem" }}
                      h={{ base: "15.625rem", sm: "21.875rem" }}
                      src={item.rightImage}
                    />
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Slider>
        </Box>
      </Box>
      {/* For Big Devices */}

      <Box
        display={{ base: "none", md: "block" }}
        pb={{ md: "8rem", lg: "12rem", xl: "14rem" }}
        bgRepeat="no-repeat"
        bgImage="url('/images/home/hero_line.svg'),url('/images/home/hero_shape.svg')"
        bgSize="100%,contain"
        bgPos={{
          md: "bottom 6rem  left -2rem,left 0  top 0",
          lg: "bottom 3rem  left 0,left 0  top 0 ",
          xl: "bottom 0  left -5rem,left 0  top 0 ",
        }}
      >
        <Container
          maxW={"106.25rem"}
          mt={{ base: 0, md: 8, "2xl": "16" }}
          overflow="hidden"
          pb="16"
        >
          <Slider {...settings}>
            {sliderData.map((item, i) => (
              <Box key={i} overflow="hidden">
                <Flex>
                  <Grid flex="4" w="50%" placeItems="center">
                    <Box
                      bg="red"
                      h={{ md: "90%", lg: "80%", "2xl": "90%" }}
                      pos="relative"
                      boxShadow="light"
                      mb="4"
                      borderRadius={{ md: "30px", xl: "50px" }}
                      transform={{ md: "skewX(-7deg)" }}
                      objectFit="cover"
                      left="1rem"
                      overflow={'hidden'}
                    >
                      <Field.Image name='image' defaultValue={item.mainImage} />
                    </Box>
                  </Grid>
                  <Grid placeItems="center" flex="3" pos="relative" zIndex="4">
                    <Flex
                      h={{ md: "82%", lg: "74%", "2xl": "82%" }}
                      padding={{ base: "0", md: "5", xl: "10" }}
                      pos="absolute"
                      borderRadius={{ md: "30px", xl: "50px" }}
                      transform="skewX(-7deg)"
                      w="110%"
                      justify={{ base: "center", md: "unset" }}
                      right="4rem"
                      boxShadow="light"
                      bg="#FFFAFA"
                    >
                      <Stack
                        flex="5"
                        transform="skewX(7deg)"
                        pl="2"
                        pos="relative"
                        zIndex="4"
                      >
                        <Heading
                          fontSize="clamp(1.875rem,2.5vw + 8px,3.125rem)"
                          mb="2"
                          fontWeight="semibold"
                        >
                          {item.title}
                        </Heading>
                        <Text
                          size="100"
                          variant="cursive"
                          mb={{
                            md: "-8 !important",
                            lg: "-10!important",
                            xl: "-12 !important",
                            "2xl": "-18 !important",
                          }}
                          fontSize="clamp(3.125rem,5vw + 8px,6.25rem)"
                        >
                          {item.subtitle}
                        </Text>
                        <Text
                          maxW="70%"
                          fontWeight="light"
                          noOfLines={3}
                          fontSize="clamp(.9375rem,1vw + 1.6px,1.25rem)"
                        >
                          {item.description}
                        </Text>
                        <HStack>
                          <Button
                            mt="2"
                            size={{
                              base: "sm",
                              md: "xs",
                              xl: "md",
                              "2xl": "lg",
                            }}
                          >
                            Mehr erfahren
                          </Button>
                        </HStack>
                      </Stack>
                      <Flex
                        justify="end"
                        flex="1"
                        pos="absolute"
                        right="-5rem"
                        bottom="-2rem"
                      >
                        <Image
                          transform="skewX(7deg)"
                          w="45%"
                          src={item.rightImage}
                        />
                      </Flex>
                    </Flex>
                  </Grid>
                </Flex>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    </>
  )
}
export default Hero
