import {Box} from '@chakra-ui/react'
import React, {forwardRef} from 'react'
import Slider from 'react-slick'

export const SliderBox = (sliderSettings: any = {}) =>
  forwardRef<
    HTMLDivElement,
    {
      children?: React.ReactNode
    }
  >((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <Slider {...sliderSettings}>{props.children}</Slider>
      </Box>
    )
  })
