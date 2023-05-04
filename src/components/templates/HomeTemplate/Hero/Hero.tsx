import {
  Box,
  Container,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  SimpleGrid,
  Stack
} from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import TextLoop from 'react-text-loop'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import CardWithImageBackground from '../../../CardWithImageBackground'
import { useContentPages } from '../../../hooks/useContentPages'
import { ParallaxBackground } from '../../../molecules/ParallaxBackground'
import { ParallaxHero } from '../../../molecules/ParallaxHero'
import { HBallon, Ballon } from '../../../../common/assets/Ballon'
import LinkButtonField from '../../../fields/LinkButtonField'
import * as style from './style'
import { useScrollSync } from '../../../hooks/scroll'

export interface IHeroProps {
  anchor?: string
}

const Hero: FC<IHeroProps> = props => {
  const contentPagesIndex = useContentPages()
  const { scrollTop } = useScrollSync()

  const switchingHeadline = (
    <Stack>
      <Box mb="10" as="span">
        <TextLoop>
          {[
            'Wir verkaufen',
            'Wir dekorieren mit',
            'Wir feiern mit',
            'Wir arbeiten mit',
            'Wir überraschen mit',
            'Wir lieben'
          ].map((text, index) => {
            return (
              <Heading
                fontSize={{ base: '2xl', md: '6xl', lg: '8xl' }}
                mb="8 !important"
                fontWeight="semibold"
                textAlign="center"
                as="span">
                <Field.Text
                  key={index}
                  name={`heroHeading-${index}`}
                  label={`Heading ${index}`}
                  defaultValue={`<p>${text}</p>`}
                  rtf
                />
              </Heading>
            )
          })}
        </TextLoop>
      </Box>

      <Heading
        fontSize={{ base: '2xl', md: '8xl', lg: '9xl' }}
        fontWeight="semibold"
        textAlign="center"
      >
        <Box as="span" mt="10">
          <Field.Text
            name="heroHeadingBallons"
            label="Heading"
            defaultValue="<p><b><i>Ballons</i></b></p>"
            rtf
          />
        </Box>
      </Heading>
      <HStack
        css={style.Section}
        mt="-5"
        justify="center"
        h={"calc(50vh - 15rem)"}
        align="flex-start"
        gap="4"
        flexDir={{ base: 'row-reverse', md: 'row' }}>
        <LinkButtonField
          name="littleThingsButton1"
          defaultValue="Zum Shop"
          defaultUrl={`/products`}
          size={{ base: 'sm', md: 'md' }}
          ml="3"
        />
        <Box id="section07" className="demo" alignSelf="flex-end" h="100px" visibility={scrollTop < 100 ? "visible" : "hidden"}>
          <a><span></span><span></span><span></span></a>
        </Box>
        <LinkButtonField
          name="littleThingsButton2"
          defaultValue="Großhandel"
          defaultUrl={`/grosshandel`}
          size={{ base: 'sm', md: 'md' }}
          variant="outline"
          ml="3"
        />
      </HStack>
    </Stack>
  )

  return (
    <>
      {/* For Mobile */}
      <ParallaxHero noScroll={false} />
      <Box
        display={{ base: 'block', md: 'none' }}
        position="relative"
        width="full"
      >
        <Box
          position="relative"
          zIndex={51}
          bgImage="url('/images/home/hero_line.svg'),url('/images/home/reisges/top_shape.svg')"
          bgSize="100%,contain"
          bgPos={{
            base: 'bottom 6rem  left -2rem,left 0  bottom 0',
            md: 'bottom 6rem  left -2rem,left 0  bottom 0',
            lg: 'bottom 3rem  left 0,left 0  bottom 0',
            xl: 'bottom 0  left -5rem,left 0  bottom 0'
          }}
          w="full"
          h="full"
          bgRepeat="no-repeat"
          pb={{ md: '8rem', lg: '12rem', xl: '14rem' }}>

          <Container
            // display='none'
            mt={{ base: '5' }}
            as={HStack}
            maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            alignContent="center"
          >
            <HBallon className="background-Ballon" />
            <Heading
              fontSize={{ base: '2xl', md: '8xl', lg: '9xl' }}
              fontWeight="semibold"
              textAlign="center"
              pt="12"
            >
              <Box as="span">
                <Field.Text
                  name="heroHeadingBallons"
                  label="Heading"
                  defaultValue="<p><b><i>Ballons</i></b></p>"
                  rtf
                />
              </Box>
            </Heading>
          </Container>
        </Box>
      </Box>
      {/* For Big Devices */}
      {/* <ParallaxHero /> */}
      <Box
        display={{ base: 'none', md: 'block' }}
        position="relative"
        width="full"
      >
        {/* <ParallaxBackground
          strokeColor="red"
          backgroundColor="transperent"
          offset={0}
        /> */}
        <Box
          position="relative"
          zIndex={51}
          bgImage="url('/images/home/hero_line.svg'),url('/images/home/reisges/top_shape.svg')"
          bgSize="100%,contain"
          bgPos={{
            base: 'bottom 6rem  left -2rem,left 0  bottom 0',
            md: 'bottom 6rem  left -2rem,left 0  bottom 0',
            lg: 'bottom 3rem  left 0,left 0  bottom 0',
            xl: 'bottom 0  left -5rem,left 0  bottom 0'
          }}
          w="full"
          h="full"
          bgRepeat="no-repeat">
          <Box top='0' position={'relative'} minH={'100vh'} mb={"110vh"}>
            <Container
              as={HStack}
              maxW={CONTAINER_MAX_WIDTH}
              justifyContent="center"
              alignContent="center"
              height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
              minH="700px">
              {switchingHeadline}
            </Container>
          </Box> 
        </Box>
      </Box>
    </>
  )
}
export default Hero
