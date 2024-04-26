import {
  Box,
  Grid,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field, useContentManagement} from '@atsnek/jaen'
import {Link, navigate} from 'gatsby'
import {FC} from 'react'
import {FaChevronRight} from '@react-icons/all-files/fa/FaChevronRight'

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
    <LinkBox
      as={Stack}
      pointerEvents="auto"
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
      isolation="isolate"
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
            bgGradient="linear(to-t, rgba(0,0,0,.7), rgba(0,0,0,0))"
            //backdropFilter='blur(7px)'
            borderRadius="xl"
            will-change="transform">
            <Stack spacing="0">
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
                  name={card.textFieldName}
                  defaultValue={card.textDefaultValue ?? ''}
                  isDisabled={card.isDisabled}
                  isRTF={false}
                />
              )}
            </Stack>

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
              <LinkOverlay
                as={isEditing || !card.linkUrl ? 'p' : Link}
                fontSize={{base: 'sm', lg: 'md'}}
                fontWeight="700"
                to={card.linkUrl}>
                Mehr anzeigen
              </LinkOverlay>

              <Grid
                placeItems="center"
                h={{base: '4', lg: '6'}}
                w={{base: '4', lg: '6'}}
                color="red.500"
                bg="white"
                borderRadius="full"
                boxShadow="0 0 0px 0px white"
                transition="ease-in 0.2s">
                <FaChevronRight />
              </Grid>
            </HStack>
          </Stack>
        )}
      </Box>
    </LinkBox>
  )
}
export default CardWithImageBackground
