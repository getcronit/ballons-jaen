import {Box, Text} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'

export const BlogMeta: React.FC = () => {
  return (
    <Box>
      <Text size="b2012" textAlign="end">
        Von{' '}
        <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
          <Field.Text name="author" label="Author" defaultValue="Nik Doe" />
        </Text>
      </Text>
      <Text size="b2012" textAlign="end" as="span">
        <Field.Text name="date" label="Datum" defaultValue="12.12.2020" />
      </Text>
    </Box>
  )
}
