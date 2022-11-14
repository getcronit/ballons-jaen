import { Box, HStack, Tag } from "@chakra-ui/react";
import { connectSection, Field } from "@jaenjs/jaen";

const BlogTagItem = connectSection(
  () => {
    return (
      <Tag variant='normal'>
        {<Field.Text name="tagText" defaultValue="Tag" />}
      </Tag>
    );
  },
  {
    name: "BlogTagItem",
    displayName: "Tag",
  }
);

export const BlogTags: React.FC<{
  fieldName: string;
}> = (props) => {
  return (
    <Box minW="24">
      <Field.Section
        as={HStack}
        name={props.fieldName}
        displayName="Tags"
        sections={[BlogTagItem]} />
    </Box>
  );
};
