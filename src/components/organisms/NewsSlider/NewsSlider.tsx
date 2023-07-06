import { Box, Text, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { useNewsPages } from '../../hooks/useNewsPages'
import WhiteDesktopSlider from './WhiteDesktopSlider'
import WhiteMobileSlider from './WhiteMobileSlider'

interface INewsSlidesProps {
  showNewsTitle?: boolean
}

const NewsSlider: FC<INewsSlidesProps> = ({ showNewsTitle }) => {
  const index = useNewsPages()

  return (
    <>
      <Box
        bg='#f6f8fa'
        zIndex='-1'
        pos='relative'
        px="4"
        py={{ md: '50', lg: 20 }}
        display={{
          base: 'none',
          md: 'block'
        }}>
        <Image
          position="absolute"
          borderBottom='solid white'
          borderBottomWidth={48}
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        />
        <WhiteDesktopSlider showTitle={showNewsTitle} index={index} />
      </Box>

      {/* Form mobile */}
      <Box pos='relative' py="16" display={{ base: 'block', md: 'none' }} bg='#f6f8fa'>
        <Image
          borderBottom='solid white'
          borderBottomWidth={256}
          zIndex='-1'
          position="absolute"
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        />
        {showNewsTitle && (
          <Text pl="8" variant="cursive" fontSize="xl">
            Wissen
          </Text>
        )}
        <WhiteMobileSlider index={index} />
      </Box>
    </>
  )
}
export default NewsSlider
