import {
  Box,
  Container,
  GridItem,
  Heading,
  HStack,
  Image,
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

export interface IHeroProps {
  anchor?: string
}

const Hero: FC<IHeroProps> = props => {
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

  const switchingHeadline = (
    <Stack>
      <Heading
        fontSize={{ base: '2xl', md: '6xl', lg: '8xl' }}
        mb="8 !important"
        fontWeight="semibold"
        textAlign="center"
        as="span">
        {/* <Box as="span" mb="5">
    <Field.Text
      name="heroHeading1"
      label="Heading"
      defaultValue="<p>Riesiges</p>"
      rtf
    />
  </Box> */}
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
                <Field.Text
                  key={index}
                  name={`heroHeading-${index}`}
                  label={`Heading ${index}`}
                  defaultValue={`<p>${text}</p>`}
                  rtf
                />
              )
            })}
          </TextLoop>
        </Box>
      </Heading>
      <Heading
        // textShadow={'0 0 10px rgba(0,0,0,0.5)'}
        //textShadow="1px 1px 2px black"
        fontSize={{ base: '4xl', md: '8xl', lg: '9xl' }}
        textAlign="center"
        fontWeight="semibold"
      >
        <Box as="span" mb="10">
          <Field.Text
            name="heroHeadingBallons"
            label="Heading"
            defaultValue="<p><b><i>Ballons</i></b></p>"
            rtf
          />
        </Box>
      </Heading>
    </Stack>
  )

  return (
    <>
      {/* For Mobile */}
      {/* <Box
        display={{ base: 'block', md: 'none' }}
        pos="relative"
        pb={{
          base: '43.75rem',
          sm: '50rem'
        }}>
        <Box mt="50%">{switchingHeadline}</Box>
        <Image
          top={{ base: '34.375rem' }}
          pos="absolute"
          left=""
          h={{ base: 'auto' }}
          src="/images/home/hero_shape.svg"
          alt="herobackground"
          zIndex={{ base: 'none', md: '50' }}
          display={{ base: 'none', md: 'block' }}
        />

        <Image
          overflow="hidden"
          pos="absolute"
          top={{ base: '33.75rem' }}
          left={{ base: '-3.125rem' }}
          src="/images/home/hero_line.svg"
          alt="herobackground"
        />
      </Box> */}

      <Box
        display={{ base: 'block', md: 'none' }}
        position="relative"
        width="full"
      // overflow={'hidden'}
      // height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
      // bgImage="url('/images/home/hero_line.svg'),url('/images/home/hero_shape.svg')"
      >
        {/* <ParallaxBackground
          strokeColor="red"
          backgroundColor="tansperent"
          offset={0}
        /> */}
        <Box
          position="relative"
          zIndex={51}
          bgImage="url('/images/home/hero_line.svg'),url('/images/home/reisges/top_shape.svg')"
          bgSize="100%,contain"
          bgPos={{
            base: 'bottom 6rem  left -2rem,left 0  bottom 0',
          }}
          w="full"
          h="full"
          bottom="0"
          //backgroundColor="red"
          bgRepeat="no-repeat"
          pb={{ md: '8rem', lg: '12rem', xl: '14rem' }}>
          <Box
            overflow="hidden"
            as={HStack}
            // maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            alignContent="flex-start"
            height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
            minH="700px"
            w="100%"
            h="full"
            >
              {switchingHeadline}
          </Box>

          <Container
            as={Stack}
            maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            h="40vh"
            mt="300px">
            <SimpleGrid
              w="full"
              placeItems="center"
              mb={{ lg: 10 }}
              mt="0"
              minChildWidth="300px"
              spacing="30px"
            // gridTemplateColumns={{
            //   md: "repeat(auto-fit, minmax(15rem, auto))",
            // }}
            >
              {contentPagesIndex.children.map((page, i) =>
                contentPagesIndex.withJaenPage(
                  page.id || '',
                  <GridItem
                    justifySelf="center"
                    h={{
                      base: '11.25rem',
                      md: '18.75rem',
                      lg: '25rem',
                      xl: '31.25rem'
                    }}
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
          </Container>
        </Box>
        {/* <Image
          display={{base: 'block'}}
          position={"absolute"}
          zIndex="0"
          w="full"
          bottom={0}
          right={0}
          src="/images/home/reisges/top_shape.svg"
          alt="herobackground"
        /> */}
      </Box>

      {/* For Big Devices */}

      <Box
        display={{ base: 'none', md: 'block' }}
        position="relative"
        width="full"
      // overflow={'hidden'}
      // height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
      // bgImage="url('/images/home/hero_line.svg'),url('/images/home/hero_shape.svg')"
      >
        <ParallaxBackground
          strokeColor="red"
          backgroundColor="tansperent"
          offset={0}
        />
        <Box
          position="relative"
          zIndex={51}
          bgImage="url('/images/home/hero_line.svg'),url('/images/home/reisges/top_shape.svg')"
          bgSize="100%,contain"
          bgPos={{
            md: 'bottom 6rem  left -2rem,left 0  bottom 0',
            lg: 'bottom 3rem  left 0,left 0  bottom 0',
            xl: 'bottom 0  left -5rem,left 0  bottom 0'
          }}
          w="full"
          h="full"
          bgRepeat="no-repeat"
          pb={{ md: '8rem', lg: '12rem', xl: '14rem' }}>
          <Box
            overflow="hidden"
            as={HStack}
            // maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            alignContent="flex-start"
            height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
            //minH="700px"
            w="100%"
            h="full"
            >
              {switchingHeadline}
          </Box>

          <Container
            as={Stack}
            maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            h="40vh"
            mt="300px">
            <SimpleGrid
              w="full"
              placeItems="center"
              mb={{ lg: 10 }}
              mt="0"
              minChildWidth="300px"
              spacing="30px"
            // gridTemplateColumns={{
            //   md: "repeat(auto-fit, minmax(15rem, auto))",
            // }}
            >
              {contentPagesIndex.children.map((page, i) =>
                contentPagesIndex.withJaenPage(
                  page.id || '',
                  <GridItem
                    justifySelf="center"
                    h={{
                      base: '11.25rem',
                      md: '18.75rem',
                      lg: '25rem',
                      xl: '31.25rem'
                    }}
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
          </Container>
        </Box>
        {/* <Image
          display={{base: 'block'}}
          position={"absolute"}
          zIndex="0"
          w="full"
          bottom={0}
          right={0}
          src="/images/home/reisges/top_shape.svg"
          alt="herobackground"
        /> */}
      </Box>
    </>
  )
}
export default Hero
