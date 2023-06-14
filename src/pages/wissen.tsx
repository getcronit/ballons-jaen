import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import {WissenPage} from '../components/templates/WissenPage'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <WissenPage />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'Wissensübersicht',
  children: ['WissenArticlePage']
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
