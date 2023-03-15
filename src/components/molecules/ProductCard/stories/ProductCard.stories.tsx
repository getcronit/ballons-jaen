import {ComponentMeta, ComponentStory} from '@storybook/react'

import * as ProductPageStories from '../../../templates/ProductTemplate/stories/ProductTemplate.stories'
import {ProductCard} from '../ProductCard'

export default {
  title: 'Components/Molecules/ProductCard',
  component: ProductCard,
  decorators: [
    storyFn => (
      <div
        style={{
          width: '300px',
          height: '300px',
          margin: '100px'
        }}>
        {storyFn()}
      </div>
    )
  ]
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = args => (
  <ProductCard {...args} />
)

export const Default = Template.bind({})
Default.args = {
  product: ProductPageStories.Default.args?.shopifyProduct
}

export const WithBorderline = Template.bind({})
WithBorderline.args = {
  product: ProductPageStories.Default.args?.shopifyProduct,
  borderline: true
}
