import {useEffect} from 'react'

export default function ScrollToTop({
  children,
  pathname
}: {
  children: React.ReactNode
  pathname: string
}) {
  useEffect(() => {
    if (window.location.hash === '' && window.location.search === '') {
      const canControlScrollRestoration = 'scrollRestoration' in window.history
      if (canControlScrollRestoration) {
        window.history.scrollRestoration = 'manual'
      }

      window.scrollTo(0, 0)
    }
  }, [pathname])

  return <>{children}</>
}
