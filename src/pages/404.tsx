import {Text} from '@chakra-ui/react'
import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <>
      <Text>404</Text>
    </>
  )
}

export default connectPage(Page, {
  label: '404'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@snek-at/jaen'
