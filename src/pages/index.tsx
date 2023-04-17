import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {connectPage} from '@snek-at/jaen'
import {graphql, PageProps} from 'gatsby'

import HomePage from '../components/templates/HomeTemplate/Home'
import {Layout} from '../Layout'

const Page = (
  props: PageProps<{
    featuredProducts: {
      nodes: ShopifyProduct[]
    }
  }>
) => {
  return (
    <Layout pathname={props.path}>
      <HomePage featuredProducts={props.data.featuredProducts.nodes} />
    </Layout>
  )
}

export default connectPage(Page, {
  label: 'Home',
  children: ['KategorieA', 'KategorieB']
})

export const query = graphql`
  query ($featuredProductIds: [String!]!, $jaenPageId: String!) {
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
    featuredProducts: allShopifyProduct(
      filter: {id: {in: $featuredProductIds}}
    ) {
      nodes {
        ...shopifyProductData
      }
    }
  }
`
