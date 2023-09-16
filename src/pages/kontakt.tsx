import {PageConfig} from '@atsnek/jaen'
import {graphql, PageProps} from 'gatsby'

import ContactAboutUs from '../components/templates/ContactAboutUs/ContactAboutUs'

const Page = (props: PageProps) => {
  return <ContactAboutUs />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Kontakt',
  icon: 'FaPhone',
  menu: {type: 'app', order: 500},
  childTemplates: []
}

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@atsnek/jaen'
