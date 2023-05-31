import {ChevronDownIcon, CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  Tooltip,
  useDisclosure
} from '@chakra-ui/react'
import {Link as GatsbyLink, navigate} from 'gatsby'
import {FC} from 'react'
import {AiOutlineArrowLeft, AiOutlineShop} from 'react-icons/ai'
import {FaPhoneAlt, FaShopify, FaShoppingCart} from 'react-icons/fa'
import {LayoutMode} from '../../types/commonTypes'
import {SearchbarButton} from '../molecules/Searchbar'
import BottomNav from './BottomNav'
import {NavAuthButton} from './NavAuthButton'

import {Logo} from '../../common/assets/Logo'
import {MobileHambuger} from './MobileHamburger'

interface INavbarProps {
  mode: LayoutMode
  onBasketClick?: () => void
  onSearchClick?: () => void
  onContactClick?: () => void
}

export const Navbar: FC<INavbarProps> = ({
  mode,
  onSearchClick,
  onBasketClick,
  onContactClick
}) => {
  return (
    <Box
      willChange={'transform'}
      animation={{
        base: 'none',
        md: 'shadowShine 5s infinite linear alternate-reverse'
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        animation: {
          base: 'none',
          md: '5s shadowShine 5s infinite linear alternate-reverse'
        }
      }}>
      <Stack
        direction="row"
        spacing="4"
        h={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        justifyContent="space-between"
        alignItems={'center'}>
        <Flex flex="1" textAlign="center">
          {mode === 'website' ? (
            <MobileHambuger />
          ) : (
            <Button
              size="sm"
              as={GatsbyLink}
              variant="link"
              to="/"
              leftIcon={<AiOutlineArrowLeft />}>
              <Text fontSize={'sm'}>
                Zurück{' '}
                <Text
                  as={'span'}
                  fontSize={'sm'}
                  display={{
                    base: 'none',
                    md: 'inline'
                  }}>
                  zur Startseite
                </Text>
              </Text>
            </Button>
          )}
        </Flex>

        <Flex flex="1" textAlign="center" justifyContent="center">
          <Logo
            maxWidth={{
              base: '10rem',
              sm: '12rem',
              md: '15rem',
              lg: '20rem'
            }}
            height="auto"
            objectFit="contain"
            cursor="pointer"
            onClick={() => {
              void navigate('/')
            }}
            color="#E3000F"
            alt="logo"
          />
        </Flex>

        <Flex flex="1" justifyContent="end">
          <ButtonGroup>
            <SearchbarButton
              onClick={onSearchClick}
              // defaultIsOpen={mode === 'store'}
            />

            <Tooltip label="Kontakt" aria-label="Kontakt">
              <IconButton
                aria-label="Kontakt"
                variant="ghost"
                icon={<FaPhoneAlt />}
                onClick={onContactClick}
              />
            </Tooltip>

            <NavAuthButton />

            {mode === 'website' ? (
              <>
                <Tooltip label="Zum Onlineshop" aria-label="Zum Onlineshop">
                  <Button
                    display={{
                      base: 'none',
                      md: 'flex'
                    }}
                    size="sm"
                    as={GatsbyLink}
                    to="/products"
                    leftIcon={<FaShopify />}>
                    Onlineshop
                  </Button>
                </Tooltip>

                <Tooltip label="Zum Onlineshop" aria-label="Zum Onlineshop">
                  <IconButton
                    display={{
                      base: 'flex',
                      md: 'none'
                    }}
                    aria-label="Onlineshop"
                    as={GatsbyLink}
                    to="/products"
                    size="md"
                    icon={<FaShopify />}
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip label="Warenkorb" aria-label="Warenkorb">
                  <IconButton
                    aria-label="Warenkorb"
                    size="md"
                    variant={'ghost'}
                    icon={<FaShoppingCart />}
                    onClick={onBasketClick}
                  />
                </Tooltip>
              </>
            )}
          </ButtonGroup>
        </Flex>
      </Stack>

      <Flex
        display={{base: 'none', md: mode === 'website' ? 'flex' : 'none'}}
        justifyContent="center">
        <BottomNav />
      </Flex>
    </Box>
  )
}
