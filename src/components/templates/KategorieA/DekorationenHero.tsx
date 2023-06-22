import {
  Box,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
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
    <Stack
      pos="relative"
      bgImage="url('/images/decorationen/dekorationen_hero_bg.svg')"
      bgSize="100%,contain"
      bgRepeat="no-repeat"
      bgPos={{
        base: 'top 4.25rem left 0',
        md: 'top 10.25rem left 0 ',
        lg: 'top 14.25rem left 0',
        xl: 'top 16.25rem left 0'
      }}
    >
      <VStack
        zIndex="3"
        mt={{ md: '2rem', lg: '6rem', xl: '6rem' }}
      >
        <Field.Text
          as={Heading}
          asAs={'h1'}
          lineHeight={{ md: '50px', lg: '70px' }}
          //variant="cursive"
          name="title"
          defaultValue={`<i>Dekorationen</i>`}
        />
        <Field.Text
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
        overflow="hidden"
        pb={{ base: '15px', md: '0' }}
      >
        <Container
          w="full"
          h="full"
          maxW={CONTAINER_MAX_WIDTH}
          mt={{ base: '8', md: '32' }}
          mb={{ base: '8', md: '48' }}
        >
          <Box
            borderRadius={{ base: '8', md: '16', lg: '24' }}
            overflow="hidden"
            boxShadow={{ base: 'light', md: 'dark' }}
            height={{
              // rems
              base: '25.625rem',
              md: '30.625rem',
              lg: '35.625rem',
              xl: '40.625rem'
            }}
          >
            <Field.Image name="image" lightbox />
          </Box>
        </Container>
      </Stack>
    </Stack>
  )
}

export default DekorationenHero
