import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import {WissenPage} from '../components/templates/WissenPage'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
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
        ...JaenPageDataStructure
        ... on JaenPage {
          jaenFields
          template
        }
      }
    }
  }
`

export {Head} from '@snek-at/jaen'
