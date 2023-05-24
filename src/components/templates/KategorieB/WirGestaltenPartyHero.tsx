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
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import LinkButtonField from '../../fields/LinkButtonField'

interface IWirGestaltenPartyHeroProps {}

const WirGestaltenPartyHero: FC<IWirGestaltenPartyHeroProps> = () => {
  return (
    <>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Flex
          align={{base: 'start', md: 'center'}}
          pos="relative"
          h={{
            base: '25rem',
            sm: '31.25rem',
            md: '43.75rem',
            lg: '62.5rem',
            xl: '75rem'
          }}>
          <Image
            pos="absolute"
            top="0"
            left={{base: '-20%', md: '-40%'}}
            h={{base: '-20%', md: 'full'}}
            src="/images/we_design_party/shape.svg"
          />
          <Stack pos="relative" w="100%" top={{base: '4rem', md: 'unset'}}>
            <Heading
              fontSize={{base: 'md', md: '2xl', lg: '3xl', xl: '4xl'}}
              fontWeight="semibold"
              sx={{
                'i, em': {
                  fontSize: '1.5em'
                }
              }}>
              <Field.Text
                name="title"
                label="Title"
                rtf
                defaultValue="<p>Wir gestalten </br> <i>Ihre Party</i></p>"
              />
            </Heading>

            <Text
              display={{base: 'none', sm: 'block'}}
              fontSize={{base: 'sm', lg: 'md'}}
              maxW={{md: '70%'}}
              as="span">
              <Field.Text
                name="text"
                label="Text"
                defaultValue={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper'
                }
              />
            </Text>
            <LinkButtonField
              name="cta"
              size={{base: 'xs', md: 'lg'}}
              mt={{base: '8 !important', md: '4'}}
            />
          </Stack>
          <Grid
            placeItems="center"
            pos="relative"
            top={{base: '1.25rem', md: 'unset'}}>
            <Box
              borderRadius="full"
              boxShadow="light"
              // w={{ base: "17.5rem", sm: "auto " }}
              w={{base: '30vh', md: '40vh'}}
              h={{base: '30vh', md: '40vh'}}>
              <Field.Image name="heroImage" />
            </Box>
          </Grid>
        </Flex>
      </Container>
    </>
  )
}
export default WirGestaltenPartyHero
