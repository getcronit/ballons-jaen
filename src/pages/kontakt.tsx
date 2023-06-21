import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import {Layout} from '../Layout'
import ContactAboutUs from '../components/templates/ContactAboutUs/ContactAboutUs'

const Page = (props: PageProps) => {
  return (
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
      <ContactAboutUs />
    </Layout>
  )
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
