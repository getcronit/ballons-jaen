import { Box, Container, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { connectBlock, Field } from '@snek-at/jaen'
import { FC } from 'react'
import Slider, { Settings } from 'react-slick'
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes'
import NextArrow from '../../CustomSlider/NextArrow'
import PrevArrow from '../../CustomSlider/PrevArrow'
import LinkButtonField from '../../fields/LinkButtonField'
interface IDekorationenHeroProps { }

export const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
}

const DekorationenHero: FC<IDekorationenHeroProps> = () => {
  return (
    <Stack pos="relative">
      <VStack
        pos="relative"
        top={{
          base: '4.25rem',
          md: '10.25rem',
          lg: '14.25rem',
          xl: '16.25rem'
        }}
        zIndex="3"
        mt={{ md: '-6.25rem', lg: '-8.25rem', xl: '-10.25rem' }}>
        <Field.Text
          as={Heading}
          asAs={"h1"}
          lineHeight={{ md: '50px', lg: '70px' }}
          variant="cursive"
          name="title"
          defaultValue="Dekorationen"
        />
        <Field.RichText
          pb="4"
          textAlign="center"
          fontSize={{ base: 'sm', md: 'md', '2xl': 'lg' }}
          name="titleText"

          defaultValue="Wir dekorieren deine nächste Party. <br /> Egal ob Hochzeit, Firmenfeier, Geburtstag <br /> oder dein ganz eigener Anlass."
        />
        <LinkButtonField
          name="ctaButton"
          size={{ base: 'xs', md: 'sm', xl: 'lg' }}
          defaultValue="Termin vereinbaren"
          defaultUrl="/kontakt"
        />
      </VStack>
      <Stack
        pos="relative"
        overflow="hidden"
        pb={{ base: '15px', md: '0' }}
        h="100vh">
        <Box
          pos="absolute"
          w="full"
          h="full"
          top={{ base: '13vh', md: '23vh', lg: '33vh', xl: '400px' }}>
          <Container
            maxW={CONTAINER_MAX_WIDTH}
            mb={{ base: '0', md: '16' }}
            pos="relative"
            height={{
              // rems
              base: '25.625rem',
              md: '30.625rem',
              lg: '35.625rem',
              xl: '40.625rem'
            }}>
            <Field.Section
              as={Slider}
              props={{
                ...settings,
                // h: 'unset'
                minH: 64
              }}
              className="big_slider"
              name="slider"
              label="Slider"
              blocks={[DekorationSliderItem]}
            />
          </Container>
        </Box>
        <Image
          src="/images/decorationen/dekorationen_hero_bg.svg"
          alt="decorationen"
        />
      </Stack>
    </Stack>
  )
}

const DekorationSliderItem = connectBlock(
  () => {
    return (
      <Box
        height={{
          // rems
          base: '25.625rem',
          md: '30.625rem',
          lg: '35.625rem',
          xl: '40.625rem'
        }}
        m={{ base: 2, md: 4 }}
        borderRadius={{ base: '8', md: '16', lg: '24' }}
        overflow="hidden"
        boxShadow={{ base: 'light', md: 'dark' }}>
        <Field.Image name="image" />
      </Box>
    )
  },
  {
    name: 'decorationSliderItem',
    label: 'Slider Item'
  }
)

export default DekorationenHero
