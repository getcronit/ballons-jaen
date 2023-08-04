import {connectTemplate} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import BlogPage from '../components/templates/BlogPage/BlogPage'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return <BlogPage />
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
    allJaenPage(filter: {id: {eq: "JaenPage /wissen/"}}) {
      nodes {
        id
        children {
          ...JaenPageChildrenData
        }
      }
    }
  }
`

export {Head} from '@snek-at/jaen'
