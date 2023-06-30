import {ComponentMeta, ComponentStory} from '@storybook/react'

import {OrderModal} from '../OrderModal'

export default {
  title: 'Components/Organisms/OrderModal',
  component: OrderModal
} as ComponentMeta<typeof OrderModal>

const Template: ComponentStory<typeof OrderModal> = args => (
  <OrderModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  onSubmit: async () => {
    // sleep 3 seconds to simulate a network request
    return await new Promise(resolve => setTimeout(resolve, 3000))
  }
}
