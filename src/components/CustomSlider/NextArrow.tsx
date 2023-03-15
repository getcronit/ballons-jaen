import {Button} from '@chakra-ui/react'
import {FC} from 'react'
import {GoChevronLeft} from 'react-icons/go'

interface INextArrowProps {
  onClick?: () => void
  out?: boolean
  isBlack?: boolean
}

const NextArrow: FC<INextArrowProps> = ({
  onClick,
  out = false,
  isBlack = false
}) => {
  return (
    <Button
      onClick={onClick}
      position="absolute"
      left={out ? {md: '-8%', lg: '-5%'} : '0'}
      color={isBlack ? 'black' : 'white'}
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      bg="transparent"
      fontSize={{md: '2xl', xl: '4xl'}}
      display={{base: 'none', md: 'block'}}
      _hover={{bg: 'transparent'}}
      _active={{bg: 'transparent'}}
      _focus={{bg: 'transparent'}}>
      <GoChevronLeft />
    </Button>
  )
}

export default NextArrow
