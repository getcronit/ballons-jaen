import {
  ProductPageContext,
  ProductPageData,
  ProductsPageContext,
  ProductsPageData,
  SearchProvider,
  ShopifyProduct,
  useProductSearch
} from '@snek-at/gatsby-theme-shopify'
import React, {createContext, useContext, useEffect} from 'react'

import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'
import ScrollToTop from './components/ScrollTop'

import {BasketDrawerProvider} from './services/basket'
import {ContactModalProvider} from './services/contact'
import {SearchModalProvider} from './services/search'

import {LayoutMode} from './types/commonTypes'
import {SideButtons} from './components/molecules/SideButtons'
import {navigate, PageProps} from 'gatsby'
import {AuthenticationProvider} from './services/authentication'
import Fonts from './styles/fonts'
import ProductsPageShell from './components/templates/ProductsTemplate/ProductsPageShell'
import {splitAllTags} from './components/templates/ProductsTemplate/splitAllTags'
import {metafieldIdentifiers} from './common/getProductMetafields'
import {ProductsTemplateProps} from './components/templates/ProductsTemplate/ProductsTemplate'
import {buildAllTags} from './components/templates/ProductsTemplate/buildAllTags'

export interface LayoutProps extends Omit<PageProps, 'children'> {
  children: React.ReactElement
}

export const Layout: React.FC<LayoutProps> = ({children, ...props}) => {
  const isStore = props.location.pathname.startsWith('/products')

  return (
    <ScrollToTop pathname={props.location.pathname}>
      <Fonts />

      <AuthenticationProvider>
        <ContactModalProvider location={props.location}>
          <BasketDrawerProvider>
            <SearchProvider>
              <SearchModalProvider>
                <Navigation
                  mode={isStore ? 'store' : 'website'}
                  pathname={props.location.pathname}
                />
                <SideButtons />
              </SearchModalProvider>
            </SearchProvider>

            {isStore ? (
              <SearchProvider>
                <ShopShell {...(props as any)}>{children}</ShopShell>
              </SearchProvider>
            ) : (
              <>{children}</>
            )}
          </BasketDrawerProvider>

          <Footer />
        </ContactModalProvider>
      </AuthenticationProvider>
    </ScrollToTop>
  )
}

export interface ShopShellProps
  extends Omit<
    PageProps<
      any,
      any,
      {
        activeTags?: string[]
      }
    >,
    'children'
  > {
  children: React.ReactElement
}

export const ShopShell: React.FC<ShopShellProps> = ({
  children,
  location,
  pageContext,
  data
}) => {
  const implicitTags =
    pageContext?.implicitTags ||
    data?.productsPage?.pageContext?.implicitTags ||
    []

  const tags = pageContext?.tags || data?.productsPage?.pageContext?.tags
  const vendors =
    pageContext?.vendors || data?.productsPage?.pageContext?.vendors
  const productTypes =
    pageContext?.productTypes || data?.productsPage?.pageContext?.productTypes

  const minPrice =
    pageContext?.minPrice || data?.productsPage?.pageContext?.minPrice
  const maxPrice =
    pageContext?.maxPrice || data?.productsPage?.pageContext?.maxPrice

  const prevActiveTags = location.state?.activeTags || []

  const splittedTags = prevActiveTags ? splitAllTags(prevActiveTags) : undefined

  const search = useProductSearch({
    metafieldIdentifiers,
    filters: {
      mainTag: implicitTags?.length > 0 ? implicitTags[0] : undefined,
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

  const updateFilter = (
    filters: Partial<ProductsTemplateProps['activeFilters']>
  ) => {
    search.onChangeFilter({
      ...filters,
      maxPrice: filters.maxPrice || undefined,
      minPrice: filters.minPrice || undefined
    })
  }

  const allTags = buildAllTags({
    tags,
    vendors,
    productTypes,
    minPrice,
    maxPrice
  })

  const allActiveTags = buildAllTags(search.filters)

  const updateTags = (tags: string[]) => {
    const {otherTags, productTypeTags, vendorTags} = splitAllTags(tags)

    updateFilter({
      tags: otherTags,
      productTypes: productTypeTags,
      vendors: vendorTags
    })

    void navigate('/products', {
      state: {
        activeTags: tags
      }
    })
  }

  // useEffect(() => {

  // }, [search.products, location.pathname])

  return (
    <ProductsContext.Provider
      value={{
        products: search.products,
        isFetching: search.isFetching,
        hasNextPage: search.hasNextPage,
        fetchNextPage: search.fetchNextPage,
        activeFilters: search.filters
      }}>
      <ProductsPageShell
        allTags={allTags}
        activeTags={allActiveTags}
        onActiveTagsChange={updateTags}
        sortOptions={['Alphabetisch', 'Preis aufsteigend', 'Preis absteigend']}
        onSortChange={onSortChange}>
        {children}
      </ProductsPageShell>
    </ProductsContext.Provider>
  )
}

// Define the products context type
interface ProductsContextType {
  products: ShopifyProduct[]
  isFetching: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
  activeFilters: Partial<{
    tags: ProductsPageContext['tags']
    vendors: ProductsPageContext['vendors']
    productTypes: ProductsPageContext['productTypes']
    minPrice: ProductsPageContext['minPrice']
    maxPrice: ProductsPageContext['maxPrice']
  }>
}

// Create a new context for the products
const ProductsContext = createContext<ProductsContextType>({
  products: [],
  isFetching: false,
  hasNextPage: false,
  fetchNextPage: () => {},
  activeFilters: {}
})

// Create a custom hook to access the products context
export const useProducts = () =>
  useContext<ProductsContextType>(ProductsContext)
