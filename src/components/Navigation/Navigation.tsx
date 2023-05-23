import { Box, Stack, Text } from '@chakra-ui/react'
import { FC } from 'react'

import BottomNav from './BottomNav'
import { MobileNav } from './MobileNav'
import DesktopNav from './DesktopNav'

import { Navbar } from './Navbar'

import { useBasket } from '../../services/basket'
import { useSearch } from '../../services/search'
import { LayoutMode } from '../../types/commonTypes'
import { useContactModal } from '../../services/contact'
import TopNav from './TopNav'


interface INavigationProps {
  mode: LayoutMode
}

const Navigation: FC<INavigationProps> = ({ mode }) => {
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
      <TopNav display={mode === 'website' ? 'block' : 'none'} />
      <Box
        as="nav"
        zIndex="sticky"
        pos={mode === 'website' ? 'sticky' : 'relative'}
        top="0"
        bg='rgba(255,255,255,.9)'
        backdropFilter={"blur(7px)"}>
        <Stack display={{ base: 'none', lg: 'flex' }} spacing="0" clipPath={"inset( 0 0 -100vw 0 )"}>
          {/* <DesktopNav
            mode={mode}
            onSearchClick={handleOnSearchClick}
            onBasketClick={handleOnBasketClick}
          /> */}
          <Navbar
            mode={mode}
            onSearchClick={handleOnSearchClick}
            onBasketClick={handleOnBasketClick}
            onContactClick={handleOnContactClick}
          />
          {/*mode === 'website' && <BottomNav />*/}
        </Stack>
        <Box as="nav" display={{ base: 'block', lg: 'none' }}>
          <MobileNav
            mode={mode}
            onSearchClick={handleOnSearchClick}
            onBasketClick={handleOnBasketClick}
            //onContactClick={handleOnContactClick}
          />
        </Box>
      </Box>
    </>
  )
}

export default Navigation
