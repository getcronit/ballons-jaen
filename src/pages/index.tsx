import {ShopifyProduct} from '@snek-at/gatsby-theme-shopify'
import {PageConfig, PageProps} from '@atsnek/jaen'
import {graphql} from 'gatsby'

import HomePage from '../components/templates/HomeTemplate/Home'

const Page = (
  props: PageProps<{
    featuredProducts: {
      nodes: ShopifyProduct[]
    }
  }>
) => {
  return <HomePage featuredProducts={props.data.featuredProducts.nodes} />
}

export default Page

export const pageConfig: PageConfig = {
  label: 'Ballons & Ballons',
  icon: 'FaHome',
  childTemplates: ['KategorieA', 'KategorieB', 'WissenArticlePage'],
  menu: {
    label: 'Startseite',
    type: 'app',
    order: 100
  }
}

export const query = graphql`
  query ($featuredProductIds: [String!]!, $jaenPageId: String!) {
    jaenPage(id: {eq: $jaenPageId}) {
      ...JaenPageData
      childPages {
        ...JaenPageChildrenData
      }
    }
    allJaenPage(filter: {id: {in: ["JaenPage /wissen/"]}}) {
      nodes {
        id
        childPages {
          ...JaenPageChildrenData
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

export {Head} from '@atsnek/jaen'
