import {
  ProductsPageContext,
  ProductsPageData
} from '@snek-at/gatsby-theme-shopify'
import {PageConfig, checkUserRoles} from '@atsnek/jaen'
import {PageProps} from 'gatsby'

import {ProductsTemplate} from '../components/templates/ProductsTemplate'
import {useAuth} from '@atsnek/jaen'
import {useProducts} from '../contexts/products'

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

  const auth = useAuth()

  const wholesale = checkUserRoles(auth.user, ['wholesale'])

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

export const pageConfig: PageConfig = {
  label: 'Onlineshop',
  icon: 'FaShopify',
  menu: {
    type: 'app',
    order: 150
  },
  withoutJaenFrameStickyHeader: true
}

export {Head} from '@atsnek/jaen'
