import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import LinkButtonField from "../../fields/LinkButtonField"

interface IWirGestaltenPartyHeroProps {}

const WirGestaltenPartyHero: FC<IWirGestaltenPartyHeroProps> = () => {
  return (
    <>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Flex
          align={{ base: "start", md: "center" }}
          pos="relative"
          h={{
            base: "25rem",
            sm: "31.25rem",
            md: "43.75rem",
            lg: "62.5rem",
            xl: "75rem",
          }}
        >
          <Image
            pos="absolute"
            top="0"
            left={{ base: "-20%", md: "-40%" }}
            h={{ base: "-20%", md: "full" }}
            src="/images/we_design_party/shape.svg"
          />
          <Stack pos="relative" w="100%" top={{ base: "4rem", md: "unset" }}>
            <Heading
              fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
              fontWeight="semibold"
              sx={{
                "i, em": {
                  fontSize: "1.5em",
                },
              }}
            >
              <Field.Text
                name="title"
                rtf
                defaultValue="<p>Wir gestalten </br> <i>Ihre Party</i></p>"
              />
            </Heading>

            <Text
              display={{ base: "none", sm: "block" }}
              fontSize={{ base: "sm", lg: "md" }}
              maxW={{ md: "70%" }}
              as="span"
            >
              <Field.Text
                name="text"
                defaultValue={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper"
                }
              />
            </Text>
            <LinkButtonField
              name="cta"
              size={{ base: "xs", md: "lg" }}
              mt={{ base: "8 !important", md: "4" }}
            />
          </Stack>
          <Grid
            placeItems="center"
            pos="relative"
            top={{ base: "1.25rem", md: "unset" }}
          >
            <Box
              borderRadius="full"
              boxShadow="light"
              w={{ base: "10rem", md: "20rem", lg: "25rem", xl: "30rem" }}
              h={{ base: "10rem", md: "20rem", lg: "25rem", xl: "30rem" }}
            >
              <Field.Image
                name="heroImage"
                defaultValue="/images/we_design_party/round.png"
              />
            </Box>
          </Grid>
        </Flex>
      </Container>
    </>
  )
}
export default WirGestaltenPartyHero
