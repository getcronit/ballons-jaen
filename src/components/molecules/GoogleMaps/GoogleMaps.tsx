import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  BoxProps,
  Center,
  Heading,
  Link,
  Spinner,
  Text
} from '@chakra-ui/react'
import {getCookieConsentApi} from '@snek-at/jaen'
import {useEffect, useState} from 'react'
// import {useCookieConsent} from '@jaenjs/jaen'

export interface GoogleMapsProps extends BoxProps {
  src: string
}

export const GoogleMaps = ({src, ...props}: GoogleMapsProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleAccept = () => {
    const CookieConsentApi = getCookieConsentApi()

    CookieConsentApi.accept('analytics')

    setMapsEnabled(true)
  }

  const [mapsEnabled, setMapsEnabled] = useState(false)

  useEffect(() => {
    const CookieConsentApi = getCookieConsentApi()

    const analyticsEnabled = CookieConsentApi.allowedCategory('analytics')

    setMapsEnabled(analyticsEnabled)
  }, [])

  if (!isMounted) {
    return (
      <Center boxSize="full" bg="gray.200">
        <Spinner />
      </Center>
    )
  }

  if (mapsEnabled === false) {
    return (
      <Alert
        h="full"
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center">
        <Spinner />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Google Maps is nicht verfügbar
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Bitte aktivieren Sie Cookies, um Google Maps anzuzeigen.{' '}
          <Link onClick={handleAccept} variant="link">
            Analyse Cookies aktivieren
          </Link>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Box {...props} bg="gray.200">
      <iframe
        src={src}
        width="100%"
        height="600"
        style={{
          border: 1
        }}
      />
    </Box>
  )
}
