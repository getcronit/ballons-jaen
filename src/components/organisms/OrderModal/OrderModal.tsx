import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'
import { BallonButton } from '../../molecules/BallonButton'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CheckboxStyled } from '../../CheckboxStyled'
import { CheckoutLineItem } from '../BasketDrawer/stories/data'

export interface OrderFormValues {
  firstName: string
  lastName: string
  email: string
  phone: string

  message: string
  agreeToTerms: boolean
}

export interface OrderModalProps {
  isOpen: boolean
  onClose: () => void

  onSubmit: (data: OrderFormValues) => Promise<void>

  fixedValues?: {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
  }

  defaultValues?: {
    message?: string
  }
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  fixedValues,
  defaultValues
}) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<OrderFormValues>({})

  React.useEffect(() => {
    reset(fixedValues)
  }, [fixedValues])

  React.useEffect(() => {
    if (!isOpen) {
      reset()
    }
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />

      <ModalContent>
        <form
          onSubmit={event => {
            void handleSubmit(onSubmit)(event)
          }}>
          <ModalCloseButton />
          <ModalBody
            p={{
              base: 4,
              md: 8,
              lg: 12,
              xl: 16
            }}>
            <Stack spacing="6">
              <Heading
                as="h2"
                size={{
                  base: 'md',
                  md: 'lg'
                }}>
                Kaufanfrage
              </Heading>

              <Text size="b2015">
                Wir freuen uns über Ihre Kaufanfrage und werden uns
                schnellstmöglich bei Ihnen melden.
              </Text>

              <HStack>
                <FormControl isInvalid={!!errors.firstName}>
                  <FormLabel htmlFor="firstName" fontSize="sm">
                    Vorname
                  </FormLabel>
                  <Input
                    id="firstName"
                    placeholder="Max"
                    {...register('firstName', {
                      required: true
                    })}
                    isDisabled={!!fixedValues?.firstName}
                  />

                  <FormErrorMessage fontSize="sm">
                    {errors.firstName?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName}>
                  <FormLabel htmlFor="lastName" fontSize="sm">
                    Nachname
                  </FormLabel>
                  <Input
                    id="lastName"
                    placeholder="Mustermann"
                    {...register('lastName', {
                      required: true
                    })}
                    isDisabled={!!fixedValues?.lastName}
                  />

                  <FormErrorMessage fontSize="sm">
                    {errors.lastName?.message}
                  </FormErrorMessage>
                </FormControl>
              </HStack>
              <HStack>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="email" fontSize="sm">
                  E-Mail
                </FormLabel>
                <Input
                  id="email"
                  placeholder="max.mustermann@example.com"
                  type="email"
                  {...register('email', {
                    required: true
                  })}
                  isDisabled={!!fixedValues?.email}
                />

                <FormErrorMessage fontSize="sm">
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <FormLabel htmlFor="phone" fontSize="sm">
                  Telefonnummer
                </FormLabel>
                <Input
                  id="phone"
                  placeholder="+43 123 456 789"
                  type="phone"
                  {...register('phone', {
                    required: true
                  })}
                  isDisabled={!!fixedValues?.phone}
                />

                <FormErrorMessage fontSize="sm">
                  {errors.email?.message}
                </FormErrorMessage>
              </FormControl>
              </HStack>
              <FormControl isInvalid={!!errors.message}>
                <FormLabel htmlFor="message" fontSize="sm">
                  Haben Sie noch weitere Anmerkungen oder Informationen, die Sie uns mitteilen möchten?
                </FormLabel>
                <Textarea
                  id="message"
                  placeholder="Nachricht"
                  defaultValue={defaultValues?.message}
                  {...register('message', { required: true })}
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
                      roundedFull>
                      <Text
                        fontSize={{
                          base: 'xs',
                          md: 'sm'
                        }}>
                        Ich bin damit einverstanden, dass meine Angaben zur
                        Kontaktaufnahme und für Rückfragen gespeichert werden.
                      </Text>
                    </CheckboxStyled>
                  )}
                  name="agreeToTerms"
                  control={control}
                  rules={{
                    required:
                      'Bitte bestätigen Sie die Bedinungen zur Kontaktaufnahme'
                  }}
                />
                <FormErrorMessage fontSize="sm">
                  {errors.agreeToTerms?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter borderTop="1px solid" color="gray.200">
            <BallonButton
              isLoading={isSubmitting}
              type="submit"
              py="7 !important"
            >
              Anfragen
            </BallonButton>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
