import {EditIcon} from '@chakra-ui/icons'
import {
  Box,
  IconButton,
  Link as CLink,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  StackProps,
  useDisclosure
} from '@chakra-ui/react'
import {Link, navigate} from 'gatsby'
import React from 'react'

import {MarkdownLinksForm} from './BottomNav'
import {useJaenNavigation} from './useJaenNavigation'

export const NavLinks: React.FC<
  StackProps & {
    childrenTextAlign?: 'left' | 'center' | 'right'
  }
> = ({childrenTextAlign, ...props}) => {
  const {isEditing, navLinks, markdown, updateNavigation} = useJaenNavigation()

  const {onOpen, onClose, isOpen} = useDisclosure()
  const firstFieldRef = React.useRef(null)

  return (
    <>
      <Stack {...props}>
        {navLinks.map((link, index) => {
          return (
            <CLink
              _before={{
                display: 'block',
                content: `"${link.label}"`,
                fontWeight: 'bold',
                height: '0',
                overflow: 'hidden',
                visibility: 'hidden'
              }}
              as={Link}
              to={link.to}
              onClick={e => {
                e.preventDefault()
                void navigate(link.to)

                return false
              }}
              key={index}
              textAlign={childrenTextAlign || 'center'}
              _hover={{
                fontWeight: 'bold',
                transform: 'scale(1.05)',
                transition: '0.2s ease-in'
              }}
              fontSize={{md: 'sm', lg: '1rem', xl: '1.125rem', '2xl': 'md'}}
              transition="0.2s ease-in"
              color="brand.dark_gray">
              {link.label}
            </CLink>
          )
        })}
      </Stack>

      {isEditing && (
        <Box m={2}>
          <Popover
            isOpen={isOpen}
            initialFocusRef={firstFieldRef}
            onOpen={onOpen}
            onClose={onClose}
            placement="bottom"
            closeOnBlur={false}>
            <PopoverTrigger>
              <IconButton
                size="sm"
                icon={<EditIcon />}
                aria-label=""
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
    </>
  )
}
