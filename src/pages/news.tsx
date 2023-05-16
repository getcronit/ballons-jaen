import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import BlogOverview from '../components/templates/BlogOverview/BlogOverview'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <BlogOverview />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'News',
  children: ['Article']
})

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
      children {
        ...JaenPageData
      }
    }
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`

export {Head} from '@snek-at/jaen'
