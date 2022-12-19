import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import { connectSection, Field } from "@jaenjs/jaen"
import { FC } from "react"
import { BiChevronDown } from "react-icons/bi"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

const FaqQuestionAnswerItemSection = connectSection(
  () => {
    return (
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <Stack
            spacing="0"
            p={{ base: 4, md: 6, xl: 8 }}
            mb={{ base: 4, md: 6, xl: 8 }}
            borderRadius={{
              base: ".625rem",
              md: "1.25rem",
              xl: "1.875rem",
            }}
            boxShadow="light"
            borderWidth="1px"
            bg="white"
            borderColor={isExpanded ? "red.500" : "gray.200"}
          >
            <AccordionButton _hover={{ bg: "none" }}>
              <HStack w="full">
                <Text
                  ml="1"
                  size="b2415"
                  fontWeight="semibold"
                  textAlign="start"
                  as="span"
                >
                  <Field.Text name="question" defaultValue="Frage?" />
                </Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel as={Text} pr="4rem">
              <Text size="b2012" as="span">
                <Field.Text name="antwort" defaultValue="Antwort" />
              </Text>
            </AccordionPanel>
          </Stack>
        )}
      </AccordionItem>
    )
  },
  {
    name: "FaqQuestionAnswerItemSection",
    displayName: "Frage und Antwort",
  }
)

interface IFaqQuestionAnswerProps {}

const FaqQuestionAnswer: FC<IFaqQuestionAnswerProps> = () => {
  const faqData = [
    {
      question: "Wie lange dauert die Lieferung?",

      answer:
        " Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.",
    },
    {
      question: "Wie lange dauert die Lieferung?",

      answer:
        " Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.",
    },
    {
      question: "Wie lange dauert die Lieferung?",

      answer:
        " Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.",
    },
    {
      question: "Wie lange dauert die Lieferung?",

      answer:
        " Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.",
    },
  ]
  return (
    <Box
      pb={{ base: "16rem", md: "10rem", lg: "20rem", xl: "30rem" }}
      bgImage="/images/faq/right_bg.svg"
      bgRepeat="no-repeat"
      bgPos={{
        base: "right -5rem bottom 0",
        md: "right -15rem bottom 0",
        "2xl": "right -20rem bottom 0",
      }}
      bgSize={{ base: "55%", sm: "40%", md: "50%" }}
    >
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Field.Section
          as={Accordion}
          props={{
            allowToggle: true,
          }}
          name="FaqQuestionAnswerSection"
          displayName="Fragen und Antworten"
          sections={[FaqQuestionAnswerItemSection]}
        />
      </Container>
    </Box>
  )
}
export default FaqQuestionAnswer
