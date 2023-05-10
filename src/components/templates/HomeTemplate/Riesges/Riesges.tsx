import {Box, Container, Image, Stack} from '@chakra-ui/react'
import {FC} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import RiesgesBottomSection from './RiesgesBottomSection'
import RiesgesTopSection from './RiesgesTopSection'

interface IRiesgesProps {}

const Riesges: FC<IRiesgesProps> = () => {
  return (
    <Box>
      <Image
        display={{base: 'block'}}
        //mt={{base: '-20vh'}}
        w="100%"
        src="/images/home/reisges/top_shape.svg"
        alt="herobackground"
      />
      <Stack bg="white" py="20" px={{base: 0, sm: 4, md: 8}}>
        <Container as={Stack} maxW={CONTAINER_MAX_WIDTH}>
          {/* <RiesgesTopSection /> */}
          <RiesgesBottomSection />
        </Container>
      </Stack>
    </Box>
  )
}
export default Riesges
