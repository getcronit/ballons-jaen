import {Box, Stack} from '@chakra-ui/react'
import {FC} from 'react'

import {Navbar} from './Navbar'

import {useBasket} from '../../services/basket'
import {useContactModal} from '../../services/contact'
import {useSearch} from '../../services/search'
import {LayoutMode} from '../../types/commonTypes'
import TopNav from './TopNav'
import {useAuthentication} from '@snek-at/jaen'

interface INavigationProps {
  mode: LayoutMode
  pathname: string
}

const Navigation: FC<INavigationProps> = ({mode, pathname}) => {
  const basket = useBasket()
  const search = useSearch()
  const contactModal = useContactModal()

  const {isAuthenticated} = useAuthentication()

  const handleOnBasketClick = () => {
    basket.onOpen()
  }

  const handleOnSearchClick = () => {
    search.onOpen()
  }

  const handleOnContactClick = () => {
    contactModal.onOpen({
      meta: {}
    })
  }

  return (
    <>
      <TopNav
        paddingTop={isAuthenticated ? '3.5rem' : undefined}
        display={
          mode === 'website'
            ? {
                base: 'none',
                lg: 'flex'
              }
            : 'none'
        }
      />
      <Box
        // mt={isAuthenticated ? '3.5rem' : undefined}
        as="nav"
        zIndex="1"
        pos={mode === 'website' ? 'sticky' : 'relative'}
        top={
          mode === 'website' ? (isAuthenticated ? '3.5rem' : '0') : undefined
        }
        mt={mode === 'store' ? (isAuthenticated ? '3.5rem' : '0') : undefined}
        bg="rgba(255,255,255,.9)"
        backdropFilter={'blur(7px)'}>
        <Stack
          spacing="0"
          clipPath={
            mode === 'website'
              ? {
                  base: 'none',
                  lg: 'inset( 0 0 -100vw 0 )'
                }
              : 'none'
          }>
          <Navbar
            pathname={pathname}
            mode={mode}
            onSearchClick={handleOnSearchClick}
            onBasketClick={handleOnBasketClick}
            onContactClick={handleOnContactClick}
          />
        </Stack>
      </Box>
    </>
  )
}

export default Navigation
