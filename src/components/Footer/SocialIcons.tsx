import {HStack, Image, VStack} from '@chakra-ui/react'
import {FC} from 'react'

interface ISocialIconsProps {}

const SocialIcons: FC<ISocialIconsProps> = () => {
  return (
    <VStack py="12">
      <HStack fontSize="lg" color="white" gap="3">
        {[
          {
            icon: '/images/footer/facebook.svg'
          },
          {
            icon: '/images/footer/instagram.svg'
          },
          {
            icon: '/images/footer/tiktok.svg'
          },
          {
            icon: '/images/footer/youtube.svg'
          }
        ].map((item, i) => (
          <Image
            cursor="pointer"
            _hover={{
              boxShadow: 'dark',
              transition: 'all 0.2s ease-in-out',
              transform: 'scale(1.1) translateY(-2px)'
            }}
            src={item.icon}
            key={i}
          />
        ))}
      </HStack>
    </VStack>
  )
}
export default SocialIcons
