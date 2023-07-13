import {Box, Container, Image, chakra} from '@chakra-ui/react'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import HorizontalImageCard from '../../organisms/HorizontalImageCard'

import TopShape from '../../../common/assets/shapes/top_shape.inline.svg'
import Shape2 from '../../../common/assets/shapes/shape2.inline.svg'
import CardLine from '../../../common/assets/card_line.inline.svg'

interface ITwoCardsProps {}

const TwoCards: FC<ITwoCardsProps> = () => {
  return (
    <>
      <Box
        pos="relative"
        //overflow="hidden"
        pb={{md: '10', xl: 8}}
        pt={{base: '16', lg: 48}}>
        <chakra.svg
          as={TopShape}
          position="absolute"
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          h="auto"
        />
        <chakra.svg
          as={CardLine}
          display={{base: 'none', md: 'block'}}
          pos="absolute"
          top="0"
          w="full"
          h="auto"
        />
        {/* <Image
          position="absolute"
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        />
        <Image
          display={{base: 'none', md: 'block'}}
          src="/images/großhandel/card_line.svg"
          pos="absolute"
          top="0"
          w="full"
        /> */}
        <Container
          maxW={CONTAINER_MAX_WIDTH}
          pos="relative"
          mb={{base: '16 !important', md: '0'}}>
          <HorizontalImageCard
            card={{
              tagFieldName: 'wholeSaleCardTag1',
              tagDefaultValue: 'PRODUKTE',
              titleFieldName: 'wholeSaleCardTitle1',
              titleDefaultValue: 'Unsere <i>Kataloge</i>',
              descriptionFieldName: 'wholeSaleCardDescription1',
              descriptionDefaultValue:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
              imageFieldName: 'wholeSaleCardImage1',
              imageDefaultValue: '/images/großhandel/img1.png',
              buttonTextFieldName: 'wholeSaleCardButtonTextField1',
              buttonTextFieldDefaultValue: 'Zum Shop'
            }}
            orientation="left"
          />
        </Container>
      </Box>
      <Box pt={{'2xl': 16}} pb="10" pos="relative" overflow="hidden">
        {/* <Image
          display={{base: 'none', md: 'block'}}
          src="/images/großhandel/shape2.svg"
          pos="absolute"
          top="0"
          right="0"
          w="25%"
          transform="rotate(270deg)"
        />
        <Image
          position="absolute"
          bottom={'0'}
          left={'0'}
          transform={'scalex(-1)'}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        /> */}
        <chakra.svg
          as={Shape2}
          display={{base: 'none', md: 'block'}}
          pos="absolute"
          top="0"
          right="0"
          w="25%"
          h="auto"
          transform="rotate(270deg)"
        />
        <chakra.svg
          as={TopShape}
          position="absolute"
          bottom={'0'}
          left={'0'}
          transform={'scalex(-1)'}
          w="100%"
          h="auto"
        />
        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          <HorizontalImageCard
            card={{
              tagFieldName: 'wholeSaleCardTag2',
              tagDefaultValue: 'PRODUKTE',
              titleFieldName: 'wholeSaleCardTitle2',
              titleDefaultValue: '<i>Rund</i> umsteigen',
              descriptionFieldName: 'wholeSaleCardDescription2',
              descriptionDefaultValue:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
              imageFieldName: 'wholeSaleCardImage2',
              imageDefaultValue: '/images/großhandel/img1.png',
              buttonTextFieldName: 'wholeSaleCardButtonTextField2',
              buttonTextFieldDefaultValue: 'Mehr erfahren'
            }}
            orientation="right"
          />
        </Container>
      </Box>
    </>
  )
}
export default TwoCards
