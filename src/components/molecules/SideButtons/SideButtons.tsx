import {ButtonGroup, IconButton, Tooltip} from '@chakra-ui/react'
import {FiMail} from '@react-icons/all-files/fi/FiMail'
import {FiMapPin} from '@react-icons/all-files/fi/FiMapPin'
import {FiSearch} from '@react-icons/all-files/fi/FiSearch'
import React from 'react'
import {useContactModal} from '../../../services/contact'
import {navigate} from 'gatsby'
import {useSearch} from '../../../services/search'

export const SideButtons: React.FC = () => {
  const contactModal = useContactModal()
  const search = useSearch()

  const handleOnSearchClick = () => {
    search.onOpen()
  }

  return (
    <ButtonGroup
      as="aside"
      py="2"
      px="1"
      position="fixed"
      bottom="50%"
      right="0"
      display={{base: 'none', md: 'flex'}}
      flexDirection="column-reverse"
      spacing="0"
      gap={1.5}
      zIndex="999">
      <Tooltip label="Infos">
        <IconButton
          filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
          aria-label="Location"
          icon={<FiMapPin />}
          onClick={() => navigate('/kontakt/')}
        />
      </Tooltip>
      <Tooltip label="Kontakt" aria-label="Kontakt">
        <IconButton
          filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
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
          filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))"
          aria-label="Search"
          icon={<FiSearch />}
          onClick={handleOnSearchClick}
        />
      </Tooltip>
    </ButtonGroup>
  )
}
