import { ChevronDownIcon } from "@chakra-ui/icons"
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Button,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  Select as CSelect,
  Spacer,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { FaSort } from "@react-icons/all-files/fa/FaSort"
import { GroupBase, OptionBase, Select } from "chakra-react-select"
import React, { ReactNode } from "react"

interface TagFilterOption extends OptionBase {
  label: string
  value: string
  color?: string
}

export interface ProductsPageShellSidebarProps {
  allTags: Array<string>
  activeTags?: Array<string>
  onActiveTagsChange: (tags: string[]) => void
  sortOptions: string[]
  onSortChange: (sort: string) => void

  children: ReactNode
}

export interface CategoryPickerProps {
  groupedCategories: {
    allTags: GroupedTags
    activeTags: GroupedTags
  }
  activeTags: ActiveTags
  addOrRemoveTag: (tag: string, group: string) => void
  updateActiveTags: (tags: ActiveTags[string], group: string) => void
}

function CategoryPicker(props: CategoryPickerProps) {
  const allCatArray = Object.keys(props.groupedCategories.allTags)
  const activeCatArray = Object.keys(props.groupedCategories.activeTags).map(
    cat => allCatArray.indexOf(cat)
  )

  // const index = Object.keys(activeCatArray).map(Number)

  return (
    <Accordion
      reduceMotion
      allowMultiple
      index={activeCatArray}
      onChange={(expanded: number[]) => {
        // find item that was added or removed from expanded
        const added = expanded.find(i => !activeCatArray.includes(i))
        const removed = activeCatArray.find(i => !expanded.includes(i))

        const index = added || removed || 0 // if both are undefined or 0, use 0

        const rubricTag = `Kategorie:${allCatArray[index]}`

        if (removed !== undefined) {
          const activeTags = props.activeTags.Kategorie.filter(
            tag => !tag.startsWith(rubricTag)
          )

          props.updateActiveTags(activeTags, "Kategorie")
        }

        if (added !== undefined) {
          props.addOrRemoveTag(rubricTag, "Kategorie")
        }
      }}
    >
      {allCatArray.map((group, index) => {
        const tags = props.groupedCategories.allTags[group]

        const tagStrings = tags.map(tag => tag.tag)

        const isSelectAll = tagStrings.every(tag =>
          props.activeTags.Kategorie?.includes(tag)
        )
        false

        return (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton py="4">
                    <Text
                      flex="1"
                      textAlign="left"
                      fontSize="md"
                      fontWeight={isExpanded ? "bold" : "normal"}
                    >
                      {group}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack pl={1}>
                    {tags.map((item, index) => {
                      const active =
                        isSelectAll ||
                        props.activeTags.Kategorie?.some(
                          tag => tag === item.tag
                        )
                      return (
                        <Text
                          key={index}
                          onClick={e => {
                            // addOrRemoveTag(value, 'Kategorie')
                            // if (isSelectAll) {
                            //   addOrRemoveTag(`Kategorie:${group}`, 'Kategorie')
                            // }
                            props.addOrRemoveTag(item.tag, "Kategorie")
                          }}
                          cursor="pointer"
                          fontSize={"sm"}
                          fontWeight={active ? "semibold" : "normal"}
                        >
                          {item.label}
                        </Text>
                      )
                    })}
                    {tags.length > 0 && (
                      <Button
                        variant="link"
                        fontWeight={"normal"}
                        size={"xs"}
                        onClick={() => {
                          if (isSelectAll) {
                            // remove all tags from group
                            props.updateActiveTags(
                              props.activeTags.Kategorie?.filter(
                                tag => !tagStrings.includes(tag)
                              ),
                              "Kategorie"
                            )
                          } else {
                            // add all tags from group without duplicates
                            props.updateActiveTags(
                              [
                                ...new Set([
                                  ...props.activeTags.Kategorie,
                                  ...tagStrings,
                                ]),
                              ].filter(
                                (tag, index, self) =>
                                  self.indexOf(tag) === index
                              ),
                              "Kategorie"
                            )
                          }
                        }}
                      >
                        {!isSelectAll ? "Alle auswählen" : "Zurücksetzen"}
                      </Button>
                    )}
                  </Stack>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

type ActiveTags = {
  [key: string]: string[]
}

export default function ProductsPageShell(
  props: ProductsPageShellSidebarProps
) {
  const groupedTags = React.useMemo<{
    allTags: GroupedTags
    activeTags: GroupedTags
  }>(() => {
    const grouped: {
      allTags: GroupedTags
      activeTags: GroupedTags
    } = {
      allTags: {},
      activeTags: {},
    }

    groupTags(props.allTags, grouped.allTags)
    groupTags(props.activeTags, grouped.activeTags)

    return grouped
  }, [props.allTags, props.activeTags])

  const [activeTags, setActiveTags] = React.useState<ActiveTags>(() => {
    const s = Object.entries(groupedTags.activeTags).reduce(
      (acc, [group, tags]) => ({
        ...acc,
        [group]: tags.map(tag => tag.tag),
      }),
      {}
    ) as {
      [key: string]: string[]
    }

    return s
  })

  const groupedCategories = React.useMemo(() => {
    const grouped: {
      allTags: GroupedTags
      activeTags: GroupedTags
    } = {
      allTags: {},
      activeTags: {},
    }

    groupCategoriesTags(
      groupedTags.allTags.Kategorie?.map(c => c.tag),
      grouped.allTags
    )
    groupCategoriesTags(activeTags.Kategorie, grouped.activeTags)

    return grouped
  }, [
    groupedTags.allTags.Kategorie,
    groupedTags.activeTags.Kategorie,
    activeTags,
  ])

  const blacklistedTags = React.useMemo(() => {
    const blacklist = []
    const categoryTags = activeTags["Kategorie"]

    if (categoryTags && categoryTags.length > 0) {
      for (const group in groupedTags.allTags) {
        if (group === "Kategorie") continue

        const tags = groupedTags.allTags[group]

        for (const tag of tags) {
          const categoryTag = tag.categories.join(":")

          if (categoryTag) {
            // add to blacklist if no category starts with the same string
            if (
              !categoryTags.find(ct =>
                ct.startsWith(`Kategorie:${categoryTag}`)
              )
            ) {
              blacklist.push(tag.tag)
            }
          }
        }
      }
    }

    return blacklist
  }, [groupedTags, activeTags])

  const updateActiveTags = (tags: string[], group: string) => {
    const updatedActiveTags = { ...activeTags, [group]: tags }

    setActiveTags(updatedActiveTags)

    const tagsArray = Object.values(updatedActiveTags).flat()

    props.onActiveTagsChange(tagsArray)
  }

  const clearActiveTags = () => {
    setActiveTags({})
    props.onActiveTagsChange([])
  }

  const addOrRemoveTag = (tag: string, group: string) => {
    const tags = activeTags[group] || []

    if (tags.includes(tag)) {
      updateActiveTags(
        tags.filter(t => t !== tag),
        group
      )
    } else {
      updateActiveTags([...tags, tag], group)
    }
  }

  const FilterElements = (props: {
    props?: StackProps
    wrapperAs?: BoxProps["as"]
    wrapperProps?: BoxProps
  }) => {
    const { Kategorie, ...rest } = groupedTags.allTags
    const { Kategorie: activeKategorie, ...activeRest } = activeTags

    return Object.entries(rest)
      .map(([label, items], index) => {
        // group items by item category
        const groupedItems = items.reduce<{
          [category: string]: Array<{
            tag: string
            value: string
          }>
        }>((acc, item) => {
          if (blacklistedTags.includes(item.tag)) return acc

          const { categories } = item

          const categoryGroup = categories.join(" > ")

          const reducedItem = {
            tag: item.tag,
            value: item.label,
          }

          acc[categoryGroup] = acc[categoryGroup] || []
          acc[categoryGroup].push(reducedItem)

          return acc
        }, {})

        const transformedItems = Object.entries(groupedItems).map(
          ([category, items]) => ({
            label: category,
            options: items.map(item => ({
              label: item.value,
              value: item.tag,
            })),
          })
        )

        if (transformedItems.length === 0) {
          return null
        }

        const activeItems = transformedItems
          .map(
            item =>
              ({
                ...item,
                options: item.options.filter(option =>
                  activeRest[label]
                    ? activeRest[label].includes(option.value)
                    : false
                ),
              }.options)
          )
          .flat()

        const Wrapper = props.wrapperAs || Box

        return (
          <Wrapper {...props.wrapperProps} key={index}>
            <Select<TagFilterOption, true, GroupBase<TagFilterOption>>
              menuPlacement="auto"
              menuPosition="fixed"
              isMulti
              name={label}
              options={
                transformedItems.length > 1
                  ? transformedItems
                  : transformedItems[0].options
              }
              value={activeItems}
              onChange={(value, actionMeta) => {
                updateActiveTags(
                  value.map(v => v.value),
                  label
                )
              }}
              placeholder={label}
              noOptionsMessage={() => <Text size="xs">Keine Optionen</Text>}
              closeMenuOnSelect={false}
              selectedOptionStyle="check"
              chakraStyles={{
                dropdownIndicator: provided => ({
                  ...provided,
                  bg: "transparent",
                  px: 2,
                  cursor: "inherit",
                }),
                indicatorSeparator: provided => ({
                  ...provided,
                  display: "none",
                }),
                menu: provided => ({
                  ...provided,
                  zIndex: 9999,

                  backgroundColor: "red",
                }),
                menuList: ({ minW, ...provided }) => ({
                  ...provided,
                  position: "fixed",
                }),
                container: provided => ({
                  ...provided,
                }),
                placeholder: provided => ({
                  ...provided,
                  position: "static",
                  transform: "none",
                }),
                singleValue: provided => ({
                  ...provided,
                  position: "static",
                  transform: "none",
                }),
              }}
            />
          </Wrapper>
        )
      })
      .concat(
        <Button
          display={Object.keys(activeTags).length > 0 ? "block" : "none"}
          key={`clear-${Object.keys(rest).length}`}
          variant="link"
          fontWeight={"normal"}
          size={"xs"}
          onClick={() => {
            clearActiveTags()
          }}
        >
          {"Zurücksetzen"}
        </Button>
      )
  }

  return (
    <Flex h="100vh" bg={"white"} overflow="hidden">
      <SidebarContent display={{ base: "none", lg: "block" }}>
        <CategoryPicker
          groupedCategories={groupedCategories}
          activeTags={activeTags}
          updateActiveTags={updateActiveTags}
          addOrRemoveTag={addOrRemoveTag}
        ></CategoryPicker>
      </SidebarContent>

      <Flex w="100%" h="100%" flexDirection={"column"}>
        <Flex
          px={{ base: "4", md: "6" }}
          py={{ base: "4", md: "6" }}
          borderBottom="1px"
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
          flexShrink={1}
        >
          <Wrap w="80%" display={{ base: "none", lg: "block" }}>
            {FilterElements({
              wrapperAs: WrapItem,
              wrapperProps: {
                py: "px",
              },
            })}
          </Wrap>

          <Menu>
            <MenuButton
              as={Button}
              variant={"link"}
              fontWeight="normal"
              leftIcon={<Icon as={FaSort} w={3} h={3} />}
              display={{ base: "block", lg: "none" }}
            >
              Filter
            </MenuButton>
            <MenuList>
              <Stack px="2" maxW={"80vw"}>
                {FilterElements({})}
              </Stack>
            </MenuList>
          </Menu>

          <Spacer />

          <HStack direction="row" align="center">
            <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">
              Sortieren:
            </Text>
            <CSelect
              size="sm"
              variant={"unstyled"}
              my="2"
              icon={<ChevronDownIcon />}
              cursor="pointer"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                props.onSortChange(e.target.value)
              }}
            >
              {props.sortOptions.map(option => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              })}
            </CSelect>
          </HStack>
        </Flex>
        <Box pos="relative" overflowY={"scroll"} zIndex="0" pb={48}>
          {props.children}
        </Box>
      </Flex>
    </Flex>
  )
}

interface SidebarProps extends BoxProps {}

const SidebarContent = ({ children, ...rest }: SidebarProps) => {
  return (
    <Box
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={60}
      minW={60}
      h="full"
      overflowY={"scroll"}
      sx={{
        "&::-webkit-scrollbar": {
          width: "12px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },

        "&::-webkit-scrollbar-thumb": {
          borderRadius: "10px",
          border: "3px solid #ffffff",
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

type GroupedTags = {
  [group: string]: Array<{
    categories: string[]
    tag: string
    label: string
  }>
}

function groupTags(
  tags: ProductsPageShellSidebarProps["activeTags"],
  groupedTags: GroupedTags
) {
  if (!tags) return groupedTags

  for (const tag of Object.values(tags)) {
    const tagParts = tag.split(":")

    // skip if tag is not in the format "group:tag:..."
    if (tagParts.length < 2) continue

    // groupTag group is the n-1 part
    const group =
      tagParts[0] === "Kategorie" ? "Kategorie" : tagParts.slice(-2)[0]
    // label is the last part
    const label = tagParts.slice(-1)[0]

    // categories are the parts before the group
    const categories = tagParts.slice(0, -2)

    groupedTags[group] = groupedTags[group] || []
    groupedTags[group].push({
      tag,
      label,
      categories,
    })
  }

  return groupedTags
}

const groupCategoriesTags = (
  tags: string[] | undefined,
  groupedTags: GroupedTags
) => {
  if (!tags) return groupedTags

  for (const tag of Object.values(tags)) {
    const [_, category, ...rest] = tag.split(":")

    groupedTags[category] = groupedTags[category] || []

    if (rest.length > 0) {
      groupedTags[category].push({
        categories: [],
        tag: tag,
        label: rest[0],
      })
    }
  }

  return groupedTags
}
