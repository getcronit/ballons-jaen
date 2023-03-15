import {ArrowUpIcon, ChevronDownIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Progress,
  Spacer,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'

import {
  connectBlock,
  Field,
  useField,
  useSectionBlockContext,
  useSectionField
} from '@snek-at/jaen'
import React, {forwardRef, useCallback, useRef, useState} from 'react'
import Slider from 'react-slick'
import CustomImageViewer from '../CustomImageViewer'
import BallonGas from './BallonGas'

import {removeHtmlFromString} from '../../../common/utils'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {useContactModal} from '../../../services/contact'
import FourCard from '../FourCard/FourCard'
import ConvincedSection from './ConvincedSection'

export interface ContentPageSectionProps {}

const ImagesGallery3x3Section = connectBlock(
  () => {
    const [currentImage, setCurrentImage] = useState(0)
    const [isViewerOpen, setIsViewerOpen] = useState(false)

    const desktopImages = [
      '/images/decorationen/grid/gridImage1.png',
      '/images/decorationen/grid/gridImage2.png',
      '/images/decorationen/grid/gridImage3.png',
      '/images/decorationen/grid/gridImage4.png',
      '/images/decorationen/grid/gridImage5.png',
      '/images/decorationen/grid/gridImage6.png',
      '/images/decorationen/grid/gridImage7.png',
      '/images/decorationen/grid/gridImage8.png',
      '/images/decorationen/grid/gridImage9.png'
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
    name: 'ImagesGallery3x3Section',
    label: 'Bildergalerie (3x3)'
  }
)

const Images = React.memo<{
  openImageViewer: (url: number) => void
  defaultImages: string[]
  loadedImages: string[]
  onLoaded: (index: number, url: string) => void
}>(
  ({openImageViewer, defaultImages, onLoaded}) => {
    const mobileSliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000
    }

    return (
      <>
        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          <Grid
            display={{base: 'none', md: 'grid'}}
            pos="relative"
            py="40"
            zIndex="1"
            placeItems="center"
            px="4"
            gap={{base: '4', md: '8', lg: '10', xl: '14'}}
            gridTemplateColumns={{
              md: 'repeat(3, 1fr)'
            }}>
            {new Array(9).fill('').map((_, i) => {
              const imageFieldName = `images.${i}`
              const imageField = useField<{
                internalImageUrl: string
              }>(imageFieldName, 'IMA:ImageField')

              return (
                <GridItem
                  justifySelf="center"
                  // _hover={{
                  //   transition: 'all 0.2s ease',
                  //   transform: {
                  //     md: 'scale(1.02) ',
                  //     lg: 'scale(1.02) '
                  //   }
                  // }}
                  // transition="ease-in 0.2s"
                  cursor="pointer"
                  // h={{ base: '11.25rem', md: '18.75rem', lg: '25rem', xl: '29.375rem' }}
                  boxSize={'full'}
                  key={i}>
                  <Box
                    mx="auto"
                    boxSize={'full'}
                    borderRadius="xl"
                    boxShadow="light"
                    overflow={'hidden'}
                    onClick={() => {
                      if (!imageField.isEditing) {
                        openImageViewer(i)
                      }
                    }}
                    w="calc(95vh / 3)"
                    h="calc(95vh / 3)">
                    <Field.Image
                      onLoad={() => {
                        const imageUrl =
                          imageField.value?.internalImageUrl || defaultImages[i]

                        onLoaded(i, imageUrl)
                      }}
                      objectFit="cover"
                      label="Image"
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
          display={{base: 'block', md: 'none'}}
          sx={{
            'ul.slick-dots': {
              top: 'auto'
            },
            '.slick-slider, .slick-slide': {
              px: 2
            }
          }}>
          <Slider {...mobileSliderSettings}>
            {new Array(9).fill('').map((_, i) => {
              const imageFieldName = `images.${i}`
              const imageField = useField<{
                internalImageUrl: string
              }>(imageFieldName, 'IMA:ImageField')

              return (
                <Box
                  key={i}
                  // _hover={{
                  //   transition: 'all 0.2s ease',
                  //   transform: {
                  //     md: 'scale(1.02) ',
                  //     lg: 'scale(1.02) '
                  //   }
                  // }}
                  onClick={() => openImageViewer(i)}
                  // transition="ease-in 0.2s"
                  boxSize="full"
                  boxShadow="light"
                  bg="blue"
                  borderRadius="lg"
                  overflow={'hidden'}
                  h="30vh">
                  <Field.Image
                    onLoad={() => {
                      const imageUrl =
                        imageField.value?.internalImageUrl || defaultImages[i]

                      onLoaded(i, imageUrl)
                    }}
                    label="Image"
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

const FullWidthImageSection = connectBlock(
  () => {
    return (
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Heading
          textAlign="center"
          fontSize={{base: 'md', md: '2xl', lg: '3xl', xl: '4xl'}}
          fontWeight="semibold">
          <Field.Text
            name="title"
            label="Titel"
            defaultValue={'In Erinnerung behalten'}
            rtf
          />
        </Heading>
        <Box
          my={{base: '4 !important', md: '12 !important'}}
          borderRadius={{base: '.625rem', md: '2rem'}}
          // minH={{
          //   base: "11.25rem",
          //   md: "18.75rem",
          //   lg: "25rem",
          //   xl: "29.375rem",
          // }}
          boxShadow="light"
          overflow={'hidden'}
          h={{
            base: '30vh',
            md: '50vh',
            lg: '60vh'
          }}>
          <Field.Image
            name="image"
            label="Image"
            defaultValue={undefined}
            // objectFit="cover"
          />
        </Box>
      </Container>
    )
  },
  {
    name: 'FullWidthImageSection',
    label: 'Bild (Volle Breite)'
  }
)

const TextSection = connectBlock(
  () => {
    return (
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Text
          maxW={{base: '80%', md: '60%', lg: '50%'}}
          fontSize={{base: 'sm', lg: 'md'}}
          textAlign="center"
          as="span">
          <Field.Text
            name="text"
            label="Text"
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
    name: 'TextSection',
    label: 'Text'
  }
)

const SubCategoryContentSection = connectBlock(
  () => {
    return (
      <>
        <Box
          pos="absolute"
          display={{base: 'none', md: 'block'}}
          left={{
            md: '-28%',
            lg: '-20%',
            xl: '-18%',
            '2xl': '-16%'
          }}
          w="calc(20vw + 15vh)"
          h="60vh">
          <Field.Image
            name="sideImageLeft"
            label="Image"
            defaultValue="/images/decorationen/ballons.png"
          />
        </Box>

        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          {/* Upper Section */}

          <Stack spacing={20}>
            <VStack>
              <Heading
                fontSize={{base: 'md', md: '2xl', lg: '3xl', xl: '4xl'}}
                fontWeight="semibold">
                <Field.Text
                  name="heading"
                  label="Heading"
                  defaultValue={'Überschrift'}
                  rtf
                />
              </Heading>
              <Text
                fontSize={{base: 'sm', lg: 'md'}}
                textAlign="center"
                maxW={{md: '60%'}}
                as="span">
                <Field.Text
                  name="Text"
                  label="Text"
                  defaultValue={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam, atque iusto culpa libero nostrum sit fuga cumque sunt tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea praesentium, enim alias a nihil et aperiam

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora necessitatibus cupiditate explicabo facere, eligendi molestias Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, accusamus.
`}
                />
              </Text>
            </VStack>

            <Field.Section
              as={Stack}
              props={{spacing: 20}}
              name="content"
              label="Content"
              blocks={[
                ImagesGallery3x3Section,
                FullWidthImageSection,
                TextSection
              ]}
            />
          </Stack>
        </Container>
      </>
    )
  },
  {
    name: 'subCategoryContent',
    label: 'Unterkategorie'
  }
)

const CategoryContentSection = connectBlock(
  (props, i) => {
    const self = useSectionBlockContext()

    if (!self)
      throw new Error(
        'Something went terribly wrong. Maybe I should quit programming.'
      )

    return (
      <>
        <Box>
          <Container
            h={{base: '16.25rem', md: 'auto'}}
            maxW="100vw"
            mx="auto"
            overflow="hidden">
            <VStack
              pos="relative"
              py={{base: '8', md: '40', lg: '60', '2xl': '80'}}
              h={{md: '60rem', lg: '70rem', xl: '75rem'}}
              w="full">
              <Box
                display={{base: 'none', md: 'block'}}
                pos="absolute"
                top={{md: '10rem', xl: '18.75rem'}}
                right="-15rem"
                w="calc(20vw + 15vh)"
                h="60vh">
                <Field.Image
                  name="sideImageRight"
                  label="Image"
                  defaultValue="/images/decorationen/ballons.png"
                />
              </Box>

              <Image
                pos="absolute"
                top={{base: '0rem'}}
                w={{base: '40%', md: '60%', lg: '70%', xl: '58%'}}
                left={{base: '0', lg: '-64px', xl: 0}}
                src="/images/decorationen/shapes/shape.svg"
              />
              <VStack pos="relative">
                <Text variant="cursive" size="120" as="span">
                  <Field.Text
                    name="title"
                    label="Title"
                    defaultValue="Überschrift"
                  />
                </Text>
                <Heading
                  textAlign="center"
                  fontSize={{base: 'md', md: 'lg', lg: 'xl', xl: '2xl'}}>
                  <Field.Text
                    name="subtitle"
                    label="Subtitle"
                    defaultValue="Unterüberschrift"
                  />
                </Heading>
                <Text
                  maxW={{base: '80%', md: '60%', lg: '50%'}}
                  fontSize={{base: 'sm', lg: 'md'}}
                  textAlign="center"
                  as="span">
                  <Field.Text name="text" label="Text" defaultValue="Text" />
                </Text>
              </VStack>
            </VStack>
          </Container>
        </Box>
        <Box
          pos="relative"
          mt={{
            base: 0,
            md: '-25rem'
          }}>
          <Field.Section
            as={Stack}
            props={{spacing: 20}}
            name="subContentCategories"
            label="Unterkategorie"
            blocks={[SubCategoryContentSection]}
          />
        </Box>

        {self.position % 2 === 0 ? <ConvincedSection /> : <BallonGas />}
      </>
    )
  },
  {
    name: 'categoryContent',
    label: 'Kategorie'
  }
)

const CategoryNavigationBar: React.FC<{
  categorySectionFieldName: string
  refs: React.MutableRefObject<HTMLDivElement[]>
}> = ({categorySectionFieldName, refs}) => {
  const section = useSectionField({
    sectionName: categorySectionFieldName,
    blocks: []
  })

  const [progress, setProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const contactModal = useContactModal()

  const sectionItems: {
    title: string
    subtitle: string
    text: string
    ref: HTMLDivElement
  }[] = React.useMemo(() => {
    return (
      section.section?.items?.map((item, i) => {
        const textFields = item.jaenFields?.['IMA:TextField'] || {}

        const titleField = (textFields?.['title'] as any) || {}
        const subtitleField = (textFields?.['subtitle'] as any) || {}
        const textField = (textFields?.['text'] as any) || {}

        return {
          title: removeHtmlFromString(
            titleField.value || titleField.props?.defaultValue || ''
          ),
          subtitle: removeHtmlFromString(
            subtitleField.value || subtitleField.props?.defaultValue || ''
          ),
          text: removeHtmlFromString(
            textField.value || textField.props?.defaultValue || ''
          ),
          ref: refs.current[i]
        }
      }) ?? []
    )
  }, [section])

  const handleScroll = (e: any) => {
    // check if scroll is inside a section

    if (sectionItems.length > 0 && sectionItems[0].ref) {
      const sectionBeginY = sectionItems[0].ref.offsetTop
      const sectionEndY = sectionItems[sectionItems.length - 1].ref.offsetTop

      // check if scroll is inside a section
      if (
        e.target.scrollTop >= sectionBeginY &&
        e.target.scrollTop <= sectionEndY
      ) {
        // calculate progress
        const progress =
          (e.target.scrollTop - sectionBeginY) / (sectionEndY - sectionBeginY)

        // round progress to 2 decimal places
        const roundedProgress = Math.round(progress * 100) / 100

        // set progress
        setProgress(roundedProgress)
      }

      // find active index
      const activeIndex = sectionItems.findIndex((item, i) => {
        const nextItem = sectionItems[i + 1]

        if (nextItem) {
          return (
            e.target.scrollTop >= item.ref.offsetTop &&
            e.target.scrollTop < nextItem.ref.offsetTop
          )
        } else {
          return e.target.scrollTop >= item.ref.offsetTop
        }
      })

      // set active index
      setActiveIndex(activeIndex === -1 ? 0 : activeIndex)
    }
  }

  const backToTop = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sectionItems])

  const scrollToSection = React.useCallback(
    (index: number) => {
      alert('scroll to section ' + index)

      window.scrollTo({
        top: sectionItems[index].ref.offsetTop,
        behavior: 'smooth'
      })
    },
    [sectionItems]
  )

  return (
    <Box
      bg="gray.800"
      color="white"
      pos="sticky"
      top="0"
      zIndex="sticky"
      mb="24">
      <Container maxW={CONTAINER_MAX_WIDTH} pos="relative" py="2">
        <HStack justifyContent={'center'}>
          <IconButton
            left="0"
            mx={{
              base: '2',
              md: '0'
            }}
            pos={{
              base: 'absolute',
              md: 'relative'
            }}
            aria-label="Go to top"
            icon={<ArrowUpIcon />}
            onClick={backToTop}
          />

          <Box
            display={{
              base: 'block',
              md: 'none'
            }}>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size="sm">
                {sectionItems[activeIndex]?.title}
              </MenuButton>
              <MenuList bg="gray.800" color="white">
                {sectionItems.map((item, i) => (
                  <MenuItem
                    key={i}
                    color={activeIndex === i ? 'red' : 'white'}
                    _hover={{
                      bg: 'gray.600'
                    }}
                    _focus={{
                      bg: 'gray.600'
                    }}
                    onClick={() => scrollToSection(i)}>
                    {item.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>

          <HStack
            w="full"
            justifyContent={'space-between'}
            display={{
              base: 'none',
              md: 'flex'
            }}>
            {sectionItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  fontWeight={activeIndex === i ? 'bold' : 'normal'}
                  onClick={() => {
                    item.ref?.scrollIntoView({
                      behavior: 'smooth'
                    })
                  }}>
                  {item.title}
                </Link>
              )
            })}
          </HStack>
        </HStack>

        <HStack
          display={'none'}
          spacing="8"
          justifyContent={'space-between'}
          align="center">
          <IconButton
            aria-label="Go to top"
            icon={<ArrowUpIcon />}
            onClick={backToTop}
          />

          {/* <HStack
            w="full"
            justifyContent={"space-between"}
            display={{
              base: "none",
              md: "flex",
            }}
          >
            {sectionItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  fontWeight={activeIndex === i ? "bold" : "normal"}
                  onClick={() => {
                    item.ref?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }}
                >
                  {item.title}
                </Link>
              )
            })}
          </HStack> */}

          <Button rightIcon={<ChevronDownIcon />} size="sm">
            {sectionItems[activeIndex]?.title}
          </Button>

          <Spacer />
        </HStack>
      </Container>

      <Progress
        colorScheme="pink"
        bg="gray.600"
        size="sm"
        value={progress * 100}
      />

      <Container maxW={CONTAINER_MAX_WIDTH} pos="relative" py="2">
        <Flex>
          <VStack
            w={{
              base: '100%',
              md: '40%'
            }}
            direction={'column'}
            justifyContent={{
              base: 'center',
              md: 'flex-start'
            }}
            align={{
              base: 'center',
              md: 'flex-start'
            }}>
            <Text
              display={{
                base: 'none',
                md: 'block'
              }}>
              {sectionItems[activeIndex]?.title}
            </Text>

            <Text fontSize="xs">{sectionItems[activeIndex]?.subtitle}</Text>

            <Spacer />

            <Button
              variant="link"
              size="sm"
              justifyContent={'left'}
              onClick={() =>
                contactModal.onOpen({
                  meta: {
                    section: {
                      title: sectionItems[activeIndex]?.title
                    }
                  }
                })
              }>
              Interessiert? Jetzt anfragen
            </Button>
          </VStack>
          <Box
            flex="1"
            p="4"
            display={{
              base: 'none',
              md: 'block'
            }}>
            <Text noOfLines={3}>{sectionItems[activeIndex]?.text}</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export const ContentPageSection: React.FC<ContentPageSectionProps> =
  forwardRef<HTMLDivElement>((props, ref) => {
    const sectionFieldName = 'contentCategories'
    const sectionDisplayName = 'Content'

    const refs = useRef<HTMLDivElement[]>([])

    return (
      <>
        <CategoryNavigationBar
          categorySectionFieldName={sectionFieldName}
          refs={refs}
        />

        <Stack my="8">
          <FourCard
            sectionFieldName={sectionFieldName}
            sectionDisplayName={sectionDisplayName}
            onCardClick={index => {
              console.log(refs, refs.current[index])

              window?.scrollTo({
                top: refs.current[index]?.offsetTop,
                behavior: 'smooth'
              })
            }}
          />

          <Field.Section
            as={Stack}
            props={{spacing: 20}}
            sectionProps={({count}) => ({
              ref: (el: HTMLDivElement) => {
                refs.current[count - 1] = el
              },
              scrollMarginTop: -20
            })}
            name={sectionFieldName}
            label="Content"
            blocks={[CategoryContentSection]}
          />
        </Stack>
      </>
    )
  })

export default ContentPageSection
