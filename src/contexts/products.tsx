import {
  ProductsPageContext,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import {createContext, useContext} from 'react'

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
export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  isFetching: false,
  hasNextPage: false,
  fetchNextPage: () => {},
  activeFilters: {}
})
// Create a custom hook to access the products context

export const useProducts = () =>
  useContext<ProductsContextType>(ProductsContext)
