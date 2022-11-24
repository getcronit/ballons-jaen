import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import React from "react"
import { useForm } from "react-hook-form"

export type LoginFormValues = {
  email: string
  password: string
}

export interface LoginModalProps {
  isOpen: boolean
  onClose: () => void

  onSubmit: (data: LoginFormValues) => Promise<boolean>
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>()

  const [loginFailedMessage, setLoginFailedMessage] = React.useState("")

  React.useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])

  const handleFormSubmit = async (data: LoginFormValues) => {
    const success = await onSubmit(data)
    if (success) {
      onClose()
    } else {
      setLoginFailedMessage(
        "Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben."
      )
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent maxW="56rem" h="32rem" overflow="hidden">
        <ModalBody display={"flex"} p={0}>
          <Flex w="full" display={{
            base: "none",
            md: "flex",
          }}>
            <Image src="https://ballons.snek.at/images/home/heart/hsection2.png" />
          </Flex>
          <Flex w="full">
            <Stack spacing={8} maxW={"lg"} py={24} px="8" w="full">
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Stack align={"left"} spacing="4">
                  <Box>
                    <Text fontSize={"md"}>Willkommen zurück!</Text>
                    <Text fontSize="sm">
                      Hunderte von Ballone warten auf Sie.
                    </Text>
                  </Box>

                  <Stack>
                    <FormControl id="email" isInvalid={!!errors.email}>
                      <FormLabel htmlFor="email" fontSize="sm">
                        Email
                      </FormLabel>

                      <Input
                        type="email"
                        placeholder="Email"
                        {...register("email", {
                          required: true,
                        })}
                      />
                      <FormErrorMessage>
                        {errors.email && errors.email.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isInvalid={!!errors.password}>
                      <FormLabel htmlFor="passwort" fontSize="sm">
                        Passwort
                      </FormLabel>

                      <Input
                        type="password"
                        placeholder="Passwort"
                        {...register("password", {
                          required: true,
                        })}
                      />
                      <FormErrorMessage>
                        {errors.email && errors.email.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Stack>

                  <Button
                    rightIcon={<ChevronRightIcon />}
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Anmelden
                  </Button>

                  <Text fontSize="sm" color="red">
                    {loginFailedMessage}
                  </Text>

                  <Text fontSize="sm">
                    Neu bei Ballons & Ballons?{" "}
                    <Tooltip label="Derzeit nicht verfügbar">
                      <Link textDecoration={"underline"}>
                        Jetzt registrieren
                      </Link>
                    </Tooltip>
                  </Text>
                </Stack>
              </form>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
