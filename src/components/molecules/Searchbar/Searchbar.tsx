import {ButtonProps, Icon, IconButton, Tooltip} from '@chakra-ui/react'
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
        icon={<Icon filter="drop-shadow(1px 2px 2px rgb(0 0 0 / 0.1))" as={FaSearch} />}
        {...props}
      />
    </Tooltip>
  )
}
