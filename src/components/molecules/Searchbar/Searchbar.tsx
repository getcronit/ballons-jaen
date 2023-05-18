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
      lineHeight="1.2"
      bg={useColorModeValue('white', 'gray.700')}
      whiteSpace="nowrap"
      display={'flex'}
      alignItems="center"
      color="gray.400"
      py="3"
      px="4"
      outline="0"
      _focus={{shadow: 'outline'}}
      _hover={{
        outline: "3px solid #E3000F"
      }}
      _active={{
        outline: "3px solid #E3000F"
      }}
      shadow="base"
      rounded={'lg'}
      {...props}>
      <SearchIcon />
      <HStack w="full" mx="3" spacing="4px">
        <Text textAlign="left" flex="1">
          Finde Artikel
        </Text>
        <HStack spacing="4px">
          <VisuallyHidden>Drücke</VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            <Box as="abbr" title={'Strg'} textDecoration="none !important">
              {'Strg'}
            </Box>
          </Kbd>
          <VisuallyHidden>und</VisuallyHidden>
          <Kbd color="gray.500" rounded="2px">
            K
          </Kbd>
          <VisuallyHidden> zum suchen</VisuallyHidden>
        </HStack>
      </HStack>
    </Button>
  )
}
