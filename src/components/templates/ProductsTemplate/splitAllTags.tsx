import {SpecialTagOptions} from './ProductsTemplate'

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
