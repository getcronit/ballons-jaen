import {connectTemplate} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import KategorieB from '../components/templates/KategorieB/KategorieB'

import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <KategorieB />
    </Layout>
  )
}

export default connectTemplate(Page, {
  label: 'Kategorie B',
  children: []
})

export const query = graphql`
  query ($jaenPageId: String!) {
    ...JaenPageQuery
  }
`
