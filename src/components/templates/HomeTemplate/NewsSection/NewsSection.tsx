import { Box, Container, Flex } from '@chakra-ui/react'
import { Field } from '@snek-at/jaen'
import { FC } from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../../constant/sizes'
import NewsContent from './NewsContent'

interface INewsSectionProps { }

const NewsSection: FC<INewsSectionProps> = () => {
  return (
    <Box bg='white'>
      <Container
        h={{ base: 'auto', lg: '44rem' }}
        alignItems={{ base: 'center', lg: 'start' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column-reverse', md: 'column', lg: 'row' }}
        as={Flex}
        gap="8"
        maxW={CONTAINER_MAX_WIDTH}>
        <Box flex="1">
          <NewsContent />
        </Box>

        <Box
          flex="1"
          overflow="hidden"
          // w={{ base: "100%", sm: "80%", md: "25rem", lg: "auto" }}
          borderRadius="xl"
          //my={{ base: "4 !important", md: "12 !important" }}
          // px="1%"
          // py="5%"
          mx="auto"
          // w={{
          //   base: "30vh",
          //   md: "50vh",
          //   lg: "60vh",
          // }}
          h={'80%'}>
          <Field.Image alt="slider_img" name={'newsImage2'} />
        </Box>
      </Container>
    </Box>
  )
}
export default NewsSection
