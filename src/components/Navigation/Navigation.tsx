import {Box, Stack} from '@chakra-ui/react'
import {FC} from 'react'

import {Navbar} from './Navbar'

import {useBasket} from '../../services/basket'
import {useContactModal} from '../../services/contact'
import {useSearch} from '../../services/search'
import {LayoutMode} from '../../types/commonTypes'
import TopNav from './TopNav'

interface INavigationProps {
  mode: LayoutMode
}

const Navigation: FC<INavigationProps> = ({mode}) => {
  const basket = useBasket()
  const search = useSearch()
  const contactModal = useContactModal()

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
        as="nav"
        zIndex="sticky"
        pos={mode === 'website' ? 'sticky' : 'relative'}
        top="0"
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
