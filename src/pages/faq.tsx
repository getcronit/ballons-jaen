import {PageConfig} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'

import FaqPage from '../components/templates/Faq/Faq'

const Page = (props: PageProps) => {
  return <FaqPage />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Frage & Antwort',
  icon: 'FaQuestion',
  childTemplates: [],
  menu: {
    type: 'app',
    order: 400
  }
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@atsnek/jaen'
