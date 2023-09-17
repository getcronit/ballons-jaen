import {Button, ButtonGroup, HStack, Icon, IconButton} from '@chakra-ui/react'
import {SearchProvider} from '@snek-at/gatsby-theme-shopify'
import {FaSearch} from '@react-icons/all-files/fa/FaSearch'
import {FaShoppingBasket} from '@react-icons/all-files/fa/FaShoppingBasket'

import {BasketDrawerProvider, useBasket} from '../../services/basket'
import {SearchModalProvider, useSearch} from '../../services/search'

export interface ToolbarProps {}

export const Toolbar: React.FC<ToolbarProps> = () => {
  return (
    <ButtonGroup>
      <SearchProvider>
        <SearchModalProvider>
          <SearchButton />
        </SearchModalProvider>
      </SearchProvider>
      <BasketDrawerProvider>
        <BasketButton />
      </BasketDrawerProvider>
    </ButtonGroup>
  )
}

const SearchButton: React.FC = () => {
  const search = useSearch()

  return (
    <>
      <Button
        display={{base: 'none', md: 'flex'}}
        leftIcon={<Icon as={FaSearch} color="brand.500" />}
        variant="outline"
        size="sm"
        onClick={() => {
          search.onOpen()
        }}>
        Suche
      </Button>

      <IconButton
        size="sm"
        variant="outline"
        display={{base: 'flex', md: 'none'}}
        aria-label="Search"
        color="brand.500"
        icon={<Icon as={FaSearch} color="brand.500 !important" />}
        onClick={() => search.onOpen()}
      />
    </>
  )
}

const BasketButton: React.FC = () => {
  const basket = useBasket()

  return (
    <IconButton
      size="sm"
      variant="outline"
      aria-label="Search"
      color="brand.500"
      icon={<Icon as={FaShoppingBasket} color="brand.500 !important" />}
      onClick={() => basket.onOpen()}
    />
  )
}
