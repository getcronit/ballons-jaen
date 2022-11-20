import {ComponentMeta, ComponentStory} from '@storybook/react'
import React from 'react'

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
    onSubmit: (data) => {
      // sleep 3 seconds to simulate a network request
      return new Promise((resolve) => setTimeout(resolve, 3000))
    }
}
