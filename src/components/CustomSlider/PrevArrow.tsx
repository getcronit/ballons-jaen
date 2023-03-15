import {Button} from '@chakra-ui/react'
import {FC} from 'react'
import {GoChevronRight} from 'react-icons/go'

interface IPrevArrowProps {
  onClick?: () => void
  out?: boolean
  isBlack?: boolean
}

const PrevArrow: FC<IPrevArrowProps> = ({
  onClick,
  out = false,
  isBlack = false
}) => {
  return (
    <Button
      onClick={onClick}
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      right={out ? {md: '-8%', lg: '-5%'} : '0'}
      color={isBlack ? 'black' : 'white'}
      bg="transparent"
      _hover={{bg: 'transparent'}}
      _active={{bg: 'transparent'}}
      display={{base: 'none', md: 'block'}}
      fontSize={{md: '2xl', xl: '4xl'}}
      _focus={{bg: 'transparent'}}>
      <GoChevronRight />
    </Button>
  )
}

export default PrevArrow
