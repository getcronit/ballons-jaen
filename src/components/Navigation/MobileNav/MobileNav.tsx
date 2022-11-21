import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Link as CLink,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"
import { FC } from "react"
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai"
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5"
import { Link } from "gatsby"
import { navlinks } from "../../../constant/navLink"
import { LayoutMode } from "../../../types/commonTypes"
import { NavAuthButton } from "../NavAuthButton"

interface IMobileNavProps {
  mode?: LayoutMode
  onSearchClick?: () => void
  onBasketClick: () => void
}

const MobileNav: FC<IMobileNavProps> = ({
  mode,
  onSearchClick,
  onBasketClick,
}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Box
        px="4"
        boxShadow={mode === "website" ? "dark" : "light"}
        pos="relative"
        bg="white"
        zIndex="sticky"
      >
        <Flex h="3.75rem" justify="space-between" align="center">
          {mode === "website" ? (
            <Box fontSize="xl" onClick={onToggle}>
              {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
            </Box>
          ) : (
            <IconButton
              as={Link}
              to="/"
              icon={<AiOutlineArrowLeft />}
              aria-label="Zur Website"
              variant="link"
              size="xs"
            />
              
          )}

          <Box>
            <Image h=".875rem" w="10rem" src="/images/red_logo.png" />
          </Box>
          <HStack gap="0" justifySelf="end" spacing='0'>
            <NavAuthButton />
            {mode === "website" ? (
              <IconButton
                as={Link}
                to="/products"
                icon={<AiOutlineShop />}
                aria-label="Shop"
                onClick={onSearchClick}
              />
            ) : (
              <ButtonGroup spacing='0'>
                <IconButton
                  variant="ghost"
                  icon={<AiOutlineSearch />}
                  aria-label="Nach Artikel suchen"
                  onClick={onSearchClick}
                />
                <IconButton
                  variant="ghost"
                  icon={<AiOutlineShoppingCart />}
                  aria-label="Warenkorb"
                  onAbort={onBasketClick}
                />
              </ButtonGroup>
            )}
          </HStack>
        </Flex>
        {isOpen && (
          <Stack
            align="center"
            pos="absolute"
            bg="white"
            w="full"
            left="0"
            px="4"
            pb="8"
            zIndex="5"
          >
            <Divider />
            {navlinks.map((link, index) => {
              return (
                <CLink
                  as={Link}
                  to={link.path}
                  onClick={onToggle}
                  key={index}
                  w="full"
                  textAlign="center"
                  _hover={{ fontWeight: "bold", transition: "0.2s ease-in" }}
                  fontSize="1.125rem"
                  transition="0.2s ease-in"
                  color="brand.dark_gray"
                >
                  {link.label}
                </CLink>
              )
            })}
          </Stack>
        )}
      </Box>
      <Box
        onClick={onToggle}
        display={isOpen ? "block" : "none"}
        bg="rgba(0,0,0,0.7)"
        h="100vh"
        pos="absolute"
        top="0"
        left="0"
        zIndex="3"
        w="full"
      ></Box>
    </>
  )
}
export default MobileNav
