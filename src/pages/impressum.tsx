import {PageConfig} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'

import ImprintPage from '../components/templates/Imprint/Imprint'

const Page = (props: PageProps) => {
  return <ImprintPage />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Impressum',
  childTemplates: []
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@atsnek/jaen'
