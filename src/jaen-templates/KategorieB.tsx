import {connectTemplate} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import KategorieB from '../components/templates/KategorieB/KategorieB'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return <KategorieB />
}

export default connectTemplate(Page, {
  label: 'Kategorie B',
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
