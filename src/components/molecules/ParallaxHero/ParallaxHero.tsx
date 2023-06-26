import React, {useMemo} from 'react'
import {
  Box,
  SimpleGrid,
  GridItem,
  Stack,
  Heading,
  HStack,
  Text,
  Image
} from '@chakra-ui/react'

import {useScrollSync} from '../../hooks/scroll'
import {useContentPages} from '../../hooks/useContentPages'
import CardWithImageBackground from '../../CardWithImageBackground'
import * as style from './style'
import {ParallaxBackground} from '../ParallaxBackground'
import TextLoop from 'react-text-loop'
import {Field} from '@snek-at/jaen'
import LinkButtonField from '../../fields/LinkButtonField'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {HBallon} from '../../../common/assets/Ballon'
import {SkylineL1, SkylineL2, SkylineL3} from '../../../common/assets/Skyline'

export interface ParallaxHeroProps {
  noScroll?: boolean
}

export const ParallaxHero = ({noScroll}: ParallaxHeroProps) => {
  const {ref, scrollTop} = useScrollSync()
  const contentPagesIndex = useContentPages()

  const switchingHeadline = (
    <HStack mb="10" display="flex" justifyContent="center">
      <TextLoop>
        {[
          'Teile Glück und Freude mit',
          'Schaffe Atmosphäre mit',
          'Heirate mit',
          'Feiere deinen Anlass mit',
          'Überrasche mit',
          'Erlebe unvergessliche Momente mit',
          'Beeindrucke mit',
          'Gemeinsam abheben mit'
        ].map((text, index) => {
          return (
            <Field.Text
              key={index}
              fontSize={{base: '2xl', md: '4xl', lg: '6xl'}}
              mb="8 !important"
              fontWeight="semibold"
              textAlign="center"
              name={`heroHeading-${index}`}
              defaultValue={text}
            />
          )
        })}
      </TextLoop>
    </HStack>
  )

  const grid = useMemo(
    () => (
      <SimpleGrid
        w="full"
        placeItems="center"
        mb={{lg: 10}}
        mt="0"
        mx={{base: '0', xl: '5vw'}}
        minChildWidth={{base: '100%', lg: '300px'}}
        spacing="30px">
        {contentPagesIndex.children.map((page, i) =>
          contentPagesIndex.withJaenPage(
            page.id || '',
            <GridItem
              justifySelf="center"
              minH={'300px'}
              h={{base: '30vw', lg: '60vh'}}
              minW={'300px'}
              w={{
                base: '80vw',
                lg: `calc(70vw / ${contentPagesIndex.children.length})`
              }}>
              <CardWithImageBackground
                card={{
                  headingFieldName: `homeHeroHeading`,
                  headingDefaultValue: 'Title',
                  textFieldName: `homeHeroText`,
                  textDefaultValue: 'Text',
                  imageFieldName: `homeHeroImage`,
                  imageDefaultValue: undefined,
                  linkUrl: `/${page.slug}`
                }}
              />
            </GridItem>
          )
        )}
      </SimpleGrid>
    ),
    [contentPagesIndex.children.length]
  )

  return (
    <>
      <Box
        className="parallax"
        css={style.Section(noScroll)}
        ref={ref}
        //mt={{ base: '3.5rem', md: '4rem', lg: '8rem' }}
        pt={{base: 'calc(150vh - 7.5rem)', lg: 'calc(150vh - 8rem)'}}>
        <Box className="parallax__layer parallax__layer__0">
          <SkylineL1
            position={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            minWidth={'2500px'}
          />
          {/* <Image
            position={'absolute'}
            top={'0'}
            left={'0'}
            w={'100%'}
            minW={'2500px'}
            src="/images/home/hero_skyline_1.svg"
          /> */}
        </Box>
        <Box className="parallax__layer parallax__layer__1">
          <SkylineL2
            position={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            minWidth={'2500px'}
          />
          {/* <Image
            position={'absolute'}
            top={'0'}
            left={'0'}
            w={'100%'}
            minW={'2500px'}
            src="/images/home/hero_skyline_2.svg"
          /> */}
        </Box>
        <Box className="parallax__layer parallax__layer__2">
          <SkylineL3
            position={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            minWidth={'2500px'}
          />
          {/* <Image
            position={'absolute'}
            top={'0'}
            left={'0'}
            w={'100%'}
            minW={'2500px'}
            src="/images/home/hero_skyline_3.svg"
          /> */}
          {/* <Image position={"absolute"} top={"160vh"} left={"0"} w={"100%"} src="/images/home/freude.svg" /> */}
          {/* <Box
                position="relative"
                bg={'red'}
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
                    style={{ WebkitTextStroke: `1px #ffffff` }}>
                    <span>Freude liegt in der Luft</span>
                </Text>
            </Box> */}
        </Box>
        <ParallaxBackground
          strokeColor="red"
          backgroundColor="transperent"
          offset={0}
          display={'none'}
        />
        <Stack
          maxW={CONTAINER_MAX_WIDTH}
          height={'calc(100vh - 7.5rem)'}
          w={'100%'}
          top={'5'}
          position={'absolute'}
          justifyContent="center"
          alignItems={'center'}
          display={{base: 'flex', md: 'none'}}>
          <HStack>
            <HBallon className="background-Ballon" />
            <Field.Text
              as={Heading}
              name="heroTextBallons"
              defaultValue="<i>Ballons</i>"
              fontSize={{base: '2xl', md: '8xl', lg: '9xl'}}
              fontWeight="semibold"
              textAlign="center"
              pt="12"
            />
          </HStack>
          <Stack alignItems={'center'}>
            <LinkButtonField
              name="littleThingsButton2"
              defaultValue="Großhandel"
              defaultUrl={`/grosshandel`}
              size={{base: 'sm', md: 'md'}}
              variant="outline"
              ml="3"
            />
            <LinkButtonField
              name="littleThingsButton1"
              defaultValue="Zum Shop"
              defaultUrl={`/products`}
              size={{base: 'sm', md: 'md'}}
              ml="3"
              mt="3"
            />
          </Stack>
          <Box
            id="section07"
            className="demo"
            h="100px"
            visibility={scrollTop < 100 ? 'visible' : 'hidden'}>
            <a>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </Box>
        </Stack>

        <Stack
          w={CONTAINER_MAX_WIDTH}
          left={`calc(50% - ${CONTAINER_MAX_WIDTH} / 2 )`}
          top={'0'}
          position={'absolute'}
          justifyContent="center"
          alignContent="center"
          height={{md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)'}}
          display={{base: 'none', md: 'flex'}}>
          {switchingHeadline}
          <Field.Text
            as={Heading}
            name="heroTextBallons"
            defaultValue="<i>Ballons</i>"
            fontSize={{base: '2xl', md: '8xl', lg: '9xl'}}
            fontWeight="semibold"
            textAlign="center"
          />
          <HStack
            mt="-5"
            justify="center"
            h={'calc(50vh - 15rem)'}
            align="flex-start"
            gap="4">
            <LinkButtonField
              name="littleThingsButton1"
              defaultValue="Zum Shop"
              defaultUrl={`/products`}
              size={{base: 'sm', md: 'md'}}
              ml="3"
            />
            <Box
              id="scrollarrows"
              alignSelf="flex-end"
              h="100px"
              visibility={scrollTop < 100 ? 'visible' : 'hidden'}>
              <a>
                <span></span>
                <span></span>
                <span></span>
              </a>
            </Box>
            <LinkButtonField
              name="littleThingsButton2"
              defaultValue="Großhandel"
              defaultUrl={`/grosshandel`}
              size={{base: 'sm', md: 'md'}}
              variant="outline"
              ml="3"
            />
          </HStack>
        </Stack>
        <Box className="parallax__cover">{grid}</Box>
      </Box>
    </>
  )
}
