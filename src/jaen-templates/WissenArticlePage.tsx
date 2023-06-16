import {connectTemplate, Editor} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import BlogPage from '../components/templates/BlogPage/BlogPage'
import {WissenArticlePage} from '../components/templates/WissenArticlePage'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <WissenArticlePage />
    </Layout>
  )
}

export default connectTemplate(Page, {
  label: 'Wissen',
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

export {Head} from '@snek-at/jaen'