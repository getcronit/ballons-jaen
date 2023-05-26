import {Box, Container, Text} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider} from '@snek-at/jaen'
import {FC} from 'react'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {blogSliderSettings} from '../../../constant/slider'

const SliderItem = connectBlock(
  () => {
    return (
      <Box boxSize={'full'} display={'flex'} justifyContent="center">
        <Box
          m={{base: 2, lg: 4}}
          boxSize={{base: '10rem', sm: '12rem', lg: '15rem'}}
          mb="8 !important"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="dark">
          <Field.Image name="image" lightbox lightboxGroup />
        </Box>
      </Box>
    )
  },
  {
    name: 'SliderItem',
    label: 'SliderItem'
  }
)

interface IBlogSliderProps {}

const BlogSlider: FC<IBlogSliderProps> = () => {
  return (
    <Box
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="start"
      mt="24"
      py="8"
      bgImage={{
        base: '/images/blog_page/slider_mobile_bg.svg',
        md: '/images/blog_page/sliderBg.svg'
      }}>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Box h="xs">
          <PhotoProvider maskOpacity={0.8}>
            <Field.Section
              //@ts-expect-error
              as={Slider}
              props={{...blogSliderSettings}}
              name="SliderItem"
              label="Blog Slider"
              blocks={[SliderItem]}
            />
          </PhotoProvider>
        </Box>

        <Box pt="12"></Box>
        <Field.Text
          size="b2012"
          textAlign="center"
          py={{base: 16, md: 8, xl: 16}}
          name="text"
          defaultValue={`
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
           libero risus semper Lorem ipsum dolor sit amet, consectetur adipiscing
           elit. Faucibus in libero risus semper Lorem ipsum dolor sit amet,
           consectetur adipiscing elit. Faucibus in libero risus semper Lorem
           ipsum dolor sit amet, cipiscing elit. Faucibus in liber`}
        />
      </Container>
    </Box>
  )
}
export default BlogSlider
