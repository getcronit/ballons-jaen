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
import { connectSection, Field, useField } from "@jaenjs/jaen"
import { useCallback, useState } from "react"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import CustomImageViewer from "../CustomImageViewer"
import FourCard from "../FourCard/FourCard"
import ConvincedSection from "../templates/Dekoration/HochzeitsballonsSection/ConvincedSection"

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
                  key={i}
                >
                  <Box
                    borderRadius="xl"
                    boxShadow="light"
                    overflow={"hidden"}
                    onClick={() => {
                        openImageViewer(i)
                    }}
                  >
                    <Field.Image
                      onLoad={() => {
                        const imageUrl =
                          imageField.value?.internalImageUrl || desktopImages[i]

                        // set loaded images if not already loaded at index i
                        if (!loadedImages[i] && loadedImages[i] !== imageUrl) {
                            setLoadedImages(prev => [...prev, imageUrl])
                        }



                      }}
                      objectFit="cover"
                      name={imageFieldName}
                      defaultValue={`/images/decorationen/grid/gridImage${
                        1 + i
                      }.png`}
                    />
                  </Box>
                </GridItem>
              )
            })}
          </Grid>
        </Container>
        {/* for Mobile */}
        <Box
          h="25rem"
          pos="relative"
          overflow="hidden"
          display={{ base: "block", md: "none" }}
        >
          <Image
            pos="absolute"
            left="-6.25rem"
            w="12.5rem"
            src="/images/decorationen/ballons.png"
          />
          <Image
            pos="absolute"
            right="-6.25rem"
            w="14.375rem"
            src="/images/decorationen/ballons.png"
          />
          <Box pos="absolute" maxW="full" bottom="3rem">
            <Image
              pos="absolute"
              left="0"
              src="/images/decorationen/left_transparent.svg"
            />
            <Image
              pos="absolute"
              right="0"
              src="/images/decorationen/right_transparent.svg"
            />
            <Flex overflowY="auto">
              {new Array(9).fill("").map((_, i) => (
                <Box key={i} px="2" flexShrink="0" mb="2">
                  <Image
                    _hover={{
                      transition: "all 0.2s ease",
                      transform: {
                        md: "scale(1.02) ",
                        lg: "scale(1.02) ",
                      },
                    }}
                    onClick={() => openImageViewer(i)}
                    transition="ease-in 0.2s"
                    boxSize="10.625rem"
                    boxShadow="light"
                    bg="blue"
                    src={`/images/decorationen/grid/gridImage${1 + i}.png`}
                    borderRadius="lg"
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
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
    displayName: "Inhalt",
  }
)

const FullWidthImageSection = connectSection(
  () => {
    return <>content</>
  },
  {
    name: "FullWidthImageSection",
    displayName: "Inhalt",
  }
)

const SubCategoryContentSection = connectSection(
  () => {
    return (
      <>
        <Image
          pos="absolute"
          display={{ base: "none", md: "block" }}
          left={{
            md: "-28%",
            lg: "-20%",
            xl: "-18%",
            "2xl": "-16%",
          }}
          w="calc(20vw + 15vh)"
          src="/images/decorationen/ballons.png"
        />
        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          {/* Upper Section */}

          <VStack>
            <Heading
              fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
              fontWeight="semibold"
            >
              <Field.Text name="heading" defaultValue={"Überschrift"} />
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
            name="content"
            displayName="Content"
            sections={[ImagesGallery3x3Section]}
          />
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
  () => {
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
              <Image
                display={{ base: "none", md: "block" }}
                pos="absolute"
                top={{ md: "10rem", xl: "18.75rem" }}
                right="-15rem"
                w="calc(20vw + 15vh)"
                src="/images/decorationen/ballons.png"
              />
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
                    name="heading"
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
          top={{
            base: "0",
            md: "-25rem",
          }}
        >
          <Field.Section
            name="subContentCategories"
            displayName="Unterkategorie"
            sections={[SubCategoryContentSection]}
          />
        </Box>
        <ConvincedSection />
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
        name={sectionFieldName}
        displayName="Content"
        sections={[CategoryContentSection]}
      />
    </Stack>
  )
}

export default ContentPageSection
