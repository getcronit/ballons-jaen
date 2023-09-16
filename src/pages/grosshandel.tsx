import {PageConfig} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'

import GroßhandelPage from '../components/templates/Großhandel/Großhandel'

const Page = (props: PageProps) => {
  return <GroßhandelPage />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Großhandel',
  icon: 'FaWarehouse',
  childTemplates: [],
  menu: {
    type: 'app',
    order: 200
  }
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
