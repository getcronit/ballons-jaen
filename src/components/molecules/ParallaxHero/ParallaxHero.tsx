import React from 'react'
import { Box, SimpleGrid, GridItem, Text } from '@chakra-ui/react'

import { useScrollSync } from '../../hooks/scroll'
import { useContentPages } from '../../hooks/useContentPages'
import CardWithImageBackground from '../../CardWithImageBackground'
import * as style from './style'
import { ParallaxBackground } from '../ParallaxBackground'

export interface ParallaxHeroProps {
  noScroll?: boolean
}

export const ParallaxHero = ({ noScroll }: ParallaxHeroProps) => {
  const { ref } = useScrollSync()
  const contentPagesIndex = useContentPages()

  const cards = [
    {
      heading: 'Großhandel',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Großhandel.png'
    },
    {
      heading: 'Party',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Party.png'
    },
    {
      heading: 'Design',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Design.png'
    }
  ]

  return (
    <Box
      className="parallax"
      css={style.Section(noScroll)}
      ref={ref}
      mt={{ base: '3.5rem', md: '4rem', lg: '8rem' }}
      backgroundColor="white"
      bgImage="url('/images/home/hero_line.svg'),url('/images/home/reisges/top_shape.svg')"
      bgSize="100%,contain"
      bgPos={{
        base: 'bottom 6rem  left -2rem,left 0  bottom 0',
        md: 'bottom 6rem  left -2rem,left 0  bottom 0',
        lg: 'bottom 3rem  left 0,left 0  bottom 0',
        xl: 'bottom 0  left -5rem,left 0  bottom 0'
      }}
      >
      <div className="parallax__layer parallax__layer__0">
        <img src="/images/home/hero_skyline_1.svg" />
      </div>
      <div className="parallax__layer parallax__layer__1">
        <img src="/images/home/hero_skyline_2.svg" />
      </div>
      <div className="parallax__layer parallax__layer__2">
        <img src="/images/home/hero_skyline_3.svg" />
      </div>
      {/* <div className="parallax__layer parallax__layer__3">
        <img src="https://www.firewatchgame.com/images/parallax/parallax3.png" />
      </div>
      <div className="parallax__layer parallax__layer__4">
        <img src="https://www.firewatchgame.com/images/parallax/parallax4.png" />
      </div>
      <div className="parallax__layer parallax__layer__5">
        <img src="https://www.firewatchgame.com/images/parallax/parallax5.png" />
      </div>
      <div className="parallax__layer parallax__layer__6">
        <img src="https://www.firewatchgame.com/images/parallax/parallax6.png" />
      </div>
      <div className="parallax__layer parallax__layer__7">
        <img src="https://www.firewatchgame.com/images/parallax/parallax7.png" />
      </div>
      <div className="parallax__layer parallax__layer__8">
        <img src="https://www.firewatchgame.com/images/parallax/parallax8.png" />
      </div> */}
      <ParallaxBackground
        strokeColor="red"
        backgroundColor="transperent"
        offset={0}
      />
      <Box className="parallax__cover" >
        <Box
          position="absolute"
          top='0'
          pl="calc(4em)"
          h="100%"
          w="100%"
          overflow="hidden">
          <Text
            fontSize="calc(20em)"
            fontWeight="bold"
            color="transparent"
            textAlign={"center"}
            style={{ WebkitTextStroke: `1px #ffffff` }}
            display={{ base: 'none', xl: 'block' }}>
            <span>Freude liegt in der Luft</span>
          </Text>
        </Box>
        <SimpleGrid
          w="full"
          placeItems="center"
          mb={{ lg: 10 }}
          mt="0"
          minChildWidth="30vw"
          spacing="30px"
        >
          {contentPagesIndex.children.map((page, i) =>
            contentPagesIndex.withJaenPage(
              page.id || '',
              <GridItem
                justifySelf="center"
                h="50vh"
                w="30vw"
                key={i}>
                <CardWithImageBackground
                  card={{
                    headingFieldName: `riesgesCardheading${i}`,
                    headingDefaultValue: cards[0].heading,
                    textFieldName: `riesgesCardText${i}`,
                    textDefaultValue: cards[0].text,
                    imageFieldName: `riesgesCardImage${i}`,
                    imageDefaultValue: cards[0].image,
                    linkUrl: `/${page.slug}`
                  }}
                  key={i}
                />
              </GridItem>
            )
          )}
        </SimpleGrid>
      </Box>
    </Box>
  )
}