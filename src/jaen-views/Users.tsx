import {AddIcon, CheckCircleIcon, EditIcon, Icon} from '@chakra-ui/icons'
import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Box,
  Button,
  ButtonGroup,
  ButtonProps,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  Switch,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import {connectView, snekResourceId} from '@snek-at/jaen'
import {FaUser} from '@react-icons/all-files/fa/FaUser'
// import {usersAdd, usersDelete, usersGet, usersUpdate} from '@snek-functions/iam'
// import {IReducedUser, IUser} from '@snek-functions/iam/dist/interfaces'
import React, {useCallback, useEffect} from 'react'
import {Controller, set, useForm} from 'react-hook-form'
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import {Mutation, Query} from '@snek-functions/origin/dist/schema.generated'
import {sq} from '@snek-functions/origin'
import {navigate} from 'gatsby'
import {useAuthentication} from '../services/authentication'

type User = ReturnType<Query['user']>

type UserCreate = Parameters<Mutation['userRegister']>[0]
type UserUpdate = Parameters<Mutation['userUpdate']>[0]

// type User = Parameters<Mutation["userMe"]>[0];

const UsersList = () => {
  const navigate = useNavigate()
  const {state} = useLocation()

  const {users, isLoading, isAuthorized} = useUsers()

  console.log(users)

  React.useEffect(() => {
    if (isLoading) return

    if (state?.userId) {
      const userIndex = users.findIndex(user => user.id === state.userId)

      if (userIndex !== -1) {
        navigate((userIndex + 1).toString(), {replace: true})
      }
    }
  }, [users, isLoading, state])

  return (
    <>
      <Stack overflowY={'auto'} height="100%">
        {isLoading ? (
          <Flex
            height="100%"
            width="100%"
            justifyContent="center"
            alignItems="center">
            <Spinner />
          </Flex>
        ) : isAuthorized ? (
          <Table>
            <Thead position="sticky" top={0} zIndex={1} borderColor="black">
              <Tr my=".8rem">
                <Th></Th>
                <Th>E-Mail Address</Th>
                <Th>Username</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Created at</Th>
                <Th>Active</Th>
                <Th>Admin</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users
                .map((user, index) => (
                  <Tr key={user.id}>
                    <Td>
                      <Text fontSize="xs">{index + 1}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{user.primaryEmailAddress}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{user.username}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{user.details?.firstName}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{user.details?.lastName}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">
                        {new Date(user.createdAt).toDateString()}
                      </Text>
                    </Td>
                    <Td>{user.isActive ? <CheckCircleIcon /> : null}</Td>
                    <Td>{user.isAdmin ? <CheckCircleIcon /> : null}</Td>
                    <Td textAlign={'right'}>
                      <IconButton
                        aria-label="Edit"
                        icon={<EditIcon />}
                        onClick={() => navigate(user.id)}
                      />
                    </Td>
                  </Tr>
                ))
                .reverse()}
            </Tbody>
          </Table>
        ) : (
          <Alert colorScheme="red">
            <AlertIcon />
            You are not authorized to view this page.
          </Alert>
        )}
      </Stack>
    </>
  )
}

const AlertDialogButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    alertHeader: string
    alertBody: string
    alertFooter: {
      confirmButton: string
      cancelButton: string
    }
  }
>(({onClick, alertFooter, alertBody, alertHeader, ...rest}, ref) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const cancelRef = React.useRef<any>()

  const handleConfirm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onClose()
    onClick?.(e)
  }

  return (
    <>
      <Button
        ref={ref}
        onClick={onOpen}
        colorScheme="blue"
        variant="outline"
        {...rest}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {alertHeader}
            </AlertDialogHeader>

            <AlertDialogBody>{alertBody}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {alertFooter.cancelButton}
              </Button>
              <Button colorScheme="red" onClick={handleConfirm} ml={3}>
                {alertFooter.confirmButton}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
})

const UserDetails = () => {
  const params = useParams()

  const userId = params.userId

  if (!userId) {
    return null
  }

  const navigate = useNavigate()

  const {users, updateUser, deleteUser, isLoading} = useUsers()

  const [changePasword, setChangePassword] = React.useState(false)

  const user = users.find(user => user.id === userId)

  type FormValues = {
    emailAddress: string
    details?: {
      firstName?: string
      lastName?: string
    }
    username: string
    isActive: boolean
    isAdmin: boolean
    password?: string
  }

  const defaultValues = user
    ? {
        emailAddress: user.primaryEmailAddress,
        details: {
          firstName: user.details?.firstName,
          lastName: user.details?.lastName
        },
        username: user.username,
        isActive: user.isActive,
        isAdmin: user.isAdmin
      }
    : {}

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: {errors, isSubmitting, isDirty, isValid}
  } = useForm<FormValues>({
    defaultValues
  })

  const onReset = () => {
    reset(defaultValues)

    setChangePassword(false)
  }

  const onSubmit = async (values: FormValues) => {
    // Get diff between old and new values typescript

    const diff: any = {}

    Object.keys(values).forEach(key => {
      if ((values as any)[key] !== (defaultValues as any)[key]) {
        diff[key] = (values as any)[key]
      }
    })

    const ok = await updateUser(userId, diff)

    if (ok) {
      reset(values)
      setChangePassword(false)
    }
  }

  const handleDelete = async () => {
    const ok = await deleteUser(userId)

    if (ok) {
      navigate(-1)
    }
  }

  React.useEffect(() => {
    onReset()
  }, [user])

  if (!user) {
    if (isLoading) {
      return <Text>Loading</Text>
    }

    return <Text>User not found</Text>
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>ID</FormLabel>
          <Input placeholder={user.id} disabled />
        </FormControl>
        <FormControl isInvalid={!!errors.emailAddress}>
          <FormLabel>E-Mail</FormLabel>
          <Input
            isDisabled
            placeholder="max.mustermann@snek.at"
            {...register('emailAddress', {
              required: 'This is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          <FormErrorMessage>{errors.emailAddress?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input
            placeholder="max.muster"
            {...register('username', {
              required: 'This is required'
            })}
          />
          <FormErrorMessage>
            {errors.details?.firstName?.message}
          </FormErrorMessage>
        </FormControl>

        <Stack direction="row">
          <Flex>
            <FormControl mt={4} isInvalid={!!errors.details?.lastName}>
              <FormLabel>Firstname</FormLabel>
              <Input placeholder="Max" {...register('details.firstName', {})} />
              <FormErrorMessage>
                {errors.details?.lastName?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <Flex>
            <FormControl mt={4} isInvalid={!!errors.details?.lastName}>
              <FormLabel>Lastname</FormLabel>
              <Input
                placeholder="Mustermann"
                {...register('details.lastName', {})}
              />
              <FormErrorMessage>
                {errors.details?.lastName?.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </Stack>

        <FormControl mt={4} isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          {changePasword ? (
            <PasswordInput
              {...register('password', {
                required: 'This is required',
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
                }
              })}
            />
          ) : (
            <Button onClick={() => setChangePassword(true)}>Change </Button>
          )}
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.isActive}>
          <FormLabel>Active</FormLabel>
          <Controller
            control={control}
            name="isActive"
            defaultValue={user.isActive}
            render={({field: {value, onChange, onBlur, ref}}) => (
              <Switch
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                isChecked={value}
              />
            )}
          />
          <FormErrorMessage>{errors.isActive?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4} isInvalid={!!errors.isAdmin}>
          <FormLabel>Admin</FormLabel>
          <Controller
            control={control}
            name="isAdmin"
            defaultValue={user.isAdmin}
            render={({field: {value, onChange, onBlur, ref}}) => (
              <Switch
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                isChecked={value}
              />
            )}
          />
          <FormErrorMessage>{errors.isAdmin?.message}</FormErrorMessage>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Created at</FormLabel>
          <Input
            placeholder={new Date(user.createdAt).toDateString()}
            disabled
          />
        </FormControl>

        <Box mt={8}>
          <HStack width="full">
            <ButtonGroup isDisabled={!isDirty}>
              <Button type="submit" isLoading={isSubmitting}>
                Save Changes
              </Button>
              <Button variant="outline" onClick={onReset}>
                Cancel
              </Button>
            </ButtonGroup>
            <AlertDialogButton
              onClick={handleDelete}
              colorScheme="red"
              variant="outline"
              alertHeader="Delete user"
              alertBody="Are you sure? You can't undo this action afterwards."
              alertFooter={{
                cancelButton: 'Cancel',
                confirmButton: 'Delete'
              }}>
              Delete
            </AlertDialogButton>
          </HStack>
        </Box>
      </form>
    </Box>
  )
}

const useUsers = () => {
  const toast = useToast()

  const [isLoading, setIsLoading] = React.useState(true)
  const [isAuthorized, setIsAuthorized] = React.useState(false)

  const [users, setUsers] = React.useState<
    {
      id: string
      primaryEmailAddress: string
      username: string
      createdAt: string
      details?: {
        firstName?: string
        lastName?: string
      }
      isActive: boolean
      isAdmin: boolean
    }[]
  >([])

  const checkErrors = (errors: Array<{message: string}>) => {
    if (errors?.length > 0) {
      toast({
        title: 'Error',
        description: errors[0].message,
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }

    return !errors || errors.length === 0
  }

  const fetchUsers = useCallback(async () => {
    const [users, errors] = await sq.query(Mutation =>
      Mutation.allUser({resourceId: snekResourceId}).map(user => ({
        id: user.id,
        primaryEmailAddress: user.primaryEmailAddress,
        username: user.username,
        createdAt: user.createdAt,
        details: {
          firstName: user.details?.firstName || undefined,
          lastName: user.details?.lastName || undefined
        },
        isActive: user.isActive,
        isAdmin: user.isAdmin
      }))
    )

    const ok = checkErrors(errors)

    if (ok) {
      setIsAuthorized(true)
    }

    setUsers(users)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [])

  const addUser = async (values: UserCreate['values']) => {
    const [newUser, errors] = await sq.mutate(Mutation => {
      const user = Mutation.userRegister({
        resourceId: snekResourceId,
        values,
        skipEmailVerification: true
      }).user

      return {
        id: user.id,
        primaryEmailAddress: user.primaryEmailAddress,
        username: user.username,
        createdAt: user.createdAt,
        details: {
          firstName: user.details?.firstName || undefined,
          lastName: user.details?.lastName || undefined
        },
        isActive: user.isActive,
        isAdmin: user.isAdmin
      }
    })

    const ok = checkErrors(errors)

    if (ok) {
      setUsers([...users, newUser])

      toast({
        title: 'Success',
        description: 'User created',
        status: 'success',
        duration: 5000,
        isClosable: true
      })
    }

    return ok
  }

  const updateUser = async (
    id: UserUpdate['id'],
    values: UserUpdate['values']
  ) => {
    const [updatedUser, errors] = await sq.mutate(Mutation => {
      const user = Mutation.userUpdate({
        id,
        values
      })

      return {
        id: user.id,
        primaryEmailAddress: user.primaryEmailAddress,
        username: user.username,
        createdAt: user.createdAt,
        details: {
          firstName: user.details?.firstName || undefined,
          lastName: user.details?.lastName || undefined
        },
        isActive: user.isActive,
        isAdmin: user.isAdmin
      }
    })

    const ok = checkErrors(errors)

    if (ok) {
      setUsers(users.map(u => (u.id === id ? updatedUser : u)))
    }

    return ok
  }

  const deleteUser = async (userId: string) => {
    const [deletedUser, errors] = await sq.mutate(Mutation =>
      Mutation.userDelete({id: userId})
    )

    const ok = checkErrors(errors)

    if (ok) {
      setUsers(users.filter(u => u.id !== userId))
    }

    return ok
  }

  console.log('users', users)

  return {
    users,
    addUser,
    updateUser,
    deleteUser,

    isLoading,
    isAuthorized
  }
}

const UsersView = () => {
  // fetch users only

  return (
    <>
      <Routes>
        <Route index element={<UsersList />} />
        <Route path=":userId" element={<UserDetails />} />
      </Routes>
    </>
  )
}

const PasswordInput = React.forwardRef<HTMLInputElement, any>(
  ({register, ...props}, ref) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
      <InputGroup size="md">
        <Input
          autoComplete="new-password"
          ref={ref}
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          {...props}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
)

const AddUserControl = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const toast = useToast()

  const navigate = useNavigate()

  const {addUser} = useUsers()

  const initialRef = React.useRef<HTMLInputElement | null>(null)

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: {errors, isSubmitting, isDirty, isValid}
  } = useForm<UserCreate['values']>({})

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit = async (values: UserCreate['values']) => {
    const ok = await addUser(values)

    if (ok) {
      handleClose()
      navigate(0)
    }
  }

  // return null if path not on /users but on /users/:index
  const {pathname} = useLocation()

  if (pathname !== '/views/users') {
    return null
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose} initialFocusRef={initialRef}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Add a user</ModalHeader>
            <ModalCloseButton onClick={handleClose} />
            <ModalBody pb={6}>
              <FormControl isInvalid={!!errors.emailAddress}>
                <FormLabel>E-Mail</FormLabel>
                <Input
                  placeholder="max.mustermann@snek.at"
                  type="email"
                  {...register('emailAddress', {
                    required: 'This is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                <FormErrorMessage>
                  {errors.emailAddress?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="max.mustermann"
                  {...register('username', {
                    required: 'This is required'
                  })}
                />
                <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
              </FormControl>

              <Stack direction={'row'}>
                <Flex>
                  <FormControl mt={4} isInvalid={!!errors.details?.firstName}>
                    <FormLabel>Firstname</FormLabel>
                    <Input
                      placeholder="Max"
                      {...register('details.firstName')}
                    />
                    <FormErrorMessage>
                      {errors.details?.firstName?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>

                <Flex>
                  <FormControl mt={4} isInvalid={!!errors.details?.lastName}>
                    <FormLabel>Lastname</FormLabel>
                    <Input
                      placeholder="Mustermann"
                      {...register('details.lastName')}
                    />
                    <FormErrorMessage>
                      {errors.details?.lastName?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              </Stack>

              <FormControl mt={4} isInvalid={!!errors.password}>
                <FormLabel>Password</FormLabel>
                <PasswordInput
                  {...register('password', {
                    required: 'This is required',
                    pattern: {
                      value:
                        /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{8,}$/,
                      message:
                        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character'
                    }
                  })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <ButtonGroup isDisabled={!isDirty}>
                <Button type="submit" isLoading={isSubmitting}>
                  Create
                </Button>
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
              </ButtonGroup>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

      <Button leftIcon={<AddIcon />} onClick={onOpen}>
        Add User
      </Button>
    </>
  )
}

export default connectView(UsersView, {
  path: '/users',
  label: 'User',
  heading: 'User Management',
  Icon: FaUser,
  controls: [<AddUserControl />]
})
