import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import Slider from 'react-slick'
import { fonts } from '../../../../styles/theme'
import LinkButtonField from '../../../fields/LinkButtonField'
import { useContentPages } from '../../../hooks/useContentPages'
import { ParallaxBackground } from '../../../molecules/ParallaxBackground'
import CardWithImageBackground from '../../../CardWithImageBackground'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import TextLoop from 'react-text-loop'

export interface IHeroProps {

  anchor?: string
}

const Hero: FC<IHeroProps> = props => {
  const contentPagesIndex = useContentPages()

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

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
    <>
      {/* For Mobile */}
      <Box
        display={{ base: 'block', md: 'none' }}
        pos="relative"
        pb={{
          base: '43.75rem',
          sm: '50rem'
        }}>
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

      </Box>
      {/* For Big Devices */}

      <Box
        position={"relative"}
        display={{ base: 'none', md: 'block' }}
        width={'full'}
        //overflow={'hidden'}
        // height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }}
        //bgImage="url('/images/home/hero_line.svg'),url('/images/home/hero_shape.svg')"
      >
        <ParallaxBackground strokeColor={"blue"} backgroundColor={"tansperent"} offset={0} />
        <Box
          position={"relative"}
          zIndex={9999}
          bgImage="url('/images/home/hero_line.svg'),url('/images/home/reisges/top_shape.svg')"
          bgSize="100%,contain"
          bgPos={{
            md: 'bottom 6rem  left -2rem,left 0  bottom 0',
            lg: 'bottom 3rem  left 0,left 0  bottom 0',
            xl: 'bottom 0  left -5rem,left 0  bottom 0'
          }}
          w={"full"}
          h={"full"}
          bgRepeat="no-repeat"
          pb={{ md: '8rem', lg: '12rem', xl: '14rem' }}
        >
          <Container as={HStack} maxW={CONTAINER_MAX_WIDTH} justifyContent={"space-between"} alignContent={"center"} height={{ md: 'calc(100vh - 7.5rem)', lg: 'calc(100vh - 8rem)' }} minH={"700px"}>
            <Stack>
              <Heading
                fontSize={{ base: '2xl', md: '6xl', lg: '8xl' }}
                mb="8 !important"
                fontWeight="semibold"
                as="span">
                {/* <Box as="span" mb="5">
              <Field.Text
                name="heroHeading1"
                label="Heading"
                defaultValue="<p>Riesiges</p>"
                rtf
              />
            </Box> */}
                <Box as="span" mb="10">
                  <TextLoop >
                    <Field.Text
                      name="heroHeading1"
                      label="Heading"
                      defaultValue="<p>Wir verkaufen</p>"
                      rtf
                    />
                    <Field.Text
                      name="heroHeading2"
                      label="Heading"
                      defaultValue="<p>Wir dekorieren mit</p>"
                      rtf
                    />

                    <Field.Text
                      name="heroHeading2"
                      label="Heading"
                      defaultValue="<p>Wir feiern mit</p>"
                      rtf
                    />
                    <Field.Text
                      name="heroHeading2"
                      label="Heading"
                      defaultValue="<p>Wir arbeiten mit</p>"
                      rtf
                    />
                    <Field.Text
                      name="heroHeading2"
                      label="Heading"
                      defaultValue="<p>Wir lieben</p>"
                      rtf
                    />
                  </TextLoop>
                </Box>

              </Heading>
              <Heading fontSize={{ base: '2xl', md: '6xl', lg: '8xl' }} fontWeight="semibold">
                <Box as="span" mb="10">
                  <Field.Text
                    name="heroHeadingBallons"
                    label="Heading"
                    defaultValue="<p><i><b>Ballons</b></i></p>"
                    rtf
                  />
                </Box>
              </Heading>
            </Stack>


            {/* <Box
            // flex="1"
            // overflow="hidden"
            // w={{ base: "100%", sm: "80%", md: "25rem", lg: "auto" }}
            //borderRadius="full"
            //my={{ base: "4 !important", md: "12 !important" }}
            // px="1%"
            // py="5%"
            // mx="auto"
            // w={{
            //   base: "30vh",
            //   md: "50vh",
            //   lg: "60vh",
            // }}
            h={'500px'}
            w={'500px'}>
            <Field.Image
              alt="slider_img"
              name={'newsImage2'}
              label="News Image"
              defaultValue={'/images/home/news/news_img.png'}
            />
          </Box> */}



          </Container>

          <Container as={Stack} maxW={CONTAINER_MAX_WIDTH} justifyContent={"center"} h={"40vh"} mt={"300px"}>
            <SimpleGrid
              w={"full"}
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
