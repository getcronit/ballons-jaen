import {VStack, Grid, Box} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider, useField} from '@snek-at/jaen'
import React from 'react'
import Slider from 'react-slick'
import {ImagesWithText} from '../../../organisms/ImagesWithText'

export {SliderBlock} from './SliderBlock'

export const TextBlock = connectBlock(
  () => {
    return (
      <Field.Text
        name="text"
        defaultValue="Example Text"
        fontSize={{
          base: 'sm',
          md: 'md'
        }}
      />
    )
  },
  {
    label: 'TextBlock',
    name: 'TextBlock'
  }
)

export const ImageBlock = connectBlock(
  () => {
    return (
      <Box
        borderRadius={'lg'}
        overflow="hidden"
        maxW="80%"
        mx="auto"
        h={{
          base: '30vh',
          md: '50vh',
          lg: '60vh'
        }}>
        <Field.Image
          name="image"
          objectFit="cover"
          lightbox
          backgroundColor="var(--chakra-colors-red-50)"
        />
      </Box>
    )
  },
  {
    name: 'ImageBlock',
    label: 'Bild'
  }
)

export const ImagesWithTextLeftBlock = connectBlock(
  () => {
    return <ImagesWithText orientation="left" />
  },
  {
    name: 'ImagesWithTextLeftBlock',

    label: 'Bilder mit Text links'
  }
)

export const ImagesWithTextRightBlock = connectBlock(
  () => {
    return <ImagesWithText orientation="right" />
  },
  {
    name: 'ImagesWithTextRightBlock',
    label: 'Bilder mit Text rechts'
  }
)

export const ImagesBlock = connectBlock(
  () => {
    const mobileSliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
    }

    return (
      <>
        <VStack
          py="4"
          display={{base: 'none', md: 'flex'}}
          pos="relative"
          gap={{base: '4', md: '8', lg: '10', xl: '14'}}
          w="full">
          <PhotoProvider maskOpacity={0.8}>
            <Grid templateColumns="repeat(3, 1fr)" gap={2} boxSize="full">
              {new Array(9).fill('').map((_, i) => {
                const imageFieldName = `images.${i}`
                return (
                  <Box
                    key={i}
                    p={0}
                    borderWidth="2px"
                    borderRadius="lg"
                    position="relative">
                    <Box
                      width="100%"
                      paddingBottom="100%" // Creates a square based on width #Image Hack!!!
                      position="relative">
                      <Box
                        objectFit="cover"
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        borderRadius="lg"
                        overflow="hidden">
                        <Field.Image
                          objectFit="cover"
                          name={imageFieldName}
                          lightboxGroup
                          lightbox
                        />
                      </Box>
                    </Box>
                  </Box>
                )
              })}
            </Grid>
          </PhotoProvider>
        </VStack>
        {/* for Mobile */}
        <Box
          // overflow="hidden"
          display={{base: 'block', md: 'none'}}
          sx={{
            'ul.slick-dots': {
              top: 'auto'
            },
            '.slick-slider, .slick-slide': {
              px: 2
            }
          }}>
          <PhotoProvider maskOpacity={0.8}>
            <Slider {...mobileSliderSettings}>
              {new Array(9).fill('').map((_, i) => {
                const imageFieldName = `images.${i}`

                return (
                  <Box
                    key={i}
                    _hover={{
                      transition: 'all 0.2s ease',
                      transform: {
                        md: 'scale(1.02) ',
                        lg: 'scale(1.02) '
                      }
                    }}
                    transition="ease-in 0.2s"
                    boxShadow="light"
                    bg="blue"
                    borderRadius="lg"
                    overflow="hidden"
                    boxSize={{
                      base: 'xs',
                      md: 'sm',
                      lg: 'md',
                      xl: 'lg'
                    }}>
                    <Field.Image
                      objectFit="cover"
                      name={imageFieldName}
                      lightboxGroup
                      lightbox
                      //defaultValue={defaultImages[i]}
                    />
                  </Box>
                )
              })}
            </Slider>
          </PhotoProvider>
        </Box>
      </>
    )
  },
  {
    name: 'ImagesBlock',
    label: 'Bildergalerie'
  }
)
