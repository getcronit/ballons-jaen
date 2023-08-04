import {
  ProductsPageContext,
  ProductsPageData,
  SearchProvider,
  useProductSearch
} from '@snek-at/gatsby-theme-shopify'
import {Head as JaenHead} from '@snek-at/jaen'
import {PageProps} from 'gatsby'
import {getImageData, getLowResolutionImageURL} from 'gatsby-plugin-image'
import {getShopifyImage} from 'gatsby-source-shopify'
import {useEffect} from 'react'
import {metafieldIdentifiers} from '../common/getProductMetafields'

import {ProductsTemplate} from '../components/templates/ProductsTemplate'
import {ProductsTemplateProps} from '../components/templates/ProductsTemplate/ProductsTemplate'
import {splitAllTags} from '../components/templates/ProductsTemplate/splitAllTags'
import {Layout, useProducts} from '../Layout'
import {useAuthentication} from '../services/authentication'

export type ProductsPageTemplateProps = PageProps<
  ProductsPageData,
  ProductsPageContext,
  {
    activeTags: string[]
  }
>

const ProductsPageTemplate: React.FC<ProductsPageTemplateProps> = props => {
  const {products, isFetching, hasNextPage, fetchNextPage, activeFilters} =
    useProducts()

  const auth = useAuthentication()

  const wholesale = !!auth.user

  return (
    <ProductsTemplate
      wholesale={wholesale}
      path={props.path}
      products={products}
      activeFilters={activeFilters}
      isFetching={isFetching}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    />
  )
}

export default (props: ProductsPageTemplateProps) => (
  <ProductsPageTemplate {...props} />
)

export const Head = (props: ProductsPageTemplateProps) => {
  return (
    <JaenHead
      {...(props as any)}
      jaenPageMetadata={{
        title: `Ballons & Ballons - Artikel`,
        description: `Alle Artikel von Ballons & Ballons auf einen Blick`
      }}
    />
  )
}
