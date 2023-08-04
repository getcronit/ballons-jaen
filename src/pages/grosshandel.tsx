import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import GroßhandelPage from '../components/templates/Großhandel/Großhandel'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return <GroßhandelPage />
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
