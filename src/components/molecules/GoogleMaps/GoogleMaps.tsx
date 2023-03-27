import {Box, BoxProps, Heading, Link, Text} from '@chakra-ui/react'
import {getCookieConsentApi} from '@snek-at/jaen'
import {useEffect, useState} from 'react'
// import {useCookieConsent} from '@jaenjs/jaen'

export interface GoogleMapsProps extends BoxProps {
  src: string
}

export const GoogleMaps = ({src, ...props}: GoogleMapsProps) => {
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

  if (!mapsEnabled) {
    return (
      <Box bg="gray.200">
        <Heading as="h1" size="xl">
          Google Maps is nicht verfügbar
        </Heading>
        <Text as="h2" size="lg">
          Durch Ihre Cookie Einstellungen können wir Google Maps nicht anzeigen.
        </Text>
        <Text as="h2" size="lg">
          Bitte aktivieren Sie Cookies, um Google Maps anzuzeigen.{' '}
          <Link onClick={handleAccept}>Analytics Cookie aktivieren</Link>
        </Text>
      </Box>
    )
  }

  return (
    <Box {...props}>
      <iframe
        src={src}
        width="100%"
        height="600"
        style={{
          border: 1
        }}
        loading="lazy"
      />
    </Box>
  )
}
