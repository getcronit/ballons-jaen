import {
  Box,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  VStack,
  chakra
} from '@chakra-ui/react'
import {useMemo} from 'react'

import {Field} from '@atsnek/jaen'
import TextLoop from 'react-text-loop'
import {Ballons} from '../../../common/assets/Ballons'
import SkylineL1 from '../../../common/assets/skyline1.inline.svg'
import SkylineL2 from '../../../common/assets/skyline2.inline.svg'
import SkylineL3 from '../../../common/assets/skyline3.inline.svg'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import CardWithImageBackground from '../../CardWithImageBackground'
import LinkButtonField from '../../fields/LinkButtonField'
import {useScrollSync} from '../../hooks/scroll'
import {useContentPages} from '../../hooks/useContentPages'
import {ParallaxBackground} from '../ParallaxBackground'
import * as style from './style'

export interface ParallaxHeroProps {
  noScroll?: boolean
}

export const ParallaxHero = ({noScroll}: ParallaxHeroProps) => {
  const {ref, scrollTop} = useScrollSync(500)
  const contentPagesIndex = useContentPages()

  const switchingHeadline = (
    <HStack display="flex" justifyContent="center">
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
              fontSize={{base: 'xl', md: '3xl', lg: '5xl'}}
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
          <chakra.svg
            as={SkylineL1}
            position={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            minWidth={'2500px'}
          />
        </Box>
        <Box className="parallax__layer parallax__layer__1">
          <chakra.svg
            as={SkylineL2}
            position={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            minWidth={'2500px'}
          />
        </Box>
        <Box className="parallax__layer parallax__layer__2">
          <chakra.svg
            as={SkylineL3}
            position={'absolute'}
            top={'0'}
            left={'0'}
            width={'100%'}
            minWidth={'2500px'}
          />
        </Box>
        <ParallaxBackground
          strokeColor="red"
          backgroundColor="transparent"
          offset={0}
          display={'none'}
        />

        <Stack
          pointerEvents="none"
          w={CONTAINER_MAX_WIDTH}
          left={`calc(50% - ${CONTAINER_MAX_WIDTH} / 2 )`}
          top={'0'}
          position={'absolute'}
          justifyContent="center"
          alignContent="center"
          height={{md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)'}}
          display={{base: 'none', md: 'flex'}}>
          {switchingHeadline}
          {/* <Field.Text
            as={Heading}
            name="heroTextBallons"
            defaultValue="<i>Ballons</i>"
            fontSize={{base: '2xl', md: '8xl', lg: '9xl'}}
            fontWeight="semibold"
            textAlign="center"
          /> */}
          <Ballons
            mb={16}
            mx={'auto'}
            color={'red.500'}
            h={{base: '4.5rem', md: '8.25rem', lg: '8.875rem'}}
            w="auto"
          />

          <VStack>
            <Flex justifyContent="center">
              <LinkButtonField
                name="heroButton1"
                pointerEvents="auto"
                defaultValue="Zum Shop"
                defaultUrl={`/products`}
                size={{base: 'sm', md: 'md'}}
                margin="0"
                mr="1"
              />

              <LinkButtonField
                name="heroButton2"
                pointerEvents="auto"
                defaultValue="Großhandel"
                defaultUrl={`/grosshandel`}
                size={{base: 'sm', md: 'md'}}
                variant="outline"
                sx={{svg: {color: 'white !important'}}}
                margin="0"
                ml="1"
              />
            </Flex>

            <Box
              w="full"
              id="scrollarrows"
              alignSelf="flex-end"
              h="100px"
              visibility={scrollTop < 100 ? 'visible' : 'hidden'}>
              <span></span>
              <span></span>
              <span></span>
            </Box>
          </VStack>
        </Stack>
        <Box className="parallax__cover" pointerEvents="none">
          {grid}
        </Box>
      </Box>
    </>
  )
}
