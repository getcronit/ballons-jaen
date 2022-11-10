import { Box, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { BiChevronRight } from "react-icons/bi"
interface ICardWithImageBackgroundProps {
  card: {
    headingFieldName: string
    textFieldName?: string
    imageFieldName: string
  }
  displayContent?: boolean
  w?: {}
  h?: {}
  isSmallText?: boolean
}

const CardWithImageBackground: FC<ICardWithImageBackgroundProps> = ({
  card,
  displayContent = true,
  w,
  h,
  isSmallText = false,
}) => {
  
  return (
    <Stack
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
      overflow={'hidden'}
      minW='20rem'
    >

      <Field.Image name={card.imageFieldName} defaultValue={undefined} />

      <Box position='absolute'>
      {displayContent && (
        <Stack p="6" pb="4">
          {card.headingFieldName && (
            <Heading fontSize={{ base: "lg", xl: "xl" }} fontWeight="700">
              <Field.Text
                name={card.headingFieldName}
                defaultValue="Großhandel"
              />
            </Heading>
          )}

          {card.textFieldName && (
            <Text
              fontSize={{ base: "sm", lg: isSmallText ? "sm" : "md" }}
              maxW="80%"
            >
              <Field.Text
                name={card.textFieldName}
                defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
              />
            </Text>
          )}

          <HStack
            cursor="pointer"
            _hover={{
              transform: {
                md: "scale(1.05) translateX(0px)",
                lg: "scale(1.05) translateX(5px)",
              },
            }}
            transition="ease-in 0.2s"
          >
            <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="700">
              Mehr anzeigen
            </Text>
            <Grid
              placeItems="center"
              h={{ base: "4", lg: "6" }}
              w={{ base: "4", lg: "6" }}
              color="red.500"
              bg="white"
              fontSize={{ lg: "lg" }}
              borderRadius="full"
            >
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
