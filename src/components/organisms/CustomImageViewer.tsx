import { Box, useMediaQuery } from "@chakra-ui/react"
import { FC } from "react"
import ImageViewer from "react-simple-image-viewer"

interface ICustomImageViewerProps {
  closeImageViewer: () => void
  mobileImages?: string[]
  desktopImages: string[]
  currentImage: number
  isViewerOpen: boolean
}

const CustomImageViewer: FC<ICustomImageViewerProps> = ({
  closeImageViewer,
  mobileImages,
  desktopImages,
  isViewerOpen,
  currentImage,
}) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const newMobileImages = mobileImages ?? desktopImages

  return (
    <>
      {isViewerOpen && (
        <Box pos="absolute" top="0" zIndex="modal">
          <ImageViewer
            backgroundStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
            src={isMobile ? newMobileImages : desktopImages}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        </Box>
      )}
    </>
  )
}
export default CustomImageViewer
