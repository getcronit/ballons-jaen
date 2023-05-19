import { Image, Box, Button, Container, Heading, VStack } from '@chakra-ui/react'
import { connectBlock, Field } from '@snek-at/jaen'
import { FC } from 'react'
import Slider from 'react-slick'
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes'
import { partnerSliderSettings } from '../../../constant/slider'

const PartnerSection = connectBlock(
  () => {
    return (
      <Box boxSize={'full'} display={'flex'} justifyContent="center">
        <Box
          boxSize={{ base: '10rem', sm: '12rem', lg: '15rem' }}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="dark">
          <Field.Image
            name="partnersImage"
            label="Logo"
          //defaultValue="/images/großhandel/logos3.png"
          />
        </Box>
      </Box>
    )
  },
  {
    name: 'PartnerSection',
    label: 'Partner'
  }
)

interface IPartnersSectionProps { }

const PartnersSection: FC<IPartnersSectionProps> = () => {
  return (
    <>
      <VStack gap={{ base: 4, md: '8' }} py="20" bg="white">
        <Heading size="h5020" as="span" fontWeight="semibold">
          <Field.Text
            name="partnersTitle"
            label="Titel"
            defaultValue="<p>Werde <i>Ballon-Partner</i></p>"
          />
        </Heading>

        <Box w="full">
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <Field.Section
              as={Slider}
              props={{ ...partnerSliderSettings }}
              name="PartnerSection"
              label="Partner Slider"
              blocks={[PartnerSection]}
            />
          </Container>
        </Box>

        <Box>
          <Button mt={{ base: 2, md: '4' }} size={{ base: 'sm', md: 'md' }}>
            Jetzt registrieren
          </Button>
        </Box>
      </VStack>
      <Image
        zIndex={"-1"}
        mb="-10rem"
        position="relative"
        // bottom={"0"}
        // left={"0"}
        transform={'scaley(-1)'}
        w="100%"
        src="/images/großhandel/großhandel_bg.svg"
        alt="bottom_shape_white"
      />
    </>
  )
}
export default PartnersSection
