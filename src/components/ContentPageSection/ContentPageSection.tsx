import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import {
  connectSection,
  Field,
  useField,
  useJaenSectionContext,
} from "@jaenjs/jaen"
import React, { useCallback, useState } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import CustomImageViewer from "../CustomImageViewer"
import FourCard from "../FourCard/FourCard"
import ConvincedSection from "../templates/Dekoration/HochzeitsballonsSection/ConvincedSection"
import BallonGas from "./BallonGas"

export interface ContentPageSectionProps {}

const ImagesGallery3x3Section = connectSection(
  () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const desktopImages = [
      "/images/decorationen/grid/gridImage1.png",
      "/images/decorationen/grid/gridImage2.png",
      "/images/decorationen/grid/gridImage3.png",
      "/images/decorationen/grid/gridImage4.png",
      "/images/decorationen/grid/gridImage5.png",
      "/images/decorationen/grid/gridImage6.png",
      "/images/decorationen/grid/gridImage7.png",
      "/images/decorationen/grid/gridImage8.png",
      "/images/decorationen/grid/gridImage9.png",
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
    )
  },
  {
    name: "ImagesGallery3x3Section",
    displayName: "Bildergalerie (3x3)",
  }
)

const Images = React.memo<{
  openImageViewer: (url: number) => void
  defaultImages: string[]
  loadedImages: string[]
  onLoaded: (index: number, url: string) => void
}>(
  ({ openImageViewer, defaultImages, onLoaded }) => {
    const mobileSliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
    }

    return (
      <>
        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          <Grid
            display={{ base: "none", md: "grid" }}
            pos="relative"
            py="40"
            zIndex="1"
            placeItems="center"
            px="4"
            gap={{ base: "4", md: "8", lg: "10", xl: "14" }}
            gridTemplateColumns={{
              md: "repeat(3, 1fr)",
            }}
          >
            {new Array(9).fill("").map((_, i) => {
              const imageFieldName = `images.${i}`
              const imageField = useField<{
                internalImageUrl: string
              }>(imageFieldName, "IMA:ImageField")

              return (
                <GridItem
                  justifySelf="center"
                  _hover={{
                    transition: "all 0.2s ease",
                    transform: {
                      md: "scale(1.02) ",
                      lg: "scale(1.02) ",
                    },
                  }}
                  transition="ease-in 0.2s"
                  cursor="pointer"
                  // h={{ base: '11.25rem', md: '18.75rem', lg: '25rem', xl: '29.375rem' }}
                  boxSize={"full"}
                  key={i}
                >
                  <Box
                    boxSize={"full"}
                    borderRadius="xl"
                    boxShadow="light"
                    overflow={"hidden"}
                    onClick={() => {
                      if (!imageField.isEditing) {
                        openImageViewer(i)
                      }
                    }}
                  >
                    <Field.Image
                      onLoad={() => {
                        const imageUrl =
                          imageField.value?.internalImageUrl || defaultImages[i]

                        onLoaded(i, imageUrl)
                      }}
                      objectFit="cover"
                      name={imageFieldName}
                      defaultValue={defaultImages[i]}
                    />
                  </Box>
                </GridItem>
              )
            })}
          </Grid>
        </Container>
        {/* for Mobile */}
        <Box
          // overflow="hidden"
          display={{ base: "block", md: "none" }}
          sx={
            {
              'ul.slick-dots': {
                top: 'auto',
              },
              '.slick-slider, .slick-slide': {
                px: 2
              }
            }
          }
        >
          <Slider {...mobileSliderSettings}>
            {new Array(9).fill("").map((_, i) => {
              const imageFieldName = `images.${i}`
              const imageField = useField<{
                internalImageUrl: string
              }>(imageFieldName, "IMA:ImageField")

              return (
                <Box
                  key={i}
                  _hover={{
                    transition: "all 0.2s ease",
                    transform: {
                      md: "scale(1.02) ",
                      lg: "scale(1.02) ",
                    },
                  }}
                  onClick={() => openImageViewer(i)}
                  transition="ease-in 0.2s"
                  boxSize="full"
                  boxShadow="light"
                  bg="blue"
                  borderRadius="lg"
                  overflow={"hidden"}
                >
                  <Field.Image
                    onLoad={() => {
                      const imageUrl =
                        imageField.value?.internalImageUrl || defaultImages[i]

                      onLoaded(i, imageUrl)
                    }}
                    objectFit="cover"
                    name={imageFieldName}
                    defaultValue={defaultImages[i]}
                  />
                </Box>
              )
            })}
          </Slider>
        </Box>
      </>
    )
  },
  () => {
    return true
  }
)

const FullWidthImageSection = connectSection(
  () => {
    return (
      <Container maxW="CONTAINER_MAX_WIDTH">
        <Heading
          textAlign="center"
          fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
          fontWeight="semibold"
        >
          <Field.Text
            name="title"
            defaultValue={"In Erinnerung behalten"}
            rtf
          />
        </Heading>

        <Box
          my={{ base: "4 !important", md: "12 !important" }}
          borderRadius={{ base: ".625rem", md: "2rem" }}
          minH={{ base: "11.25rem", md: "18.75rem", lg: "25rem", xl: "29.375rem" }}
          boxShadow="light"
          overflow={"hidden"}
        >
          <Field.Image
            style={{minHeight: "inherit"}}
            name="image"
            defaultValue={undefined}
            objectFit="cover"
          />
        </Box>
      </Container>
    )
  },
  {
    name: "FullWidthImageSection",
    displayName: "Bild (Volle Breite)",
  }
)

const TextSection = connectSection(
  () => {
    return (
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Text
          maxW={{ base: "80%", md: "60%", lg: "50%" }}
          fontSize={{ base: "sm", lg: "md" }}
          textAlign="center"
          as="span"
        >
          <Field.Text
            name="text"
            defaultValue={`
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl nec ultricies lacinia, nisl nunc aliquet nisl, nec
              lacinia nisl nunc vel nunc. Sed tincidunt, nisl nec ultricies
              lacinia, nisl nunc aliquet nisl, nec lacinia nisl nunc vel nunc.
            </p>
            
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, nisl nec ultricies lacinia, nisl nunc aliquet nisl, nec
              lacinia nisl nunc vel nunc. Sed tincidunt, nisl nec ultricies
              lacinia, nisl nunc aliquet nisl, nec lacinia nisl nunc vel nunc.
            </p>
            `}
          />
        </Text>
      </Container>
    )
  },
  {
    name: "TextSection",
    displayName: "Text",
  }
)

const SubCategoryContentSection = connectSection(
  () => {
    return (
      <>
        <Box
          pos="absolute"
          display={{ base: "none", md: "block" }}
          left={{
            md: "-28%",
            lg: "-20%",
            xl: "-18%",
            "2xl": "-16%",
          }}
          w="calc(20vw + 15vh)"
        >
          <Field.Image
            name="sideImageLeft"
            defaultValue="/images/decorationen/ballons.png"
          />
        </Box>

        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          {/* Upper Section */}

          <Stack spacing={20}>
            <VStack>
              <Heading
                fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
                fontWeight="semibold"
              >
                <Field.Text name="heading" defaultValue={"Überschrift"} rtf />
              </Heading>
              <Text
                fontSize={{ base: "sm", lg: "md" }}
                textAlign="center"
                maxW={{ md: "60%" }}
              >
                <Field.Text
                  name="Text"
                  defaultValue={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam, atque iusto culpa libero nostrum sit fuga cumque sunt tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea praesentium, enim alias a nihil et aperiam

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate explicabo facere, eligendi molestias Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusamus.
`}
                />
              </Text>
            </VStack>

            <Field.Section
              as={Stack}
              props={{ spacing: 20 }}
              name="content"
              displayName="Content"
              sections={[
                ImagesGallery3x3Section,
                FullWidthImageSection,
                TextSection,
              ]}
            />
          </Stack>
        </Container>
      </>
    )
  },
  {
    name: "subCategoryContent",
    displayName: "Unterkategorie",
  }
)

const CategoryContentSection = connectSection(
  (props, i) => {
    const self = useJaenSectionContext()

    if (!self)
      throw new Error(
        "Something went terribly wrong. Maybe I should quit programming."
      )

    return (
      <>
        <Box>
          <Container
            h={{ base: "16.25rem", md: "auto" }}
            maxW="100vw"
            mx="auto"
            overflow="hidden"
          >
            <VStack
              pos="relative"
              py={{ base: "8", md: "40", lg: "60", "2xl": "80" }}
              h={{ md: "60rem", lg: "70rem", xl: "75rem" }}
              w="full"
            >
              <Box
                display={{ base: "none", md: "block" }}
                pos="absolute"
                top={{ md: "10rem", xl: "18.75rem" }}
                right="-15rem"
                w="calc(20vw + 15vh)"
              >
                <Field.Image
                  name="sideImageRight"
                  defaultValue="/images/decorationen/ballons.png"
                />
              </Box>

              <Image
                pos="absolute"
                top={{ base: "0rem" }}
                w={{ base: "40%", md: "60%", lg: "70%", xl: "58%" }}
                left={{ base: "0", lg: "-64px", xl: 0 }}
                src="/images/decorationen/shapes/shape.svg"
              />
              <VStack pos="relative">
                <Text variant="cursive" size="120" as="span">
                  <Field.Text
                    name="fourCardItemTitle"
                    displayName="Überschrift"
                    defaultValue="Überschrift"
                  />
                </Text>
                <Heading
                  textAlign="center"
                  fontSize={{ base: "md", md: "lg", lg: "xl", xl: "2xl" }}
                >
                  <Field.Text
                    name="subHeading"
                    displayName="Unterüberschrift"
                    defaultValue="Unterüberschrift"
                  />
                </Heading>
                <Text
                  maxW={{ base: "80%", md: "60%", lg: "50%" }}
                  fontSize={{ base: "sm", lg: "md" }}
                  textAlign="center"
                  as="span"
                >
                  <Field.Text
                    name="text"
                    displayName="Text"
                    defaultValue="Text"
                  />
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
        <Box
          pos="relative"
          mt={{
            base: 0,
            md: "-25rem",
          }}
        >
          <Field.Section
            as={Stack}
            props={{ spacing: 20 }}
            name="subContentCategories"
            displayName="Unterkategorie"
            sections={[SubCategoryContentSection]}
          />
        </Box>

        {self.position % 2 === 0 ? <ConvincedSection /> : <BallonGas />}
      </>
    )
  },
  {
    name: "categoryContent",
    displayName: "Kategorie",
  }
)

export const ContentPageSection: React.FC<ContentPageSectionProps> = () => {
  const sectionFieldName = "contentCategories"
  const sectionDisplayName = "Content"

  return (
    <Stack>
      <FourCard
        sectionFieldName={sectionFieldName}
        sectionDisplayName={sectionDisplayName}
      />

      <Field.Section
        as={Stack}
        props={{ spacing: 20 }}
        name={sectionFieldName}
        displayName="Content"
        sections={[CategoryContentSection]}
      />
    </Stack>
  )
}

export default ContentPageSection
