import { Box, Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { BiChevronRight } from "react-icons/bi"
interface ILongCardImageBackgroundProps {
  card: {
    headingFieldName?: string
    headingDefaultValue?: string
    textFieldName?: string
    textDefaultValue?: string
    imageFieldName: string
    imageDefaultValue: string
  }
  onClick?: () => void
  displayContent?: boolean
  w?: {}
  h?: {}
  isSmallText?: boolean
}

const LongCardImageBackground: FC<ILongCardImageBackgroundProps> = ({
  card,
  onClick,
  displayContent = true,
  w,
  h,
  isSmallText = false,
}) => {
  return (
    <Stack
      boxShadow="darker"
      color="white"
      justify="end"
      h={h ?? "full"}
      w={w ?? {}}
      overflow="hidden"
      borderRadius="xl"
    >
      <Field.Image
        name={card.imageFieldName}
        defaultValue={card.imageDefaultValue}
      />

  <Box position={'absolute'}>
  {displayContent && (
        <Stack p="6" pb="4" spacing="0">
          {card.headingFieldName && (
            <Heading size="h4020" fontWeight="700">
              <Field.Text
                name={card.headingFieldName}
                defaultValue={card.headingDefaultValue ?? ""}
              />
            </Heading>
          )}

          {card.textFieldName && (
            <Text fontSize="sm" maxW={{ xl: "60%" }} noOfLines={2} as="span">
              <Field.Text
                name={card.textFieldName}
                defaultValue={card.textDefaultValue ?? ""}
              />
            </Text>
          )}
          <HStack
          onClick={onClick}
            mt="2 !important"
            cursor="pointer"
            _hover={{
              transform: {
                md: "scale(1.05) translateX(0px)",
                lg: "scale(1.05) translateX(5px)",
              },
            }}
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
export default LongCardImageBackground
