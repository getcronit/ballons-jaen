import { connectNotification } from "@jaenjs/jaen"
import { FiInfo } from "@react-icons/all-files/fi/FiInfo"
import { NotificationBanner } from "../components/organisms/NotificationBanner"

export default connectNotification(NotificationBanner, {
  displayName: "Benachrichtigungs-Banner",
  description:
    "Dies ist ein Banner, das angezeigt wird, wenn ein Benutzer eine Seite für die erste Mal besucht.",
  conditions: {
    entireSite: true,
  },
  triggers: {
    onPageLoad: 1,
  },
  advanced: {
    showUntilXPageViews: 100,
  },
  modalProps: { size: { base: "sm", md: "3xl", lg: "4xl", xl: "6xl" } },
  modalContentProps: {},
  logo: FiInfo,
})
