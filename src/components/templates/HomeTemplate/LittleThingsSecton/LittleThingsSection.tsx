import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import CardWithImageBackground from '../../../CardWithImageBackground'
import LinkButtonField from '../../../fields/LinkButtonField'

interface ILittleThingsSectionProps {}

const LittleThingsSection: FC<ILittleThingsSectionProps> = () => {
  const cards = [
    {
      image: '/images/home/little/little_section_1.png'
    },
    {
      image: '/images/home/little/little_section_2.png'
    },
    {
      image: '/images/home/little/little_section_3.png'
    }
  ]

  const cardHeight = {
    base: '12.5rem',
    sm: '15rem',
    md: '17.5rem',
    lg: '20rem',
    xl: '22.5rem'
  }

  const cardWidth = {
    base: '10rem',
    sm: '12.5rem',
    md: '15rem',
    xl: '17.5rem'
  }

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
          <Stack flex="1" justify="center">
            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              minW={'none'}
              displayContent={false}
              card={{
                headingFieldName: 'Cardheading1',
                headingDefaultValue: '   ',
                textFieldName: 'CardText1',
                textDefaultValue: '   ',
                imageFieldName: 'CardImage1',
                imageDefaultValue: undefined
              }}
            />
          </Stack>

          <Stack
            gap="4"
            spacing="0"
            h="full"
            w="full"
            align="center"
            justify="center">
            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              minW={'none'}
              displayContent={false}
              card={{
                headingFieldName: 'Cardheading2',
                headingDefaultValue: '   ',
                textFieldName: 'CardText2',
                textDefaultValue: '   ',
                imageFieldName: 'CardImage2',
                imageDefaultValue: undefined
              }}
            />

            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              minW={'none'}
              displayContent={false}
              card={{
                headingFieldName: 'Cardheading3',
                headingDefaultValue: '   ',
                textFieldName: 'CardText3',
                textDefaultValue: '   ',
                imageFieldName: 'CardImage3',
                imageDefaultValue: undefined
              }}
            />
          </Stack>
        </Flex>

        <Stack
          // zIndex={'999'}
          maxW={{
            xl: '50%'
          }}
          spacing="8"
          justify="center">
          <Heading
            fontSize={{base: 'md', md: 'xl', xl: '2xl'}}
            lineHeight={{base: '1.25rem', md: '2rem', xl: '2.5rem'}}
            mb="-2"
            whiteSpace="nowrap">
            <Field.Text
              name="Heading1"
              label="Heading"
              defaultValue="<p>Auch die <i>kleinsten</i><br/> Dinge machen viel <i>Freude</i></p>"
              rtf
            />
          </Heading>
          <Heading fontSize={{base: 'sm', md: 'md'}} fontWeight="semibold">
            <Field.Text
              name="subtitle"
              label="Subtitle"
              defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
            />
          </Heading>
          <Text fontSize={{base: 'sm', md: 'md'}} fontWeight="light" as="span">
            <Field.Text
              name="text"
              label="Text"
              defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
            />
          </Text>
          <HStack
            justify="center"
            gap="4"
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
          </HStack>
        </Stack>
      </Container>
    </Stack>
  )
}
export default LittleThingsSection
