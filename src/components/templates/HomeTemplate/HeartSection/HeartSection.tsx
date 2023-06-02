import {Box, Container, Grid, Heading, Stack, Text} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {StaticImage} from 'gatsby-plugin-image'
import {FC} from 'react'

import LinkButtonField from '../../../fields/LinkButtonField'
import {TransparentCard} from '../../../TransparentCard'
import HeartRightSection from './HeartRightSection'

interface IHeartSectionProps {}

const HeartSection: FC<IHeartSectionProps> = () => {
  return (
    <Grid minH={'100vh'} h={{base: '33.75rem', sm: 'auto'}}>
      <StaticImage
        objectPosition={'top left'}
        style={{
          gridArea: '1/1'
        }}
        imgStyle={{objectPosition: 'top'}}
        layout="fullWidth"
        alt="Herzballons gebunden an ein Paket"
        src={'./bg.jpg'}
        formats={['auto', 'webp', 'avif']}
      />

      <Box
        style={{
          gridArea: '1/1',
          position: 'relative',
          placeItems: 'center',
          display: 'grid'
        }}>
        <Container
          p="10"
          maxW="80rem"
          display="flex"
          justifyContent="space-between"
          flexDirection={{base: 'column', lg: 'row'}}
          alignItems="center"
          color="white"
          px="8">
          <Stack
            p="8"
            spacing="4"
            as={TransparentCard}
            h={{base: '21.25rem', md: 'auto', lg: 'auto'}}
            w={{base: '19.375rem', sm: '100%', lg: '38.125rem'}}>
            <Field.Text
              fontSize={{base: 'sm', lg: 'xl'}}
              name="heartTagline"
              defaultValue="Inspiration"
            />
            <Field.Text
              as={Heading}
              fontSize={{base: 'md', lg: '4xl'}}
              fontWeight="800"
              name="heartHeading"
              defaultValue="Lass dich von uns inspirieren"
            />
            <Field.RichText
              fontSize={{base: 'sm', lg: 'md'}}
              mb="2 !important"
              name="heartText"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate."
            />
            <Box display="flex">
              <LinkButtonField
                name="heartButton"
                defaultValue="Mehr erfahren"
                defaultUrl={`/dekoration`}
                size={{base: 'sm', lg: 'md'}}
                w="12.5rem"
              />
            </Box>
          </Stack>
          <Box
            pb={{base: 32, md: 0}}
            display={{base: 'none', sm: 'block'}}
            w={{base: '100%', lg: 'auto'}}>
            <HeartRightSection />
          </Box>
        </Container>
      </Box>
    </Grid>
  )
}
export default HeartSection
