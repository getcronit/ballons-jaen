import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider} from '@snek-at/jaen'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {blogSliderSettings} from '../../../constant/slider'
import CardWithImageBackground from '../../CardWithImageBackground'
import LinkButtonField from '../../fields/LinkButtonField'
import {ImagesGallery3x3Section} from '../../organisms/ContentPageSection/ContentPageSection'
import {ImageCard} from '../../organisms/ImageCard'
import BlogSlider from './BlogSlider'

const TextBlockSection = connectBlock(
  () => {
    return (
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Field.Text
          size="b2012"
          name="text"
          textAlign="center"
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
      </Container>
    )
  },
  {
    name: 'TextBlockSection',
    label: 'Text (Dunkel)'
  }
)

const WhiteTextBlockSection = connectBlock(
  () => {
    return (
      <Box bg="white">
        <TextBlockSection />
      </Box>
    )
  },
  {
    name: 'WhiteTextBlockSection',
    label: 'Text (Hell)'
  }
)

const ThreeCardBlogSection = connectBlock(
  () => {
    const threeCards = Array.from({length: 3}).map((_, index) => {
      return (
        <ImageCard
          key={index}
          h={{base: '15rem', lg: '15rem', xl: '20rem'}}
          w={{base: '12.5rem', lg: '12.5rem', xl: '17.5rem'}}
          name={`cards[${index}].image`}
        />
      )
    })

    return (
      <Stack
        py="14"
        px={{base: 0, sm: 4, md: 8}}
        align="center"
        justify="center"
        bgPos="right -5rem top 25%"
        bgSize="800px"
        bgRepeat="no-repeat">
        <Container
          justifyContent="space-between"
          as={Flex}
          gap={8}
          flexDirection={{base: 'column', xl: 'row'}}
          maxW={CONTAINER_MAX_WIDTH}>
          <Flex gap="4" justify="center" alignSelf="center">
            <PhotoProvider maskOpacity={0.8}>
              <Stack flex="1" justify="center">
                {threeCards[0]}
              </Stack>

              <Stack
                gap="4"
                spacing="0"
                h="full"
                w="full"
                align="center"
                justify="center">
                {threeCards[1]}
                {threeCards[2]}
              </Stack>
            </PhotoProvider>
          </Flex>

          <Stack
            // zIndex={'999'}
            maxW={{
              xl: '50%'
            }}
            spacing="8"
            justify="center">
            <Field.Text
              name="text"
              fontSize={{base: 'sm', md: 'md'}}
              fontWeight="light"
              defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            />
          </Stack>
        </Container>
      </Stack>
    )
  },
  {
    name: 'ThreeCardBlogSection',

    label: 'Text mit 3xBild'
  }
)

const ImageSliderSection = connectBlock(
  () => {
    return <BlogSlider />
  },
  {
    name: 'ImageSliderSection',

    label: 'Slider mit Text'
  }
)

const BlogPageSection = () => {
  return (
    <Field.Section
      as={Stack}
      props={{
        spacing: 4,
        maxW: CONTAINER_MAX_WIDTH,
        mx: 'auto',
        py: '8',
        bg: 'white',
        px: {
          base: 0,
          sm: 4
        }
      }}
      name="blogPageSection"
      label="Inhalt"
      blocks={[
        TextBlockSection,
        WhiteTextBlockSection,
        ThreeCardBlogSection,
        ImageSliderSection,
        ImagesGallery3x3Section
      ]}
    />
  )
}

export default BlogPageSection
