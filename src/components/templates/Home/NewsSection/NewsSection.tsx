import { Box, Container, Flex } from "@chakra-ui/react"
import { Field } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"
import NewsContent from "./NewsContent"

interface INewsSectionProps {}

const NewsSection: FC<INewsSectionProps> = () => {
  return (
    <Container
      h={{ base: "auto", lg: "44rem" }}
      alignItems={{ base: "center", lg: "start" }}
      justifyContent="space-between"
      flexDirection={{ base: "column-reverse", md: "column", lg: "row" }}
      as={Flex}
      gap="8"
      maxW={CONTAINER_MAX_WIDTH}
    >
      <Box flex="1">
        <NewsContent />
      </Box>

      <Box
        flex="1"
        px="6"
        mx="auto"
        overflow="hidden"
        w={{ base: "100%", sm: "80%", md: "25rem", lg: "auto" }}
        //borderRadius="full"
      >
        <Field.Image
          alt="slider_img"
          name={"newsImage2"}
          defaultValue={"/images/home/news/news_img.png"}
        />
      </Box>
    </Container>
  )
}
export default NewsSection
