import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack
} from '@chakra-ui/react'

import {FC, Fragment} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import LinkButtonField from '../../fields/LinkButtonField'
import {Field} from '@snek-at/jaen'

interface IAboutBallonsProps {}

const AboutBallons: FC<IAboutBallonsProps> = () => {
  const cards = [
    {
      title: 'Shop',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
      image: '/images/about_us/longCard1.png'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
      title: 'Großhandel',
      image: '/images/about_us/longCard2.png'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
      title: 'Dekoration',
      image: '/images/about_us/longCard3.png'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
      title: 'Party',
      image: '/images/about_us/longCard4.png'
    }
  ]
  return (
    <>
      <Box
        bgImage="/images/about_us/ballon_bg.svg"
        bgRepeat="no-repeat"
        pt="10rem"
        pb="2rem"
        bgPos={{base: 'center', md: 'unset'}}
        bgSize="cover"
        mt={{md: '8'}}>
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <Flex
            align="center"
            gap="4"
            direction={{base: 'column', md: 'row'}}
            pos="relative">
            <Box
              pos={{base: 'absolute', md: 'unset'}}
              w="50%"
              left="-3.125rem"
              top="-11.25rem">
              <Image src="/images/about_us/ballon_bag.png" />
            </Box>
            {/* <Stack spacing="4" pos="relative">
              {cards.map((card) => (
                <Fragment key={card.title}>
                  <LongCardImageBackground isSmallText card={card} />
                </Fragment>
              ))}
            </Stack> */}
            <Stack
              // zIndex={'999'}
              maxW={{
                xl: '50%'
              }}
              spacing="8"
              justify="center">
              <Field.Text
                as={Heading}
                fontSize={{base: 'md', md: 'xl', xl: '2xl'}}
                lineHeight={{base: '1.25rem', md: '2rem', xl: '2.5rem'}}
                mb="-2"
                whiteSpace="nowrap"
                name="AboutBallonsHeading1"
                defaultValue="Test"
              />
              <Field.Text
                //as={Heading}
                name="AboutBallonsSubtitle"
                fontSize={{base: 'sm', md: 'md'}}
                fontWeight="semibold"
                defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
              />
              <Field.Text
                name="AboutBallonsText"
                fontSize={{base: 'sm', md: 'md'}}
                fontWeight="light"
                defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              />
              <HStack
                justify="center"
                gap="4"
                flexDir={{base: 'row-reverse', md: 'row'}}>
                <LinkButtonField
                  name="littleThingsButton1"
                  defaultValue="Zum Shop"
                  defaultUrl={`/products`}
                  size={{base: 'sm', md: 'md'}}
                />
                <LinkButtonField
                  name="littleThingsButton2"
                  defaultValue="Großhandel"
                  defaultUrl={`/grosshandel`}
                  size={{base: 'sm', md: 'md'}}
                  variant="outline"
                />
              </HStack>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
export default AboutBallons
