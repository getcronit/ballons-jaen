import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { customerSliderSettings } from "../../../constant/slider"

interface IOurCustomersProps {}

const CustomerItemSection = connectSection(
  () => {
    return (
      <Box boxSize={"full"} display={"flex"} justifyContent="center" p={2}>
        <Stack
          mx={{
            base: 2,
            md: "auto",
          }}
          px="6"
          boxShadow="light"
          borderRadius="xl"
          maxW="21.875rem"
          py="8"
        >
          <Flex gap="1">
            <Box>
              <Image src="/images/about_us/comma.svg" />
            </Box>
            <Box boxSize="180px" borderRadius="full">
              <Field.Image
                name="customerImage"
                defaultValue="/images/about_us/cardProfile1.png"
              />
            </Box>
          </Flex>
          <Stack spacing="0">
            <Heading fontWeight="semibold" fontSize="lg">
              <Field.Text name="customerName" defaultValue="Nik Doe" />
            </Heading>
            <Text fontSize="md" as="span">
              <Field.Text name="customerPosition" defaultValue="Kunde" />
            </Text>
            <Text size="b2012" variant="light">
              <Field.Text
                name="customerFeedbackText"
                defaultValue={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et doLorem ipsum dolor sit ajk."
                }
              />
            </Text>
          </Stack>
        </Stack>
      </Box>
    )
  },
  {
    name: "customer",
    displayName: "Kunde",
  }
)

const OurCustomers: FC<IOurCustomersProps> = () => {
  return (
    <Box
      pos="relative"
      zIndex="2"
      pt="4"
      pb="32"
      bgImage="/images/about_us/thread_customer.svg"
      bgRepeat="no-repeat"
      bgPos="0  10rem"
      bgSize="contain"
    >
      <Container maxW={CONTAINER_MAX_WIDTH} py="8">
        <HStack>
          <Stack
            w="50%"
            spacing="0"
            align={{ md: "center", xl: "start" }}
            textAlign={{ md: "center", xl: "start" }}
          >
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              textTransform="uppercase"
              as="span"
            >
              <Field.Text
                name="aboutUsCustomerTag"
                defaultValue={"MEINUNGEN"}
              />
            </Text>
            <Flex gap={{ base: 2, md: 4 }}>
              <Heading
                size="h6020"
                as="span"
                fontWeight="semibold"
                whiteSpace="nowrap"
              >
                <Field.Text
                  rtf
                  name="aboutUsCustomerTitle"
                  defaultValue="<p>Unsere <i>Kunden</i></p>"
                />
              </Heading>
            </Flex>

            <Text
              size="b2012"
              variant="light"
              maxW={{ base: "80%", md: "90%" }}
              as="span"
            >
              <Field.Text
                name="aboutUsCustomerDescription"
                defaultValue={`<p>
              Wir bauen auf die Emotionen und das Glück, welches wir bei jedem
              Event miterleben dürfen. Wir freuen uns jedes Mal aufs Neue über
              Lob und über die zufriedenen Gesichter beim Anblick unserer
              Dekoration.</p>`}
              />
            </Text>
          </Stack>

          <Box w="50%">
            <Field.Section
              as={Slider}
              props={{ ...customerSliderSettings }}
              className="customer_slider"
              name="customers"
              displayName="Kunden Rezessionen"
              sections={[CustomerItemSection]}
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
export default OurCustomers
