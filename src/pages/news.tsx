import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import BlogOverview from '../components/templates/BlogOverview/BlogOverview'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
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
    allJaenPage(filter: {id: {eq: "JaenPage /wissen/"}}) {
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
