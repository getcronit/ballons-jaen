import {
  Box,
  Circle,
  Container,
  Flex,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import LinkButtonField from '../../fields/LinkButtonField'

interface IAdviceSectionProps {}

const AdviceSection: FC<IAdviceSectionProps> = () => {
  return (
    <Box bg="white">
      <Container
        h={{base: 'auto', lg: '50rem'}}
        alignItems={{base: 'center', lg: 'center'}}
        justifyContent="space-between"
        py="8"
        flexDirection={{
          base: 'column-reverse',
          md: 'column-reverse',
          lg: 'row'
        }}
        as={Flex}
        gap="4"
        maxW={CONTAINER_MAX_WIDTH}>
        <Box flex="3">
          <Stack>
            <Flex gap={{base: 2, md: 4}}>
              <Field.RichText
                as={Heading}
                size="h5020"
                fontWeight="semibold"
                name="adviceTitle"
                defaultValue="<p>Lass dich von uns <i>beraten</i></p>"
              />
            </Flex>
            <Field.RichText
              size="b2012"
              variant="light"
              maxW="90%"
              name="adviceText"
              defaultValue={
                '<p>Wir sind für dich da und beraten dich gerne bei der Planung deiner Party. Wir haben viele Ideen und Tipps für dich parat.</p>'
              }
            />
            <Box pt="5">
              <LinkButtonField
                name="adviceButton"
                defaultUrl={`/dekoration`}
                defaultValue={'Zur Beratung'}
                variant="outline"
              />
            </Box>
          </Stack>
        </Box>
        <Box
          borderRadius={'50%'}
          boxSize={{
            md: 'sm',
            lg: 'md',
            xl: 'lg'
          }}
          bg="red"
          overflow="hidden">
          <Field.Image name="adviceImage" objectFit="cover" />
        </Box>
      </Container>
    </Box>
  )
}
export default AdviceSection
