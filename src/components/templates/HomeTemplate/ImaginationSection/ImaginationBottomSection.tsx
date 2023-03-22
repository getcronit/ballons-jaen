import {Box, Grid, GridItem} from '@chakra-ui/react'
import {Field, useField} from '@snek-at/jaen'
import React, {FC, useCallback, useState} from 'react'
import {PhotoProvider, PhotoView} from 'react-photo-view'

import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
interface IImaginationBottomSectionProps {}

const Images = React.memo<{
  openImageViewer: (url: number) => void
  defaultImages: string[]
  loadedImages: string[]
  onLoaded: (index: number, url: string) => void
}>(
  ({openImageViewer, defaultImages, loadedImages, onLoaded}) => {
    return (
      <PhotoProvider>
        <Grid
          height="110rem"
          width="100%"
          px="4"
          gridGap={{base: '2', md: '4'}}
          gridTemplateAreas={{
            base: `
             "I1 I2"
             "I3 I3"
             "I4 I5"
             "I6 I7"
           `,
            md: `
           "I1 I1 I2 I3"
           "I1 I1 I2 I4"
           "I5 I5 I5 I5"
           "I5 I5 I5 I5"
           "I6 I6 I7 I7"
           `
          }}
          // w="100%"
          maxW={CONTAINER_MAX_WIDTH}
          // h={CONTAINER_MAX_WIDTH}
        >
          {new Array(defaultImages.length).fill('').map((_, i) => {
            const imageFieldName = `imaginationBottomImage${i}`
            const imageField = useField<{
              internalImageUrl: string
            }>(imageFieldName, 'IMA:ImageField')
            return (
              <PhotoView
                src={imageField.value?.internalImageUrl || defaultImages[i]}>
                <GridItem gridArea={`I${i + 1}`} key={i} cursor="pointer">
                  <Box
                    _hover={{
                      transition: 'all 0.2s ease',
                      transform: {
                        md: 'scale(1.02) ',
                        lg: 'scale(1.02) '
                      }
                    }}
                    transition="ease-in 0.2s"
                    boxShadow="dark"
                    borderRadius="xl"
                    w="full"
                    display={{base: 'block', md: 'none'}}
                    h="full"
                    overflow="hidden">
                    <Field.Image
                      name={imageFieldName}
                      label="Image"
                      defaultValue={defaultImages[i]}
                    />
                  </Box>
                  <Box
                    _hover={{
                      transition: 'all 0.2s ease',
                      transform: {
                        md: 'scale(1.02) ',
                        lg: 'scale(1.02) '
                      }
                    }}
                    transition="ease-in 0.2s"
                    display={{base: 'none', md: 'block'}}
                    boxShadow="dark"
                    borderRadius="xl"
                    w="full"
                    h="full"
                    overflow="hidden">
                    <Field.Image
                      onLoad={() => {
                        const imageUrl =
                          imageField.value?.internalImageUrl || defaultImages[i]

                        onLoaded(i, imageUrl)
                      }}
                      name={imageFieldName}
                      label="Image"
                      defaultValue={defaultImages[i]}
                    />
                  </Box>
                </GridItem>
              </PhotoView>
            )
          })}
        </Grid>
      </PhotoProvider>
    )
  },
  () => {
    return true
  }
)
const ImaginationBottomSection: FC<IImaginationBottomSectionProps> = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const desktopImages = [
    '/images/home/imagination/gallary1.png',
    '/images/home/imagination/gallary2.png',
    '/images/home/imagination/gallary3.png',
    '/images/home/imagination/gallary4.png',
    '/images/home/imagination/gallary5.png',
    '/images/home/imagination/gallary6.png',
    '/images/home/imagination/gallary7.png'
  ]

  const [loadedImages, setLoadedImages] = useState<string[]>([])

  const openImageViewer = useCallback((url: number) => {
    setCurrentImage(url)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <>
      {' '}
      <>
        <Images
          onLoaded={(index, url) => {
            if (loadedImages[index] !== url) {
              // set url to specific index
              setLoadedImages(prev => {
                const newLoadedImages = [...prev]
                newLoadedImages[index] = url
                return newLoadedImages
              })
            }
          }}
          openImageViewer={openImageViewer}
          defaultImages={desktopImages}
          loadedImages={loadedImages}
        />
      </>
    </>
  )
}
export default ImaginationBottomSection
