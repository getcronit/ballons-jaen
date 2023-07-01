import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import GroßhandelPage from '../components/templates/Großhandel/Großhandel'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
      <GroßhandelPage />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'Großhandel'
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
