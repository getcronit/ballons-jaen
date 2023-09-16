import {Box, Grid, Heading, HStack, Stack, Text} from '@chakra-ui/react'
import {Field, useContentManagement} from '@atsnek/jaen'
import {navigate} from 'gatsby'
import {FC} from 'react'
import {BiChevronRight} from 'react-icons/bi'

interface ICardWithImageBackgroundProps {
  card: {
    headingFieldName?: string
    headingDefaultValue?: string
    textFieldName?: string
    textDefaultValue?: string
    imageFieldName?: string
    imageDefaultValue?: string
    linkUrl?: string
    isDisabled?: boolean
  }
  displayContent?: boolean
  minW?: {} | string
  w?: {} | string
  h?: {} | string
  isSmallText?: boolean
  lightboxGroup?: boolean
  lightbox?: boolean
}

const CardWithImageBackground: FC<ICardWithImageBackgroundProps> = ({
  card,
  displayContent = true,
  minW,
  w,
  h,
  isSmallText = false,
  lightboxGroup = false,
  lightbox = false
}) => {
  const {isEditing} = useContentManagement()

  return (
    <Stack
      pointerEvents="auto"
      onClick={() => !isEditing && card.linkUrl && navigate(card.linkUrl)}
      position="relative"
      _hover={{
        transition: 'all 0.3s ease',
        transform: {
          md: 'scale(1.03) ',
          lg: 'scale(1.03) '
        },
        '.show_more': {
          textDecoration: 'underline',
          '&>div': {boxShadow: '0 0 5px 1px white'}
        }
      }}
      transition="ease-in 0.2s"
      boxShadow="dark"
      color="white"
      justify="end"
      h={h ?? 'full'}
      w={w ?? {}}
      borderRadius="xl"
      overflow={'hidden'}
      minW={minW || '20rem'}>
      {card.imageFieldName && (
        <Field.Image
          name={card.imageFieldName}
          lightbox={lightbox}
          lightboxGroup={lightboxGroup}
        />
      )}
      <Box position="absolute" w="full">
        {displayContent && (
          <Stack
            p="6"
            pb="4"
            w="full"
            bg="rgba(0,0,0,.2)"
            //backdropFilter='blur(7px)'
            borderRadius="xl"
            will-change="transform">
            {card.headingFieldName && (
              <Field.Text
                as={Heading}
                fontSize={{base: 'lg', xl: 'xl'}}
                fontWeight="700"
                name={card.headingFieldName}
                defaultValue={card.headingDefaultValue ?? ''}
                isDisabled={card.isDisabled}
                isRTF={false}
              />
            )}

            {card.textFieldName && (
              <Field.Text
                fontSize={{base: 'sm', lg: isSmallText ? 'sm' : 'md'}}
                maxW="80%"
                name={card.textFieldName}
                defaultValue={card.textDefaultValue ?? ''}
                isDisabled={card.isDisabled}
                isRTF={false}
              />
            )}

            <HStack
              className="show_more"
              cursor="pointer"
              _hover={{
                textDecoration: 'underline',
                '&>div': {boxShadow: '0 0 5px 1px white'}
              }}
              // _hover={{
              //   transform: {
              //     md: "scale(1.05) translateX(0px)",
              //     lg: "scale(1.05) translateX(5px)",
              //   },
              // }}
              transition="ease-in 0.2s">
              <Text
                onClick={() => {
                  if (isEditing || !card.linkUrl) return

                  navigate(card.linkUrl)
                }}
                fontSize={{base: 'sm', lg: 'md'}}
                fontWeight="700">
                Mehr anzeigen
              </Text>
              <Grid
                placeItems="center"
                h={{base: '4', lg: '6'}}
                w={{base: '4', lg: '6'}}
                color="red.500"
                bg="white"
                fontSize={{lg: 'lg'}}
                borderRadius="full"
                boxShadow="0 0 0px 0px white"
                transition="ease-in 0.2s">
                <BiChevronRight />
              </Grid>
            </HStack>
          </Stack>
        )}
      </Box>
    </Stack>
  )
}
export default CardWithImageBackground
