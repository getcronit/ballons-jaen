import { EditIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Link as CLink,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { store } from "@jaenjs/jaen/src/redux"
import { Link } from "gatsby"
import React, { FC } from "react"
import { useForm } from "react-hook-form"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { useJaenNavigation } from "./useJaenNavigation"

interface IBottomNavProps {}

const BottomNav: FC<IBottomNavProps> = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  const { isEditing, navLinks, markdown, updateNavigation } =
    useJaenNavigation()

  return (
    <Flex
      h={{ base: "14", lg: "16" }}
      bg="white"
      boxShadow="light"
      justify="center"
      align="center"
    >
      <HStack
        gap={{ md: 6, lg: 8, "2xl": 10 }}
        maxW={CONTAINER_MAX_WIDTH}
        marginX="auto"
        justify="center"
      >
        {navLinks.map((link, index) => {
          return (
            <CLink
              _before={{
                display: "block",
                content: `"${link.label}"`,
                fontWeight: "bold",
                height: "0",
                overflow: "hidden",
                visibility: "hidden",
              }}
              as={Link}
              to={link.to}
              key={index}
              textAlign="center"
              _hover={{
                fontWeight: "bold",
                transform: "scale(1.05)",
                transition: "0.2s ease-in",
              }}
              fontSize={{ md: "sm", lg: "1rem", xl: "1.125rem", "2xl": "md" }}
              transition="0.2s ease-in"
              color="brand.dark_gray"
            >
              {link.label}
            </CLink>
          )
        })}
      </HStack>
      {isEditing && (
        <Box m={2}>
          <Popover
            isOpen={isOpen}
            initialFocusRef={firstFieldRef}
            onOpen={onOpen}
            onClose={onClose}
            placement="bottom"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <IconButton
                size="sm"
                icon={<EditIcon />}
                aria-label={""}
                colorScheme="teal"
              />
            </PopoverTrigger>
            <PopoverContent p={5}>
              <PopoverArrow />
              <PopoverCloseButton />
              <MarkdownLinksForm
                onSaved={updateNavigation}
                onCancle={onClose}
                markdownUrls={markdown}
              />
            </PopoverContent>
          </Popover>
        </Box>
      )}
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

const MarkdownLinksForm: React.FC<{
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

          <Textarea minH='md' {...register("markdownUrls", {})} />

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
