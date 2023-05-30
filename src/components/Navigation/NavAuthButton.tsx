import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip
} from '@chakra-ui/react'
import {Link, navigate} from 'gatsby'
import {FaUser} from 'react-icons/fa'
import {useIsClient} from '../../common/useIsClient'
import {useAuthentication} from '../../services/authentication'
import {useBasket} from '../../services/basket'

export interface NavAuthButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = () => {
  const {user, openLoginModal, logout} = useAuthentication()

  const basket = useBasket()

  const {isClient} = useIsClient()

  if (!isClient) {
    return null
  }

  const responsiveButton = (
    <IconButton
      variant="ghost"
      size="md"
      icon={<FaUser />}
      aria-label="Login"
      onClick={openLoginModal}
    />
  )

  if (!user) {
    return <Tooltip label="Login">{responsiveButton}</Tooltip>
  }

  return (
    <Menu>
      <Tooltip label="Mein Konto">
        <MenuButton>{responsiveButton}</MenuButton>
      </Tooltip>

      <MenuList>
        <MenuItem
          onClick={() => {
            navigate('/products')
          }}>
          Großhandel
        </MenuItem>
        <MenuItem onClick={basket.onOpen}>Mein Warenkorb</MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            void logout()
          }}>
          Abmelden
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
