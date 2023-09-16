import {PageConfig} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'

import {WissenPage} from '../components/templates/WissenPage'

const Page = (props: PageProps) => {
  return <WissenPage />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Wissen',
  icon: 'FaLightbulb',
  childTemplates: ['WissenArticlePage', 'KategorieA', 'KategorieB'],
  menu: {
    type: 'app',
    order: 300
  }
}

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
      childPages {
        ...JaenPageChildrenData
      }
    }
  }
`

export {Head} from '@atsnek/jaen'
