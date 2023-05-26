import {
  Box,
  VStack,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Wrap,
  Link,
  WrapItem,
  ButtonGroup,
  Container,
  HStack
} from '@chakra-ui/react'
import {Link as GatsbyLink, navigate} from 'gatsby'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import {FaPhoneAlt, FaShopify, FaShoppingBag, FaUser} from 'react-icons/fa'
import {
  AiOutlineArrowLeft,
  AiOutlineShop,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import {FC} from 'react'
import {LayoutMode} from '../../types/commonTypes'
import {NavAuthButton} from './NavAuthButton'
import {SearchbarButton} from '../molecules/Searchbar'
import BottomNav from './BottomNav'
import {CONTAINER_MAX_WIDTH} from '../../constant/sizes'

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
  const {isOpen, onToggle} = useDisclosure()

  return (
    <Box
      pb={'3'}
      willChange={'transform'}
      animation="shadowShine 5s infinite linear alternate-reverse"
      _after={{
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        //background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
        zIndex: '-1',
        animation: ' 5s shadowShine 5s infinite linear alternate-reverse'
      }}>
      <Flex
        //bg={useColorModeValue('white', 'gray.800')}
        //color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{base: 2}}
        px={{base: 4}}
        align={'center'}>
        <Flex
          flex={{base: 1, md: 'auto'}}
          ml={{base: -2}}
          display={{base: 'flex', md: 'none'}}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={1}>
          <Button
            size="sm"
            as={GatsbyLink}
            to="/"
            visibility={mode === 'website' ? 'hidden' : 'visible'}
            leftIcon={<AiOutlineArrowLeft />}>
            <Image h=".875rem" w="10rem" src="/images/white_logo.png" />
          </Button>
        </Flex>

        <Flex>
          <Image
            display="flex"
            maxW={{
              base: '20rem'
            }}
            objectFit="contain"
            // display={mode === 'website' ? 'block' : 'none'}
            cursor="pointer"
            onClick={() => {
              void navigate('/')
            }}
            // w={{base: '20rem', '2xl': '26.25rem'}}
            // h={{base: '1.875rem', '2xl': '2.125rem'}}

            src="/images/red_logo.png"
            alt="logo"
          />
        </Flex>

        <Stack flex={1} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button
            variant="link"
            size="sm"
            leftIcon={<FaPhoneAlt />}
            onClick={onContactClick}>
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
              as={GatsbyLink}
              to="/products"
              leftIcon={<AiOutlineShop />}>
              Onlineshop
            </Button>
          ) : (
            <ButtonGroup>
              <SearchbarButton onClick={onSearchClick} maxW="sm" w={'10vw'} />

              <Button
                size="sm"
                variant={'outline'}
                leftIcon={<AiOutlineShoppingCart />}
                onClick={onBasketClick}>
                Warenkorb
              </Button>
            </ButtonGroup>
          )}
          {/* <Button
              as="a"
              fontSize={'sm'}
              fontWeight={400}
              variant={'outline'}
              href={'#'}>
              Anmelden
            </Button>
            <Button fontSize={'sm'} fontWeight={600}>
              Onlineshop
            </Button> */}
        </Stack>
      </Flex>

      <Flex
        display={{base: 'none', md: 'flex'}}
        justifyContent="center"
        alignItems={'center'}>
        {/* <DesktopNav /> */}
        {/* <Container maxW={CONTAINER_MAX_WIDTH} display={mode === 'website' ? 'none' : 'block'} mx="8">
          <SearchbarButton onClick={onSearchClick} />
        </Container> */}
      </Flex>

      <Flex
        display={{base: 'none', md: mode === 'website' ? 'flex' : 'none'}}
        justifyContent="center">
        {/* <DesktopNav /> */}
        <BottomNav />
      </Flex>
      {/* 
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = 'gray.900'
  const linkHoverColor = 'black'
  const popoverContentBgColor = 'white'

  return (
    <Wrap
      direction={'row'}
      spacing={{
        base: 2,
        lg: 4
      }}>
      {NAV_ITEMS.map(navItem => (
        <WrapItem key={navItem.label} m="0">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                as={GatsbyLink}
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </WrapItem>
      ))}
    </Wrap>
  )
}

const DesktopSubNav = ({label, href, subLabel}: NavItem) => {
  return (
    <Link
      as={GatsbyLink}
      to={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{bg: 'pink.50'}}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{color: 'pink.400'}}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

export const MobileNav = () => {
  return (
    <Stack
      //bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{md: 'none'}}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({label, children, href}: NavItem) => {
  const {isOpen, onToggle} = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={GatsbyLink}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none'
        }}>
        <Text
          fontWeight={600}
          //color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{marginTop: '0!important'}}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={'gray.200'}
          align={'start'}>
          {children &&
            children.map(child => (
              <Link as={GatsbyLink} key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    children: [
      {
        label: 'Explore Design Work',
        subLabel: 'Trending Design to inspire you',
        href: '#'
      },
      {
        label: 'New & Noteworthy',
        subLabel: 'Up-and-coming Designers',
        href: '#'
      }
    ]
  },
  {
    label: 'Partyshop',
    children: [
      {
        label: 'Job Board',
        subLabel: 'Find your dream design job',
        href: '#'
      },
      {
        label: 'Freelance Projects',
        subLabel: 'An exclusive list for contract work',
        href: '#'
      }
    ]
  },
  {
    label: 'Deko & Design',
    href: '#'
  },
  {
    label: 'Großhandel',
    href: '#'
  },
  {
    label: 'Ballongas',
    href: '#'
  },
  {
    label: 'Wissen',
    href: '#'
  },
  {
    label: 'Kontakt',
    href: '#'
  }
]
