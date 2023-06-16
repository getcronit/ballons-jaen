import {Box} from '@chakra-ui/react'
import React, {forwardRef} from 'react'
import Slider from 'react-slick'
import NextArrow from '../CustomSlider/NextArrow'
import PrevArrow from '../CustomSlider/PrevArrow'

export const SliderBox = (sliderSettings: any = {}) =>
  forwardRef<
    HTMLDivElement,
    {
      children?: React.ReactNode
    }
  >((props, ref) => {
    return (
      <Box ref={ref} {...props}>
        <Slider
          {...sliderSettings}
          prevArrow={<PrevArrow isRed />}
          nextArrow={<NextArrow isRed />}>
          {props.children}
        </Slider>
      </Box>
    )
  })
