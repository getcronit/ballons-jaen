import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import ImprintPage from '../components/templates/Imprint/Imprint'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return <ImprintPage />
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
