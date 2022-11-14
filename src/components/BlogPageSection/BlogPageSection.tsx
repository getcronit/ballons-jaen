import { Box, Container, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { blogSliderSettings } from "../../constant/slider"
import CardWithImageBackground from "../CardWithImageBackground"
import BlogSlider from "../templates/BlogPage/BlogSlider"

const TextBlockSection = connectSection(
  () => {
    return (
      <Container maxW={CONTAINER_MAX_WIDTH} py="8">
        <Text as="span" size="b2012">
          <Field.Text
            rtf
            name="text"
            defaultValue={`
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Faucibus in libero risus
            semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
            libero risus semper Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Faucibus in libero risus
            semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Faucibus in libero risus semper Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Faucibus in libero risus semper Lorem
            </p>
        `}
          />
        </Text>
      </Container>
    )
  },
  {
    name: "TextBlockSection",

    displayName: "Text (Dunkel)",
  }
)

const WhiteTextBlockSection = connectSection(
  () => {
    return (
      <Box bg="white">
        <TextBlockSection />
      </Box>
    )
  },
  {
    name: "WhiteTextBlockSection",
    displayName: "Text (Hell)",
  }
)

const ThreeCardBlogSection = connectSection(
  () => {
    const threeCards = Array.from({ length: 3 }).map((_, index) => {
      const cards = [
        {
          image: "/images/blog_page/threeCard1.png",
        },
        {
          image: "/images/blog_page/threeCard2.png",
        },
        {
          image: "/images/blog_page/threeCard3.png",
        },
      ]

      return (
        <CardWithImageBackground
          key={index}
          h={{ base: "15rem", lg: "15rem", xl: "20rem" }}
          w={{ base: "12.5rem", lg: "12.5rem", xl: "17.5rem" }}
          displayContent={false}
          card={{
            imageFieldName: `cards[${index}].image`,
            imageDefaultValue: cards[index].image,
          }}
        />
      )
    })

    return (
      <Stack
        py="10"
        px={{ base: 0, sm: 4, md: 8 }}
        align="center"
        justify="center"
        bgPos="right -5rem top 25%"
        bgSize="800px"
        bgRepeat="no-repeat"
        bgImage={{ md: "/images/blog_page/bg_shape.svg" }}
      >
        <Container
          justifyContent="space-between"
          as={Flex}
          gap={{ base: 10, lg: 8 }}
          spacing={{ base: 20, md: 32, xl: 40 }}
          flexDirection={{ base: "column", lg: "row" }}
          pt={{ base: 8, md: 20 }}
          alignItems="center"
          maxW={CONTAINER_MAX_WIDTH}
        >
          <Flex display={{ base: "none", md: "flex" }} gap="4">
            <Stack
              flex="1"
              justify="center"
              display={{ base: "none", lg: "flex" }}
            >
              {threeCards[0]}
            </Stack>
            <Stack
              gap="4"
              spacing="0"
              maxW="43.75rem"
              h="full"
              w="full"
              align="start"
              justify={{ base: "space-between", lg: "center" }}
              flexDirection={{ base: "row", lg: "column" }}
            >
              {threeCards[1]}
              {threeCards[2]}
            </Stack>
          </Flex>

          <Box
            display={{ base: "block", md: "none" }}
            mb="8"
            w="full"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="dark"
          >
            <Slider {...blogSliderSettings}>
              {threeCards.map((card, index) => (
               <Box>
                 <Box key={index} w="full" h="full" display={'flex'} justifyContent='center'>
                  {card}
                </Box>
               </Box>
              ))}
            </Slider>
          </Box>

          <Text size="b2012" as="span">
            <Field.Text
              rtf
              name="text"
              defaultValue={`
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
                libero risus semper Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Faucibus in libero risus
                semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
                libero risus semper Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Faucibus in libero risus
                semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Faucibus in libero risus semper Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Faucibus in libero risus semper Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
                libero risus semper
                </p>
            `}
            />
          </Text>
        </Container>
      </Stack>
    )
  },
  {
    name: "ThreeCardBlogSection",

    displayName: "Text mit 3 Bildkarten",
  }
)

const ImageSliderSection = connectSection(
  () => {
    return <BlogSlider />
  },
  {
    name: "ImageSliderSection",

    displayName: "Bildslider mit Text",
  }
)

const BlogPageSection = () => {
  return (
    <Field.Section
      as={Stack}
      props={{
        spacing: 0
      }}
      name="blogPageSection"
      displayName="News Inhalt"
      sections={[
        TextBlockSection,
        WhiteTextBlockSection,
        ThreeCardBlogSection,
        ImageSliderSection,
      ]}
    />
  )
}

export default BlogPageSection
