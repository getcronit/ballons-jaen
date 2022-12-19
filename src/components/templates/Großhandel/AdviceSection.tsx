import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import LinkButtonField from "../../fields/LinkButtonField"

interface IAdviceSectionProps {}

const AdviceSection: FC<IAdviceSectionProps> = () => {
  return (
    <Container
      h={{ base: "auto", lg: "50rem" }}
      alignItems={{ base: "center", lg: "center" }}
      justifyContent="space-between"
      py="8"
      flexDirection={{ base: "column-reverse", md: "column", lg: "row" }}
      as={Flex}
      gap="4"
      maxW={CONTAINER_MAX_WIDTH}
    >
      <Box flex="3">
        <Stack>
https://github.com/ballonsballons-at/ballons-jaen/pull/60/conflict?name=src%252Fcomponents%252Ftemplates%252FGro%25C3%259Fhandel%252FAdviceSection.tsx&ancestor_oid=0ab3e8498bb3509605c4ed73f07033b36f70ff0c&base_oid=747f5498a3809b62b7c64e404351c6fa858e4e71&head_oid=b26da7621854290204546aedcedfcfcfaef72986          <Flex gap={{ base: 2, md: 4 }}>
            <Heading size="h5020" as="span" fontWeight="semibold">
              <Field.Text
                name="adviceTitle"
                defaultValue="<p>Lass dich von uns <i>beraten</i></p>"
              />
            </Heading>
          </Flex>

          <Text size="b2012" variant="light" maxW="90%" as="span">
            <Field.Text
              name="adviceText"
              defaultValue={
                "<p>Wir sind für dich da und beraten dich gerne bei der Planung deiner Party. Wir haben viele Ideen und Tipps für dich parat.</p>"
              }
            />
          </Text>

          <Box pt="5">
            <LinkButtonField
              name="adviceButton"
              defaultUrl={`/dekoration`}
              defaultValue={"Zur Beratung"}
              variant="outline"
            />
          </Box>
        </Stack>
      </Box>
      <Box flex="2" h='40vh'>
        <Field.Image
          name="adviceImage"
          defaultValue="/images/großhandel/shape_bg.png"
          objectFit="contain"
        />
      </Box>
    </Container>
  )
}
export default AdviceSection
