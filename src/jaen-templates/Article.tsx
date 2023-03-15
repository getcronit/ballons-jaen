import {connectTemplate} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import BlogPage from '../components/templates/BlogPage/BlogPage'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <BlogPage />
    </Layout>
  )
}

export default connectTemplate(Page, {
  label: 'Artikel',
  children: []
})

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
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
