import {useDisclosure} from '@chakra-ui/react'
import React from 'react'

import {LoginModal} from '../components/organisms/LoginModal'

export interface AuthenticationContextProps {
  user?: {
    name: string
    email: string
  }
  openLoginModal: () => void
  logout: () => Promise<void>
}

export const AuthenticationContext =
  React.createContext<AuthenticationContextProps>({
    user: undefined,
    openLoginModal: () => {},
    logout: async () => {}
  })

export const useAuthentication = () => {
  if (!AuthenticationContext) {
    throw new Error(
      'useAuthentication must be used within a AuthenticationProvider'
    )
  }

  return React.useContext(AuthenticationContext)
}

export interface AuthenticationProviderProps {
  children: React.ReactNode
}

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
  children
}) => {
  const [user, setUser] = React.useState<AuthenticationContextProps['user']>({
    name: 'Nico Schett',
    email: 'schett@snek.at'
  })

  const login = React.useCallback(async (email: string, password: string) => {
    // sleep 3 seconds to simulate a network request

    await new Promise(resolve => setTimeout(resolve, 3000))

    // assume the login was successful

    setUser({
      name: 'John Doe',
      email: 'schett@snek.at'
    })

    return true
  }, [])

  const logout = React.useCallback(async () => {
    // sleep 3 seconds to simulate a network request

    await new Promise(resolve => setTimeout(resolve, 3000))

    // assume the logout was successful

    setUser(undefined)
  }, [])

  const loginModalDisclosure = useDisclosure()

  return (
    <AuthenticationContext.Provider
      value={{user, openLoginModal: loginModalDisclosure.onOpen, logout}}>
      <LoginModal
        isOpen={loginModalDisclosure.isOpen}
        onClose={loginModalDisclosure.onClose}
        onSubmit={async data => await login(data.email, data.password)}
      />
      {children}
    </AuthenticationContext.Provider>
  )
}
