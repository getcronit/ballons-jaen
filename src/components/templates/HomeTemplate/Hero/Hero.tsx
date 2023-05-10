import {
  Box,
  Container,
  Heading,
  HStack,
} from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import { ParallaxHero } from '../../../molecules/ParallaxHero'
import { HBallon } from '../../../../common/assets/Ballon'


export interface IHeroProps {
  anchor?: string
}

const Hero: FC<IHeroProps> = props => {

  return (
    <>
      {/* For Mobile */}
      <ParallaxHero noScroll={false} />

    </>
  )
}
export default Hero
