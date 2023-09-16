import {
  ProductPageContext,
  ProductPageData,
  ProductsPageContext,
  SearchProvider
} from '@snek-at/gatsby-theme-shopify'
import {Head as JaenHead, PageConfig, PageProps} from '@atsnek/jaen'
import {graphql, navigate} from 'gatsby'
import React from 'react'

import {buildAllTags} from '../components/templates/ProductsTemplate/buildAllTags'
import {ProductTemplate} from '../components/templates/ProductTemplate'

import {useAuthenticationContext} from '@atsnek/jaen'

export type ProductPageTemplateProps = PageProps<
  ProductPageData & {
    productsPage: {
      pageContext: ProductsPageContext
    }
  },
  ProductPageContext
>

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = props => {
  const {productsPage} = props.data

  const handleOnGoBack = () => {
    void navigate(-1)
  }

  const allTags = buildAllTags({
    tags: productsPage.pageContext.tags,
    vendors: productsPage.pageContext.vendors,
    productTypes: productsPage.pageContext.productTypes
  })

  const auth = useAuthenticationContext()

  const wholesale = !!auth.user

  return (
    <>
      {/* <SEO pagePath={props.path} pageMeta={buildProductPageMeta()} /> */}
      <ProductTemplate
        path={props.path}
        wholesale={wholesale}
        allTags={allTags}
        shopifyProduct={props.data.shopifyProduct}
        relatedProducts={props.data.relatedProducts}
        onWishlistAdd={() => {}}
        isOnWishList={false}
        onGoBack={handleOnGoBack}
      />
    </>
  )
}

export const query = graphql`
  query ($productId: String!, $relatedProductIds: [String!]!) {
    relatedProducts: allShopifyProduct(filter: {id: {in: $relatedProductIds}}) {
      nodes {
        ...shopifyProductData
      }
    }
    shopifyProduct(id: {eq: $productId}) {
      ...shopifyProductData
    }
    productsPage: sitePage(id: {eq: "SitePage /products/"}) {
      pageContext
    }
  }
`

export default (props: ProductPageTemplateProps) => (
  <SearchProvider>
    <ProductPageTemplate {...props} />
  </SearchProvider>
)

export const pageConfig: PageConfig = {
  label: 'Produktseite',
  showInNodeGraphVisualizer: false,
  withoutJaenFrameStickyHeader: true
}

export const Head = (props: ProductPageTemplateProps) => {
  const shopifyProduct = props.data.shopifyProduct

  return (
    <JaenHead
      {...(props as any)}
      data={{
        ...props.data,
        jaenPage: {
          ...props.data.jaenPage,
          jaenPageMetadata: {
            ...props.data.jaenPage?.jaenPageMetadata,
            title: shopifyProduct.title,
            description:
              shopifyProduct.description +
              ` | Produkttyp: ${shopifyProduct.productType}` +
              ` | Hersteller: ${shopifyProduct.vendor}`,
            datePublished: new Date(shopifyProduct.createdAt).toISOString(),
            image:
              shopifyProduct.featuredMedia?.image?.gatsbyImageData?.images
                ?.fallback?.src
          }
        }
      }}
    />
  )
}
