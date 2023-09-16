import {GridItem} from '@chakra-ui/react'
import {connectBlock} from '@atsnek/jaen'
import CardWithImageBackground from '../../CardWithImageBackground'

export const FourCardItem = connectBlock(
  () => {
    return (
      <GridItem
        justifySelf="center"
        h={{base: '8.125rem', md: '16rem', lg: '18rem', xl: '21.875rem'}}
        w="full">
        <CardWithImageBackground
          w="full"
          minW="none"
          card={{
            headingFieldName: 'title',
            imageFieldName: 'fourCardItemImage',
            isDisabled: true
          }}
        />
      </GridItem>
    )
  },
  {
    name: 'categoryContent',
    label: 'Kategorie'
  }
)
