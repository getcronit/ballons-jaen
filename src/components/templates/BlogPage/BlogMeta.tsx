import {Box, Text} from '@chakra-ui/react'
import {Field} from '@atsnek/jaen'
import {today} from '../../../common/utils'

export const BlogMeta: React.FC = () => {
  return (
    <Box>
      <Text size="b2012" textAlign="end">
        Von{' '}
        <Field.Text
          asAs={'span'}
          size="b2012"
          fontWeight="bold"
          color="gray.700"
          name="author"
          defaultValue="Nik Doe"
        />
      </Text>
      <Field.Text
        size="b2012"
        textAlign="end"
        name="date"
        defaultValue={today()}
      />
    </Box>
  )
}
