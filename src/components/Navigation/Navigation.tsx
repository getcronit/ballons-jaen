import { Box, Stack, Text } from '@chakra-ui/react'
import { FC } from 'react'

import BottomNav from './BottomNav'
import MobileNav from './MobileNav/MobileNav'
import TopNav from './TopNav'

import { useBasket } from '../../services/basket'
import { useSearch } from '../../services/search'
import { LayoutMode } from '../../types/commonTypes'
//import Simple from './Navbar'
import DesktopNav from './DesktopNav'

interface INavigationProps {
  mode: LayoutMode
}

const Navigation: FC<INavigationProps> = ({ mode }) => {
  const basket = useBasket()
  const search = useSearch()

  const handleOnBasketClick = () => {
    basket.onOpen()
  }

  const handleOnSearchClick = () => {
    search.onOpen()
  }

  return (
    <>
      {mode === 'website' && (
        <Box bg="black.500" color="white" justifyContent={'center'} zIndex={"999"}>
          <Text textAlign="center" fontSize="sm">
            Inspiriert von der Leichtigkeit eines Ballons, streben wir nach
            unendlichen Möglichkeiten.
          </Text>
        </Box>
      )}
      <Box
        as="nav"
        zIndex="sticky"
        pos={mode === 'website' ? 'sticky' : 'relative'}
        top="0"
        bg='rgba(255,255,255,.9)'
        backdropFilter={"blur(7px)"}
      >
        <Box>
          {/* <Simple /> */}
          <DesktopNav
            mode={mode}
            onSearchClick={handleOnSearchClick}
            onBasketClick={handleOnBasketClick}
          />
        </Box>
        {/* <Stack display={{base: 'none', lg: 'flex'}} spacing="0">
        <TopNav
          mode={mode}
          onSearchClick={handleOnSearchClick}
          onBasketClick={handleOnBasketClick}
        />
        {mode === 'website' && <BottomNav />}
      </Stack>
      <Box as="nav" display={{base: 'block', lg: 'none'}}>
        <MobileNav
          mode={mode}
          onSearchClick={handleOnSearchClick}
          onBasketClick={handleOnBasketClick}
        />
      </Box> */}
      </Box>
    </>
  )
}

export default Navigation
