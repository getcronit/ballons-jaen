import {ChevronLeftIcon, ChevronRightIcon} from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react'
import {connectBlock, Field} from '@atsnek/jaen'
import {Slider} from '@snek-at/uikit'
import {FC, useState} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {brandSettings} from '../../../constant/slider'

const BrandCarousel: React.FC<{
  brands: {
    title: string
    description: string
  }[]
}> = ({brands}) => {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(
    Math.floor(brands.length / 2)
  )

  const selectBrandIndex = (index: number) => {
    const newIndex = (index + brands.length) % brands.length
    setSelectedBrandIndex(newIndex)
  }

  const totalRenderedBrands = useBreakpointValue(
    {
      base: 3,
      xs: 3,
      md: 7
    },
    {fallback: 'base'}
  ) as number

  const renderBrands = () => {
    const visibleBrands = []

    const middle = Math.floor(totalRenderedBrands / 2)

    for (let i = -middle; i <= middle; i++) {
      const brandIndex =
        (selectedBrandIndex + i + brands.length) % brands.length
      const brand = brands[brandIndex]

      visibleBrands.push(brand)
    }

    return visibleBrands.map((brand, index) => {
      const isMiddleLogo = index === middle
      const shouldGrayOut = !isMiddleLogo

      const brandIndex = brands.indexOf(brand)

      return (
        <Stack key={index} alignItems="center">
          <Box
            boxSize={isMiddleLogo ? '48' : '36'}
            borderRadius="full"
            overflow={'hidden'}
            bg={
              shouldGrayOut
                ? 'transparent'
                : 'linear-gradient(180deg, var(--chakra-colors-red-100) 0%, #FFFFFF 100%)'
            }
            _hover={{
              // undo filter for shouldGrayOut
              filter: shouldGrayOut ? 'grayscale(50%)' : 'none'
            }}
            filter={shouldGrayOut ? 'grayscale(100%)' : 'none'}
            onClick={() => selectBrandIndex(brandIndex)}
            cursor="pointer"
            p="4">
            <Field.Image
              objectFit="contain"
              name={`brands.${brandIndex}.logo`}
              key={`brands.${brandIndex}.logo`}
            />
          </Box>
          {isMiddleLogo && (
            <Field.Text
              key={`brands.${brandIndex}.title`}
              minW="24"
              name={`brands.${brandIndex}.title`}
              defaultValue={brand.title}
              fontWeight="bold"
              textAlign={'center'}
            />
          )}
        </Stack>
      )
    })
  }

  const renderDots = () => {
    const dotCount = brands.length

    return (
      <HStack>
        {Array(dotCount)
          .fill(0)
          .map((_, index) => {
            const isCurrentDot = index === selectedBrandIndex
            return (
              <Box
                key={index}
                style={{
                  margin: '0 4px',
                  color: isCurrentDot ? '#e53e3e' : '#e6e8e5',
                  fontSize: '3rem'
                }}>
                &bull;
              </Box>
            )
          })}
      </HStack>
    )
  }

  return (
    <VStack
      mx="auto"
      minH="xs"
      maxW="container.xl"
      spacing={8}
      overflow="hidden">
      <HStack>{renderBrands()}</HStack>
      <Flex justify="space-between" align="center">
        <IconButton
          icon={<ChevronLeftIcon />}
          aria-label="Previous"
          fontSize={'4xl'}
          mr={2}
          variant="ghost"
          onClick={() => selectBrandIndex(selectedBrandIndex - 1)}
          disabled={selectedBrandIndex === 0}
        />
        <Box>{renderDots()}</Box>
        <IconButton
          icon={<ChevronRightIcon />}
          aria-label="Next"
          fontSize={'4xl'}
          ml={2}
          variant="ghost"
          onClick={() => selectBrandIndex(selectedBrandIndex + 1)}
          disabled={selectedBrandIndex === brands.length - 1}
        />
      </Flex>
      <Field.Text
        name={`brands.${selectedBrandIndex}.description`}
        key={`brands.${selectedBrandIndex}.description`}
        defaultValue={brands[selectedBrandIndex].description}
        textAlign={'center'}
        fontSize={{
          base: 'sm',
          md: 'md'
        }}
      />
    </VStack>
  )
}

const ExampleComponent = () => {
  const brands = [
    {
      title: 'Brand 1',
      description: 'Brand 1 Description'
    },
    {
      title: 'Brand 2',
      description: 'Brand 2 Description'
    },
    {
      title: 'Brand 3',
      description: 'Brand 3 Description'
    },
    {
      title: 'Brand 4',
      description: 'Brand 4 Description'
    },
    {
      title: 'Brand 5',
      description: 'Brand 5 Description'
    },
    {
      title: 'Brand 6',
      description: 'Brand 6 Description'
    },
    {
      title: 'Brand 7',
      description: 'Brand 7 Description'
    }
  ]

  return <BrandCarousel brands={brands} />
}

interface IBrandsProps {}

const Brands: FC<IBrandsProps> = () => {
  return (
    <Box bg="white" pb={{md: '10', xl: 8}} pt={{base: '16', lg: 48}}>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <VStack spacing={16}>
          <Field.Text
            textAlign={'center'}
            name="Brands.title"
            defaultValue="Die Qualitätsführung von"
            as={Heading}
            size="h5020"
          />
          <Box w="full" pos={'relative'}>
            <ExampleComponent />
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default Brands

export const BrandsSection = connectBlock(
  () => {
    return (
      <>
        <VStack>
          <Flex gap={{base: 2, md: 4}}>
            <Field.Text
              as={Heading}
              size="h5020"
              fontWeight="semibold"
              name="partnerTitle"
              defaultValue="Ein <i>Partner</i>"
            />
          </Flex>
          <Field.Text
            size="b2412"
            maxW="60%"
            mb="4 !important"
            textAlign="center"
            name="partnerText"
            defaultValue={
              'Profitieren Sie von einer unglaublichen Auswahl an Ideen, Produkten und Business-Boostern in unserem Netzwerk.'
            }
          />
          <Box w="full">
            <Field.Section
              as={() => {
                return <Slider {...brandSettings} />
              }}
              // props={{...brandSettings}}
              name="partnerSlider"
              label="Partner Logos"
              blocks={[]}
            />
          </Box>
        </VStack>
      </>
    )
  },
  {
    name: 'BrandsSection',
    label: 'Partner'
  }
)
