import {Box, Container, Divider, Heading, Stack} from '@chakra-ui/react'
import {Editor, Field} from '@snek-at/jaen'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {
  ImagesBlock,
  ImagesWithTextLeftBlock,
  ImagesWithTextRightBlock,
  SliderBlock
} from './blocks'
import {Footer} from './Footer'
import {Hero} from './Hero'

export interface WissenPageProps {}

const WissenArticlePage: React.FC<WissenPageProps> = () => {
  return (
    <>
      <Hero />

      <Box bg="white">
        <Container as={Stack} maxW={CONTAINER_MAX_WIDTH} spacing="8">
          <Field.Text
            as={Heading}
            fontSize="4xl"
            textAlign="center"
            name="title"
            defaultValue="Ballons & Ballons: Die Geschichte"
          />

          <Field.Text
            name="description"
            defaultValue={`
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
              libero risus semper Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Faucibus in libero risus semper Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Faucibus in libero risus semper Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
              libero risus semper.
              </p>
            `}
          />

          <Divider />

          <Editor
            blocks={[
              ImagesBlock,
              ImagesWithTextLeftBlock,
              ImagesWithTextRightBlock,
              SliderBlock
            ]}
          />
        </Container>
      </Box>

      <Footer />
    </>
  )
}

export default WissenArticlePage
