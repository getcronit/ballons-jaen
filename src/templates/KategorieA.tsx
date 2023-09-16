import {PageConfig} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'
import KategorieA from '../components/templates/KategorieA/KategorieA'

const Page = (props: PageProps) => {
  return <KategorieA />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Kategorie A',
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
