import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'

export const FaqQuestionAnswer: React.FC<{
  question: string
  children: React.ReactNode
}> = ({question, children}) => {
  return (
    <AccordionItem border="none">
      {({isExpanded}) => (
        <Stack
          spacing="0"
          p={{base: 4, md: 6, xl: 8}}
          mb={{base: 4, md: 6, xl: 8}}
          borderRadius={{
            base: '.625rem',
            md: '1.25rem',
            xl: '1.875rem'
          }}
          boxShadow="light"
          borderWidth="1px"
          bg="white"
          borderColor={isExpanded ? 'red.500' : 'gray.200'}>
          <AccordionButton _hover={{bg: 'none'}}>
            <HStack w="full">
              <Text ml="1" size="b2415" fontWeight="semibold" textAlign="start">
                {question}
              </Text>
            </HStack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pr="4rem">
            <Text size="b2012">{children}</Text>
          </AccordionPanel>
        </Stack>
      )}
    </AccordionItem>
  )
}

FaqQuestionAnswer.defaultProps = {
  question: 'Question',
  children: 'Answer'
}
