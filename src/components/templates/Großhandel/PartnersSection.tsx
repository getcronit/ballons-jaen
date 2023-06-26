import {
  Image,
  Box,
  Button,
  Container,
  Heading,
  VStack,
  Flex
} from '@chakra-ui/react'
import {connectBlock, Field, PhotoProvider} from '@snek-at/jaen'
import {FC} from 'react'
import Slider from 'react-slick'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {partnerSliderSettings} from '../../../constant/slider'
import {SliderBox} from '../../organisms/SliderBox'
import LinkButtonField from '../../fields/LinkButtonField'

const PartnerSection = connectBlock(
  () => {
    return (
      <Flex boxSize={'full'} display={'flex'} justifyContent="center" my="8">
        <Box
          boxSize={{base: '10rem', sm: '12rem', lg: '15rem'}}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="dark">
          <Field.Image name="partnersImage" lightbox lightboxGroup />
        </Box>
      </Flex>
    )
  },
  {
    name: 'PartnerSection',
    label: 'Partner'
  }
)

interface IPartnersSectionProps {}

const PartnersSection: FC<IPartnersSectionProps> = () => {
  return (
    <>
      <VStack gap={{base: 4, md: '8'}} py="20" bg="white">
        <Field.Text
          as={Heading}
          size="h5020"
          fontWeight="semibold"
          name="partnersTitle"
          defaultValue="Werde <i>Ballon-Partner</i>"
        />
        <Box w="full">
          <Container maxW={CONTAINER_MAX_WIDTH} h="sm">
            <PhotoProvider maskOpacity={0.8}>
              <Field.Section
                as={SliderBox(partnerSliderSettings)}
                name="PartnerSection"
                label="Partner Slider"
                blocks={[PartnerSection]}
              />
            </PhotoProvider>
          </Container>
        </Box>

        <LinkButtonField
          size={{base: 'sm', md: 'md'}}
          name="PartnerButton"
          defaultValue="Jetzt registrieren"
          defaultUrl={`/grosshandel/?contact=Ich%20repr%C3%A4sentiere%20[Ihr%20Unternehmen].%20Wir%20sind%20ein%20etabliertes%20Unternehmen%20in%20der%20[Ihr%20Gesch%C3%A4ftsbereich],%20das%20daran%20interessiert%20ist,%20Ihre%20Auswahl%20an%20Ballonprodukten%20in%20unser%20Sortiment%20aufzunehmen.`}
        />
      </VStack>
      <Image
        zIndex={'-1'}
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
