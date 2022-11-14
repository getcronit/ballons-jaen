import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"
import CardWithImageBackground from "../../../CardWithImageBackground"
import LinkButtonField from "../../../fields/LinkButtonField"

interface ILittleThingsSectionProps {}

const LittleThingsSection: FC<ILittleThingsSectionProps> = () => {
  const cards = [
    {
      image: "/images/home/little/little_section_1.png",
    },
    {
      image: "/images/home/little/little_section_2.png",
    },
    {
      image: "/images/home/little/little_section_3.png",
    },
  ]

  const cardHeight = { base: "15rem", lg: "15rem", xl: "20rem" }
  const cardWidth = { base: "12.5rem", lg: "12.5rem", xl: "17.5rem" }

  return (
    <Stack
      bg="white"
      py="20"
      px={{ base: 0, sm: 4, md: 8 }}
      align="center"
      justify="center"
    >
      <Container
        justifyContent="space-between"
        as={Flex}
        gap={{ base: 32, lg: 8 }}
        spacing={{ base: 20, md: 32, xl: 40 }}
        flexDirection={{ base: "column", lg: "row" }}
        pt={{ base: 44, md: 20 }}
        maxW={CONTAINER_MAX_WIDTH}
      >
        <Flex display={{ base: "none", md: "flex" }} gap="4">
          <Stack
            flex="1"
            justify="center"
            display={{ base: "none", lg: "flex" }}
          >
            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              displayContent={false}
              card={{
                headingFieldName: "littleThingsCardheading1",
                headingDefaultValue: "   ",
                textFieldName: "littleThingsCardText1",
                textDefaultValue: "   ",
                imageFieldName: "littleThingsCardImage1",
                imageDefaultValue: cards[0].image,
              }}
            />
          </Stack>
          <Stack
            gap="4"
            spacing="0"
            maxW="43.75rem"
            h="full"
            w="full"
            align="start"
            justify={{ base: "space-between", lg: "center" }}
            flexDirection={{ base: "row", lg: "column" }}
          >
            <Box display={{ lg: "none" }}>
              <CardWithImageBackground
                h={cardHeight}
                w={cardWidth}
                displayContent={false}
                card={{
                  headingFieldName: "littleThingsCardheading1",
                  headingDefaultValue: "   ",
                  textFieldName: "littleThingsCardText1",
                  textDefaultValue: "   ",
                  imageFieldName: "littleThingsCardImage1",
                  imageDefaultValue: cards[0].image,
                }}
              />
            </Box>
            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              displayContent={false}
              card={{
                headingFieldName: "littleThingsCardheading2",
                headingDefaultValue: "   ",
                textFieldName: "littleThingsCardText2",
                textDefaultValue: "   ",
                imageFieldName: "littleThingsCardImage2",
                imageDefaultValue: cards[1].image,
              }}
            />

            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              displayContent={false}
              card={{
                headingFieldName: "littleThingsCardheading3",
                headingDefaultValue: "   ",
                textFieldName: "littleThingsCardText3",
                textDefaultValue: "   ",
                imageFieldName: "littleThingsCardImage3",
                imageDefaultValue: cards[2].image,
              }}
            />
          </Stack>
        </Flex>

        <Grid
          display={{ base: "grid", md: "none" }}
          pos="relative"
          bg="red"
          top="-15rem"
          placeItems="center"
        >
          <Image
            //zIndex={"-1"}
            pos="absolute"
            src="/images/home/little/shape_round.png"
            w="80%"
          />
          <Image
            //zIndex={"-1"}
            right={{ base: ".625rem", sm: 20 }}
            top="10rem"
            src="/images/home/little/shape.png"
            pos="absolute"
            boxSize="5.625rem"
          />
        </Grid>

        <Stack zIndex={"999"} maxW={{ lg: "50%" }} spacing="8" justify="center">
          <Heading
            fontSize={{ base: "md", md: "xl", xl: "2xl" }}
            lineHeight={{ base: "1.25rem", md: "2rem", xl: "2.5rem" }}
            mb="-2"
            whiteSpace="nowrap"
          >
            <Field.Text
              display={"inline-block"}
              name="littleThingsHeading1"
              defaultValue="Auch die <i>kleinsten</i><br/> Dinge machen viel <i>Freude</i>"
              rtf
            />
            <Text
              ml="2"
              pos="relative"
              as="span"
              fontSize={{ base: "xl", md: "2.75rem", xl: "4xl" }}
              variant="cursive"
              pr="8"
            >
              <Image
                //zIndex={"-1"}
                pointerEvents={"none"}
                display={{ base: "none", md: "block" }}
                right={{ md: "1.625rem", xl: "2.25rem" }}
                top={{
                  md: "-5rem",
                  xl: "-6.125rem",
                }}
                src="/images/home/little/shape.png"
                pos="absolute"
              />
            </Text>
          </Heading>
          <Heading fontSize={{ base: "sm", md: "md" }} fontWeight="semibold">
            <Field.Text
              display={"inline-block"}
              name="littleThingsSubheading"
              defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }} fontWeight="light">
            <Field.Text
              display={"inline-block"}
              name="text"
              defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            />
          </Text>
          <HStack
            justify="center"
            gap="4"
            flexDir={{ base: "row-reverse", md: "row" }}
          >
            <LinkButtonField
              name="littleThingsButton1"
              defaultValue="Zum Shop"
              size={{ base: "sm", md: "md" }}
            />
            <LinkButtonField
              name="littleThingsButton2"
              defaultValue="Großhandel"
              size={{ base: "sm", md: "md" }}
              variant="outline"
            />
          </HStack>
        </Stack>
      </Container>
    </Stack>
  )
}
export default LittleThingsSection
