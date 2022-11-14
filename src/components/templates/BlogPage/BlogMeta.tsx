import { Box, Text } from "@chakra-ui/react";
import { Field } from "@jaenjs/jaen";

export const BlogMeta: React.FC = () => {
  return (
    <Box>
      <Text size="b2012" textAlign="end">
        Von{" "}
        <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
          <Field.Text
            name="author"
            defaultValue="Max Mustermann"
            as="span"
            display={"inline-block"} />
        </Text>
      </Text>
      <Text size="b2012" textAlign="end">
        <Field.Text name="date" defaultValue="12.12.2020" />
      </Text>
    </Box>
  );
}
