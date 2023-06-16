import {Button, Icon, IconButton} from '@chakra-ui/react'
import {FC} from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

interface INextArrowProps {
  onClick?: () => void
  out?: boolean
  isRed?: boolean
}

const NextArrow: FC<INextArrowProps> = ({
  onClick,
  out = false,
  isRed = false
}) => {
  return (
    <IconButton
      aria-label="Next"
      icon={<Icon as={FaChevronCircleRight} />}
      right={'0'}
      onClick={onClick}
      transform="translate(0, -50%)"
      position="absolute"
      top="50%"
      color={isRed ? 'red.500' : 'white'}
      zIndex="1"
      bg="transparent"
      display={'block'}
      fontSize={{md: '2xl', xl: '4xl'}}
      _hover={{bg: 'transparent'}}
      _active={{bg: 'transparent'}}
      _focus={{bg: 'transparent'}}
    />
  )
}

export default NextArrow
