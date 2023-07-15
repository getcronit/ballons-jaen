import {Box, BoxProps, chakra, ResponsiveValue} from '@chakra-ui/react'
import HBalloon from '../../../common/assets/hballoon.inline.svg'
import Balloon from '../../../common/assets/balloon.inline.svg'
import {useScrollSync} from '../../hooks/scroll'
import * as style from './style'

export interface ParallaxBackgroundProps extends BoxProps {
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
  noScroll,
  ...props
}: ParallaxBackgroundProps) => {
  const {ref} = useScrollSync(offsetTop, offset)

  const sigmoid = x => {
    return 1 / (1 + Math.exp(-x))
  }

  const customProps = x => {
    const scaledX = x - 8 // Shift the range to center around 0
    const height = 400 * sigmoid(scaledX) // Scale the sigmoid output to desired range

    return {
      height: height
    }
  }

  // const layers: Array<{
  //   pl: any
  //   pt: any
  // }> = [
  //   {
  //     pl: '0%',
  //     pt: {md: '50%'}
  //   }
  // ]

  return (
    <>
      <Box
        className="parallax"
        css={style.Section(strokeColor, backgroundColor, noScroll)}
        ref={ref}
        backgroundColor={backgroundColor}
        //bgImage="url('/images/home/hero_skyline.svg')"
        bgSize="100%,contain"
        bgRepeat="no-repeat"
        bgPos={{
          base: 'top 0 left 0',
          md: 'top 0 left 0 ',
          lg: 'top 0 left 0',
          xl: 'top 0 left 0'
        }}>
        <Box
          className="parallax__layer parallax__layer__0"
          pl="0%"
          pt={{md: '90%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>

        <Box
          className="parallax__layer parallax__layer__2"
          pl="90%"
          pt={{md: '50%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__3"
          pl="0%"
          pt={{md: '20%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__4"
          pl="0%"
          pt={{md: '60%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__5"
          pl="80%"
          pt={{md: '65%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__6"
          pl="90%"
          pt={{md: '70%'}}
          display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__7"
          pl="50%"
          pt={{md: '45%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__8"
          pl="30%"
          pt={{md: '70%'}}
          display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__9"
          pl="20%"
          pt={{md: '60%'}}
          display={{base: 'none', '2xl': 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__10"
          pl="0%"
          pt={{md: '50%'}}
          display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(9)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__10"
          pl="20%"
          pt={{
            md: 'calc(50% + 37.5rem)'
          }}
          display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(10)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__11"
          pl="60%"
          pt={{md: 'calc(15% + 20rem)'}}
          display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(11)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__12"
          pl="90%"
          // pt={{md: 'calc(5% + 0rem)'}}
          display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
          <chakra.svg
            as={Balloon}
            className="background-Ballon"
            {...customProps(12)}
          />
        </Box>
        <Box
          className="parallax__layer parallax__layer__13"
          // pl="15%"
          // pt={{md: 'calc(100vh - 54vh)'}}
          display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
          <chakra.svg
            as={HBalloon}
            className="background-Ballon"
            {...customProps(13)}
          />
        </Box>
        <div className="parallax__cover"></div>
      </Box>
    </>
  )

  return (
    <Box
      className="parallax"
      css={style.Section(strokeColor, backgroundColor, noScroll)}
      ref={ref}
      backgroundColor={backgroundColor}
      //bgImage="url('/images/home/hero_skyline.svg')"
      bgSize="100%,contain"
      bgRepeat="no-repeat"
      bgPos={{
        base: 'top 0 left 0',
        md: 'top 0 left 0 ',
        lg: 'top 0 left 0',
        xl: 'top 0 left 0'
      }}>
      <Box
        className="parallax__layer parallax__layer__0"
        pl="90%"
        pt={{md: 'calc(1% + 17.5rem)', lg: 'calc(1% + 18rem)'}}
        display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__1"
        pl="60%"
        pt={{md: 'calc(30% + 37.5rem)', lg: 'calc(30% + 38rem)'}}
        display={{base: 'none', md: 'none', lg: 'block', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__2"
        pl="3%"
        pt={{md: 'calc(70% + 37.5rem)', lg: 'calc(70% + 38rem)'}}
        display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__3"
        pl="80%"
        pt={{md: 'calc(1% + 37.5rem)', lg: 'calc(1% + 38rem)'}}
        display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__4"
        pl="30%"
        display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
        <chakra.svg
          as={Balloon}
          className="background-Ballon"
          {...customProps(4)}
        />
      </Box>
      <Box
        className="parallax__layer parallax__layer__5"
        pl="80%"
        pt={{md: 'calc(60% + 37.5rem)', lg: 'calc(60% + 38rem)'}}
        display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__6"
        pl="1%"
        pt={{md: 'calc(20% + 37.5rem)', lg: 'calc(20% + 38rem)'}}
        display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__7"
        pl="10%"
        pt={{md: 'calc(30% + 37.5rem)', lg: 'calc(30% + 38rem)'}}
        display={{base: 'none', md: 'none', lg: 'block', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__8"
        pl="10%"
        pt={{md: 'calc(1% + 7.5rem)', lg: 'calc(1% + 38rem)'}}
        display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__9"
        pl="50%"
        pt={{md: 'calc(50% + 37.5rem)', lg: 'calc(50% + 38rem)'}}
        display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__10"
        pl="80%"
        pt={{md: 'calc(40% + 37.5rem)', lg: 'calc(40% + 38rem)'}}
        display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
        <chakra.svg as={Balloon} className="background-Ballon" />
      </Box>
      <Box
        className="parallax__layer parallax__layer__11"
        pl="60%"
        pt={{md: 'calc(15% + 20rem)'}}
        display={{base: 'none', md: 'none', lg: 'none', xl: 'block'}}>
        <chakra.svg
          as={Balloon}
          className="background-Ballon"
          {...customProps(11)}
        />
      </Box>
      <Box
        className="parallax__layer parallax__layer__12"
        pl="100%"
        // pt={{md: 'calc(5% + 0rem)'}}
        display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
        <chakra.svg
          as={Balloon}
          className="background-Ballon"
          {...customProps(12)}
        />
      </Box>
      <Box
        className="parallax__layer parallax__layer__13"
        // pl="15%"
        // pt={{md: 'calc(100vh - 54vh)'}}
        display={{base: 'none', md: 'block', lg: 'block', xl: 'block'}}>
        <chakra.svg
          as={HBalloon}
          className="background-Ballon"
          {...customProps(13)}
        />
      </Box>
      <div className="parallax__cover"></div>
    </Box>
  )
}
