import {ButtonProps, IconButton, Tooltip} from '@chakra-ui/react'
import {FaSearch} from 'react-icons/fa'

export const SearchbarButton = (props: ButtonProps) => {
  return (
    <Tooltip label="Suche">
      <IconButton
        aria-label="Search"
        variant="ghost"
        size="md"
        icon={<FaSearch />}
        {...props}
      />
    </Tooltip>
  )
}
