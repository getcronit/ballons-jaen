import {Box, Text} from '@chakra-ui/react'
import React, {forwardRef} from 'react'
import Slider, {Settings} from 'react-slick'
import NextArrow from '../CustomSlider/NextArrow'
import PrevArrow from '../CustomSlider/PrevArrow'

export const SliderBox = (sliderSettings: Settings = {}) =>
  forwardRef<
    HTMLDivElement,
    {
      children?: React.ReactNode
    }
  >((props, ref) => {
    const isInfinite =
      React.Children.count(props.children) > (sliderSettings.slidesToShow || 3)

    return (
      <Box ref={ref} {...props}>
        <Slider
          {...sliderSettings}
          infinite={isInfinite}
          prevArrow={<PrevArrow isRed />}
          nextArrow={<NextArrow isRed />}>
          {props.children}
        </Slider>
      </Box>
    )
  })
