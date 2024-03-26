import {connectBlock, Field, PhotoProvider} from '@atsnek/jaen'
import {Box, chakra, Grid, VStack} from '@chakra-ui/react'
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
        borderRadius={'xl'}
        overflow="hidden"
        maxW="80%"
        mx="auto"
        sx={{
          '.rounded': {
            filter: 'url("#filter-radius")'
          }
        }}
        h={{
          base: '30vh',
          md: '50vh',
          lg: '60vh'
        }}>
        {/* <!-- Magic for border radius --> */}
        <chakra.svg visibility={'hidden'} width="0" height="0">
          <defs>
            <filter id="filter-radius">
              {/* <!-- Create a blur of 4px radius from the original image --> */}
              {/* <!-- (Transparent pixels are ignored, thus the blur radius starts at the corner of the image) --> */}
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="15"
                result="blur"
              />
              {/* <!-- Filter out the pixels where alpha values that are too low, in this case the blurred corners are filtered out --> */}
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -50"
                result="mask"
              />
              {/* <!-- As the final result is now blurred, we need to use the mask we obtained from previous step to cut from the original source --> */}
              <feComposite in="SourceGraphic" in2="mask" operator="atop" />
            </filter>
          </defs>
        </chakra.svg>
        <Field.Image
          imgClassName="rounded"
          name="image"
          objectFit="contain"
          lightbox
          //backgroundColor="var(--chakra-colors-red-50)"
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
                        overflow="hidden"
                        isolation="isolate">
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
                    isolation="isolate"
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
