import React from 'react'
import {Box} from '@chakra-ui/react'

import {Ballon} from '../../../common/assets/Ballon'
import {useScrollSync} from '../../hooks/scroll'
import * as style from './style'

export interface ParallaxBackgroundProps {
  strokeColor: string
  backgroundColor: string
  offsetTop?: number
  offset?: number
  noScroll?: boolean
}

export const ParallaxBackground = ({
  strokeColor,
  backgroundColor,
  offsetTop,
  offset,
  noScroll
}: ParallaxBackgroundProps) => {
  const {ref} = useScrollSync(offsetTop=offsetTop, offset=offset)

  return (
    <Box
      className="parallax"
      css={style.Section(strokeColor, backgroundColor, noScroll)}
      ref={ref}
      backgroundColor={backgroundColor}>
      <Box className="parallax__layer parallax__layer__0" pl="80%" pt="20%" display={{ base: 'none', lg: 'none', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__1" pl="60%" pt="30%" display={{ base: 'none', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__2" pl="30%" pt="90%" display={{ base: 'block', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__3" pl="50%" pt="15%" display={{ base: 'none', lg: 'none', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__4" pl="40%" pt="30%" display={{ base: 'none', lg: 'none', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__5" pl="80%" pt="80%" display={{ base: 'block', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__6" pl="1%" pt="40%" display={{ base: 'none', lg: 'none', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__7" pl="50%" pt="50%" display={{ base: 'none', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__8" pl="60%" pt="30%" display={{ base: 'none', lg: 'none', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__9" pl="50%" pt="80%" display={{ base: 'block', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__10" pl="80%" pt="70%" display={{ base: 'block', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__11" pl="60%" pt="50%" display={{ base: 'none', lg: 'none', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__12" pl="70%" pt="30%" display={{ base: 'none', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <Box className="parallax__layer parallax__layer__13" pl="90%" pt="60%" display={{ base: 'none', lg: 'block', xl: 'block' }}>
        <Ballon className="background-Ballon" />
      </Box>
      <div className="parallax__cover"></div>
    </Box>
  )
}
