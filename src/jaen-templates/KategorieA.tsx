import {connectTemplate} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import KategorieA from '../components/templates/KategorieA/KategorieA'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
      <KategorieA />
    </Layout>
  )
}

export default connectTemplate(Page, {
  label: 'Kategorie A',
  children: []
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
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
