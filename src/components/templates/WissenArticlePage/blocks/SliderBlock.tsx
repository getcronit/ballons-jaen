import {Box, Stack} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider} from '@snek-at/jaen'
import React from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import {blogSliderSettings} from '../../../../constant/slider'
import {SliderBox} from '../../../organisms/SliderBox'

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
    label: 'Block'
  }
)

export const SliderBlock = connectBlock(
  () => {
    return (
      <Box
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="start"
        bgImage={{
          base: '/images/blog_page/slider_mobile_bg.svg',
          md: '/images/blog_page/sliderBg.svg'
        }}>
        <Stack maxW={CONTAINER_MAX_WIDTH} mx="auto" spacing="4">
          <PhotoProvider maskOpacity={0.8}>
            <Field.Section
              as={SliderBox(blogSliderSettings)}
              name="SliderItem"
              label="Blog Slider"
              blocks={[SliderItem]}
            />
          </PhotoProvider>
        </Stack>
      </Box>
    )
  },
  {
    name: 'SliderBlock',
    label: 'Slider Container'
  }
)
