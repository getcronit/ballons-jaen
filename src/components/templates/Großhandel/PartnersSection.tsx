import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { partnerSliderSettings } from "../../../constant/slider"

const PartnerSection = connectSection(
  () => {
    return (
      <Box boxSize={"full"} display={"flex"} justifyContent="center">
        <Box
          boxSize={{ base: "10rem", sm: "12rem", lg: "15rem" }}
          borderRadius="xl"
          overflow="hidden"
          boxShadow="dark"
        >
          <Field.Image
            name="partnersImage"
            defaultValue="/images/großhandel/logos3.png"
          />
        </Box>
      </Box>
    )
  },
  {
    name: "PartnerSection",
    displayName: "Partner",
  }
)

interface IPartnersSectionProps {}

const PartnersSection: FC<IPartnersSectionProps> = () => {
  return (
    <VStack gap={{ base: 4, md: "8" }} py="20" bg="white">
      <Heading size="h5020" as="span" fontWeight="semibold">
        <Field.Text
          name="partnersTitle"
          defaultValue="<p>Werde <i>Ballon-Partner</i></p>"
        />
      </Heading>

      <Box w="full">
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <Field.Section
            as={Slider}
        
            props={{ ...partnerSliderSettings }}
            name="PartnerSection"
            displayName="Partner Slider"
            sections={[PartnerSection]}
          />
        </Container>
      </Box>

      <Box>
        <Button mt={{ base: 2, md: "4" }} size={{ base: "sm", md: "md" }}>
          Jetzt registrieren
        </Button>
      </Box>
    </VStack>
  )
}
export default PartnersSection
