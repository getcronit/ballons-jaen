import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import ContactPage from '../components/templates/Contact/Contact'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <ContactPage />
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
