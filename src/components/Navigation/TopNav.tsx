import {Box, Button, ButtonGroup, Flex, HStack, Image} from '@chakra-ui/react'
import {Link, navigate} from 'gatsby'
import {FC} from 'react'
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import {FaPhoneAlt} from 'react-icons/fa'
import {useContactModal} from '../../services/contact'

import {LayoutMode} from '../../types/commonTypes'
import {NavAuthButton} from './NavAuthButton'

interface ITopNavProps {
  mode: LayoutMode
  onBasketClick?: () => void
  onSearchClick?: () => void
}

const TopNav: FC<ITopNavProps> = ({mode, onSearchClick, onBasketClick}) => {
  const contactModal = useContactModal()

  return (
    <Flex
      h={{sm: 20, md: 16}}
      py={2}
      justifyContent="center"
      alignItems="center"
      px="8"
      // bg="#f4f4f4"
    >
      <Button
        position="absolute"
        left={2}
        size="sm"
        as={Link}
        to="/"
        display={mode === 'website' ? 'none' : undefined}
        leftIcon={<AiOutlineArrowLeft />}>
        <Image h=".875rem" w="10rem" src="/images/white_logo.png" />
      </Button>

      <Box>
        <Image
          display={mode === 'website' ? 'block' : 'none'}
          cursor="pointer"
          onClick={() => {
            void navigate('/')
          }}
          w={{base: '20rem', '2xl': '26.25rem'}}
          h={{base: '1.875rem', '2xl': '2.125rem'}}
          src="/images/red_logo.png"
          alt="logo"
        />
      </Box>

      <HStack position="absolute" right={2} spacing="1">
        <Button
          variant="outline"
          size="sm"
          leftIcon={<FaPhoneAlt />}
          onClick={() => {
            contactModal.onOpen({
              meta: {}
            })
          }}>
          Anfragen
        </Button>
        <NavAuthButton />

        {mode === 'website' ? (
          <Button
            display={{
              base: 'none',
              md: 'flex'
            }}
            size="sm"
            as={Link}
            to="/products"
            leftIcon={<AiOutlineShop />}>
            Unsere Artikel
          </Button>
        ) : (
          <ButtonGroup isAttached>
            <Button
              size="sm"
              leftIcon={<AiOutlineSearch />}
              onClick={onSearchClick}>
              Nach Artikel suchen
            </Button>
            <Button
              size="sm"
              leftIcon={<AiOutlineShoppingCart />}
              onClick={onBasketClick}>
              Warenkorb
            </Button>
          </ButtonGroup>
        )}
      </HStack>
    </Flex>
  )
}
export default TopNav
