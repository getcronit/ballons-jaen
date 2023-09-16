import {Box, Container, Divider, Heading, Icon, Stack} from '@chakra-ui/react'
import {Field} from '@atsnek/jaen'
import {CONTAINER_MAX_WIDTH} from '../../../constant/sizes'
import {
  ImageBlock,
  ImagesBlock,
  ImagesWithTextLeftBlock,
  ImagesWithTextRightBlock,
  SliderBlock,
  TextBlock
} from './blocks'
import {Footer} from './Footer'
import {Hero} from './Hero'

export interface WissenPageProps {}

const WissenArticlePage: React.FC<WissenPageProps> = () => {
  return (
    <>
      <Hero />

      <Box bg="white" pt="4">
        <Container as={Stack} maxW={CONTAINER_MAX_WIDTH} spacing="8">
          <Field.Text
            as={Heading}
            asAs="h1"
            fontSize={{
              base: '2xl',
              md: '3xl',
              lg: '4xl',
              xl: '5xl',
              '2xl': '6xl'
            }}
            textAlign="center"
            name="title"
            defaultValue="Ballons & Ballons: Die Geschichte"
          />

          <Field.Text
            fontSize={{
              base: 'sm',
              md: 'md'
            }}
            name="description"
            defaultValue={`
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
            `}
          />

          <Divider />

          <Field.Editor
            name="editor"
            blocks={[
              ImagesBlock,
              ImagesWithTextLeftBlock,
              ImagesWithTextRightBlock,
              SliderBlock,
              ImageBlock,
              TextBlock
            ]}
          />
        </Container>
      </Box>

      <Footer />
    </>
  )
}

export default WissenArticlePage
