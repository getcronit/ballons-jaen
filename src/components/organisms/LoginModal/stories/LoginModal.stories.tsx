import {ComponentMeta, ComponentStory} from '@storybook/react'

import {LoginModal} from '../LoginModal'

export default {
  title: 'Components/Organisms/LoginModal',
  component: LoginModal
} as ComponentMeta<typeof LoginModal>

const Template: ComponentStory<typeof LoginModal> = args => (
  <LoginModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  onSubmit: async () => {
    // sleep 3 seconds to simulate a network request
    return await new Promise(resolve => setTimeout(resolve, 3000))
  }
}
