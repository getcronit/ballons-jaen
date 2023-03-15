import {Box, Container, Image, Stack} from '@chakra-ui/react'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import RiesgesBottomSection from './RiesgesBottomSection'
import RiesgesTopSection from './RiesgesTopSection'

interface IRiesgesProps {}

const Riesges: FC<IRiesgesProps> = () => {
  return (
    <Box mt={{base: '-28', lg: '0'}}>
      <Image
        display={{base: 'block', lg: 'none'}}
        zIndex="-1"
        w="100%"
        src="/images/home/reisges/top_shape.svg"
        alt="herobackground"
      />
      <Stack bg="white" py="20" px={{base: 0, sm: 4, md: 8}}>
        <Container as={Stack} maxW={CONTAINER_MAX_WIDTH}>
          <RiesgesTopSection />
          <RiesgesBottomSection />
        </Container>
      </Stack>
    </Box>
  )
}
export default Riesges
