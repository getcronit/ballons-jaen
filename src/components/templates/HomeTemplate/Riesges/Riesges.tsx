import {Box, Container, Flex, Image, Stack} from '@chakra-ui/react'
import {FC, useMemo} from 'react'
import {CONTAINER_MAX_WIDTH} from '../../../../constant/sizes'
import RiesgesBottomSection from './RiesgesBottomSection'
import RiesgesTopSection from './RiesgesTopSection'
import CardWithImageBackground from '../../../CardWithImageBackground'
import {useContentPages} from '../../../hooks/useContentPages'

interface IRiesgesProps {}

const Riesges: FC<IRiesgesProps> = () => {
  const contentPagesIndex = useContentPages()

  return (
    <Box bg="white">
      <Container
        as={Stack}
        maxW={CONTAINER_MAX_WIDTH}
        spacing="36"
        px={{base: 0, sm: 4, md: 8}}>
        <Flex
          w="full"
          justifyContent="center"
          alignContent="center"
          gap="8"
          flexDir={{base: 'column', xl: 'row'}}>
          {contentPagesIndex.children.map((page, i) => {
            return contentPagesIndex.withJaenPage(
              page.id,
              <Box
                boxSize="500px"
                mx={{
                  base: 'auto',
                  xl: '0'
                }}>
                <CardWithImageBackground
                  key={page.id}
                  card={{
                    headingFieldName: `homeHeroHeading`,
                    headingDefaultValue: 'Title',
                    textFieldName: `homeHeroText`,
                    textDefaultValue: 'Text',
                    imageFieldName: `homeHeroImage`,
                    imageDefaultValue: undefined,
                    linkUrl: `/${page.slug}`
                  }}
                />
              </Box>
            )
          })}
        </Flex>
        {/* <RiesgesTopSection /> */}
        <RiesgesBottomSection />
      </Container>
    </Box>
  )
}
export default Riesges
