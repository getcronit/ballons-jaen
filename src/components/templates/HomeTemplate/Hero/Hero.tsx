import {
  Box,
  Image,
  Container,
  Heading,
  HStack,
} from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import { MobileHero, ParallaxHero } from '../../../molecules/ParallaxHero'
import { HBallon } from '../../../../common/assets/Ballon'


export interface IHeroProps {
  anchor?: string
}

const Hero: FC<IHeroProps> = props => {

  return (
    <>
      {/* For Mobile */}
      <Box
        position="relative"
        zIndex={51}
        h={{ base: 'none', md: 'calc(180vh + 200px)' }}
        overflow={"hidden"}
        bgImage="url('/images/home/hero_line.svg')"
        bgSize="100%,contain"
        bgPos={{
          base: 'top 190vh  left -2rem',
          md: 'bottom 6rem  left -2rem',
          lg: 'bottom 3rem  left 0',
          xl: 'bottom 0  left -5rem'
        }}
        bgRepeat="no-repeat">
        <Box
          display={{ base: 'none', md: 'block' }}
        >
          <ParallaxHero noScroll={false} />
        </Box>
        <Box
          display={{ base: 'block', md: 'none' }}
        >
          <MobileHero />
        </Box>
        <Image
          position="absolute"
          bottom={"0"}
          left={"0"}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        />
      </Box>
    </>
  )
}
export default Hero
