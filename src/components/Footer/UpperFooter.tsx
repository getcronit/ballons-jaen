import { EditIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link as CLink,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useDisclosure,
} from "@chakra-ui/react"
import { navigate } from "@jaenjs/jaen"
import { Link } from "gatsby"
import React, { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"
import { MarkdownLinksForm } from "../Navigation/BottomNav"
import {
  formatOpeningHours,
  ImprintForm,
  OpeningHoursForm,
} from "./FooterForms"
import { useJaenLink, useJaenText } from "./useJaenNavigation"

interface IUpperFooterProps {}

const UpperFooter: FC<IUpperFooterProps> = () => {
  const firstFieldRef = React.useRef(null)

  const JsonField = (
    widgetName: string,
    defaultValue: { [name: string]: any }
  ) => useJaenText(widgetName, defaultValue)

  const LinkField = (widgetName: string, defaultValue: string) =>
    useJaenLink(widgetName, defaultValue)

  const footerData = JsonField("footer", {
    heading1: "UNTERNEHMEN",
    heading2: "ÖFFNUNGSZEITEN",
    heading3: "KATEGORIEN",
    heading4: "LINKS",
  })

  const imprintDataModal = useDisclosure()

  const imprintData = JsonField("imprint", {
    imprint: {
      address: "Taborstraße 98",
      postalCode: "1020",
      city: "Wien",
      country: "Austria",
      telephone: "+43 121 634 25",
      email: "office@ballons-ballons.com",
    },
  })

  const openingHoursModal = useDisclosure()

  const openingHours = JsonField("openingHours", {
    hours: {
      Mo: { open: "09:00", close: "17:00" },
      Di: { open: "09:00", close: "17:00" },
      Mi: { open: "09:00", close: "17:00" },
      Do: { open: "09:00", close: "17:00" },
      Fr: { open: "09:00", close: "17:00" },
      Sa: { open: "00:00", close: "00:00" },
      So: { open: "00:00", close: "00:00" },
    },
  })

  const categoryLinksModal = useDisclosure()
  const categoryLinks = LinkField(
    "footerCategory",
    `
    [Großhandel](/grosshandel)
    [Luftballons](/luftballons)
    [Ballongas](/ballongas)
    [Bubbles](/bubbles)
    [Pinatas](/pinatas)
    [Partyartikel](/partyartikel)
  `
  )

  const otherLinksModal = useDisclosure()
  const otherLinks = LinkField(
    "footerOther",
    `
    [Home](/)
    [Kontakt](/kontakt)
    [AGB](/agb)
    [Datenschutz](/datenschutz])
    [Impressum](/impressum)
  `
  )

  return (
    <Container color="white" maxW={CONTAINER_MAX_WIDTH}>
      <Grid
        px="4"
        gridTemplateColumns={{ sm: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
        gap={{ base: 4, md: 6, lg: 8 }}
      >
        <Stack>
          <Heading
            mb={{ base: "5", md: "7", lg: "7" }}
            fontWeight="bold"
            fontSize="md"
          >
            <Editable
              value={
                footerData.data.heading1?.length === 0
                  ? "UNTERNEHMEN"
                  : footerData.data?.heading1
              }
              onChange={e => footerData.updateJson("heading1", e)}
              isPreviewFocusable={footerData.isEditing}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>

          <Text fontSize="sm" py="16px" pl={{ base: 4, sm: 0 }}>
            {imprintData.data?.imprint.address} <br />
            {imprintData.data?.imprint.postalCode}{" "}
            {imprintData.data?.imprint.city} <br />
            {imprintData.data?.imprint.country} <br />
            <br />
            <CLink as={Link} to={"tel:" + imprintData.data?.imprint.telephone}>
              {imprintData.data?.imprint.telephone}
            </CLink>{" "}
            <br />
            <CLink as={Link} to={"mailto:" + imprintData.data?.imprint.email}>
              {imprintData.data?.imprint.email}
            </CLink>
          </Text>
          {imprintData.isEditing && (
            <Box m={2}>
              <Popover
                isOpen={imprintDataModal.isOpen}
                initialFocusRef={firstFieldRef}
                onOpen={imprintDataModal.onOpen}
                onClose={imprintDataModal.onClose}
                placement="right"
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <IconButton
                    size="sm"
                    icon={<EditIcon />}
                    aria-label={""}
                    colorScheme="teal"
                  />
                </PopoverTrigger>
                <PopoverContent p={5}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <ImprintForm
                    onSaved={e => imprintData.updateJson("imprint", e)}
                    onCancle={imprintDataModal.onClose}
                    imprint={imprintData.data?.imprint}
                  />
                </PopoverContent>
              </Popover>
            </Box>
          )}
        </Stack>
        <Divider opacity="0.3" display={{ base: "block", sm: "none" }} />
        <Stack>
          <Heading
            mb={{ base: "5", md: "7", lg: "7" }}
            fontWeight="bold"
            fontSize="md"
          >
            <Editable
              value={
                footerData.data.heading2?.length === 0
                  ? "ÖFFNUNGSZEITEN"
                  : footerData.data?.heading2
              }
              onChange={e => footerData.updateJson("heading2", e)}
              isPreviewFocusable={footerData.isEditing}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>

          <Flex>
            <Table variant="unstyled">
              <Tbody>
                {formatOpeningHours(openingHours.data?.hours).hours.map(
                  (day, i) => (
                    <Tr key={i} py="0">
                      <Td verticalAlign="top" px="0" whiteSpace="nowrap">
                        {day.name}
                      </Td>
                      <Td verticalAlign="top" px="0">
                        {day.closed ? (
                          <>
                            Lieferungen und <Box my="4" /> Dekorationen vor Ort
                          </>
                        ) : (
                          <>
                            {day.open} - {day.close}
                            {day.closed !== day.closed ? (
                              <>
                                Großhandel bis <Box my="4" /> {day.closed}
                              </>
                            ) : null}
                          </>
                        )}
                      </Td>
                    </Tr>
                  )
                )}
              </Tbody>
            </Table>
          </Flex>
          {openingHours.isEditing && (
            <Box m={2}>
              <Popover
                isOpen={openingHoursModal.isOpen}
                initialFocusRef={firstFieldRef}
                onOpen={openingHoursModal.onOpen}
                onClose={openingHoursModal.onClose}
                placement="bottom"
                closeOnBlur={false}
              >
                <PopoverTrigger>
                  <IconButton
                    size="sm"
                    icon={<EditIcon />}
                    aria-label={""}
                    colorScheme="teal"
                  />
                </PopoverTrigger>
                <PopoverContent p={5}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <OpeningHoursForm
                    onSaved={e => openingHours.updateJson("hours", e)}
                    onCancle={openingHoursModal.onClose}
                    openingHours={openingHours?.data.hours}
                  />
                </PopoverContent>
              </Popover>
            </Box>
          )}
        </Stack>
        <Divider opacity="0.3" display={{ base: "block", sm: "none" }} />

        <Stack>
          <Heading
            mb={{ base: "5", md: "7", lg: "7" }}
            fontWeight="bold"
            fontSize="md"
          >
            <Editable
              value={
                footerData.data.heading3?.length === 0
                  ? "KATEGORIEN"
                  : footerData.data?.heading3
              }
              onChange={e => footerData.updateJson("heading3", e)}
              isPreviewFocusable={footerData.isEditing}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>
          <Grid
            gap="2"
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "1fr" }}
          >
            {categoryLinks.navLinks.map((link, index) => (
              <CLink
                _before={{
                  display: "block",
                  content: `"${link.label}"`,
                  fontWeight: "bold",
                  height: "0",
                  overflow: "hidden",
                  visibility: "hidden",
                }}
                as={Link}
                to={link.to}
                onClick={e => {
                  e.preventDefault()
                  navigate(link.to)

                  return false
                }}
                key={index}
                fontSize="sm"
                _hover={{ textDecor: "underline" }}
                cursor="pointer"
                transition="0.2s ease-in"
                // color="brand.dark_gray"
              >
                {link.label}
              </CLink>
            ))}
            {categoryLinks.isEditing && (
              <Box m={2}>
                <Popover
                  isOpen={categoryLinksModal.isOpen}
                  initialFocusRef={firstFieldRef}
                  onOpen={categoryLinksModal.onOpen}
                  onClose={categoryLinksModal.onClose}
                  placement="bottom"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <IconButton
                      size="sm"
                      icon={<EditIcon />}
                      aria-label={""}
                      colorScheme="teal"
                    />
                  </PopoverTrigger>
                  <PopoverContent p={5}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <MarkdownLinksForm
                      onSaved={categoryLinks.updateNavigation}
                      onCancle={categoryLinksModal.onClose}
                      markdownUrls={categoryLinks.markdown}
                    />
                  </PopoverContent>
                </Popover>
              </Box>
            )}
          </Grid>
        </Stack>
        <Divider opacity="0.3" display={{ base: "block", sm: "none" }} />

        <Stack>
          <Heading
            mb={{ base: "5", md: "7", lg: "7" }}
            fontWeight="bold"
            fontSize="md"
          >
            <Editable
              value={
                footerData.data.heading4?.length === 0
                  ? "LINKS"
                  : footerData.data?.heading4
              }
              onChange={e => footerData.updateJson("heading4", e)}
              isPreviewFocusable={footerData.isEditing}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>
          <Grid
            gap="2"
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "1fr" }}
          >
            {otherLinks.navLinks.map((link, index) => (
              <CLink
                _before={{
                  display: "block",
                  content: `"${link.label}"`,
                  fontWeight: "bold",
                  height: "0",
                  overflow: "hidden",
                  visibility: "hidden",
                }}
                as={Link}
                to={link.to}
                onClick={e => {
                  e.preventDefault()
                  navigate(link.to)

                  return false
                }}
                key={index}
                fontSize="sm"
                _hover={{ textDecor: "underline" }}
                cursor="pointer"
                transition="0.2s ease-in"
                // color="brand.dark_gray"
              >
                {link.label}
              </CLink>
            ))}
            {otherLinks.isEditing && (
              <Box m={2}>
                <Popover
                  isOpen={otherLinksModal.isOpen}
                  initialFocusRef={firstFieldRef}
                  onOpen={otherLinksModal.onOpen}
                  onClose={otherLinksModal.onClose}
                  placement="bottom"
                  closeOnBlur={false}
                >
                  <PopoverTrigger>
                    <IconButton
                      size="sm"
                      icon={<EditIcon />}
                      aria-label={""}
                      colorScheme="teal"
                    />
                  </PopoverTrigger>
                  <PopoverContent p={5}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <MarkdownLinksForm
                      onSaved={otherLinks.updateNavigation}
                      onCancle={otherLinksModal.onClose}
                      markdownUrls={otherLinks.markdown}
                    />
                  </PopoverContent>
                </Popover>
              </Box>
            )}
          </Grid>
        </Stack>
      </Grid>
    </Container>
  )
}
export default UpperFooter
