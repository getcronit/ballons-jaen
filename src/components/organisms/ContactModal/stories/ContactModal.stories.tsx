import {ComponentMeta, ComponentStory} from '@storybook/react'

import {ContactModal} from '../ContactModal'

export default {
  title: 'Components/Organisms/ContactModal',
  component: ContactModal
} as ComponentMeta<typeof ContactModal>

const Template: ComponentStory<typeof ContactModal> = args => (
  <ContactModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  onSubmit: async () => {
    // sleep 3 seconds to simulate a network request
    return await new Promise(resolve => setTimeout(resolve, 3000))
  }
}
