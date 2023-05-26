import {Box, Container, Flex, Stack, Text} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider} from '@snek-at/jaen'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {blogSliderSettings} from '../../../constant/slider'
import CardWithImageBackground from '../../CardWithImageBackground'
import {ImageCard} from '../../organisms/ImageCard'
import BlogSlider from './BlogSlider'

const TextBlockSection = connectBlock(
  () => {
    return (
      <Container maxW={CONTAINER_MAX_WIDTH} py="8">
        <Field.RichText
          size="b2012"
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
        py="10"
        px={{base: 0, sm: 4, md: 8}}
        align="center"
        justify="center"
        bgPos="right -5rem top 25%"
        bgSize="800px"
        bgRepeat="no-repeat"
        bgImage={{md: '/images/blog_page/bg_shape.svg'}}>
        <Container
          justifyContent="space-between"
          as={Flex}
          gap={{base: 10, lg: 8}}
          spacing={{base: 20, md: 32, xl: 40}}
          flexDirection={{base: 'column', lg: 'row'}}
          pt={{base: 8, md: 20}}
          alignItems="center"
          maxW={CONTAINER_MAX_WIDTH}>
          <PhotoProvider maskOpacity={0.8}>
            <Flex display={{base: 'none', md: 'flex'}} gap="4">
              <Stack
                flex="1"
                justify="center"
                display={{base: 'none', lg: 'flex'}}>
                {threeCards[0]}
              </Stack>
              <Stack
                gap="4"
                spacing="0"
                maxW="43.75rem"
                h="full"
                w="full"
                align="start"
                justify={{base: 'space-between', lg: 'center'}}
                flexDirection={{base: 'row', lg: 'column'}}>
                {threeCards[1]}
                {threeCards[2]}
              </Stack>
            </Flex>
          </PhotoProvider>

          <PhotoProvider maskOpacity={0.8}>
            <Box
              display={{base: 'block', md: 'none'}}
              mb="8"
              w="full"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="dark">
              <Slider {...blogSliderSettings}>
                {threeCards.map((card, index) => (
                  <Box>
                    <Box
                      key={index}
                      w="full"
                      h="full"
                      display={'flex'}
                      justifyContent="center">
                      {card}
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </PhotoProvider>
          <Field.RichText
            size="b2012"
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
        spacing: 0
      }}
      name="blogPageSection"
      label="Inhalt"
      blocks={[
        TextBlockSection,
        WhiteTextBlockSection,
        ThreeCardBlogSection,
        ImageSliderSection
      ]}
    />
  )
}

export default BlogPageSection
