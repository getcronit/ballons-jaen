import {Box, Flex, Grid, GridItem, Heading, Stack, Text} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../constant/sizes'
import LinkButtonField from '../fields/LinkButtonField'

interface IHorizontalImageCardProps {
  card: {
    tagFieldName: string
    tagDefaultValue: string
    titleFieldName: string
    titleDefaultValue: string
    descriptionFieldName: string
    descriptionDefaultValue: string
    imageFieldName: string
    imageDefaultValue: string
    buttonTextFieldName: string
    buttonTextFieldDefaultValue: string
  }
  orientation: 'left' | 'right'
}

const HorizontalImageCard: FC<IHorizontalImageCardProps> = ({
  card,
  orientation
}) => {
  return (
    <Flex
      maxW={CONTAINER_MAX_WIDTH}
      borderRadius="xl"
      bg="white"
      boxShadow="dark"
      flexDir={{
        base: 'column',
        md: orientation === 'left' ? 'row' : 'row-reverse'
      }}>
      <Box
        borderRadius="xl"
        overflow="hidden"
        flex={{
          md: '1'
        }}
        h={'xs'}>
        <Field.Image name={card.imageFieldName} lightbox />
      </Box>
      <Stack
        flex="1"
        gap={{base: 2, md: 0}}
        spacing="0"
        px="10"
        justify="center"
        py="6"
        align={{base: 'center', md: 'start'}}>
        <Field.Text
          as={Heading}
          fontSize="md"
          fontWeight="semibold"
          textTransform="uppercase"
          display={{base: 'none', md: 'block'}}
          name={card.tagFieldName}
          defaultValue={card.tagDefaultValue}
        />
        <Field.RichText
          as={Heading}
          fontSize={{
            base: 'md',
            md: 'xl',
            lg: '2xl',
            xl: '3xl'
          }}
          fontWeight="semibold"
          name={card.titleFieldName}
          defaultValue={card.titleDefaultValue}
        />
        <Field.Text
          variant="light"
          size="b2012"
          textAlign={{base: 'center', md: 'start'}}
          name={card.descriptionFieldName}
          defaultValue={card.descriptionDefaultValue}
        />
        <Box>
          <LinkButtonField
            name={card.buttonTextFieldName}
            defaultValue={card.buttonTextFieldDefaultValue}
            mt={{base: '0', md: '4'}}
            size={{base: 'sm', lg: 'md'}}
            variant="outline"
          />
        </Box>
      </Stack>
    </Flex>
  )
}
export default HorizontalImageCard
