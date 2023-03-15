import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import {Link, navigate} from 'gatsby'
import {FC} from 'react'
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import {FaPhoneAlt} from 'react-icons/fa'

import {IoCloseOutline, IoMenuOutline} from 'react-icons/io5'
import {useContactModal} from '../../../services/contact'
import {LayoutMode} from '../../../types/commonTypes'
import {NavAuthButton} from '../NavAuthButton'
import {NavLinks} from '../NavLinks'

interface IMobileNavProps {
  mode?: LayoutMode
  onSearchClick?: () => void
  onBasketClick: () => void
}

const MobileNav: FC<IMobileNavProps> = ({
  mode,
  onSearchClick,
  onBasketClick
}) => {
  const {isOpen, onToggle} = useDisclosure()

  const contactModal = useContactModal()

  return (
    <>
      <Box
        px="4"
        boxShadow={mode === 'website' ? 'dark' : 'light'}
        pos="relative"
        bg="white"
        zIndex="sticky">
        <Flex h="3.75rem" justify="space-between" align="center">
          {mode === 'website' ? (
            <IconButton
              aria-label="Open menu"
              variant="ghost"
              icon={isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
              fontSize="xl"
              onClick={onToggle}
            />
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
            <Image
              onClick={() => {
                void navigate('/')
              }}
              h=".875rem"
              w="10rem"
              src="/images/red_logo.png"
            />
          </Box>
          <HStack gap="0" justifySelf="end" spacing="0">
            <NavAuthButton />
            {mode === 'website' ? (
              <IconButton
                as={Link}
                to="/products"
                icon={<AiOutlineShop />}
                aria-label="Shop"
                onClick={onSearchClick}
              />
            ) : (
              <ButtonGroup spacing="0">
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
                  onClick={onBasketClick}
                />
              </ButtonGroup>
            )}
          </HStack>
        </Flex>
        <Drawer placement="left" onClose={onToggle} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Image
                onClick={() => {
                  void navigate('/')
                }}
                h=".875rem"
                w="10rem"
                src="/images/red_logo.png"
              />
            </DrawerHeader>
            <Divider />
            <DrawerBody>
              <Stack spacing="8" pt="4">
                <NavLinks
                  childrenTextAlign="left"
                  w="full"
                  px="2"
                  zIndex="5"
                  spacing="6"
                  fontSize="md"
                  onClick={onToggle}
                />

                <Stack
                  direction="row"
                  justify="space-between"
                  align="center"
                  spacing="4"
                  mt="4">
                  <Button
                    w="full"
                    leftIcon={<FaPhoneAlt />}
                    onClick={() => {
                      contactModal.onOpen({
                        meta: {}
                      })
                    }}>
                    Serivce
                  </Button>
                </Stack>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box
        onClick={onToggle}
        display={isOpen ? 'block' : 'none'}
        bg="rgba(0,0,0,0.7)"
        h="100vh"
        pos="absolute"
        top="0"
        left="0"
        zIndex="3"
        w="full"></Box>
    </>
  )
}
export default MobileNav
