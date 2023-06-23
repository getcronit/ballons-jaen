import {ChevronRightIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  Tooltip
} from '@chakra-ui/react'
import React from 'react'
import {useForm} from 'react-hook-form'
import {Link as GatsbyLink} from 'gatsby'

export interface LoginFormValues {
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
  onSubmit
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting}
  } = useForm<LoginFormValues>()

  const [loginFailedMessage, setLoginFailedMessage] = React.useState('')

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
        'Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben.'
      )
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent maxW="56rem" h="32rem" overflow="hidden">
        <ModalBody display="flex" p={0}>
          <Flex
            w="full"
            display={{
              base: 'none',
              md: 'flex'
            }}>
            <Image
              boxSize="full"
              src="https://osg.snek.at/storage/BQACAgQAAxkDAAIVX2QV-BiZ8uUn2PkCS6O50LGgTzGxAAIsDwACDPexUOzYNjlE-ICzLwQ"
              objectFit="cover"
            />
          </Flex>
          <Flex w="full">
            <Stack spacing={8} maxW="lg" py={24} px="8" w="full">
              <form
                onSubmit={event => {
                  void handleSubmit(handleFormSubmit)(event)
                }}>
                <Stack align="left" spacing="4">
                  <Box>
                    <Text fontSize="md">Willkommen zurück!</Text>
                    <Text fontSize="sm">
                      Hunderte von Ballons warten auf Sie.
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
                        {...register('email', {
                          required: true
                        })}
                      />
                      <FormErrorMessage>
                        {errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl id="password" isInvalid={!!errors.password}>
                      <FormLabel htmlFor="passwort" fontSize="sm">
                        Passwort
                      </FormLabel>

                      <Input
                        type="password"
                        placeholder="Passwort"
                        {...register('password', {
                          required: true
                        })}
                      />
                      <FormErrorMessage>
                        {errors.email?.message}
                      </FormErrorMessage>
                    </FormControl>
                  </Stack>

                  <Button
                    rightIcon={<ChevronRightIcon />}
                    type="submit"
                    isLoading={isSubmitting}>
                    Anmelden
                  </Button>

                  <Text fontSize="sm" color="red">
                    {loginFailedMessage}
                  </Text>

                  <Text fontSize="sm">
                    Neu bei Ballons & Ballons?{' '}
                    <Tooltip label="Derzeit nicht verfügbar">
                      <Link
                        as={GatsbyLink}
                        to="/grosshandel/?contact=Ich%20repr%C3%A4sentiere%20[Ihr%20Unternehmen].%20Wir%20sind%20ein%20etabliertes%20Unternehmen%20in%20der%20[Ihr%20Gesch%C3%A4ftsbereich],%20das%20daran%20interessiert%20ist,%20Ihre%20Auswahl%20an%20Ballonprodukten%20in%20unser%20Sortiment%20aufzunehmen."
                        textDecoration="underline">
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
