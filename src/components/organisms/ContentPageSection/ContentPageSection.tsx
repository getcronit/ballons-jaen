import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'

import {
  connectBlock,
  Field,
  useField,
  useSectionBlockContext,
  useSectionField,
  UseSectionField
} from '@snek-at/jaen'
import React, {forwardRef, useEffect, useRef, useState} from 'react'
import Slider from 'react-slick'
import BallonGas from './BallonGas'

import {PhotoProvider, PhotoView} from 'react-photo-view'
import {removeHtmlFromString} from '../../../common/utils'
import FourCard from '../FourCard/FourCard'
import ConvincedSection from './ConvincedSection'
import {useContactModal} from '../../../services/contact'

export interface ContentPageSectionProps {}

const ImagesGallery3x3Section = connectBlock(
  () => {
    const defaultImages = [
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
      <PhotoProvider>
        <VStack
          display={{base: 'none', md: 'flex'}}
          pos="relative"
          gap={{base: '4', md: '8', lg: '10', xl: '14'}}
          w="full">
          {new Array(9).fill('').map((_, i) => {
            const imageFieldName = `images.${i}`
            const imageField = useField<{
              internalImageUrl: string
            }>(imageFieldName, 'IMA:ImageField')

            return (
              <PhotoView
                src={imageField.value?.internalImageUrl || defaultImages[i]}>
                <Box
                  boxSize={{
                    base: 'xs',
                    md: 'sm',
                    lg: 'md',
                    xl: 'lg'
                  }}
                  justifySelf="center"
                  _hover={{
                    transition: 'all 0.2s ease',
                    transform: {
                      md: 'scale(1.02) ',
                      lg: 'scale(1.02) '
                    }
                  }}
                  transition="ease-in 0.2s"
                  cursor="pointer"
                  key={i}>
                  <Box
                    mx="auto"
                    boxSize="full"
                    borderRadius="xl"
                    boxShadow="light"
                    overflow="hidden">
                    <Field.Image
                      objectFit="cover"
                      label="Bild"
                      name={imageFieldName}
                      //defaultValue={defaultImages[i]}
                    />
                  </Box>
                </Box>
              </PhotoView>
            )
          })}
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
          <Slider {...mobileSliderSettings}>
            {new Array(9).fill('').map((_, i) => {
              const imageFieldName = `images.${i}`
              const imageField = useField<{
                internalImageUrl: string
              }>(imageFieldName, 'IMA:ImageField')

              return (
                <PhotoView
                  src={imageField.value?.internalImageUrl || defaultImages[i]}>
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
                      label="Bild"
                      objectFit="cover"
                      name={imageFieldName}
                      //defaultValue={defaultImages[i]}
                    />
                  </Box>
                </PhotoView>
              )
            })}
          </Slider>
        </Box>
      </PhotoProvider>
    )
  },
  {
    name: 'ImagesGallery3x3Section',
    label: 'Bildergalerie (1x9)'
  }
)

const FullWidthImageSection = connectBlock(
  () => {
    return (
      <Box py="4">
        <Heading
          textAlign="center"
          fontSize={{base: 'md', md: '2xl', lg: '3xl', xl: '4xl'}}
          fontWeight="semibold">
          <Field.Text
            name="title"
            label="Titel"
            defaultValue="In Erinnerung behalten"
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
          overflow="hidden"
          h={{
            base: '30vh',
            md: '50vh',
            lg: '60vh'
          }}>
          <Field.Image
            name="Bild"
            label="Bild"
            //defaultValue={undefined}
            // objectFit="cover"
          />
        </Box>
      </Box>
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
      <Text
        fontSize={{base: 'sm', lg: 'md'}}
        maxW={{base: '80%', md: '60%', lg: '50%'}}
        textAlign="center"
        as="span"
        my="4">
        <Box h="4" />
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
        <Box h="4" />
      </Text>
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
        {/* <Box
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
            label="Bild"
            defaultValue="/images/decorationen/ballons.png"
          />
        </Box> */}

        <Stack spacing={20}>
          <VStack spacing={12}>
            <Heading
              fontSize={{base: 'md', md: '2xl', lg: '3xl', xl: '4xl'}}
              fontWeight="semibold">
              <Field.Text
                name="heading"
                label="Heading"
                defaultValue="Überschrift"
                rtf
              />
            </Heading>
            <Text
              fontSize={{base: 'sm', lg: 'md'}}
              textAlign="center"
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
            props={{spacing: 20, py: 8}}
            sectionProps={{
              py: {
                base: '4',
                md: '12'
              }
            }}
            name="content"
            label="Content"
            blocks={[
              ImagesGallery3x3Section,
              FullWidthImageSection,
              TextSection
            ]}
          />
        </Stack>
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
      <VStack spacing="20">
        <VStack
          w="full"
          py={{
            base: '4',
            md: '12'
          }}
          spacing="12">
          <Image
            zIndex="-1"
            pos="absolute"
            top={{base: '0rem'}}
            w={{base: '40%', md: '60%', lg: '70%', xl: '58%'}}
            left={{base: '0', lg: '-64px', xl: 0}}
            src="/images/decorationen/shapes/shape.svg"
          />
          <VStack pos="relative" zIndex="1">
            <Heading
              variant="cursive"
              fontSize={{base: 'xl', md: '2xl', lg: '3xl', xl: '4xl'}}
              as="span">
              <Field.Text
                name="title"
                label="Title"
                defaultValue="Überschrift"
              />
            </Heading>
            <Heading
              textAlign="center"
              fontSize={{base: 'md', md: 'lg', lg: 'xl', xl: '2xl'}}>
              <Field.Text
                name="subtitle"
                label="Untertitel"
                defaultValue="Unterüberschrift"
              />
            </Heading>
            <Text
              fontSize={{base: 'sm', lg: 'md'}}
              textAlign="center"
              as="span">
              <Field.Text name="text" label="Text" defaultValue="Text" />
            </Text>
          </VStack>
        </VStack>

        <Field.Section
          as={Stack}
          props={{spacing: 20}}
          sectionProps={{
            py: {
              base: '4',
              md: '12'
            }
          }}
          name="subContentCategories"
          label="Unterkategorie"
          blocks={[SubCategoryContentSection]}
        />
        {self.position % 2 === 0 ? <ConvincedSection /> : <BallonGas />}
      </VStack>
    )
  },
  {
    name: 'categoryContent',
    label: 'Kategorie'
  }
)

export const ContentPageSection: React.FC<ContentPageSectionProps> =
  forwardRef<HTMLDivElement>((props, ref) => {
    const refs = useRef<HTMLDivElement[]>([])

    const contactModal = useContactModal()

    const [isOpen, setIsOpen] = useState(false)

    const onClose = () => {
      setIsOpen(false)
    }
    const onOpen = () => {
      setIsOpen(true)
    }

    const settings = {
      fieldName: 'categories',
      displayName: 'Kategorien'
    }

    const section = useSectionField({
      sectionName: settings.fieldName,
      blocks: []
    })

    // add event listener to check which section is active

    const Links: React.FC = () => {
      const HeadingLink = ({
        index,
        id,
        sectionBlockPath
      }: {
        index: number
        id: string
        sectionBlockPath: UseSectionField['sectionPath']
      }) => {
        const field = useField<string>('title', 'IMA:TextField', {
          path: sectionBlockPath,
          id
        })

        const title = removeHtmlFromString(
          field.value ?? field.staticValue ?? `Unbekannt (${index})`
        )

        const [isActive, setIsActive] = useState(false)

        useEffect(() => {
          const handleScroll = () => {
            const rect = refs.current[index]?.getBoundingClientRect()

            if (!rect) return

            const offsetTop = rect.top + window.pageYOffset
            const offsetBottom = rect.bottom + window.pageYOffset

            if (offsetTop && offsetBottom) {
              if (
                window.pageYOffset >= offsetTop &&
                window.pageYOffset <= offsetBottom
              ) {
                setIsActive(true)
              } else {
                setIsActive(false)
              }
            }
          }

          window.addEventListener('scroll', handleScroll)

          return () => {
            window.removeEventListener('scroll', handleScroll)
          }
        }, [])

        return (
          <Box key={index} mb={{base: 4, md: 8}}>
            <Link
              color={isActive ? 'red' : 'black'}
              onClick={() => {
                // calculate top offset
                const top =
                  refs.current[index]?.getBoundingClientRect().top ?? 0

                window?.scrollTo({
                  top: window.pageYOffset + top + 5,
                  behavior: 'smooth'
                })

                onClose()
              }}>
              {title}
            </Link>
          </Box>
        )
      }

      return (
        <>
          {section.section.items.map((item, i) => {
            return (
              <HeadingLink
                key={i}
                index={i}
                id={item.id}
                sectionBlockPath={section.sectionPath}
              />
            )
          })}
        </>
      )
    }

    return (
      <Stack padding={{base: 4, md: 8}} spacing="24">
        <FourCard
          sectionFieldName={settings.fieldName}
          sectionDisplayName={settings.displayName}
          onCardClick={index => {
            window?.scrollTo({
              top: refs.current[index]?.offsetTop,
              behavior: 'smooth'
            })
          }}
        />
        <Flex direction={{base: 'column-reverse', md: 'row'}}>
          <Box w={{base: '100%', md: '75%'}} mr={{md: 4}}>
            <Box mx={{base: 4, md: 'auto'}} maxW="800px" overflow="hidden">
              {/* Your blog post content goes here */}
              <Field.Section
                as={Stack}
                props={{spacing: 20, position: 'relative'}}
                sectionProps={({count}) => ({
                  ref: (el: HTMLDivElement) => {
                    refs.current[count - 1] = el
                  },
                  scrollMarginTop: -20,
                  py: {
                    base: '4',
                    md: '12'
                  }
                })}
                name={settings.fieldName}
                label={settings.displayName}
                blocks={[CategoryContentSection]}
              />
            </Box>
          </Box>
          <Box w={{base: '100%', md: '25%'}}>
            <Box position="sticky" top={{base: '80px', md: '20%'}}>
              {/* Anfragen button with divider */}
              <Stack textAlign="center" mb={{base: 4, md: 8}}>
                <Button
                  variant="solid"
                  size="md"
                  mx="auto"
                  onClick={() => {
                    contactModal.onOpen()
                  }}>
                  Jetzt anfragen
                </Button>

                <Flex align="center">
                  <Divider />
                  <Link
                    fontSize="sm"
                    display={{base: 'block', md: 'none'}}
                    padding="2"
                    aria-label="Table of Contents"
                    onClick={onOpen}>
                    Inhaltsverzeichnis
                  </Link>
                  <Text
                    fontSize="sm"
                    p="2"
                    display={{
                      base: 'none',
                      md: 'block'
                    }}>
                    Inhaltsverzeichnis
                  </Text>
                  <Divider />
                </Flex>
              </Stack>

              <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader>Inhaltsverzeichnis</DrawerHeader>
                  <DrawerBody>
                    <Links />
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
              {/* Table of contents on desktop */}
              <Box
                display={{base: 'none', md: 'block'}}
                position="sticky"
                top={{base: 'unset', md: '10%'}}>
                <Links />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Stack>
    )
  })

export default ContentPageSection
