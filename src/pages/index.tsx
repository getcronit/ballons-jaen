import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import HomePage from '../components/templates/HomeTemplate/Home'
import {Layout} from '../Layout'

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <HomePage />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'Home',
  children: ['KategorieA', 'KategorieB']
})

export const query = graphql`
  query ($jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
      children {
        ...JaenPageData
      }
    }
    allJaenPage {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageData
        }
      }
    }
  }
`
