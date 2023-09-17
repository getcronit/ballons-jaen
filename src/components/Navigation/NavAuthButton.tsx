import {
  Button,
  ButtonProps,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Tooltip
} from '@chakra-ui/react'
import {Link, navigate} from 'gatsby'
import {FaUser} from '@react-icons/all-files/fa/FaUser'
import {useIsClient} from '../../common/useIsClient'
import {useAuthenticationContext} from '@atsnek/jaen'
import {useBasket} from '../../services/basket'

export interface NavAuthButtonProps extends ButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = props => {
  const {user, openLoginModal, logout} = useAuthenticationContext()

  const basket = useBasket()

  const {isClient} = useIsClient()

  if (!isClient) {
    return null
  }

  const responsiveButton = (
    <IconButton
      variant="ghost"
      size="md"
      icon={
        <Icon filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))" as={FaUser} />
      }
      aria-label="Login"
      onClick={openLoginModal}
      {...props}
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
