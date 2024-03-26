import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@atsnek/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import LinkButtonField from '../../fields/LinkButtonField'

interface IWirGestaltenPartyHeroProps {}

const WirGestaltenPartyHero: FC<IWirGestaltenPartyHeroProps> = () => {
  return (
    <>
      <Box pos="relative" overflowX="clip">
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <Flex
            pt={{base: '4', md: '48'}}
            align={{base: 'center', md: 'center'}}
            direction={{base: 'column-reverse', md: 'row'}}>
            {/* <Image
              zIndex={'-1'}
              //bg={'blue'}
              pos="absolute"
              top={{base: '0%', md: '-30%'}}
              //right='-50%'
              // bottom='-50%'
              left={{base: '-30%', md: '-10%'}}
              //h='200%'
              w='1200px'
              minW='1200px'
              src="/images/we_design_party/shape.svg"
            /> */}

            <Stack
              pos="relative"
              w="100%"
              mt={{base: '16', md: 'unset'}}
              _before={{
                zIndex: '-1',
                top: '-250px',
                left: '-250px',
                pos: 'absolute',
                content: `""`,
                h: '1000px',
                w: '1000px',
                bgImage: '/images/we_design_party/shape.svg',
                bgSize: '100%,contain',
                bgRepeat: 'no-repeat'
              }}>
              <Field.Text
                as={Heading}
                fontSize={{base: 'xl', md: '2xl', lg: '3xl', xl: '4xl'}}
                fontWeight="semibold"
                sx={{
                  'i, em': {
                    fontSize: '1.5em',
                    verticalAlign: 'text-top'
                  }
                }}
                name="title"
                defaultValue="Wir gestalten </br> <i>Ihre Party</i>"
              />

              <Field.Text
                pb={{base: '8 !important', md: '4'}}
                //display={{ base: 'none', sm: 'block' }}
                fontSize={{base: 'sm', lg: 'md'}}
                maxW={{md: '70%'}}
                name="text"
                defaultValue={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper'
                }
              />
              <Box>
                <LinkButtonField name="cta" size={{base: 'xs', md: 'lg'}} />
              </Box>
            </Stack>
            <Grid
              placeItems="center"
              pos="relative"
              top={{base: '1.25rem', md: 'unset'}}>
              <Box
                overflow="hidden"
                isolation="isolate"
                borderRadius="full"
                boxShadow="light"
                // w={{ base: "17.5rem", sm: "auto " }}
                boxSize={{base: '2xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'lg'}}>
                <Field.Image
                  name="heroImage"
                  defaultValue="/images/content/oh_happy_day.gif"
                  lightbox
                  overload
                />
              </Box>
            </Grid>
          </Flex>
        </Container>
      </Box>
    </>
  )
}
export default WirGestaltenPartyHero
