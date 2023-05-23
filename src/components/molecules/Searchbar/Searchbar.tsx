import {SearchIcon} from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonProps,
  HStack,
  Kbd,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'


export const SearchbarButton = (props: ButtonProps) => {
  return (
    <Button
      w="full"
      flex="1"
      type="button"
      // lineHeight="1.2"
      // bg={useColorModeValue('white', 'gray.700')}
      // whiteSpace="nowrap"
      display={'flex'}
      alignItems="center"
      
      // outline="0"
      // _focus={{shadow: 'outline'}}
      // _hover={{
      //   outline: "3px solid #E3000F"
      // }}
      // _active={{
      //   outline: "3px solid #E3000F"
      // }}
      variant="outline"
      // shadow="base"
      // rounded={'lg'}
      size="sm"
      
      leftIcon={<SearchIcon />}
      {...props}>
     <Text fontSize="sm" color="gray.400" textAlign="left" w="full">
     Finde Artikel
     </Text>
    </Button>
  )
}
