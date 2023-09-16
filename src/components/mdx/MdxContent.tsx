import {Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react'
import {FC} from 'react'

// Default custom components (replaces HTML tags)
import {MdxField} from '@atsnek/jaen-fields-mdx'
import Link from './core/Link'
import Heading from './heading/Heading'
import List from './list/List'
import ListItem from './list/ListItem'
import Text from './text/Text'

export interface MdxContentProps {
  components?: {
    [key: string]: FC<any>
  }
}

export const MdxContent: React.FC<MdxContentProps> = ({components = {}}) => {
  return (
    <MdxField
      name="content"
      components={{
        // TEXT
        p: props => <Text {...props} />,
        h1: props => <Heading variant="h1" {...props} />,
        h2: props => <Heading variant="h2" {...props} />,
        h3: props => <Heading variant="h3" {...props} />,
        h4: props => <Heading variant="h4" {...props} />,
        h5: props => <Heading variant="h5" {...props} />,
        h6: props => <Heading variant="h6" {...props} />,
        // LIST
        ul: (props: any) => <List {...props}></List>,
        ol: (props: any) => <List variant="ordered" {...props}></List>,
        li: (props: any) => <ListItem {...props}></ListItem>,
        a: (props: any) => (
          <Link href={props.href} {...props} color="red.500" />
        ),
        // TABLE
        table: (props: any) => (
          <Table variant="striped" w="fit-content" {...props} />
        ),
        thead: (props: any) => <Thead {...props} />,
        tbody: (props: any) => <Tbody {...props} />,
        tr: (props: any) => <Tr {...props} />,
        th: (props: any) => <Th {...props} />,
        td: (props: any) => <Td {...props} />,
        // CUSTOM
        ...components
      }}
    />
  )
}
