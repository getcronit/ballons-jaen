import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import ImprintPage from '../components/templates/Imprint/Imprint'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
      <ImprintPage />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'Impressum'
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`

export {Head} from '@snek-at/jaen'
