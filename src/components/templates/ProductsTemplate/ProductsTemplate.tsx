import {Box, Button, Center, Heading} from '@chakra-ui/react'
import {
  ProductsPageContext,
  ShopifyProduct
} from '@snek-at/gatsby-theme-shopify'
import React from 'react'
import {useIsInViewport} from '../../../common/utils'

import {ProductGrid} from '../../molecules/ProductGrid'
import SimpleCategorySidebar from './ProductsPageShell'

enum SpecialTagOptions {
  ProductType = 'Typ',
  Vendor = 'Hersteller'
}

export function buildAllTags(
  filters:
    | ProductsTemplateProps['filters']
    | ProductsTemplateProps['activeFilters']
) {
  return [
    ...(filters?.tags || []),
    ...(filters?.vendors?.map(
      vendor => `${SpecialTagOptions.Vendor}:${vendor}`
    ) || []),
    ...(filters?.productTypes?.map(
      productType => `${SpecialTagOptions.ProductType}:${productType}`
    ) || [])
  ]
}

export function splitAllTags(tags: string[]) {
  const productTypeTags = []
  const vendorTags = []
  const otherTags = []

  for (const tag of tags) {
    if (tag.startsWith(SpecialTagOptions.ProductType + ':')) {
      const [, productType] = tag.split(':')

      if (productType) productTypeTags.push(productType)
    } else if (tag.startsWith(SpecialTagOptions.Vendor + ':')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, vendor] = tag.split(':')
      if (vendor) vendorTags.push(vendor)
    } else {
      if (tag) otherTags.push(tag)
    }
  }
  return {otherTags, productTypeTags, vendorTags}
}

export interface ProductsTemplateProps {
  path: string
  products: ShopifyProduct[]
  filters: {
    tags: ProductsPageContext['tags']
    vendors: ProductsPageContext['vendors']
    productTypes: ProductsPageContext['productTypes']
    minPrice: ProductsPageContext['minPrice']
    maxPrice: ProductsPageContext['maxPrice']
  }
  activeFilters: Partial<ProductsTemplateProps['filters']>
  isFetching: boolean
  hasNextPage: boolean
  fetchNextPage: () => void
  updateFilter: (filter: ProductsTemplateProps['activeFilters']) => void
  sortOptions: string[]
  onSortChange: (sort: string) => void
  wholesale: boolean
}

export const ProductsTemplate = (props: ProductsTemplateProps) => {
  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)

  const isButtonInViewport = useIsInViewport(loadMoreButtonRef)

  React.useEffect(() => {
    if (isButtonInViewport) {
      loadMoreButtonRef.current?.click()
    }
  }, [isButtonInViewport])

  const updateTags = (tags: string[]) => {
    const {otherTags, productTypeTags, vendorTags} = splitAllTags(tags)

    props.updateFilter({
      tags: otherTags,
      productTypes: productTypeTags,
      vendors: vendorTags
    })
  }

  const allTags = buildAllTags(props.filters)

  const allActiveTags = buildAllTags(props.activeFilters)

  return (
    <SimpleCategorySidebar
      allTags={allTags}
      activeTags={allActiveTags}
      onActiveTagsChange={updateTags}
      sortOptions={props.sortOptions}
      onSortChange={props.onSortChange}>
      <Box w="100%" p={2}>
        <ProductGrid
          wholesale={props.wholesale}
          products={props.products}
          columns={{base: 2, sm: 2, md: 3, lg: 3, xl: 4, '2xl': 5}}
          spacing={4}
        />

        <Center my={4}>
          {props.products.length === 0 && !props.isFetching ? (
            <Heading as="h2" size="lg" mt={4}>
              Keine Artikel gefunden
            </Heading>
          ) : (
            <Button
              ref={loadMoreButtonRef}
              variant="outline"
              onClick={() => {
                if (props.isFetching) return
                props.fetchNextPage()
              }}
              disabled={
                props.isFetching || !props.products.length || !props.hasNextPage
              }
              isLoading={props.isFetching}>
              Mehr Artikel laden
            </Button>
          )}
        </Center>
      </Box>
    </SimpleCategorySidebar>
  )
}
