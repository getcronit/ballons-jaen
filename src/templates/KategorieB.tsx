import {PageConfig, usePageContext} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'

import KategorieB from '../components/templates/KategorieB/KategorieB'

const Page = (props: PageProps) => {
  return <KategorieB />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Kategorie B',
  childTemplates: []
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
    allJaenPage(filter: {id: {eq: "JaenPage /wissen/"}}) {
      nodes {
        id
        childPages {
          ...JaenPageChildrenData
        }
      }
    }
  }
`

export {Head} from '@atsnek/jaen'
