import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { AiOutlineUser } from "react-icons/ai"
import { useAuthentication } from "../../services/authentication"
import { useBasket } from "../../services/basket"

export interface NavAuthButtonProps {}

export const NavAuthButton: React.FC<NavAuthButtonProps> = () => {
  const { user, openLoginModal, logout } = useAuthentication()

  const basket = useBasket()

  const buttons = [
    <Button
    key='login'
      display={{ base: "none", md: "flex" }}
      size={"sm"}
      variant="outline"
      leftIcon={<AiOutlineUser />}
      onClick={openLoginModal}
    >
      {user ? user.name : "Login"}
    </Button>,

    <IconButton
      key='basket'
      display={{ base: "flex", md: "none" }}
      variant="ghost"
      icon={<AiOutlineUser />}
      aria-label="Login"
      onClick={openLoginModal}
    />,
  ]

  if (!user) {
    return <>{buttons}</>
  }

  return (
    <Menu>
      <MenuButton as="span">{buttons}</MenuButton>

      <MenuList>
        <MenuItem as={Link} to="/products">
          Großhandel
        </MenuItem>
        <MenuItem onClick={basket.onOpen}>Mein Warenkorb</MenuItem>
        <MenuDivider />
        <MenuItem onClick={logout}>Abmelden</MenuItem>
      </MenuList>
    </Menu>
  )
}
