import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  IconButtonProps,
  Stack,
  useDisclosure
} from '@chakra-ui/react'
import {navigate} from 'gatsby'
import {FaPhoneAlt} from 'react-icons/fa'
import {Logo} from '../../common/assets/Logo'
import {useContactModal} from '../../services/contact'
import {BottomNavLinks} from './NavLinks'
import {BallonButton} from '../molecules/BallonButton'

export const MobileHambuger: React.FC<{
  pathname: string
}> = ({pathname}) => {
  const {isOpen, onToggle} = useDisclosure()

  const contactModal = useContactModal()

  return (
    <>
      <IconButton
        display={{base: 'flex', md: 'none'}}
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={'ghost'}
        aria-label="Menu"
      />

      <Drawer placement="left" onClose={onToggle} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {/* <Image
                onClick={() => {
                  void navigate('/')
                }}
                h=".875rem"
                w="10rem"
                src="/images/red_logo.svg"
              /> */}
            <Logo
              //maxWidth='20rem'
              //height="auto"
              height=".875rem"
              width="10rem"
              //transform="scale(0.5)"
              objectFit="contain"
              // display={mode === 'website' ? 'block' : 'none'}
              cursor="pointer"
              onClick={() => {
                void navigate('/')
              }}
              color="#E3000F"
              alt="logo"
            />
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <Stack spacing="8" pt="4">
              <BottomNavLinks
                pathname={pathname}
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
                <BallonButton
                  w="full"
                  variant="outline"
                  py="7 !important"
                  leftIcon={<FaPhoneAlt />}
                  onClick={() => {
                    contactModal.onOpen({
                      meta: {}
                    })
                  }}>
                  Anfragen
                </BallonButton>
              </Stack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
