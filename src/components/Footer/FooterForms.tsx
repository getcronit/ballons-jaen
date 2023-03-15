import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import React from 'react'
import {useForm} from 'react-hook-form'

type IOpeningHours = Record<string, {open: string; close: string}>

export const OpeningHoursForm: React.FC<{
  onSaved: (openingHours: IOpeningHours) => void
  onCancle: () => void
  openingHours: IOpeningHours
}> = ({onSaved, onCancle, openingHours}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors, isSubmitting}
  } = useForm<{
    openingHours: IOpeningHours
  }>({
    defaultValues: {
      openingHours
    }
  })

  // Update default values when initUrl changes
  React.useEffect(() => {
    reset({
      openingHours
    })
  }, [openingHours, reset])

  const onSubmit = (data: {openingHours: IOpeningHours}) => {
    // const daysFullNames: Record<string, string> = {
    //   Mo: 'Montag',
    //   Di: 'Dienstag',
    //   Mi: 'Mittwoch',
    //   Do: 'Donnerstag',
    //   Fr: 'Freitag',
    //   Sa: 'Samstag',
    //   So: 'Sonntag'
    // }

    // match with dayss full name (e.g. Montag 10:00-18:00)
    // const days = Object.entries(data.openingHours).map(([day, hours]) => {
    //   return {
    //     day: daysFullNames[day],
    //     open: hours.open,
    //     close: hours.close,
    //     closed: hours.open === '00:00' && hours.close === '00:00'
    //   }
    // })

    // reduce to days with unique open and close time pairs (e.g. Mo-Fr 10:00-18:00) if there is only one day instead match with dayss full name (e.g. Montag 10:00-18:00)
    // const reducedDays = Object.entries(data.openingHours).reduce<
    //   Array<{days: string[]; open: string; close: string}>
    // >((acc, [day, hours]) => {
    //   const last = acc[acc.length - 1]
    //   if (last && last.open === hours.open && last.close === hours.close) {
    //     last.days.push(day)
    //   } else {
    //     acc.push({
    //       days: [day],
    //       open: hours.open,
    //       close: hours.close
    //     })
    //   }
    //   return acc
    // }, [])

    // map days to string (e.g. Montag 10:00-18:00) if there is only one day else use key and value (e.g. Mo-Fr 10:00-18:00)
    // const hours = reducedDays.map(day => {
    //   if (day.days.length === 1) {
    //     return {
    //       name: `${daysFullNames[day.days[0]]}`,
    //       open: day.open,
    //       close: day.close,
    //       closed: day.open === '00:00' && day.close === '00:00'
    //     }
    //   } else {
    //     return {
    //       name: `${day.days[0]}-${day.days[day.days.length - 1]}`,
    //       open: day.open,
    //       closed: day.open === '00:00' && day.close === '00:00'
    //     }
    //   }
    // })

    onSaved(data.openingHours)

    // reset the form
    onCancle()
  }

  return (
    <form
      onSubmit={event => {
        void handleSubmit(onSubmit)(event)
      }}>
      <Stack color="chakra-body-text">
        <FormControl isInvalid={!!errors.openingHours}>
          <FormLabel htmlFor="openingHours">ÖFFNUNGSZEITEN</FormLabel>

          {/* <Textarea minH="md" {...register("openingHours", {})} /> */}

          {Object.keys(openingHours).map((day, i) => (
            <HStack py={1} key={i}>
              <Text w="100px">{day}</Text>
              <Select
                placeholder="Von"
                size="md"
                key={`open${i}`}
                defaultValue={Object.values(openingHours)[i].open}
                {...register(`openingHours.${day}.open`, {
                  required: 'Bitte füllen Sie dieses Feld aus'
                })}>
                <option value="00:00">00:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
                <option value="03:00">03:00</option>
                <option value="04:00">04:00</option>
                <option value="05:00">05:00</option>
                <option value="06:00">06:00</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </Select>
              <Select
                placeholder="Bis"
                size="md"
                key={`close${i}`}
                defaultValue={Object.values(openingHours)[i].close}
                {...register(`openingHours.${day}.close`, {
                  required: 'Bitte füllen Sie dieses Feld aus'
                })}>
                <option value="00:00">00:00</option>
                <option value="01:00">01:00</option>
                <option value="02:00">02:00</option>
                <option value="03:00">03:00</option>
                <option value="04:00">04:00</option>
                <option value="05:00">05:00</option>
                <option value="06:00">06:00</option>
                <option value="07:00">07:00</option>
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
                <option value="23:00">23:00</option>
              </Select>
            </HStack>
          ))}

          <FormErrorMessage>
            {errors.openingHours?.message?.toString()}
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

export const formatOpeningHours = (openingHours: IOpeningHours) => {
  const daysFullNames: Record<string, string> = {
    Mo: 'Montag',
    Di: 'Dienstag',
    Mi: 'Mittwoch',
    Do: 'Donnerstag',
    Fr: 'Freitag',
    Sa: 'Samstag',
    So: 'Sonntag'
  }

  // match with dayss full name (e.g. Montag 10:00-18:00)
  const days = Object.entries(openingHours).map(([day, hours]) => {
    return {
      day: daysFullNames[day],
      open: hours.open,
      close: hours.close,
      closed: hours.open === '00:00' && hours.close === '00:00'
    }
  })

  // reduce to days with unique open and close time pairs (e.g. Mo-Fr 10:00-18:00) if there is only one day instead match with dayss full name (e.g. Montag 10:00-18:00)
  const reducedDays = Object.entries(openingHours).reduce<
    Array<{days: string[]; open: string; close: string}>
  >((acc, [day, hours]) => {
    const last = acc[acc.length - 1]
    if (last && last.open === hours.open && last.close === hours.close) {
      last.days.push(day)
    } else {
      acc.push({
        days: [day],
        open: hours.open,
        close: hours.close
      })
    }
    return acc
  }, [])

  // map days to string (e.g. Montag 10:00-18:00) if there is only one day else use key and value (e.g. Mo-Fr 10:00-18:00)
  const hours = reducedDays.map(day => {
    if (day.days.length === 1) {
      return {
        name: `${daysFullNames[day.days[0]]}`,
        open: day.open,
        close: day.close,
        closed: day.open === '00:00' && day.close === '00:00'
      }
    } else {
      return {
        name: `${day.days[0]}-${day.days[day.days.length - 1]}`,
        open: day.open,
        close: day.close,
        closed: day.open === '00:00' && day.close === '00:00'
      }
    }
  })

  return {hours, days, reducedDays}
}

type IImprint = Record<string, Record<string, string>>

export const ImprintForm: React.FC<{
  onSaved: (imprint: IImprint) => void
  onCancle: () => void
  imprint: IImprint
}> = ({onSaved, onCancle, imprint}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: {errors, isSubmitting}
  } = useForm<{
    imprint: IImprint
  }>({
    defaultValues: {
      imprint
    }
  })

  // Update default values when initUrl changes
  React.useEffect(() => {
    reset({
      imprint
    })
  }, [imprint, reset])

  const onSubmit = (data: {imprint: IImprint}) => {
    onSaved(data.imprint)

    // reset the form
    onCancle()
  }

  return (
    <form
      onSubmit={event => {
        void handleSubmit(onSubmit)(event)
      }}>
      <Stack color="chakra-body-text">
        <FormControl isInvalid={!!errors.imprint}>
          <FormLabel htmlFor="imprint">ÖFFNUNGSZEITEN</FormLabel>

          {/* <Textarea minH="md" {...register("openingHours", {})} /> */}

          {Object.keys(imprint).map((obj, i) => (
            <VStack py={1} key={i}>
              <Text w="full">{obj}</Text>
              <Input w="full" {...register(`imprint.${obj}`, {})} />
            </VStack>
          ))}

          <FormErrorMessage>
            {errors.imprint?.message?.toString()}
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
