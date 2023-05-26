import {Box, BoxProps} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC} from 'react'

export const ImageCard: FC<
  {
    name: string
  } & BoxProps
> = ({name, ...props}) => {
  return (
    <Box
      position="relative"
      _hover={{
        transition: 'all 0.3s ease',
        transform: {
          md: 'scale(1.03) ',
          lg: 'scale(1.03) '
        }
      }}
      transition="ease-in 0.2s"
      boxShadow="darker"
      color="white"
      h={{
        base: '12.5rem',
        sm: '15rem',
        md: '17.5rem',
        lg: '20rem',
        xl: '22.5rem'
      }}
      w={{base: '10rem', sm: '12.5rem', md: '15rem', xl: '17.5rem'}}
      borderRadius="xl"
      overflow={'hidden'}
      {...props}>
      <Field.Image name={name} lightbox lightboxGroup />
    </Box>
  )
}
