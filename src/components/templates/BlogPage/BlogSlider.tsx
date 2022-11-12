import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import { BsFillShareFill } from "react-icons/bs"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { blogSliderSettings } from "../../../constant/slider"

const SliderItem = connectSection(
  () => {
    return (
      <Box
        m={{ base: 2, lg: 4 }}
        boxSize={{ base: "10rem", sm: "12rem", lg: "15rem" }}
        mb="8 !important"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="dark"
      >
        <Field.Image
          name="image"
          defaultValue="/images/blog_page/sliderImg1.png"
        />
      </Box>
    )
  },
  {
    name: "SliderItem",
    displayName: "SliderItem",
  }
)

interface IBlogSliderProps {}

const BlogSlider: FC<IBlogSliderProps> = () => {
  const sliderImages = [
    "/images/blog_page/sliderImg1.png",
    "/images/blog_page/sliderImg2.png",
    "/images/blog_page/sliderImg3.png",
    "/images/blog_page/sliderImg4.png",
    "/images/blog_page/sliderImg1.png",
    "/images/blog_page/sliderImg2.png",
    "/images/blog_page/sliderImg3.png",
    "/images/blog_page/sliderImg4.png",
    "/images/blog_page/sliderImg1.png",
    "/images/blog_page/sliderImg2.png",
    "/images/blog_page/sliderImg3.png",
    "/images/blog_page/sliderImg4.png",
  ]

  return (
    <Box
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="start"
      mt="24"
      py="8"
      bgImage={{
        base: "/images/blog_page/slider_mobile_bg.svg",
        md: "/images/blog_page/sliderBg.svg",
      }}
    >
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Field.Section
          as={Slider}
          props={{ ...blogSliderSettings }}
          name="SliderItem"
          displayName="Blog Slider"
          sections={[SliderItem]}
        />

        <Box pt="12">
        
        </Box>
        <Text size="b2012" textAlign="center" py={{ base: 16, md: 8, xl: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Faucibus in libero risus semper Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Faucibus in libero risus semper Lorem
          ipsum dolor sit amet, cipiscing elit. Faucibus in liber
        </Text>

        <VStack display={{ base: "flex", md: "none" }}>
          <Button size="sm">
            <Flex align="center" gap="2">
              <BsFillShareFill />
              Artikel teilen
            </Flex>
          </Button>
        </VStack>

        <Stack align="end" display={{ base: "none", md: "flex" }}>
          <HStack mb="2">
            <Tag variant="normal">Helium</Tag>
            <Tag variant="normal">Team</Tag>
          </HStack>
          <Box>
            <Text size="b2012" textAlign="end">
              Von{" "}
              <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
                Nikolai Doe
              </Text>
            </Text>
            <Text size="b2012" textAlign="end">
              Veröffentlicht am 20. April 2022
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
export default BlogSlider
