import { Box, Text } from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'

export const BlogMeta: React.FC = () => {
  return (
    <Box>
      <Text size="b2012" textAlign="end">
        Von{' '}
        <Field.Text asAs={"span"} size="b2012" fontWeight="bold" color="gray.700" name="author" defaultValue="Nik Doe" />
      </Text>
      <Field.Text size="b2012" textAlign="end" name="date" defaultValue="12.12.2020" />
    </Box>
  )
}
