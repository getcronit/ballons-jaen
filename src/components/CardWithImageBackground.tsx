import {Box, Grid, Heading, HStack, Stack, Text} from '@chakra-ui/react'
import {Field, useStatus} from '@snek-at/jaen'
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
  }
  displayContent?: boolean
  minW?: {} | string
  w?: {} | string
  h?: {} | string
  isSmallText?: boolean
}

const CardWithImageBackground: FC<ICardWithImageBackgroundProps> = ({
  card,
  displayContent = true,
  minW,
  w,
  h,
  isSmallText = false
}) => {

  const {isEditing} = useStatus()

  console.log('card', "card rerendered")

  return (
    <Stack
      onClick={() => !isEditing && card.linkUrl && navigate(card.linkUrl)}
      position="relative"
      _hover={{
        transition: "all 0.3s ease",
        transform: {
          md: "scale(1.03) ",
          lg: "scale(1.03) ",
        },
      }}
      transition="ease-in 0.2s"
      boxShadow="darker"
      color="white"
      justify="end"
      h={h ?? "full"}
      w={w ?? {}}
      borderRadius="xl"
      overflow={"hidden"}
      minW={minW || "20rem"}
    >
      {card.imageFieldName && (
        <Field.Image
          name={card.imageFieldName}
          label="Image"
          //defaultValue={card.imageDefaultValue}
        />
      )}
      <Box position="absolute">
        {displayContent && (
          <Stack p="6" pb="4">
            {card.headingFieldName && (
              <Heading fontSize={{base: 'lg', xl: 'xl'}} fontWeight="700">
                <Field.Text
                  name={card.headingFieldName}
                  label="Heading"
                  defaultValue={card.headingDefaultValue ?? ''}
                />
              </Heading>
            )}

            {card.textFieldName && (
              <Text
                fontSize={{base: 'sm', lg: isSmallText ? 'sm' : 'md'}}
                maxW="80%"
                as="span">
                <Field.Text
                  name={card.textFieldName}
                  label="Text"
                  defaultValue={card.textDefaultValue ?? ''}
                />
              </Text>
            )}

            <HStack
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
