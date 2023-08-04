import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import {Layout} from '../Layout'
import ContactAboutUs from '../components/templates/ContactAboutUs/ContactAboutUs'

const Page = (props: PageProps) => {
  return <ContactAboutUs />
}

export default connectPage(Page, {
  label: 'Kontakt'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@snek-at/jaen'
