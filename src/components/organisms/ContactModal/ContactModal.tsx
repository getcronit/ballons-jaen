import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
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
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import React from "react"
import { Controller, useForm } from "react-hook-form"
import { CheckboxStyled } from "../../CheckboxStyled"

export type ContactFormValues = {
  name: string
  email: string
  message: string

  agreeToTerms: boolean
}

export interface ContactModalProps {
  isOpen: boolean
  onClose: () => void

  onSubmit: (data: ContactFormValues) => Promise<void>
}

export const ContactModal: React.FC<ContactModalProps> = ({
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
  } = useForm<ContactFormValues>()

  React.useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />

      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalCloseButton />
          <ModalBody p="16">
            <Stack spacing="6">
              <Heading as="h2" size="lg">
                Kontaktieren Sie uns
              </Heading>

              <Text>
                Wir freuen uns über Ihre Nachricht und werden uns
                schnellstmöglich bei Ihnen melden.
              </Text>

              <HStack>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel htmlFor="name" fontSize="sm">
                    Wie lautet Ihr voller Name?
                  </FormLabel>
                  <Input
                    id="name"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />

                  <FormErrorMessage fontSize="sm">
                    {errors.name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel htmlFor="email" fontSize="sm">
                    Wie lautet Ihre E-Mail Adresse?
                  </FormLabel>
                  <Input
                    id="email"
                    placeholder="max.mustermann@example.com"
                    type="email"
                    {...register("email", { required: true })}
                  />

                  <FormErrorMessage fontSize="sm">
                    {errors.email?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>

              <FormControl isInvalid={!!errors.message}>
                <FormLabel htmlFor="message" fontSize="sm">
                  Wie können wir Ihnen helfen?
                </FormLabel>
                <Textarea
                  id="message"
                  placeholder="Nachricht"
                  {...register("message", { required: true })}
                />

                <FormErrorMessage fontSize="sm">
                  {errors.message?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.agreeToTerms}>
                <Controller
                  render={({ field, fieldState, formState }) => (
                    <CheckboxStyled
                      ref={field.ref}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                      checked={field.value}
                      roundedFull
                    >
                      <Text fontSize="sm">
                        Ich bin damit einverstanden, dass meine Angaben zur
                        Kontaktaufnahme und für Rückfragen gespeichert werden.
                      </Text>
                    </CheckboxStyled>
                  )}
                  name="agreeToTerms"
                  control={control}
                  rules={{
                    required:
                      "Bitte bestätigen Sie die Bedinungen zur Kontaktaufnahme",
                  }}
                />
                <FormErrorMessage fontSize="sm">
                  {errors.agreeToTerms?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter borderTop={"1px solid"} color="gray.200">
            <Button isLoading={isSubmitting} type="submit">
              Senden
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
