import {graphql, PageProps} from 'gatsby'
import {WissenArticlePage} from '../components/templates/WissenArticlePage'

const Page = (props: PageProps) => {
  return <WissenArticlePage />
}

export default Page

export const pageConfig = {
  label: 'Wissens Eintrag',
  childTemplates: []
}

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
    }
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
