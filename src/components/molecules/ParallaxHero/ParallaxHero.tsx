import React from 'react'
import {Box} from '@chakra-ui/react'

import {useScrollSync} from '../../hooks/scroll'
import * as style from './style'

export interface ParallaxHeroProps {
  noScroll?: boolean
}

export const ParallaxHero = ({noScroll}: ParallaxHeroProps) => {
  const {ref} = useScrollSync()

  return (
    <Box
      className="parallax"
      css={style.Section(noScroll)}
      ref={ref}
      mt={{base: '3.5rem', md: '4rem', lg: '8rem' }}
      backgroundColor="white">
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
      <div className="parallax__cover"></div>
    </Box>
  )
}