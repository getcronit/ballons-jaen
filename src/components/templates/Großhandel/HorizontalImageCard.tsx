import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import theme from "../../../styles/theme"
import LinkButtonField from "../../fields/LinkButtonField"

interface IHorizontalImageCardProps {
  card: {
    tagFieldName: string
    tagDefaultValue: string
    titleFieldName: string
    titleDefaultValue: string
    descriptionFieldName: string
    descriptionDefaultValue: string
    imageFieldName: string
    imageDefaultValue: string
    buttonTextFieldName: string
    buttonTextFieldDefaultValue: string
  }
  orientation: "left" | "right"
}

const HorizontalImageCard: FC<IHorizontalImageCardProps> = ({
  card,
  orientation,
}) => {
  return (
    <Flex
      maxW={CONTAINER_MAX_WIDTH}
      borderRadius="xl"
      bg="white"
      boxShadow="dark"
      flexDir={{
        base: "column",
        md: orientation === "left" ? "row" : "row-reverse",
      }}
    >
      <Grid
        borderRadius="xl"
        overflow="hidden"
        flex="1"
        maxH={{ base: "120px", sm: "240px", md: "400px" }}
        h='30vh'
      >
        <Field.Image
          name={card.imageFieldName}
          defaultValue={card.imageDefaultValue}
        />
      </Grid>
      <Stack
        flex="1"
        gap={{ base: 2, md: 0 }}
        spacing="0"
        px="10"
        justify="center"
        py="6"
        align={{ base: "center", md: "start" }}
      >
        <Heading
          fontSize="md"
          fontWeight="semibold"
          textTransform="uppercase"
          display={{ base: "none", md: "block" }}
        >
          <Field.Text
            name={card.tagFieldName}
            defaultValue={card.tagDefaultValue}
          />
        </Heading>
        <Heading
          fontSize={{
            base: "md", md: "xl", lg: "2xl", xl: "3xl" 
          }}
          as="span"
          fontWeight="semibold"
          // sx={
          //   {
          //     "i, em": {
          //       fontSize: { md: "3xl", lg: "4xl", xl: "5xl" },

          //     },
          //   }
          // }
        >
          <Field.Text
            rtf
            name={card.titleFieldName}
            defaultValue={card.titleDefaultValue}
          />
        </Heading>

      

        <Text
          variant="light"
          size="b2012"
          textAlign={{ base: "center", md: "start" }}
          as="span"
        >
          <Field.Text
            name={card.descriptionFieldName}
            defaultValue={card.descriptionDefaultValue}
          />
        </Text>
        <Box>
          <LinkButtonField
            name={card.buttonTextFieldName}
            defaultValue={card.buttonTextFieldDefaultValue}
            mt={{ base: "0", md: "4" }}
            size={{ base: "sm", lg: "md" }}
            variant="outline"
          />
        </Box>
      </Stack>
    </Flex>
  )
}
export default HorizontalImageCard
