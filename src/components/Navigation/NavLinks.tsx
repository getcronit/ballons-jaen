import {EditIcon} from '@chakra-ui/icons'
import {
  Box,
  Flex,
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
import {useJaenNavTop, useJaenNavBottom} from './useJaenNavigation'

const findActivePath = (path: string, paths: Array<string>) => {
  // Find path and take care of trailing slash if it exists
  const activePath = paths.find(
    p => p === path || p === path.slice(0, path.length - 1)
  )

  return activePath
}

export const TopNavLinks: React.FC<
  StackProps & {
    childrenTextAlign?: 'left' | 'center' | 'right'
  }
> = ({childrenTextAlign, ...props}) => {
  const {isEditing, navLinks, markdown, updateNavigation} = useJaenNavTop()

  const {onOpen, onClose, isOpen} = useDisclosure()
  const firstFieldRef = React.useRef(null)

  return (
    <Flex pos={'relative'}>
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
              // _hover={{
              //   fontWeight: 'bold',
              //   transform: 'scale(1.05)',
              //   transition: '0.2s ease-in'
              // }}
              _hover={{
                textDecoration: 'underline'
              }}
              fontSize={'xsxm'}
              transition="0.2s ease-in"
              color="brand.dark_gray">
              {link.label}
            </CLink>
          )
        })}
      </Stack>

      {isEditing && (
        <Box mx={2} position={'absolute'} right={0} top={0}>
          <Popover
            isOpen={isOpen}
            initialFocusRef={firstFieldRef}
            onOpen={onOpen}
            onClose={onClose}
            placement="bottom-start"
            closeOnBlur={false}>
            <PopoverTrigger>
              <IconButton
                size="xs"
                icon={<EditIcon />}
                aria-label=""
                colorScheme="jaen"
              />
            </PopoverTrigger>
            <PopoverContent p={5} display={isOpen ? 'block' : 'none'}>
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
    </Flex>
  )
}

export const BottomNavLinks: React.FC<
  StackProps & {
    childrenTextAlign?: 'left' | 'center' | 'right'
  }
> = ({childrenTextAlign, ...props}) => {
  const {isEditing, navLinks, markdown, updateNavigation} = useJaenNavBottom()

  const {onOpen, onClose, isOpen} = useDisclosure()
  const firstFieldRef = React.useRef(null)
  const bestMatch = findActivePath(
    typeof window !== 'undefined' ? window.location.pathname : '/',
    navLinks.map(l => l.to)
  )

  return (
    <>
      <Stack {...props}>
        {navLinks.map((link, index) => {
          return (
            <CLink
              textDecoration={link.to === bestMatch ? 'underline' : 'none'}
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
              // _hover={{
              //   fontWeight: 'bold',
              //   transform: 'scale(1.05)',
              //   transition: '0.2s ease-in'
              // }}
              _hover={{
                textDecoration: 'underline',
                color: 'black'
              }}
              //fontSize={{ md: 'md', lg: '1.375rem', xl: '1.4rem', '2xl': 'lg' }}
              transition="0.2s ease-in"
              color="gray.700">
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
                colorScheme="jaen"
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
