import { useEffect } from "react"

export default function ScrollToTop({
  children,
  pathname,
}: {
  children: React.ReactNode
  pathname: string
}) {
  useEffect(() => {
    const element = document.getElementById("jaen-content-container")

    const canControlScrollRestoration = "scrollRestoration" in window.history
    if (canControlScrollRestoration) {
      window.history.scrollRestoration = "manual"
    }

    if (element) {
      element.scrollTo(0, 0)
    }
  }, [pathname])

  return <>{children}</>
}
