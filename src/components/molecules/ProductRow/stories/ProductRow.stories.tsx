import {getProductTags} from '@snek-at/gatsby-theme-shopify'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {ProductRow} from '../ProductRow'
import data from './data'

export default {
  title: 'Components/Molecules/ProductRow',
  component: ProductRow
} as ComponentMeta<typeof ProductRow>

const Template: ComponentStory<typeof ProductRow> = args => (
  <ProductRow {...args} />
)

const shopifyProduct = data.shopifyProduct

const tags = getProductTags(shopifyProduct)

export const Default = Template.bind({})
Default.args = {
  title: shopifyProduct.title,
  featuredMedia: shopifyProduct.featuredMedia,
  categoryTags: tags.categoryTags,
  otherTags: tags.otherTags
}
