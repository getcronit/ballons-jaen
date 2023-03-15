import React from 'react'

import {
  ContactFormValues,
  ContactModal
} from '../components/organisms/ContactModal'

export interface ContactModalContextProps {
  onOpen: ({meta}: {meta: object}) => void
  onClose: () => void
}

export const ContactModalContext =
  React.createContext<ContactModalContextProps>({
    onOpen: () => {},
    onClose: () => {}
  })

export const useContactModal = () => {
  if (!ContactModalContext) {
    throw new Error(
      'useContactModal must be used within a ContactModalProvider'
    )
  }

  return React.useContext(ContactModalContext)
}

export interface ContactModalDrawerProps {
  children: React.ReactNode
}

export const ContactModalProvider: React.FC<ContactModalDrawerProps> = ({
  children
}) => {
  const [meta, setMeta] = React.useState<object | null>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  const onOpen: ContactModalContextProps['onOpen'] = ({meta}) => {
    const updatedMeta = {
      ...meta,
      url: window.location.href
    }

    setMeta(updatedMeta)
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    // sleep 3 seconds to simulate a network request

    console.log(data, meta)

    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  return (
    <ContactModalContext.Provider value={{onOpen, onClose}}>
      {children}
      <ContactModal isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} />
    </ContactModalContext.Provider>
  )
}
