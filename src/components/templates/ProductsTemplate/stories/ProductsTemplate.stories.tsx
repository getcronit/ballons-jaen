import {ComponentMeta, ComponentStory} from '@storybook/react'

import {ProductsTemplate} from '../ProductsTemplate'
import data from './data'

export default {
  title: 'Components/Templates/ProductsTemplate',
  component: ProductsTemplate,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof ProductsTemplate>

const Template: ComponentStory<typeof ProductsTemplate> = args => (
  <ProductsTemplate {...args} />
)

export const Default = Template.bind({})
Default.args = {
  products: data.products,
  filters: data.filters,
  path: '/products',
  sortOptions: data.sortOptions,
  activeFilters: {}
}
