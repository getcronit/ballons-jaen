import {
  ProductPageContext,
  ProductPageData,
  ProductsPageContext,
  SearchProvider
} from '@snek-at/gatsby-theme-shopify'
import {connectTemplate, Head as JaenHead, PageProps} from '@snek-at/jaen'
import {graphql, navigate} from 'gatsby'
import React from 'react'

import {buildAllTags} from '../components/templates/ProductsTemplate/ProductsTemplate'
import {ProductTemplate} from '../components/templates/ProductTemplate'

import {Layout} from '../Layout'
import {useAuthentication} from '../services/authentication'

export type ProductPageTemplateProps = PageProps<
  ProductPageData & {
    productsPage: {
      pageContext: ProductsPageContext
    }
  },
  ProductPageContext
>

const ProductPageTemplate = connectTemplate<ProductPageTemplateProps>(
  props => {
    const {productsPage} = props.data

    const handleOnGoBack = () => {
      void navigate(-1)
    }

    const allTags = buildAllTags({
      tags: productsPage.pageContext.tags,
      vendors: productsPage.pageContext.vendors,
      productTypes: productsPage.pageContext.productTypes
    })

    const auth = useAuthentication()

    const wholesale = !!auth.user

    return (
      <>
        {/* <SEO pagePath={props.path} pageMeta={buildProductPageMeta()} /> */}
        <Layout
          location={{
            pathname: props.location.pathname,
            search: props.location.search
          }}
          mode="store">
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
        </Layout>
      </>
    )
  },
  {
    label: 'ProductPageTemplate',
    children: []
  }
)

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

export default (props: ProductPageTemplateProps) => (
  <SearchProvider>
    <ProductPageTemplate {...props} />
  </SearchProvider>
)

// export const Head = (props: ProductPageTemplateProps) => {
//   const {shopifyProduct} = props.data

//   const buildProductPageMeta = () => {
//     const title = shopifyProduct.title
//     const description = shopifyProduct.description
//     const longDescription =
//       description +
//       ` | Produkttyp: ${shopifyProduct.productType}` +
//       ` | Hersteller: ${shopifyProduct.vendor}`

//     return {
//       title,
//       description,
//       longDescription,
//       image:
//         shopifyProduct.featuredMedia?.image.gatsbyImageData?.images?.fallback?.src
//     }
//   }

//   const meta = buildProductPageMeta()

//   return (
//     <JaenHead {...(props as any)}>
//       <title id="title">
//         {meta.title} | {meta.description}
//       </title>
//       <meta name="meta-description" content={meta.longDescription} />
//       <meta id="meta-image" name="image" content={meta.image} />
//     </JaenHead>
//   )
// }

// export const Head = (props: ProductPageTemplateProps) => {
//   return (
//     <JaenHead {...(props as any)}>
//       <title id="title">AGT GunTrade - Artikel</title>
//       <meta
//         id="meta-description"
//         name="description"
//         content="Alle Artikel von AGT GunTrade im Überblick"
//       />
//     </JaenHead>
//   )
// }

export const Head = (props: ProductPageTemplateProps) => {
  const shopifyProduct = props.data.shopifyProduct

  return (
    <JaenHead
      {...(props as any)}
      jaenPageMetadata={{
        title: `${shopifyProduct.title} | Ballons & Ballons`,
        description:
          shopifyProduct.description +
          ` | Produkttyp: ${shopifyProduct.productType}` +
          ` | Hersteller: ${shopifyProduct.vendor}`,
        datePublished: new Date(shopifyProduct.createdAt).toISOString(),
        image:
          shopifyProduct.featuredMedia?.image?.gatsbyImageData?.images?.fallback
            ?.src
      }}
    />
  )
}
