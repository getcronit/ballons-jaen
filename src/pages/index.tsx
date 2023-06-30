import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {connectPage, PageProps} from '@snek-at/jaen'
import {graphql} from 'gatsby'

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
    <Layout
      location={{
        pathname: props.location.pathname,
        search: props.location.search
      }}>
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
        ...JaenPageDataStructure
        ... on JaenPage {
          jaenFields
          template
        }
      }
    }
    allJaenPage(filter: {id: {in: ["JaenPage /", "JaenPage /news/"]}}) {
      nodes {
        ...JaenPageData
        children {
          ...JaenPageDataStructure
          ... on JaenPage {
            jaenFields
            template
          }
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

export {Head} from '@snek-at/jaen'
