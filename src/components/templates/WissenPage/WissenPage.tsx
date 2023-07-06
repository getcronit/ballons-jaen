import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes'
import { JaenPageIndexType } from '../../../types/commonTypes'
import { useNewsPages } from '../../hooks/useNewsPages'
import HorizontalImageCard from '../../organisms/HorizontalImageCard'
import BlogOverview from '../BlogOverview/BlogOverview'
import BlogOverviewHero from './BlogOverviewHero'
import BlogsSection from './BlogsSection'

export interface WissenPageProps { }

const WissenPage: React.FC<WissenPageProps> = () => {
  const index = useNewsPages({ unlimited: true })

  return (
    <>
      <BlogOverviewHero
        featuredBlog={index.featuredBlog}
        withJaenPage={index.withJaenPage}
      />
      <BlogsSection blogs={index.moreBlogs} withJaenPage={index.withJaenPage} />
      <Box
        pos="relative"
        overflow="hidden"
        pb={{ md: '10', xl: 32 }}
        pt={{ base: '16', lg: 48 }}>
        <Image
          zIndex='-1'
          position="absolute"
          top={'0'}
          left={'0'}
          transform={'scaley(-1)'}
          w="100%"
          src="/images/home/reisges/top_shape.svg"
          alt="bottom_shape_white"
        />
        <Image
          display={{ base: 'none', md: 'block' }}
          src="/images/großhandel/card_line.svg"
          pos="absolute"
          top="0"
          w="full"
        />
        <Container
          maxW={CONTAINER_MAX_WIDTH}
          pos="relative"
          mb={{ base: '16 !important', md: '0' }}>
          <HorizontalImageCard
            card={{
              tagFieldName: 'blogOverviewCard1Tag',
              tagDefaultValue: 'PRODUKTE',
              titleFieldName: 'blogOverviewCard1Title',
              titleDefaultValue: 'Unsere <i>Kataloge</i>',
              descriptionFieldName: 'blogOverviewCard1Description',
              descriptionDefaultValue:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
              imageFieldName: 'blogOverviewCard1Image',
              imageDefaultValue: '/images/großhandel/img1.png',
              buttonTextFieldName: 'blogOverviewCard1ButtonTextField',
              buttonTextFieldDefaultValue: 'Zum Shop'
            }}
            orientation="left"
          />
        </Container>
      </Box>
    </>
  )
}

export default WissenPage
