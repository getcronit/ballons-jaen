import {SearchIcon} from '@chakra-ui/icons'
import {Button, ButtonProps, IconButton, Text} from '@chakra-ui/react'

export const SearchbarButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="Search"
      variant="ghost"
      size="md"
      icon={<SearchIcon />}
      {...props}
    />
  )
}
