import {Box, Heading, Stack, Text} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'
import LinkButtonField from '../../../fields/LinkButtonField'

interface INewsContentProps {}

const NewsContent: FC<INewsContentProps> = () => {
  return (
    <Stack
      spacing={4}
      align={{base: 'center', lg: 'start'}}
      textAlign={{base: 'center', lg: 'start'}}>
      <Text
        mb={{base: '-8', md: '-12', lg: '-16 !important'}}
        fontSize={{base: 'xl', md: '4xl', lg: '7xl'}}
        variant="cursive"
        as="span">
        <Field.Text name="newsHeading" label="Heading" defaultValue="News" />
      </Text>
      <Heading fontSize={{base: 'md', md: '4xl'}}>
        <Field.Text
          name="newsHeading2"
          label="Heading"
          defaultValue="Bleib auf dem Laufenden"
        />
      </Heading>
      <Box w="3.4375rem" h=".375rem" bg="black" />
      <Heading fontWeight="semibold" fontSize="lg">
        <Field.Text
          name="newssubtitle"
          label="Subtitle"
          defaultValue="Gute Dekoration ist kein Zufall"
        />
      </Heading>
      <Text
        fontSize={{base: 'sm', md: 'md'}}
        maxW={{sm: '60%', md: '50%'}}
        mb="4 !important"
        as="span">
        <Field.Text
          name="newsText"
          label="Text"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper"
        />
      </Text>
      <LinkButtonField
        name="newsButton"
        defaultValue="Alle News anzeigen"
        defaultUrl={`/news`}
        size={{base: 'sm', lg: 'md'}}
        fontSize={{base: 'sm', md: '1.375rem'}}
        w={{base: '12.5rem', md: '16.875rem'}}
      />
    </Stack>
  )
}
export default NewsContent
