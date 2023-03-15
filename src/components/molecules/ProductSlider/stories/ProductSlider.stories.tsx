import {ComponentMeta, ComponentStory} from '@storybook/react'

import * as ProductsPageStories from '../../../templates/ProductsTemplate/stories/ProductsTemplate.stories'
import {ProductSlider} from '../ProductSlider'

export default {
  title: 'Components/Molecules/ProductSlider',
  component: ProductSlider
} as ComponentMeta<typeof ProductSlider>

const Template: ComponentStory<typeof ProductSlider> = args => (
  <ProductSlider {...args} />
)

export const Default = Template.bind({})
Default.args = {
  heading: 'Related Products',
  products: ProductsPageStories.Default.args?.products ?? []
}
