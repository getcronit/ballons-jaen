import {
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  VStack,
  Flex,
  Image
} from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import { StaticImage } from 'gatsby-plugin-image'

interface IGroßhandelUpperHeroProps { }

const GroßhandelUpperHero: FC<IGroßhandelUpperHeroProps> = () => {
  return (
    <>
      <Flex
        pos="relative"
        // h={{
        //   base: '50rem',
        //   sm: '45rem',
        //   md: '55rem',
        //   xl: '60rem',
        //   '2xl': '65rem'
        // }}
        zIndex="0"
        bgImage="url('/images/großhandel/großhandel_bg.svg')"
        bgSize="100%,contain"
        bgRepeat="no-repeat"
        bgPos={{
          base: 'bottom 0 left 0',
          md: 'bottom 0 left 0',
        }}>
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <VStack
            pos="relative"
            zIndex="1"
            py={{ base: '16', md: '44', lg: '52', xl: '56' }}>
            <Heading fontWeight="semibold" size="h5030">
              <Field.Text name="title" label="Titel" defaultValue="Großhandel" />
            </Heading>
            <Heading
              mb="-4 !important"
              fontWeight="semibold"
              size="h5020"
              as="span">
              <Field.Text
                name="subtitle"
                label="Subtitle"
                defaultValue="<p>Werde <i>Ballon-Partner</i></p>"
              />
            </Heading>
            <HStack>
              <Button size={{ base: 'sm', md: 'md' }} variant="outline">
                Anmelden
              </Button>
              <Button size={{ base: 'sm', md: 'md' }}>Registrieren</Button>
            </HStack>
            <Grid
              right="0"
              pos="absolute"
              top="6.25rem"
              w={{ md: '12.5rem', lg: '16.875rem', xl: '20rem' }}
              h="40vh">
              <Image
                alt="Herzballons gebunden an ein Paket"
                src={"/images/großhandel/ballon_box.png"}
              />
            </Grid>
          </VStack>
        </Container>
      </Flex>
    </>
  )
}
export default GroßhandelUpperHero
