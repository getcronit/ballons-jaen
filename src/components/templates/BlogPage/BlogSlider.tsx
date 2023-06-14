import {Box, Container, Stack, Text} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider} from '@snek-at/jaen'
import {FC} from 'react'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {blogSliderSettings, settings} from '../../../constant/slider'

const SliderItem = connectBlock(
  () => {
    return (
      <Box display={'flex'} justifyContent="center">
        <Box m="2" boxSize="sm" borderRadius="xl" overflow="hidden">
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
      <Stack maxW={CONTAINER_MAX_WIDTH} mx="auto" spacing="4">
        <Box h="sm">
          <PhotoProvider maskOpacity={0.8}>
            <Field.Section
              as={() => {
                return <Slider {...blogSliderSettings} />
              }}
              props={{overflow: 'hidden'}}
              name="SliderItem"
              label="Blog Slider"
              blocks={[SliderItem]}
            />
          </PhotoProvider>
        </Box>

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
      </Stack>
    </Box>
  )
}
export default BlogSlider
