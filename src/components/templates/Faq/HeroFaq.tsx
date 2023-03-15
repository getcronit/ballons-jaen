import {Container, Flex, Heading, Text, VStack} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'

interface IHeroFaqProps {}

const HeroFaq: FC<IHeroFaqProps> = () => {
  return (
    <Container
      maxW="87.5rem"
      bgImage="/images/faq/top_bg.svg"
      bgRepeat="no-repeat"
      bgPos={{base: 'left 4% top 20%', xl: 'left 11rem top 0'}}
      bgSize={{base: '25%', xl: 'auto'}}
      py="5rem"
      my="5%">
      <VStack>
        <Flex gap={{base: 2, md: 4}}>
          <Heading
            size="h5030"
            as="span"
            fontWeight="semibold"
            whiteSpace="nowrap">
            <Field.Text
              rtf
              name="faqTitle"
              label="Titel"
              defaultValue="<p>Häufig gestellte <i>Fragen</i></p>"
            />
          </Heading>
        </Flex>
        <Text
          size="b2415"
          fontWeight="light"
          maxW="800px"
          textAlign="center"
          as="span">
          <Field.Text
            name="faqSubtitle"
            label="Subtitel"
            defaultValue={`<p>Wir beantworten hier Fragen, welche wir häufig von unseren Kunden
          hören. Lies dich gerne ein! Falls du weitere Fragen hast, stehen wir
          dir natürlich gerne zur Verfügung. <b>+43 2 326 34 25.</b></p>`}
          />
        </Text>
      </VStack>
    </Container>
  )
}
export default HeroFaq
