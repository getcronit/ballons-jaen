import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

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
    onSubmit: (data) => {
      // sleep 3 seconds to simulate a network request
      return new Promise((resolve) => setTimeout(resolve, 3000))
    }
}
