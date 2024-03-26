import {
  Badge,
  Box,
  Container,
  Flex,
  FlexProps,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@atsnek/jaen'
import {FC} from 'react'
import {WissenArticleMetaBar} from '../../organisms/WissenArticleMetaBar'

interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <Box
      bgImage={{
        base: 'url("/images/blog_page/hero_bg_mobile.svg")',
        md: '/images/blog_overview/hero_bg.svg'
      }}
      pt={{base: 4, md: 24}}
      bgPos={{base: 'top', md: 'top 2rem left 0'}}
      bgRepeat="no-repeat"
      bgSize="cover"
      px="2">
      <Stack mx="auto" w="full" maxW="6xl" spacing="4">
        <Box
          borderRadius="xl"
          boxShadow="dark"
          overflow={'hidden'}
          isolation="isolate"
          mx="auto"
          w="full"
          maxW="6xl"
          h={{
            // rems
            base: 'xs',
            md: 'sm',
            lg: 'md',
            xl: 'lg',
            '2xl': 'xl'
          }}>
          <Field.Image name="image" lightbox />
        </Box>
        <WissenArticleMetaBar mx="auto" w="full" maxW="6xl" />
      </Stack>
    </Box>
  )
}
