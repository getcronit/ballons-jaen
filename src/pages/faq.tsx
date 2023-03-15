import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import FaqPage from '../components/templates/Faq/Faq'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <FaqPage />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'FAQ'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
