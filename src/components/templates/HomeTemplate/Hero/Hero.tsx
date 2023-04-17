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
import { HBallon, Ballon } from '../../../../common/assets/Ballon'
import LinkButtonField from '../../../fields/LinkButtonField'

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
        <HStack
          mt="-5ya"
          justify="center"
          gap="4"
          flexDir={{ base: 'row-reverse', md: 'row' }}>
          <LinkButtonField
            name="littleThingsButton1"
            defaultValue="Zum Shop"
            defaultUrl={`/products`}
            size={{ base: 'sm', md: 'md' }}
          />
          <LinkButtonField
            name="littleThingsButton2"
            defaultValue="Großhandel"
            defaultUrl={`/grosshandel`}
            size={{ base: 'sm', md: 'md' }}
            variant="outline"
          />
        </HStack>
      </Heading>
    </Stack>
  )

  return (
    <>
      {/* For Mobile */}
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

          <Container
            as={Stack}
            maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            minH="40vh"
            mt="30px">
            <SimpleGrid
              w="full"
              placeItems="center"
              mb={{ lg: 10 }}
              mt="0"
              minChildWidth="300px"
              spacing="30px"
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
      </Box>
      {/* For Big Devices */}
      {/* <ParallaxHero /> */}
      <Box
        display={{ base: 'none', md: 'block' }}
        position="relative"
        width="full"
      >
        <ParallaxBackground
          strokeColor="red"
          backgroundColor="white"
          offset={0}
        />
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
            as={HStack}
            maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            alignContent="center"
            height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
            minH="700px">
            {switchingHeadline}
          </Container>

          <Container
            as={Stack}
            maxW={CONTAINER_MAX_WIDTH}
            justifyContent="center"
            minH="40vh"
            mt="300px">
            <SimpleGrid
              w="full"
              placeItems="center"
              mb={{ lg: 10 }}
              mt="0"
              minChildWidth="300px"
              spacing="30px"
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
      </Box>
    </>
  )
}
export default Hero
