import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Wrap,
    WrapItem
  } from '@chakra-ui/react'
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon
  } from '@chakra-ui/icons'
  import {navigate} from 'gatsby'
  import {FaPhoneAlt, FaShopify, FaShoppingBag, FaUser} from 'react-icons/fa'
  import {AiOutlineShop} from 'react-icons/ai'
  
  export default function WithSubnavigation() {
    const {isOpen, onToggle} = useDisclosure()
  
    return (
      <Box
      //animation="shadowShine 5s infinite linear alternate-reverse"
      _after={
        {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          //background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
          zIndex: '-1',
          //animation: ' 5s shadowShine 5s infinite linear alternate-reverse'
        }
      }
      >
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
  
          <Flex flex={1}></Flex>
  
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
              onClick={() => {
                //   contactModal.onOpen({
                //     meta: {}
                //   })
              }}>
              Anfragen
            </Button>
            <Button
              variant="link"
              size="sm"
              leftIcon={<FaUser />}
              onClick={() => {
                //   contactModal.onOpen({
                //     meta: {}
                //   })
              }}>
              Anmelden
            </Button>
            <Button
              size="sm"
              leftIcon={<FaShoppingBag />}
              onClick={() => {
                //   contactModal.onOpen({
                //     meta: {}
                //   })
              }}>
              Onlineshop
            </Button>
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
          animation="shadowShine 5s infinite linear alternate-reverse"
          bg='rgba(255,255,255,.3)'
          _after={
            {
              content: '""',
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              //background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
              zIndex: '-1',
              animation: ' 5s shadowShine 5s infinite linear alternate-reverse'
            }
          }
        >
          <DesktopNav />
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    )
  }
  
  const DesktopNav = () => {
    const linkColor = 'gray.900'
    const linkHoverColor = 'black'
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  
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
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{bg: useColorModeValue('pink.50', 'gray.900')}}>
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
  
  const MobileNav = () => {
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
          as={Link}
          href={href ?? '#'}
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
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map(child => (
                <Link key={child.label} py={2} href={child.href}>
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