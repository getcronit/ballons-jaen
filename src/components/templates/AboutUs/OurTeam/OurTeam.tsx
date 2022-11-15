import { Box, Container, Heading, VStack } from "@chakra-ui/react"
import { connectSection, Field, useJaenSectionContext } from "@jaenjs/jaen"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"
import OurBoss from "./OurBoss"
import TeamMember from "./TeamMember"

const teamMembers = [
  {
    image: "/images/about_us/sectionProfile.png",
    name: "Inge T.",
    qoute: "“Unser Fels in der Brandung”",
    qualities: [
      "flexibel und hoch energetisch",
      "hilft immer mit wo’s brennt",
      "die beste Mischung aus Erfahrung und Routine",
    ],
    isLeft: true,
    role: "Unser Fels in der Brandung",
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    image: "/images/about_us/sectionProfile.png",
    name: "Silvia F.",
    qoute: "“Die Akribische”",
    qualities: [
      "erst zufrieden, wenn der Kunde zufrieden ist",
      "Perfektionistin",
      "liebt Checklisten",
    ],
    role: "Unser Fels in der Brandungr",
    isLeft: false,
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    image: "/images/about_us/sectionProfile.png",
    name: "Monika K.",
    qoute: "“Die Vorausschauende”",
    qualities: ["überschaut", "während der Chef noch", "wieder alles im Griff"],
    role: "Ballon Meister",
    isLeft: true,
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    image: "/images/about_us/sectionProfile.png",
    name: "Slavko",
    qoute: "“Die Extraportion Energie”",
    qualities: [
      "erst zufrieden, wenn der Kunde zufrieden ist",
      "Perfektionistin",
      "liebt Checklisten",
    ],
    role: "Ballon Meister",
    isLeft: false,
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
  {
    image: "/images/about_us/sectionProfile.png",
    name: "Monika K.",
    qoute: "“Die Organisatorin”",
    qualities: [
      "rettet regelmäßig die Welt",
      "bekannt für ihre schnelle Lösungen",
      "jeden Tag eine neue",
    ],
    role: "Ballon Meister",
    isLeft: true,
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  },
]

const TeamMemberSection = (total: number = 1, orientation: "left" | "right") =>
  connectSection(
    () => {
      const shapes = [
        {
          image: "/images/about_us/thread1.svg",
          bgPos: "0",
          bgRepeat: "no-repeat",
          bgSize: "contain",
        },
        {
          image: "/images/about_us/side_shape.svg",
          bgPos: "right -8rem bottom 0",
          bgRepeat: "no-repeat",
          bgSize: "20rem",
        },
        {
          image: "/images/about_us/shape_thread.svg",
          bgPos: "0",
          bgRepeat: "no-repeat",
          bgSize: "contain",
        },
      ]

      const section = useJaenSectionContext()

      if (!section) return null

      const index = section?.position % shapes.length

      return (
        <Box
          bgImage={{ md: shapes[index].image }}
          bgRepeat="no-repeat"
          bgPos="0"
          bgSize="contain"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            {Array.from({ length: total }).map((_, i) => {
              const alignedOrientation = (
                orientation === "left" ? i % 2 === 0 : i % 2 !== 0
              )
                ? "right"
                : "left"

              return (
                <TeamMember
                  key={i}
                  member={{
                    imageFieldName: `image${i}`,
                    imageDefaultValue: "/images/about_us/sectionProfile.png",
                    nameFieldName: `name${i}`,
                    nameDefaultValue: "Max Mustermann",
                    quoteFieldName: `qoute${i}`,
                    quoteDefaultValue: `"Fels in der Brandung"`,
                    qualificationsFieldName: `qualities${i}`,
                    qualificationsDefaultValue: `<ul>
              <li>erst zufrieden, wenn der Kunde zufrieden ist</li>
              <li>Perfektionistin</li>
              <li>liebt Checklisten</li>
              
            </ul>`,
                  }}
                  orientation={alignedOrientation}
                />
              )
            })}
          </Container>
        </Box>
      )
    },
    {
      name: `teamMemberSection-with-${total}-members`,
      displayName: `${total} Person${total > 1 ? "en" : ""} (${
        orientation === "left" ? "links" : "rechts"
      })`,
    }
  )

interface IOurTeamProps {}

const OurTeam: FC<IOurTeamProps> = () => {
  const bossData = {
    image: "/images/about_us/bossProfile.png",
    name: "Nik D.",
    qoute: "“Der Boss”",
    qualities: [
      "geht erst heim, wenn wirklich alles passt",
      "wechselt zwischen Kopf- und Bauchgefühl",
      "kreativ und analytisch",
    ],
    role: "BOSS",
    isLeft: false,
    about:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
  }

  return (
    <>
      <Box
        pos="relative"
        top={{ base: "-10rem", xl: "-25rem" }}
        mb={{ base: "-10rem", xl: "-25rem" }}
        bgImage="/images/about_us/ballon_bg_big.svg"
        bgRepeat="no-repeat"
        pt={{
          base: "10rem",
          md: "16rem",
          lg: "24rem",
          xl: "32rem",
          "2xl": "40rem",
        }}
        pb="6.25rem"
        bgSize="cover"
      >
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <VStack>
            <Heading
              size="h6020"
              as="span"
              fontWeight="semibold"
              whiteSpace="nowrap"
            >
              <Field.Text
                rtf
                name="aboutUsOurTeamTitle"
                defaultValue="<p>Unser <i>Team</i></p>"
              />
            </Heading>
            <Heading size="h3015">
              <Field.Text
                name="aboutUsOurTeamSubtitle"
                defaultValue="Steckbrief"
              />
            </Heading>
          </VStack>
        </Container>

        <Field.Section
          name="aboutUsOurTeam"
          displayName="Team"
          sections={[
            TeamMemberSection(1, "left"),
            TeamMemberSection(1, "right"),
            TeamMemberSection(2, "left"),
            TeamMemberSection(2, "right"),
          ]}
        />

        {/* <Box
          bgImage={{ md: "/images/about_us/thread1.svg" }}
          bgRepeat="no-repeat"
          bgPos="0"
          bgSize="contain"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={teamMembers[0]} />
            <TeamMember member={teamMembers[1]} />
          </Container>
        </Box>
        <Box
          bgImage={{ md: "/images/about_us/side_shape.svg" }}
          bgRepeat="no-repeat"
          bgPos="right -8rem bottom 0"
          bgSize="20rem"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={teamMembers[2]} />
          </Container>
        </Box>
        <Box
          bgImage={{ md: "/images/about_us/shape_thread.svg" }}
          bgRepeat="no-repeat"
          bgPos="0"
          bgSize="contain"
        >
          <Container maxW={CONTAINER_MAX_WIDTH}>
            <TeamMember member={teamMembers[3]} />
            <TeamMember member={teamMembers[4]} />
          </Container>
        </Box> */}
        <OurBoss
          member={{
            imageFieldName: `bossImage`,
            imageDefaultValue: "/images/about_us/bossProfile.png",
            nameFieldName: `bossName`,
            nameDefaultValue: "Nik D.",
            quoteFieldName: `bossQoute`,
            quoteDefaultValue: `"Der Boss"`,
            qualificationsFieldName: `bossQualities`,
            qualificationsDefaultValue: `<ul>
              <li>geht erst heim, wenn wirklich alles passt</li>
              <li>wechselt zwischen Kopf- und Bauchgefühl</li>
              <li>kreativ und analytisch</li>
            </ul>`,
          }}
        />
      </Box>
    </>
  )
}
export default OurTeam
