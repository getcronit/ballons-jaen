import {Button, Icon, IconButton} from '@chakra-ui/react'
import {FC} from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

interface IPrevArrowProps {
  onClick?: () => void
  out?: boolean
  isRed?: boolean
}

const PrevArrow: FC<IPrevArrowProps> = ({
  onClick,
  out = false,
  isRed = false
}) => {
  return (
    <IconButton
      onClick={onClick}
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      left="0"
      color={isRed ? 'red.500' : 'white'}
      bg="transparent"
      _hover={{bg: 'transparent'}}
      _active={{bg: 'transparent'}}
      _focus={{bg: 'transparent'}}
      aria-label={'Previous'}
      fontSize={'4xl !important'}
      icon={<Icon as={FaChevronCircleLeft} />}
    />
  )
}

export default PrevArrow
