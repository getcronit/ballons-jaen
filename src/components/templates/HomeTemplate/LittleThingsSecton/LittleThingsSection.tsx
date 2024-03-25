import {
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field, PhotoProvider} from '@atsnek/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import CardWithImageBackground from '../../../CardWithImageBackground'
import LinkButtonField from '../../../fields/LinkButtonField'
import {ImageCard} from '../../../organisms/ImageCard'

interface ILittleThingsSectionProps {}

const LittleThingsSection: FC<ILittleThingsSectionProps> = () => {
  return (
    <Stack
      minH={'100vh'}
      bg="white"
      py="20"
      px={{base: 0, sm: 4, md: 8}}
      align="center"
      justify="center">
      <Container
        justifyContent="space-between"
        as={Flex}
        gap={{base: 32, xl: 8}}
        flexDirection={{base: 'column', xl: 'row'}}
        maxW={CONTAINER_MAX_WIDTH}>
        <Flex gap="4" justify="center" alignSelf="center">
          <PhotoProvider maskOpacity={0.8}>
            <Stack flex="1" justify="center">
              <ImageCard name="CardImage1" />
            </Stack>

            <Stack
              gap="4"
              spacing="0"
              h="full"
              w="full"
              align="center"
              justify="center">
              <ImageCard name="CardImage2" />
              <ImageCard name="CardImage3" />
            </Stack>
          </PhotoProvider>
        </Flex>

        <Stack
          // zIndex={'999'}
          maxW={{
            xl: '50%'
          }}
          spacing="8"
          justify="center">
          <Field.Text
            as={Heading}
            fontSize={{base: 'md', md: 'xl', xl: '2xl'}}
            lineHeight={{base: '1.25rem', md: '2rem', xl: '2.5rem'}}
            mb="-2"
            whiteSpace="nowrap"
            name="littleThingsHeading"
            defaultValue="Auch die <i>kleinsten</i><br/> Dinge machen viel <i>Freude</i>"
          />
          <Field.Text
            //as={Heading}
            name="littleThingsSubheading"
            fontSize={{base: 'sm', md: 'md'}}
            fontWeight="semibold"
            defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          />
          <Field.Text
            name="littleThingsText"
            fontSize={{base: 'sm', md: 'md'}}
            fontWeight="light"
            defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
          <Flex
            justify="left"
            justifyContent="left"
            flexDir={{base: 'row-reverse', md: 'row'}}>
            <LinkButtonField
              name="littleThingsButton1"
              defaultValue="Zum Shop"
              defaultUrl={`/products`}
              size={{base: 'sm', md: 'md'}}
            />
            <LinkButtonField
              name="littleThingsButton2"
              defaultValue="Großhandel"
              defaultUrl={`/grosshandel`}
              size={{base: 'sm', md: 'md'}}
              variant="outline"
            />
          </Flex>
        </Stack>
      </Container>
    </Stack>
  )
}
export default LittleThingsSection
