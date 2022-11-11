import {
  getFormattedProductPrices,
  getProductTags,
  ProductPageContext,
  ProductPageData,
  ProductsPageContext,
  SearchProvider,
} from "@snek-at/gatsby-theme-shopify"
import { graphql, navigate, PageProps } from "gatsby"
import React from "react"

import { Layout } from "../Layout"
import { ProductTemplate } from "../components/templates/ProductTemplate"
import { buildAllTags } from "../components/templates/ProductsTemplate/ProductsTemplate"
import { SEO } from "@jaenjs/jaen"

export type ProductPageTemplateProps = PageProps<
ProductPageData & {
  productsPage: {
    pageContext: ProductsPageContext
  }
},
ProductPageContext
>

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = (
  props
) => {
  const { shopifyProduct, relatedProducts, productsPage } = props.data

  const buildProductPageMeta = () => {
    let title = shopifyProduct.title
    let description =
      shopifyProduct.description +
      ` | Produkttyp: ${shopifyProduct.productType}` +
      ` | Hersteller: ${shopifyProduct.vendor}`

    return {
      title,
      description,
      image:
        shopifyProduct.featuredMedia?.image.gatsbyImageData.images.fallback
          ?.src,
      datePublished: shopifyProduct.createdAt,
    }
  }

  console.log("shopifyProduct: ", props.data.shopifyProduct)

  const handleOnGoBack = () => {
    navigate(-1)
  }

  const allTags = buildAllTags({
    tags: productsPage.pageContext.tags,
    vendors: productsPage.pageContext.vendors,
    productTypes: productsPage.pageContext.productTypes,
  })

  return (
    <>
      <SEO pagePath={props.path} pageMeta={buildProductPageMeta()} />
      <Layout pathname={props.path} mode={"store"}>
        <ProductTemplate
          path={props.path}
          allTags={allTags}
          shopifyProduct={props.data.shopifyProduct}
          relatedProducts={props.data.relatedProducts}
          onWishlistAdd={() => {}}
          isOnWishList={false}
          onGoBack={handleOnGoBack}
        />
      </Layout>
    </>
  )
}

export const query = graphql`
  query ($productId: String!, $relatedProductIds: [String!]!) {
    relatedProducts: allShopifyProduct(
      filter: { id: { in: $relatedProductIds } }
    ) {
      nodes {
        ...shopifyProductData
      }
    }
    shopifyProduct(id: { eq: $productId }) {
      ...shopifyProductData
    }
    productsPage: sitePage(id: { eq: "SitePage /products" }) {
      pageContext
    }
  }
`

export default (props: ProductPageTemplateProps) => (
  <SearchProvider>
    <ProductPageTemplate {...props} />
  </SearchProvider>
)