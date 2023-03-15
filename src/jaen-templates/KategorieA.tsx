import {connectTemplate} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'
import KategorieA from '../components/templates/KategorieA/KategorieA'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <KategorieA />
    </Layout>
  )
}

export default connectTemplate(Page, {
  label: 'Kategorie A',
  children: []
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
