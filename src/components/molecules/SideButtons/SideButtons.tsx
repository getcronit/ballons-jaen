import { ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react'
import { FiMail } from '@react-icons/all-files/fi/FiMail'
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin'
import { FiSearch } from '@react-icons/all-files/fi/FiSearch'
import React from 'react'
import { useContactModal } from '../../../services/contact'
import { navigate } from 'gatsby'
import { useSearch } from '../../../services/search'


export const SideButtons: React.FC = () => {
  const contactModal = useContactModal()
  const search = useSearch()

  const handleOnSearchClick = () => {
    search.onOpen()
  }

  return (
    <ButtonGroup
      as="aside"
      py='2'
      px='1'
      bg={{ base: 'rgba(255,255,255,.9)', md: 'transparent' }}
      backdropFilter={{ base: 'blur(7px)', md: 'none' }}
      //colorScheme="agt.yellowScheme"
      position="fixed"
      bottom={{ base: '0', md: '50%' }}
      right="0"
      display="flex"
      flexDirection={{ base: 'row', md: 'column-reverse' }}
      w={{ base: '100%', md: 'unset' }}
      spacing="0"
      gap={1.5}
      zIndex="999">
      <Tooltip label="Infos">
        <IconButton
          w={{ base: '100%', md: 'unset' }}
          aria-label="Location"
          icon={<FiMapPin />}
          onClick={() => navigate('/kontakt/')}
        />
      </Tooltip>
      <Tooltip
        label="Kontakt"
        aria-label="Kontakt"
      >
        <IconButton
          w={{ base: '100%', md: 'unset' }}
          aria-label="Contact"
          icon={<FiMail />}
          onClick={() => {
            contactModal.onOpen({
              meta: {}
            })
          }}
        />
      </Tooltip>
      <Tooltip label="Artikel-Suche">
        <IconButton
          w={{ base: '100%', md: 'unset' }}
          aria-label="Search"
          icon={<FiSearch />}
          onClick={handleOnSearchClick}
        />
      </Tooltip>
    </ButtonGroup>
  )
}