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
      bg='white'
      >
      <Box
        bg='#f6f8fa'
        w="100%"
        zIndex='-1'
        position="absolute"
        pt={{ base: '4.25rem', md: '10.25rem', lg: '14.25rem', xl: '16.25rem' }}
        top='0'
        left='0'
      >
      <Image
        w="100%"
        src="/images/decorationen/dekorationen_hero_bg.svg"
        alt="bottom_shape_white"
      />
      </Box>
      <VStack
        zIndex="3"
        pt={{ base: '1rem', md: '2rem', lg: '6rem', xl: '6rem' }}>
        <Field.Text
          as={Heading}
          asAs={'h1'}
          lineHeight={{ md: '50px', lg: '70px' }}
          //variant="cursive"
          name="title"
          defaultValue={`<i>Dekorationen</i>`}
          textAlign="center"
        />
        <Field.Text
          pb='6'
          fontSize={{
            base: 'sm',
            md: 'md'
          }}
          textAlign="center"
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
      <Stack overflow="hidden" pb={{ base: '15px', md: '0' }}>
        <Container
          w="full"
          h="full"
          maxW={CONTAINER_MAX_WIDTH}
          mt={{ base: '8', md: '32' }}
          mb={{ base: '8', md: '48' }}>
          <Box
            borderRadius='xl'
            overflow="hidden"
            boxShadow={{ base: 'light', md: 'dark' }}
            height={{
              // rems
              base: '25.625rem',
              md: '30.625rem',
              lg: '35.625rem',
              xl: '40.625rem'
            }}>
            <Field.Image name="image" lightbox />
          </Box>
        </Container>
      </Stack>
    </Stack>
  )
}

export default DekorationenHero
