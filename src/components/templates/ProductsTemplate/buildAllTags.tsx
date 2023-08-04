import {ProductsTemplateProps, SpecialTagOptions} from './ProductsTemplate'

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
