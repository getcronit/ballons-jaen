import {Stack, Container, Flex} from '@chakra-ui/react'
import {Field, PhotoProvider} from '@snek-at/jaen'
import React from 'react'
import {CONTAINER_MAX_WIDTH} from '../../constant/sizes'
import {ImageCard} from './ImageCard'

export const ImagesWithText: React.FC<{
  orientation: 'left' | 'right'
}> = ({orientation}) => {
  const threeCards = Array.from({length: 3}).map((_, index) => {
    return <ImageCard key={index} name={`cards[${index}].image`} />
  })

  return (
    <Stack
      py="14"
      px={{base: 0, sm: 4, md: 8}}
      align="center"
      justify="center"
      bgPos="right -5rem top 25%"
      bgSize="800px"
      bgRepeat="no-repeat">
      <Container
        justifyContent="space-between"
        as={Flex}
        gap={8}
        flexDirection={
          orientation === 'right'
            ? {base: 'column', xl: 'row'}
            : {base: 'column-reverse', xl: 'row-reverse'}
        }
        maxW={CONTAINER_MAX_WIDTH}>
        <Flex gap="4" justify="center" alignSelf="center">
          <PhotoProvider maskOpacity={0.8}>
            <Stack flex="1" justify="center">
              {threeCards[0]}
            </Stack>

            <Stack
              gap="4"
              spacing="0"
              h="full"
              w="full"
              align="center"
              justify="center">
              {threeCards[1]}
              {threeCards[2]}
            </Stack>
          </PhotoProvider>
        </Flex>

        <Stack
          // zIndex={'999'}
          maxW={{
            xl: '50%'
          }}
          spacing="8"
          justify="center">
          <Field.Text
            name="text"
            fontSize={{base: 'sm', md: 'md'}}
            fontWeight="light"
            defaultValue="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          />
        </Stack>
      </Container>
    </Stack>
  )
}
