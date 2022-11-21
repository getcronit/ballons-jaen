import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { Link, navigate } from "gatsby"
import { FC } from "react"
import {
  AiFillShop,
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai"
import { useBasket } from "../../services/basket"
import { LayoutMode } from "../../types/commonTypes"
import { NavAuthButton } from "./NavAuthButton"
interface ITopNavProps {
  mode: LayoutMode
  onBasketClick?: () => void
  onSearchClick?: () => void
}

const TopNav: FC<ITopNavProps> = ({ mode, onSearchClick, onBasketClick }) => {
  return (
    <Flex
      h={{ sm: 20, md: 16 }}
      py={2}
      justifyContent={"center"}
      alignItems="center"
      px="8"
      bg="#f4f4f4"
    >
      <Button
        position={"absolute"}
        left={2}
        size={"sm"}
        as={Link}
        to="/"
        display={mode === "website" ? "none" : undefined}
        leftIcon={<AiOutlineArrowLeft />}
      >
        <Image h=".875rem" w="10rem" src="/images/white_logo.png" />
      </Button>

      <Box>
        <Image
          display={mode === "website" ? "block" : "none"}
          cursor={"pointer"}
          onClick={() => navigate("/")}
          w={{ base: "20rem", "2xl": "26.25rem" }}
          h={{ base: "1.875rem", "2xl": "2.125rem" }}
          src="/images/red_logo.png"
          alt="logo"
        />
      </Box>

      <HStack position={"absolute"} right={2}>
        <NavAuthButton />
        {mode === "website" ? (
          <Button
            display={{
              base: "none",
              md: "flex",
            }}
            size={"sm"}
            as={Link}
            to="/products"
            leftIcon={<AiOutlineShop />}
          >
            Unsere Artikel
          </Button>
        ) : (
          <ButtonGroup>
            <Button
              size={"sm"}
              variant="outline"
              leftIcon={<AiOutlineSearch />}
              onClick={onSearchClick}
            >
              Nach Artikel suchen
            </Button>
            <Button
              size={"sm"}
              variant="outline"
              leftIcon={<AiOutlineShoppingCart />}
              onClick={onBasketClick}
            >
              Warenkorb
            </Button>
          </ButtonGroup>
        )}
      </HStack>
    </Flex>
  )
}
export default TopNav
