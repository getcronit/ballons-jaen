import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react'
import { connectBlock, Field } from '@snek-at/jaen'
import { FC } from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes'

const FaqQuestionAnswerItemSection = connectBlock(
  () => {
    return (
      <AccordionItem border="none">
        {({ isExpanded }) => (
          <Stack
            spacing="0"
            p={{ base: 4, md: 6, xl: 8 }}
            mb={{ base: 4, md: 6, xl: 8 }}
            borderRadius={{
              base: '.625rem',
              md: '1.25rem',
              xl: '1.875rem'
            }}
            boxShadow="light"
            borderWidth="1px"
            bg="white"
            borderColor={isExpanded ? 'red.500' : 'gray.200'}>
            <AccordionButton _hover={{ bg: 'none' }}>
              <HStack w="full">
                <Field.Text
                  ml="1"
                  size="b2415"
                  fontWeight="semibold"
                  textAlign="start"
                  name="question"
                  defaultValue="Frage?"
                />
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pr="4rem">
              <Field.Text
                size="b2012"
                name="antwort"
                defaultValue="Antwort"
              />
            </AccordionPanel>
          </Stack>
        )}
      </AccordionItem>
    )
  },
  {
    name: 'FaqQuestionAnswerItemSection',
    label: 'Frage und Antwort'
  }
)

interface IFaqQuestionAnswerProps { }

const FaqQuestionAnswer: FC<IFaqQuestionAnswerProps> = () => {
  const faqData = [
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.'
    },
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.'
    },
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.'
    },
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.'
    }
  ]
  return (
    <Box
      pb={{ base: '16rem', md: '10rem', lg: '20rem', xl: '30rem' }}
      bgImage="/images/faq/right_bg.svg"
      bgRepeat="no-repeat"
      bgPos={{
        base: 'right -5rem bottom 0',
        md: 'right -15rem bottom 0',
        '2xl': 'right -20rem bottom 0'
      }}
      bgSize={{ base: '55%', sm: '40%', md: '50%' }}>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Field.Section
          as={Accordion}
          props={{
            allowToggle: true
          }}
          name="FaqQuestionAnswerSection"
          label="Fragen und Antworten"
          blocks={[FaqQuestionAnswerItemSection]}
        />
      </Container>
    </Box>
  )
}
export default FaqQuestionAnswer
