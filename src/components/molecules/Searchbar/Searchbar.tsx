import {ButtonProps, IconButton, Tooltip} from '@chakra-ui/react'
import {FaSearch} from 'react-icons/fa'

interface SearchbarButtonProps extends ButtonProps {
  defaultIsOpen?: boolean
}

export const SearchbarButton: React.FC<SearchbarButtonProps> = ({
  defaultIsOpen = false,
  ...props
}) => {
  return (
    <Tooltip label="Artikel-Suche" defaultIsOpen={defaultIsOpen}>
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
