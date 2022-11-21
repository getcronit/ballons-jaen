import {
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react"
import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { NavLinks } from "./NavLinks"

interface IBottomNavProps {}

const BottomNav: FC<IBottomNavProps> = () => {
  return (
    <Flex
      h={{ base: "14", lg: "16" }}
      bg="white"
      boxShadow="light"
      justify="center"
      align="center"
    >
      <NavLinks
        gap={{ md: 6, lg: 8, "2xl": 10 }}
        maxW={CONTAINER_MAX_WIDTH}
        marginX="auto"
        justify="center"
        direction={'row'}
      />
    </Flex>
  )
}

export const extractUrlsFromMarkdown = (
  markdown: string
): {
  label: string
  to: string
}[] => {
  const urls = []
  const regex = /\[(.*?)\]\((.*?)\)/g
  let match
  while ((match = regex.exec(markdown))) {
    urls.push({
      label: match[1],
      to: match[2],
    })
  }

  console.log(`urls`, urls)

  return urls
}

export const MarkdownLinksForm: React.FC<{
  onSaved: (markdownUrls: string) => void
  onCancle: () => void
  markdownUrls: string
}> = ({ onSaved, onCancle, markdownUrls }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<{
    markdownUrls: string
  }>({
    defaultValues: {
      markdownUrls: markdownUrls,
    },
  })

  // Update default values when initUrl changes
  React.useEffect(() => {
    reset({
      markdownUrls,
    })
  }, [markdownUrls, reset])

  const onSubmit = (data: { markdownUrls: string }) => {
    onSaved(data.markdownUrls)

    // reset the form
    onCancle()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack color="chakra-body-text">
        <FormControl isInvalid={!!errors.markdownUrls}>
          <FormLabel htmlFor="markdownUrls">Markdown URLs</FormLabel>

          <Textarea minH="md" {...register("markdownUrls", {})} />

          <FormErrorMessage>
            {errors.markdownUrls && errors.markdownUrls.message?.toString()}
          </FormErrorMessage>
        </FormControl>

        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancle}>
            Cancel
          </Button>
          <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  )
}

export default BottomNav
