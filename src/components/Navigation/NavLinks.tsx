import { EditIcon } from '@chakra-ui/icons'
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
import { Link, navigate } from 'gatsby'
import React from 'react'

import { MarkdownLinksForm } from './BottomNav'
import { useJaenNavTop, useJaenNavBottom } from './useJaenNavigation'

const findBestMatch = (path: string, paths: Array<string>) => {
  let bestMatch: string | undefined
  let bestMatchScore = 0

  // check how many a path matches the current path
  // if it is the best match, save it
  paths.forEach(pathToMatch => {

    if (path !== "/") {
      // iterate over all path parts and check how many of them match
      let score = 0
      const pathParts = path.replace(/\/$/, '').split('/').filter(Boolean)
      const pathToMatchParts = pathToMatch
        .replace(/\/$/, '')
        .split('/')
        .filter(Boolean)

      for (let i = 0; i < pathParts.length; i++) {
        if (pathParts[i] !== pathToMatchParts[i]) {
          // if the path part does not match, exit the loop
          break
        }

        score++
      }

      // if the score is better than the current best match, save it
      if (score > bestMatchScore) {
        bestMatch = pathToMatch
        bestMatchScore = score
      }
    } else {
      bestMatch = "/"
      bestMatchScore = 1
    }
  })

  return bestMatch
}

export const TopNavLinks: React.FC<
  StackProps & {
    childrenTextAlign?: 'left' | 'center' | 'right'
  }
> = ({ childrenTextAlign, ...props }) => {
  const { isEditing, navLinks, markdown, updateNavigation } = useJaenNavTop()

  const { onOpen, onClose, isOpen } = useDisclosure()
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
              // _hover={{
              //   fontWeight: 'bold',
              //   transform: 'scale(1.05)',
              //   transition: '0.2s ease-in'
              // }}
              _hover={{
                textDecoration: 'underline'
              }}
              fontSize={{ base: 'sm', lg: '1rem' }}
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

export const BottomNavLinks: React.FC<
  StackProps & {
    childrenTextAlign?: 'left' | 'center' | 'right'
  }
> = ({ childrenTextAlign, ...props }) => {
  const { isEditing, navLinks, markdown, updateNavigation } = useJaenNavBottom()

  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)
  const bestMatch = findBestMatch(
    window.location.pathname,
    navLinks.map(l => l.to)
  )
  console.log(bestMatch)
  console.log(window.location.pathname)
  console.log(navLinks.map(l => l.to))

  return (
    <>
      <Stack {...props}>
        {navLinks.map((link, index) => {
          return (
            <CLink
              textDecoration={link.to === bestMatch
                ? 'underline'
                : 'none'}
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
