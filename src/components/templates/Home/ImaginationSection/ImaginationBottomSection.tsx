import { Box, Grid, GridItem } from "@chakra-ui/react"
import { Field, useField } from "@jaenjs/jaen"
import React, { FC, useCallback, useState } from "react"
import CustomImageViewer from "../../../../components/CustomImageViewer"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"
interface IImaginationBottomSectionProps {}

const Images = React.memo<{
  openImageViewer: (url: number) => void
  defaultImages: string[]
  loadedImages: string[]
  onLoaded: (index: number, url: string) => void
}>(
  ({ openImageViewer, defaultImages, loadedImages, onLoaded }) => {
    console.log("render")

    return (
      <Grid
        height="110rem"
        width="100%"
        px="4"
        gridGap={{ base: "2", md: "4" }}
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
              `,
        }}
        // w="100%"
        maxW={CONTAINER_MAX_WIDTH}
        // h={CONTAINER_MAX_WIDTH}
      >
        {new Array(defaultImages.length).fill("").map((_, i) => {
          const imageFieldName = `imaginationBottomImage${i}`
          const imageField = useField<{
            internalImageUrl: string
          }>(imageFieldName, "IMA:ImageField")
          return (
            <GridItem gridArea={`I${i + 1}`} key={i} cursor="pointer">
              <Box
                _hover={{
                  transition: "all 0.2s ease",
                  transform: {
                    md: "scale(1.02) ",
                    lg: "scale(1.02) ",
                  },
                }}
                transition="ease-in 0.2s"
                boxShadow="dark"
                borderRadius="xl"
                w="full"
                display={{ base: "block", md: "none" }}
                h="full"
                onClick={() => {
                  if (!imageField.isEditing) {
                    openImageViewer(i)
                  }
                }}
                //src={`/images/home/imagination/mobile/mobileG${index + 1}.png`}
                overflow="hidden"
              >
                <Field.Image
                  onLoad={() => {
                    const imageUrl =
                      imageField.value?.internalImageUrl || defaultImages[i]

                    onLoaded(i, imageUrl)
                  }}
                  name={imageFieldName}
                  defaultValue={defaultImages[i]}
                />
              </Box>
              <Box
                _hover={{
                  transition: "all 0.2s ease",
                  transform: {
                    md: "scale(1.02) ",
                    lg: "scale(1.02) ",
                  },
                }}
                transition="ease-in 0.2s"
                display={{ base: "none", md: "block" }}
                boxShadow="dark"
                borderRadius="xl"
                w="full"
                h="full"
                onClick={() => {
                  if (!imageField.isEditing) {
                    openImageViewer(i)
                  }
                }}
                // onClick={() => openImageViewer(index)}
                // src={`/images/home/imagination/gallary${index + 1}.png`}
                overflow="hidden"
              >
                <Field.Image
                  onLoad={() => {
                    const imageUrl =
                      imageField.value?.internalImageUrl || defaultImages[i]

                    onLoaded(i, imageUrl)
                  }}
                  name={imageFieldName}
                  defaultValue={defaultImages[i]}
                />
              </Box>
            </GridItem>
          )
        })}
      </Grid>
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
    "/images/home/imagination/gallary1.png",
    "/images/home/imagination/gallary2.png",
    "/images/home/imagination/gallary3.png",
    "/images/home/imagination/gallary4.png",
    "/images/home/imagination/gallary5.png",
    "/images/home/imagination/gallary6.png",
    "/images/home/imagination/gallary7.png",
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
      {" "}
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
        <CustomImageViewer
          closeImageViewer={closeImageViewer}
          currentImage={currentImage}
          isViewerOpen={isViewerOpen}
          desktopImages={loadedImages}
        />
      </>
    </>
  )
}
export default ImaginationBottomSection
