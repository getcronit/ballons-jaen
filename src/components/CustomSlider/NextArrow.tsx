import {Icon, IconButton} from '@chakra-ui/react'
import {FC} from 'react'
import {FaChevronCircleRight} from '@react-icons/all-files/fa/FaChevronCircleRight'

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
      fontSize={'4xl !important'}
      _hover={{bg: 'transparent'}}
      _active={{bg: 'transparent'}}
      _focus={{bg: 'transparent'}}
    />
  )
}

export default NextArrow
