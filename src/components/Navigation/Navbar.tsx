import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  Stack,
  Tooltip
} from '@chakra-ui/react'

import HBalloon from '../../common/assets/hballoon.inline.svg'

import {FaLongArrowAltLeft} from '@react-icons/all-files/fa/FaLongArrowAltLeft'
import {FaShopify} from '@react-icons/all-files/fa/FaShopify'
import {FaShoppingCart} from '@react-icons/all-files/fa/FaShoppingCart'
import {Link as GatsbyLink, navigate} from 'gatsby'
import {FC} from 'react'
import {LayoutMode} from '../../types/commonTypes'
import {BallonButton} from '../molecules/BallonButton'
import {SearchbarButton} from '../molecules/Searchbar'
import BottomNav from './BottomNav'
import {NavAuthButton} from './NavAuthButton'

import {useAuth} from '@atsnek/jaen'
import {Logo} from '../../common/assets/Logo'
import {MobileHambuger} from './MobileHamburger'

interface INavbarProps {
  mode: LayoutMode
  pathname: string
  onBasketClick?: () => void
  onSearchClick?: () => void
  onContactClick?: () => void
}

export const Navbar: FC<INavbarProps> = ({
  mode,
  pathname,
  onSearchClick,
  onBasketClick,
  onContactClick
}) => {
  const {isAuthenticated} = useAuth()

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
        display={isAuthenticated ? 'none' : 'flex'}
        direction="row"
        spacing="4"
        h={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        justifyContent="space-between"
        alignItems={'center'}>
        <Flex flex="1" textAlign="center">
          {mode === 'website' ? (
            <MobileHambuger pathname={pathname} />
          ) : (
            <>
              {/* <Button
                display={{
                  base: 'none',
                  md: 'flex'
                }}
                size="sm"
                as={GatsbyLink}
                variant="link"
                to="/"
                leftIcon={<AiOutlineArrowLeft />}>
                Zurück zur Startseite
              </Button> */}
              <Tooltip label="Zur Startseite" aria-label="Zur Startseite">
                <Button
                  display={{
                    base: 'none',
                    md: 'flex'
                  }}
                  size="sm"
                  as={GatsbyLink}
                  variant="link"
                  to="/"
                  leftIcon={<Icon as={HBalloon} boxSize="8" />}>
                  Startseite
                </Button>
              </Tooltip>

              <IconButton
                filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
                mt="1"
                display={{
                  base: 'flex',
                  md: 'none'
                }}
                aria-label="Zurück zur Startseite"
                as={GatsbyLink}
                to="/"
                size="sm"
                icon={<FaLongArrowAltLeft />}
              />
              <NavAuthButton
                display={{
                  base: mode === 'store' ? 'flex' : 'none',
                  md: 'none'
                }}
              />
            </>
          )}
        </Flex>

        <Tooltip
          label="Zur Startseite"
          aria-label="Zur Startseite"
          placement="top">
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
        </Tooltip>
        <Flex flex="1" justifyContent="end">
          <ButtonGroup
            spacing={{
              base: 0,
              md: 2
            }}>
            <SearchbarButton
              onClick={onSearchClick}
              display={{
                base: mode === 'store' ? 'flex' : 'none',
                md: 'flex'
              }}
              // defaultIsOpen={mode === 'store'}
            />

            {/* <Tooltip
              label="Kontakt"
              aria-label="Kontakt"
            >
              <IconButton
                display={{
                  base: 'none',
                  md: 'flex'
                }}
                aria-label="Kontakt"
                variant="ghost"
                icon={<FaPhoneAlt />}
                onClick={onContactClick}
              />
            </Tooltip> */}
            <NavAuthButton
              display={{
                base: 'none',
                md: 'flex'
              }}
            />

            {mode === 'website' ? (
              <>
                <Tooltip label="Zum Onlineshop" aria-label="Zum Onlineshop">
                  <BallonButton
                    display={{
                      base: 'none',
                      md: 'flex'
                    }}
                    size="sm"
                    as={GatsbyLink}
                    to="/products"
                    leftIcon={<FaShopify />}>
                    Onlineshop
                  </BallonButton>
                </Tooltip>

                <Tooltip label="Zum Onlineshop" aria-label="Zum Onlineshop">
                  <IconButton
                    filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
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
                <Tooltip
                  label="Warenkorb"
                  aria-label="Warenkorb"
                  placement="bottom-start">
                  <IconButton
                    aria-label="Warenkorb"
                    size="md"
                    variant={'ghost'}
                    icon={
                      <Icon
                        filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
                        as={FaShoppingCart}
                      />
                    }
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
        <BottomNav pathname={pathname} />
      </Flex>
    </Box>
  )
}
