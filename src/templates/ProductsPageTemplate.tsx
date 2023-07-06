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
import {metafieldIdentifiers} from '../common/getProductMetafields'

import {ProductsTemplate} from '../components/templates/ProductsTemplate'
import {
  ProductsTemplateProps,
  splitAllTags
} from '../components/templates/ProductsTemplate/ProductsTemplate'
import {Layout} from '../Layout'
import {useAuthentication} from '../services/authentication'

export type ProductsPageTemplateProps = PageProps<
  ProductsPageData,
  ProductsPageContext,
  {
    activeTags: string[]
  }
>

const ProductsPageTemplate: React.FC<ProductsPageTemplateProps> = props => {
  const {implicitTags, tags, maxPrice, minPrice, vendors, productTypes} =
    props.pageContext

  const prevActiveTags = props.location.state?.activeTags

  const splittedTags = prevActiveTags ? splitAllTags(prevActiveTags) : undefined

  const search = useProductSearch({
    metafieldIdentifiers,
    filters: {
      mainTag: implicitTags.length > 0 ? implicitTags[0] : undefined,
      tags: splittedTags?.otherTags,
      vendors: splittedTags?.vendorTags,
      productTypes: splittedTags?.productTypeTags
    }
  })

  const onSortChange = (sort: string) => {
    let sortKey

    let reverse

    switch (sort) {
      case 'Alphabetisch':
        sortKey = 'TITLE'
        reverse = false
        break
      case 'Preis aufsteigend':
        sortKey = 'PRICE'
        reverse = false
        break
      case 'Preis absteigend':
        sortKey = 'PRICE'
        reverse = true
        break
      default:
        sortKey = 'TITLE'
        reverse = false
    }

    search.onChangeOptions({
      sortKey,
      reverse
    })
  }

  const updateFilter = (filters: Partial<ProductsTemplateProps['filters']>) => {
    search.onChangeFilter({
      ...filters,
      maxPrice: filters.maxPrice || undefined,
      minPrice: filters.minPrice || undefined
    })
  }

  const auth = useAuthentication()

  const wholesale = !!auth.user

  return (
    <>
      <Layout
        location={{
          pathname: props.location.pathname,
          search: props.location.search
        }}
        mode="store">
        <ProductsTemplate
          wholesale={wholesale}
          path={props.path}
          products={search.products}
          isFetching={search.isFetching}
          hasNextPage={search.hasNextPage}
          fetchNextPage={search.fetchNextPage}
          filters={{
            tags,
            vendors,
            productTypes,
            minPrice,
            maxPrice
          }}
          activeFilters={search.filters}
          updateFilter={updateFilter}
          sortOptions={[
            'Alphabetisch',
            'Preis aufsteigend',
            'Preis absteigend'
          ]}
          onSortChange={onSortChange}
        />
      </Layout>
    </>
  )
}

export default (props: ProductsPageTemplateProps) => (
  <SearchProvider>
    <ProductsPageTemplate {...props} />
  </SearchProvider>
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
