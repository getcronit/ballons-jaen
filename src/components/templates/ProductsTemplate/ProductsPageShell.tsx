import {
  ChevronDownIcon,
  InfoOutlineIcon,
  SmallAddIcon,
  SmallCloseIcon
} from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select as CSelect,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import {FaFilter} from '@react-icons/all-files/fa/FaFilter'
import {OptionBase} from 'chakra-react-select'
import React, {ReactNode, useEffect, useMemo} from 'react'
import {BallonButton} from '../../molecules/BallonButton'
import {OverflownText} from '../../OverflownText'

interface TagFilterOption extends OptionBase {
  label: string
  value: string
  color?: string
}

export interface ProductsPageShellSidebarProps {
  allTags: string[]
  activeTags?: string[]
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
  const [activeGroupTags, setActiveGroupTags] = React.useState<GroupedTags>({})
  const [activeTags, setActiveTags] = React.useState<ActiveTags>({})

  useEffect(() => {
    setActiveGroupTags(props.groupedCategories.activeTags)
  }, [props.groupedCategories.activeTags])

  useEffect(() => {
    setActiveTags(props.activeTags)
  }, [props.activeTags])

  const allCatArray = useMemo(() => {
    return Object.keys(props.groupedCategories.allTags)
  }, [props.groupedCategories.allTags])

  const activeCatArray = useMemo(() => {
    return Object.keys(activeGroupTags).map(cat => allCatArray.indexOf(cat))
  }, [activeGroupTags, allCatArray])

  // const index = Object.keys(activeCatArray).map(Number)

  return (
    <Accordion
      id={`category-accordion`}
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

          props.updateActiveTags(activeTags, 'Kategorie')
        }

        if (added !== undefined) {
          props.addOrRemoveTag(rubricTag, 'Kategorie')
        }
      }}>
      {allCatArray.map((group, index) => {
        const tags = props.groupedCategories.allTags[group]

        const tagStrings = tags.map(tag => tag.tag)

        const isSelectAll = tagStrings.every(tag =>
          props.activeTags.Kategorie?.includes(tag)
        )

        return (
          <AccordionItem key={index} id={`category-accordion-item-${index}`}>
            {({isExpanded}) => (
              <>
                <h2>
                  <AccordionButton py="4">
                    <Text
                      flex="1"
                      textAlign="left"
                      fontSize="md"
                      fontWeight={isExpanded ? 'bold' : 'normal'}>
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
                        activeTags.Kategorie?.some(tag => tag === item.tag)

                      return (
                        <Text
                          key={index}
                          onClick={e => {
                            // addOrRemoveTag(value, 'Kategorie')
                            // if (isSelectAll) {
                            //   addOrRemoveTag(`Kategorie:${group}`, 'Kategorie')
                            // }
                            props.addOrRemoveTag(item.tag, 'Kategorie')
                          }}
                          cursor="pointer"
                          fontSize="sm"
                          fontWeight={active ? 'semibold' : 'normal'}
                          _hover={{
                            textDecoration: 'underline'
                          }}>
                          {item.label}
                        </Text>
                      )
                    })}
                    {tags.length > 0 && (
                      <Button
                        variant="link"
                        fontWeight="normal"
                        size="xs"
                        onClick={() => {
                          if (isSelectAll) {
                            // remove all tags from group
                            props.updateActiveTags(
                              props.activeTags.Kategorie?.filter(
                                tag => !tagStrings.includes(tag)
                              ),
                              'Kategorie'
                            )
                          } else {
                            // add all tags from group without duplicates
                            props.updateActiveTags(
                              [
                                ...new Set([
                                  ...props.activeTags.Kategorie,
                                  ...tagStrings
                                ])
                              ].filter(
                                (tag, index, self) =>
                                  self.indexOf(tag) === index
                              ),
                              'Kategorie'
                            )
                          }
                        }}>
                        {!isSelectAll ? 'Alle auswählen' : 'Zurücksetzen'}
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

type ActiveTags = Record<string, string[]>

export interface TagsPickerProps {
  groupedTags: {
    allTags: GroupedTags
    activeTags: GroupedTags
  }
  activeTags: ActiveTags
  addOrRemoveTag: (tag: string, group: string) => void
  updateActiveTags: (tags: ActiveTags[string], group: string) => void
}

function TagsPicker(props: TagsPickerProps) {
  const allTagsArray = Object.keys(
    sortGroupedTagsGroup(props.groupedTags.allTags)
  )
  const activeTagsArray = Object.keys(props.groupedTags.activeTags).map(cat =>
    allTagsArray.indexOf(cat)
  )

  return (
    <Accordion reduceMotion allowMultiple defaultIndex={activeTagsArray}>
      {allTagsArray.map((group, index) => {
        const tags = props.groupedTags.allTags[group]

        return (
          <AccordionItem key={index}>
            {({isExpanded}) => (
              <>
                <h2>
                  <AccordionButton py="4">
                    <Text
                      flex="1"
                      textAlign="left"
                      fontSize="lg"
                      fontWeight={isExpanded ? 'bold' : 'normal'}>
                      {group}{' '}
                      <Text as="span" fontSize={'sm'}>
                        ({tags.length})
                      </Text>
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack pl={1}>
                    {tags
                      // .sort((a, b) => {
                      //   if (a.categories.length === 0) return -1
                      //   if (b.categories.length === 0) return 1

                      //   return b.categories[0].localeCompare(a.categories[0])
                      // })
                      .map((item, index) => {
                        const active = props.activeTags[group]?.includes(
                          item.tag
                        )

                        const [_, ...rest] = item.tag.split(':')
                        const label = `${group}: ${rest
                          .slice(0, -1)
                          .join(' > ')} -> ${item.label}`

                        return (
                          <HStack
                            py="1"
                            key={index}
                            onClick={e => {
                              props.addOrRemoveTag(item.tag, group)
                            }}
                            cursor="pointer">
                            {group === 'Kategorie' &&
                              item.categories.length > 0 && <Box>-</Box>}

                            <Tooltip
                              isOpen={
                                item.categories.length === 0 ? false : undefined
                              }
                              label={label}
                              hasArrow
                              placement="bottom-start">
                              <Text
                                fontSize="md"
                                fontWeight={active ? 'semibold' : 'normal'}
                                _hover={{
                                  textDecoration: 'underline'
                                }}>
                                {item.label}
                                {group !== 'Kategorie' &&
                                  item.categories.length > 0 && (
                                    <InfoOutlineIcon
                                      as="span"
                                      ml="2"
                                      fontSize="xs"
                                    />
                                  )}
                              </Text>
                            </Tooltip>
                          </HStack>
                        )
                      })}
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

const sortGroupedTagsGroup = (tags: GroupedTags): GroupedTags => {
  const prefferedOrder = [
    'Thema',
    'Kategorie',
    'Größe',
    'Farbe',
    'Form',
    'Druck',
    'Sortiment',
    'Hersteller',
    'Divers'
  ]

  const sorted = Object.entries(tags).sort(([a], [b]) => {
    const aIndex = prefferedOrder.indexOf(a)
    const bIndex = prefferedOrder.indexOf(b)

    if (aIndex === -1 && bIndex === -1) {
      return a.localeCompare(b)
    }

    if (aIndex === -1) {
      return 1
    }

    if (bIndex === -1) {
      return -1
    }

    return aIndex - bIndex
  })

  return Object.fromEntries(sorted)
}

const Filter: React.FC<{
  groupedTags: {
    allTags: GroupedTags
    activeTags: GroupedTags
  }

  activeTags: ActiveTags
  addOrRemoveTag: (tag: string, group: string) => void
  clearActiveTags: () => void
  updateActiveTags: (tags: ActiveTags[string], group: string) => void
  onSortChange: (sort: string) => void
  sortOptions: string[]
}> = ({groupedTags, ...props}) => {
  const drawerDisclosure = useDisclosure()

  const {Kategorie, ...tags} = sortGroupedTagsGroup(groupedTags.allTags)

  const LIMIT = 6 // limit of tags to show before showing the drawer button
  const ACTIVE_LIMIT = 3 // limit of tags to show before showing the drawer button

  const tagsLength = Object.keys(tags).length

  const shouldShowDrawerButton = tagsLength > LIMIT

  const remainingTags = tagsLength - LIMIT

  const [activeTags, setActiveTags] = React.useState<ActiveTags>({})
  const activeTagsArray = React.useMemo(() => {
    return Object.values(activeTags).flat()
  }, [activeTags])

  useEffect(() => {
    setActiveTags(props.activeTags)
  }, [props.activeTags])

  const blacklistedTags = React.useMemo(() => {
    const blacklist = []
    const categoryTags = activeTags.Kategorie

    if (categoryTags && categoryTags.length > 0) {
      for (const group in groupedTags.allTags) {
        if (group === 'Kategorie') continue

        const tags = groupedTags.allTags[group]

        for (const tag of tags) {
          const categoryTag = tag.categories.join(':')

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

  return (
    <>
      <HStack justifyContent="space-between">
        <HStack>
          <Wrap
            display={{
              base: 'none',
              lg: 'flex'
            }}>
            {
              // Tags keys as menu buttons with a dropdown icon
              Object.keys(tags)
                .slice(0, LIMIT)
                .map((group, index) => {
                  const menuStructure: {
                    [key: string]: Array<{
                      tag: string
                      label: string
                    }>
                  } = {}

                  for (const {categories, tag, label} of tags[group]) {
                    if (blacklistedTags.includes(tag)) continue

                    const catStr = categories.join(' > ')

                    if (menuStructure[catStr]) {
                      menuStructure[catStr].push({tag, label})
                    } else {
                      menuStructure[catStr] = [{tag, label}]
                    }
                  }

                  return (
                    <WrapItem key={index}>
                      <Menu id={`filter-${group}-${index}`} isLazy>
                        <MenuButton
                          as={Button}
                          size="sm"
                          variant="ghost"
                          fontWeight="normal"
                          rightIcon={<ChevronDownIcon />}>
                          {group}
                        </MenuButton>

                        <MenuList
                          color="black"
                          boxShadow="xl"
                          maxH="xs"
                          overflowY="auto">
                          {
                            // Tags as menu items
                            // tags[group].map((item, index) => {
                            //   const active = activeTagsArray.includes(item.tag)

                            //   return (
                            //     <>
                            //       <MenuItem
                            //         closeOnSelect={false}
                            //         py="4"
                            //         onClick={() => {
                            //           addOrRemoveTag(item.tag, group)
                            //         }}
                            //         justifyContent={'space-between'}>
                            //         <Text
                            //           fontSize="sm"
                            //           fontWeight={active ? 'semibold' : 'normal'}>
                            //           {item.tag}
                            //         </Text>
                            //       </MenuItem>
                            //       <MenuDivider />
                            //     </>
                            //   )
                            // })

                            Object.entries(menuStructure)
                              .sort(([a], [b]) => a.localeCompare(b))
                              .map(([cat, items], index) => {
                                return (
                                  <MenuOptionGroup
                                    key={index}
                                    title={cat}
                                    defaultValue={activeTagsArray}
                                    type="checkbox">
                                    {items.map((item, index) => {
                                      const active = activeTagsArray.includes(
                                        item.tag
                                      )

                                      return (
                                        <MenuItemOption
                                          key={index}
                                          value={item.tag}
                                          closeOnSelect={false}
                                          py="4"
                                          isChecked={active}
                                          onClick={() => {
                                            props.addOrRemoveTag(
                                              item.tag,
                                              group
                                            )
                                          }}
                                          justifyContent={'space-between'}>
                                          {item.label}
                                        </MenuItemOption>
                                      )
                                    })}
                                  </MenuOptionGroup>
                                )
                              })
                          }
                        </MenuList>
                      </Menu>
                    </WrapItem>
                  )
                })
            }

            {shouldShowDrawerButton && (
              <Button
                key={'more'}
                size="sm"
                variant="ghost"
                fontWeight="normal"
                leftIcon={<SmallAddIcon />}
                onClick={drawerDisclosure.onOpen}>
                {remainingTags} {remainingTags === 1 ? 'weiterer' : 'weitere'}{' '}
                Filter
              </Button>
            )}
          </Wrap>

          <Button
            display={{
              base: 'flex',
              lg: 'none'
            }}
            size="sm"
            variant="ghost"
            fontWeight="normal"
            leftIcon={<SmallAddIcon />}
            onClick={drawerDisclosure.onOpen}>
            Filter
          </Button>
        </HStack>
        <HStack direction="row" align="center">
          <Text fontSize="sm" color="red.500" whiteSpace="nowrap">
            Sortieren:
          </Text>
          <CSelect
            size="sm"
            variant="unstyled"
            my="2"
            icon={<ChevronDownIcon />}
            cursor="pointer"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              props.onSortChange(e.target.value)
            }}>
            {props.sortOptions.map(option => {
              return (
                <option key={option} value={option}>
                  {option}
                </option>
              )
            })}
          </CSelect>
        </HStack>
      </HStack>
      <Divider />

      <Flex>
        {activeTagsArray.length > 0 && (
          <BallonButton
            maxW="fit-content"
            size="sm"
            onClick={() => {
              props.clearActiveTags()
            }}>
            Alle Filter aufheben
          </BallonButton>
        )}

        <Wrap
          display={{
            base: 'none',
            lg: 'flex'
          }}>
          {
            // All tags as buttons with a close icon left

            Object.entries(activeTags)
              .reduce(
                (result: {tag: string; group: string}[], [group, tagArray]) => [
                  ...result,
                  ...tagArray.map(tag => ({tag, group}))
                ],
                []
              )
              .slice(0, ACTIVE_LIMIT)
              .map(({tag, group}, index) => {
                return (
                  <WrapItem key={index}>
                    <Button
                      size="sm"
                      variant="ghost"
                      fontWeight="normal"
                      color="black"
                      leftIcon={<SmallCloseIcon />}
                      onClick={() => {
                        props.addOrRemoveTag(tag, group)
                      }}>
                      {
                        // Format tag string to label -> "Kategorie:Bubbels:Test" -> "Kategorie Bubbels > Test"
                        // This formatting is for every group

                        <OverflownText maxW="24" isTruncated fontSize={'xs'}>
                          {tag}
                        </OverflownText>
                      }
                    </Button>
                  </WrapItem>
                )
              })
          }
          {activeTagsArray.length > ACTIVE_LIMIT && (
            <WrapItem key="more">
              <Button
                size="sm"
                fontSize={'xs'}
                variant="ghost"
                fontWeight="normal"
                color="black"
                onClick={drawerDisclosure.onOpen}>
                {activeTagsArray.length - ACTIVE_LIMIT}{' '}
                {activeTagsArray.length - ACTIVE_LIMIT === 1
                  ? 'weiterer'
                  : 'weitere'}
                {' Aktiv'}
              </Button>
            </WrapItem>
          )}
        </Wrap>
        {activeTagsArray.length > 0 && (
          <Button
            display={{
              base: 'flex',
              lg: 'none'
            }}
            size="sm"
            fontSize={'xs'}
            variant="ghost"
            fontWeight="normal"
            color="black"
            onClick={drawerDisclosure.onOpen}>
            {activeTagsArray.length} Aktiv
          </Button>
        )}
      </Flex>

      <Drawer
        size={{
          base: 'xs',
          sm: 'xs',
          md: 'sm',
          lg: 'md'
        }}
        isOpen={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}>
        <DrawerOverlay />

        <DrawerContent borderLeftRadius="lg" overflow="hidden">
          <DrawerHeader>
            <BallonButton
              visibility={activeTagsArray.length > 0 ? 'visible' : 'hidden'}
              maxW="fit-content"
              size="md"
              py="7 !important"
              onClick={() => {
                props.clearActiveTags()
              }}>
              Alle Filter aufheben
            </BallonButton>
            <DrawerCloseButton />
          </DrawerHeader>

          <DrawerBody>
            <TagsPicker
              groupedTags={groupedTags}
              activeTags={activeTags}
              updateActiveTags={props.updateActiveTags}
              addOrRemoveTag={props.addOrRemoveTag}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
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
      activeTags: {}
    }

    groupTags(props.allTags, grouped.allTags)
    groupTags(props.activeTags, grouped.activeTags)

    return grouped
  }, [props.allTags, props.activeTags])

  const [activeTags, setActiveTags] = React.useState<ActiveTags>(() => {
    const s = Object.entries(groupedTags.activeTags).reduce(
      (acc, [group, tags]) => ({
        ...acc,
        [group]: tags.map(tag => tag.tag)
      }),
      {}
    ) as Record<string, string[]>

    return s
  })

  useEffect(() => {
    setActiveTags(
      Object.entries(groupedTags.activeTags).reduce(
        (acc, [group, tags]) => ({
          ...acc,
          [group]: tags.map(tag => tag.tag)
        }),
        {}
      ) as Record<string, string[]>
    )
  }, [groupedTags.activeTags])

  const groupedCategories = React.useMemo(() => {
    const grouped: {
      allTags: GroupedTags
      activeTags: GroupedTags
    } = {
      allTags: {},
      activeTags: {}
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
    activeTags
  ])

  const updateActiveTags = (tags: string[], group: string) => {
    const updatedActiveTags = {...activeTags, [group]: tags}

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

  return (
    <Flex
      p={{
        base: 0,
        xl: 4
      }}
      pos="relative">
      <Box
        display={{base: 'none', xl: 'block'}}
        bg="white"
        borderRadius="lg"
        pos="sticky"
        top="4"
        w="20rem"
        h="calc(100vh - 4rem)"
        boxShadow="light">
        <CategoryPicker
          groupedCategories={groupedCategories}
          activeTags={activeTags}
          updateActiveTags={updateActiveTags}
          addOrRemoveTag={addOrRemoveTag}
        />
      </Box>

      <Box
        w={{
          base: '100%',
          xl: 'calc(100% - 20rem)'
        }}>
        <Stack
          direction="column"
          borderRadius="lg"
          bg="white"
          pos="sticky"
          top="4"
          zIndex="3"
          p="4"
          ml={{base: '2', md: '12'}}
          mr={{base: '2', md: '12'}}
          boxShadow="light">
          <Filter
            groupedTags={groupedTags}
            activeTags={activeTags}
            sortOptions={props.sortOptions}
            addOrRemoveTag={addOrRemoveTag}
            clearActiveTags={clearActiveTags}
            updateActiveTags={updateActiveTags}
            onSortChange={props.onSortChange}
          />
        </Stack>

        {props.children}
      </Box>
    </Flex>
  )

  // return (
  //   <Flex h={{sm: 'calc(100vh - 60px)'}} bg="white" overflow="hidden">
  //     <SidebarContent display={{base: 'none', lg: 'block'}}>
  //       <CategoryPicker
  //         groupedCategories={groupedCategories}
  //         activeTags={activeTags}
  //         updateActiveTags={updateActiveTags}
  //         addOrRemoveTag={addOrRemoveTag}
  //       />
  //     </SidebarContent>

  //     <Flex w="100%" h="100%" flexDirection="column">
  //       <Flex
  //         px={{base: '4', md: '6'}}
  //         py={{base: '4', md: '6'}}
  //         borderBottom="1px"
  //         borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
  //         flexShrink={1}>
  //         <Wrap w="80%" display={{base: 'none', lg: 'block'}}>
  //           {FilterElements({
  //             wrapperAs: WrapItem,
  //             wrapperProps: {
  //               py: 'px'
  //             },
  //             fixedMenuPosition: true
  //           })}
  //         </Wrap>

  //         <FilterDrawer display={{base: 'flex', lg: 'none'}}>
  //           <Stack spacing="8">
  //             <Heading size="sm">Kategorien</Heading>

  //             <CategoryPicker
  //               groupedCategories={groupedCategories}
  //               activeTags={activeTags}
  //               updateActiveTags={updateActiveTags}
  //               addOrRemoveTag={addOrRemoveTag}
  //             />
  //             <Heading size="sm">Filter</Heading>

  //             <Stack>
  //               {FilterElements({
  //                 size: 'md'
  //               })}
  //             </Stack>
  //           </Stack>
  //         </FilterDrawer>

  //         <Spacer />

  //         <HStack direction="row" align="center">
  //           <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">
  //             Sortieren:
  //           </Text>
  //           <CSelect
  //             size="sm"
  //             variant="unstyled"
  //             my="2"
  //             icon={<ChevronDownIcon />}
  //             cursor="pointer"
  //             onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
  //               props.onSortChange(e.target.value)
  //             }}>
  //             {props.sortOptions.map(option => {
  //               return (
  //                 <option key={option} value={option}>
  //                   {option}
  //                 </option>
  //               )
  //             })}
  //           </CSelect>
  //         </HStack>
  //       </Flex>
  //       <Box flex="1" pos="relative" overflowY="scroll" zIndex="0" pb={50}>
  //         {props.children}
  //       </Box>
  //       <HStack
  //         as="footer"
  //         justifyContent="end"
  //         my="5"
  //         px={{base: '4', md: '6'}}
  //         spacing="4"
  //         divider={<StackDivider />}>
  //         {[
  //           {
  //             text: 'Kontakt',
  //             to: '/kontakt/'
  //           },

  //           {
  //             text: 'Datenschutz',
  //             to: '/datenschutz/'
  //           },
  //           {
  //             text: 'Impressum',
  //             to: '/impressum/'
  //           }
  //         ].map((item, index) => {
  //           return (
  //             <Link to={item.to} key={index}>
  //               <Text
  //                 fontSize="xs"
  //                 color="gray.400"
  //                 _hover={{
  //                   color: 'gray.500',
  //                   textDecoration: 'underline'
  //                 }}>
  //                 {item.text}
  //               </Text>
  //             </Link>
  //           )
  //         })}
  //       </HStack>
  //     </Flex>
  //   </Flex>
  // )
}

const FilterDrawer: React.FC<
  ButtonProps & {
    children: React.ReactNode
  }
> = ({children, ...buttonProps}) => {
  const drawerDisclosure = useDisclosure()

  return (
    <>
      <Button
        leftIcon={<FaFilter />}
        size="sm"
        onClick={drawerDisclosure.onOpen}
        {...buttonProps}>
        Filter
      </Button>

      <Drawer
        isOpen={drawerDisclosure.isOpen}
        onClose={drawerDisclosure.onClose}
        placement="bottom">
        <DrawerOverlay />

        <DrawerContent maxHeight="55%" borderTopRadius="lg" overflow="hidden">
          <DrawerCloseButton />

          <DrawerBody pt="16">{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

interface SidebarProps extends BoxProps {}

const SidebarContent = ({children, ...rest}: SidebarProps) => {
  return (
    <Box
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={60}
      minW={60}
      h="full"
      overflowY="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          width: '12px'
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent'
        },

        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          border: '3px solid #ffffff'
        }
      }}
      {...rest}>
      {children}
    </Box>
  )
}

type GroupedTags = Record<
  string,
  Array<{
    categories: string[]
    tag: string
    label: string
  }>
>

function groupTags(
  tags: ProductsPageShellSidebarProps['activeTags'],
  groupedTags: GroupedTags
) {
  if (!tags) return groupedTags

  for (const tag of Object.values(tags)) {
    const tagParts = tag.split(':')

    // skip if tag is not in the format "group:tag:..."
    if (tagParts.length < 2) continue

    // groupTag group is the n-1 part
    const group =
      tagParts[0] === 'Kategorie' ? 'Kategorie' : tagParts.slice(-2)[0]
    // label is the last part
    const label = tagParts.slice(-1)[0]

    // categories are the parts before the group
    const categories = tagParts.slice(0, -2)

    groupedTags[group] = groupedTags[group] || []
    groupedTags[group].push({
      tag,
      label,
      categories
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, category, ...rest] = tag.split(':')

    groupedTags[category] = groupedTags[category] || []

    if (rest.length > 0) {
      groupedTags[category].push({
        categories: [],
        tag,
        label: rest[0]
      })
    }
  }

  return groupedTags
}
