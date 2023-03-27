import {Box, HStack, Tag} from '@chakra-ui/react'
import {connectBlock, Field} from '@snek-at/jaen'

const BlogTagItem = connectBlock(
  () => {
    return (
      <Tag variant="normal">
        <Field.Text name="tagText" label="Text" defaultValue="Tag" />
      </Tag>
    )
  },
  {
    name: 'BlogTagItem',
    label: 'Tag'
  }
)

export const BlogTags: React.FC<{
  fieldName: string
}> = props => {
  return (
    <Box minW="24">
      <Field.Section
        as={HStack}
        props={{
          minH: '24px',
          spacing: '2'
        }}
        name={props.fieldName}
        label="Tags"
        blocks={[BlogTagItem]}
      />
    </Box>
  )
}
