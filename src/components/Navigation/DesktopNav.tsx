import { Box, Button, ButtonGroup, Container, Flex, HStack, IconButton, Image } from '@chakra-ui/react'
import { Link, navigate } from 'gatsby'
import { FC } from 'react'
import {
  AiOutlineArrowLeft,
  AiOutlineSearch,
  AiOutlineShop,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { useContactModal } from '../../services/contact'

import { LayoutMode } from '../../types/commonTypes'
import { NavAuthButton } from './NavAuthButton'
import { SearchbarButton } from '../molecules/Searchbar'

interface IDesktopNavProps {
  mode: LayoutMode
  onBasketClick?: () => void
  onSearchClick?: () => void
}

const DesktopNav: FC<IDesktopNavProps> = ({ mode, onSearchClick, onBasketClick }) => {
  const contactModal = useContactModal()

  // return (
  //   <Flex
  //     h={{sm: 20, md: 16}}
  //     py={0}
  //     justifyContent="center"
  //     alignItems="center"
  //     px="8"
  //     // bg="#f4f4f4"
  //   >
  //     {/* <Button
  //       position="absolute"
  //       left={2}
  //       size="sm"
  //       as={Link}
  //       to="/"
  //       display={mode === 'website' ? 'none' : undefined}
  //       leftIcon={<AiOutlineArrowLeft />}>
  //       <Image h=".875rem" w="10rem" src="/images/white_logo.png" />
  //     </Button> */}

  //     <Box>
  //       <Image
  //         //display={mode === 'website' ? 'block' : 'none'}
  //         cursor="pointer"
  //         onClick={() => {
  //           void navigate('/')
  //         }}
  //         w={{base: '20rem', '2xl': '26.25rem'}}
  //         h={{base: '1.875rem', '2xl': '2.125rem'}}
  //         src="/images/red_logo.png"
  //         alt="logo"
  //       />
  //     </Box>

  //     <SearchbarButton mx={"50px"} onClick={onSearchClick} />

  //     <HStack right={2} spacing="1">
  //       <NavAuthButton />
  //       <Button
  //         variant="outline"
  //         size="sm"
  //         leftIcon={<FaPhoneAlt />}
  //         onClick={() => {
  //           contactModal.onOpen({
  //             meta: {}
  //           })
  //         }}>
  //         Anfragen
  //       </Button>

  //       {mode === 'website' ? (
  //         <Button
  //           display={{
  //             base: 'none',
  //             md: 'flex'
  //           }}
  //           size="sm"
  //           as={Link}
  //           to="/products"
  //           leftIcon={<AiOutlineShop />}>
  //           Unsere Artikel
  //         </Button>
  //       ) : (
  //         <ButtonGroup isAttached>
  //           <Button
  //             size="sm"
  //             leftIcon={<AiOutlineSearch />}
  //             onClick={onSearchClick}>
  //             Nach Artikel suchen
  //           </Button>
  //           <Button
  //             size="sm"
  //             leftIcon={<AiOutlineShoppingCart />}
  //             onClick={onBasketClick}>
  //             Warenkorb
  //           </Button>
  //         </ButtonGroup>
  //       )}
  //     </HStack>
  //   </Flex>
  // )
  return (
    <>
      {/* <BottomNav /> */}
      <Box
        bg="white"
        color={['white', 'white', 'primary.700', 'primary.700']}
        w="full">
        <Container maxW="8xl">
          <HStack py={4} alignItems={'center'} justifyContent={'space-between'}>
            {/* <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
              display={{ base: 'flex', md: 'none' }}
            /> */}

            <HStack
              //as={GatsbyLink}
              //to="/"
              cursor={'pointer'}
              spacing={{ base: '10', md: '20' }}
              alignItems={'center'}
              maxW="2xl">
              {/* <StaticImage
                src="/images/red_logo.png"
                alt="Logo"
                style={{maxWidth: '300px'}}
              /> */}
              <Image
                // display={mode === 'website' ? 'block' : 'none'}
                cursor="pointer"
                onClick={() => {
                  void navigate('/')
                }}
                //w={{ base: '20rem', '2xl': '26.25rem' }}
                //h="{{ base: '2.875rem', '2xl': '2.125rem' }}"

                maxW={"300px"}
                src="/images/red_logo.png"
                alt="Logo"
              />
            </HStack>
            <Box display={{ base: 'none', md: 'block' }} w="100%" px={8}>
              <SearchbarButton onClick={onSearchClick} />
            </Box>

            <HStack
              spacing={4}
              alignItems={'center'}
              justifyContent={'flex-end'}>
              <NavAuthButton />
              <Button
                variant="outline"
                size="sm"
                leftIcon={<FaPhoneAlt />}
              // onClick={() => {
              //   contactModal.onOpen({
              //     meta: {}
              //   })
              // }}
              >
                Anfragen
              </Button>

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
                    leftIcon={<AiOutlineShoppingCart />}
                    onClick={onBasketClick}>
                    Warenkorb
                  </Button>
                </ButtonGroup>
              )}
            </HStack>
          </HStack>
        </Container>
      </Box>
      {/* <BottomNav /> */}
      {/* '<Box
        as="nav"
        bg={'white'}
        //bg={'#fafafa'}
        role="navigation"
        display={{ base: 'none', md: 'flex' }}>
        <Flex
          //color={'white'}
          h={12}
          alignItems={'center'}
          justifyContent={'space-between'}
          maxW="8xl"
          mx="auto">
          <HStack
            w="100%"
            as={'nav'}
            spacing={4}
            justifyContent={'space-between'}>
            <Link as={GatsbyLink} to="/shop" py={2}>
              <Text fontSize="lg" textDecoration={"/shop" === bestMatch
                ? 'underline'
                : 'none'}>
                Unser Webshop</Text>
            </Link>
            {links.map((link, i) => (
              <Link
                key={i}
                as={GatsbyLink}
                to={link.path}
                px={2}
                py={1}
                rounded={'md'}
              // bg={
              //   link.path === bestMatch
              //     ? useColorModeValue('gray.200', 'gray.600')
              //     : 'transparent'
              // }
              // _hover={{
              //   textDecoration: 'none',
              //   bg: useColorModeValue('gray.200', 'gray.600')
              // }}
              // _focus={{
              //   textDecoration: 'none',
              //   bg: useColorModeValue('gray.200', 'gray.600')
              // }}
              >
                <Text fontSize="lg" textDecoration={link.path === bestMatch
                  ? 'underline'
                  : 'none'}>
                  {link.name}
                </Text>
              </Link>
            ))}' */}
      {/* <Divider orientation='vertical' /> */}
      {/* <Link as={GatsbyLink} to="/" py={2}>
              <Text fontSize="md">Großhandel</Text>
            </Link>
            <Link as={GatsbyLink} to="/" py={2}>
              <Text fontSize="md">News</Text>
            </Link>
            <Link as={GatsbyLink} to="/" py={2}>
              <Text fontSize="md">Impressum</Text>
            </Link> */}
      {/* </HStack>
        </Flex>
      </Box> */}
    </>
  )
}

export default DesktopNav
