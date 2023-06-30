import {useDisclosure} from '@chakra-ui/react'
import {snekResourceId} from '@snek-at/jaen'
import {getTokenPair, setTokenPair, sq} from '@snek-functions/origin'
import React, {useEffect} from 'react'

import {LoginModal} from '../components/organisms/LoginModal'

export interface AuthenticationContextProps {
  user?: {
    firstName?: string
    lastName?: string
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
  const [user, setUser] =
    React.useState<AuthenticationContextProps['user']>(undefined)

  const login = React.useCallback(async (login: string, password: string) => {
    // sleep 3 seconds to simulate a network request

    await new Promise(resolve => setTimeout(resolve, 3000))

    const [loginData, errors] = await sq.mutate(Mutation => {
      const signIn = Mutation.userSignIn({
        login,
        password,
        resourceId: snekResourceId
      })

      return {
        tokenPair: {
          accessToken: signIn.tokenPair.accessToken,
          refreshToken: signIn.tokenPair.refreshToken
        },
        user: {
          firstName: signIn.user.details.firstName,
          lastName: signIn.user.details.lastName,
          email: signIn.user.primaryEmailAddress
        }
      }
    })

    setTokenPair(loginData.tokenPair)

    if (errors) {
      return false
    }

    // assume the login was successful

    setUser({
      firstName: loginData.user.firstName || undefined,
      lastName: loginData.user.lastName || undefined,
      email: loginData.user.email
    })

    return true
  }, [])

  const boostrap = React.useCallback(async () => {
    // check if tokenpair is set

    const tokenPair = getTokenPair()

    if (!tokenPair) {
      return
    }

    const [loginData, errors] = await sq.query(Query => {
      const user = Query.userMe

      return {
        firstName: user.details.firstName,
        lastName: user.details.lastName,
        email: user.primaryEmailAddress
      }
    })

    if (errors) {
      return
    }

    setUser({
      firstName: loginData.firstName || undefined,
      lastName: loginData.lastName || undefined,
      email: loginData.email
    })
  }, [])

  useEffect(() => {
    boostrap()
  }, [])

  const logout = React.useCallback(async () => {
    setUser(undefined)
    setTokenPair(null)

    localStorage.removeItem('isAuthenticated')
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
