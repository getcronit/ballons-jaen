import {SearchIcon} from '@chakra-ui/icons'
import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import {
  getProductTags,
  ShopifyProduct,
  useProductSearch
} from '@snek-at/gatsby-theme-shopify'
import {navigate} from 'gatsby'
import React from 'react'
import {getSrcFromImageData} from '../common/get-src-from-image-data'
import {metafieldIdentifiers} from '../common/getProductMetafields'
import {getProductPrices} from '../common/utils'
import {useAuthenticationContext} from '@atsnek/jaen'

export interface SearchContextProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const SearchContext = React.createContext<SearchContextProps>({
  isOpen: false,
  onOpen: () => {},
  onClose: () => {}
})

export const useSearch = () => {
  if (!SearchContext) {
    throw new Error('useSearch must be used within a SearchContext')
  }

  return React.useContext(SearchContext)
}

export interface SearchbarProps {
  searchResultProducts: ShopifyProduct[]
  onSearch: (value: string) => void
  onProductClick: (index: number) => void
}

export const Searchbar = (props: SearchbarProps) => {
  const {isOpen, onOpen, onClose} = useSearch()

  let timeout: NodeJS.Timeout | null = null

  const [searchValue, setSearchValue] = React.useState('')

  const delayedSearch = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    setSearchValue(value)
  }

  React.useEffect(() => {
    if (!timeout) {
      timeout = setTimeout(() => {
        props.onSearch(searchValue)
      }, 500)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [searchValue])

  // event listener for keyboard events
  React.useEffect(() => {
    // handle strg + k
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && e.ctrlKey) {
        e.preventDefault()
        // prevents the event from being called twice, thus the search modal
        // only opens once
        e.stopImmediatePropagation()

        onOpen()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const auth = useAuthenticationContext()

  const wholesale = !!auth.user

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent maxW="container.xl">
          <ModalHeader p={0} m={2}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="agt.blue" />
              </InputLeftElement>
              <Input
                placeholder="Suche nach Artikeln"
                border="none"
                _focus={{
                  boxShadow: 'none'
                }}
                color={useColorModeValue('gray.700', 'gray.300')}
                onChange={delayedSearch}
              />
            </InputGroup>
          </ModalHeader>
          <ModalBody px="2">
            {/* {props.searchResultProducts.length > 0 && (
              <>
                <Divider />
                <VStack m="4" align="left">
                  {props.searchResultProducts.map((product, index) => {
                    const tags = getProductTags(product)

                    return (
                      <Link
                        as={GatsbyLink}
                        to={`/products/${product.handle}`}
                        key={index}
                        _hover={{
                          textDecoration: "none",
                          color: "agt.blue",
                        }}
                        px="4"
                        py="2"
                        bg={searchItemBg}
                        rounded="md"
                        cursor="pointer"
                        transition="ease-out"
                      >
                        <ProductRow
                          title={product.title}
                          featuredMedia={product.featuredMedia}
                          categoryTags={tags.categoryTags}
                          otherTags={tags.otherTags}
                        />
                      </Link>
                    )
                  })}
                </VStack>
              </>
            )} */}

            <>
              <Table
                variant="simple"
                sx={{
                  'th, td': {
                    borderColor: 'gray.200'
                  }
                }}>
                <TableCaption>
                  <Text fontSize="sm" color="gray.500">
                    {props.searchResultProducts.length} Ergebnisse
                  </Text>
                </TableCaption>
                <Thead
                  position="sticky"
                  top={-2}
                  bg="white"
                  zIndex={1}
                  boxShadow="xs">
                  <Tr>
                    <Th>Produktbild</Th>
                    <Th>Artikel</Th>
                    <Th
                      display={{
                        base: 'none',
                        lg: 'table-cell'
                      }}>
                      Eigenschaften
                    </Th>
                    <Th>Preis</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {props.searchResultProducts.map((product, index) => {
                    type TagsTable = Array<{
                      name: string
                      value: string
                    }>

                    const buildTagsTable = (): TagsTable => {
                      const tableTags: Record<string, string> = {}

                      const tags = getProductTags(product)

                      const categoryTags = tags.categoryTags.map(tag => {
                        const splitTag = tag.split(':')

                        const tagString = splitTag.slice(1).join(':')

                        return {
                          name: 'Kategorie',
                          value: tagString
                        }
                      })

                      const otherTags = tags.otherTags.map(tag => {
                        const splitTag = tag.split(':')

                        const tagString = splitTag.slice(1).join(':')

                        if (splitTag.length > 1) {
                          return {
                            name: splitTag[0],
                            value: tagString
                          }
                        }

                        return {
                          name: 'Sonstiges',
                          value: tag
                        }
                      })

                      for (let i = 0; i < categoryTags.length; i++) {
                        if (!tableTags[categoryTags[i].name]) {
                          tableTags[categoryTags[i].name] =
                            categoryTags[i].value
                        } else {
                          tableTags[categoryTags[i].name] +=
                            ', ' + categoryTags[i].value
                        }
                      }

                      for (let i = 0; i < otherTags.length; i++) {
                        if (!tableTags[otherTags[i].name]) {
                          tableTags[otherTags[i].name] = otherTags[i].value
                        } else {
                          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                          tableTags[otherTags[i].name] +=
                            ', ' + otherTags[i].value
                        }
                      }

                      // tableTags to array with name as key and value as value
                      const tableTagsArray = Object.keys(tableTags).map(key => {
                        return {
                          name: key,
                          value: tableTags[key]
                        }
                      }) as TagsTable

                      return tableTagsArray
                    }

                    const tagsTable = buildTagsTable()
                    const price = getProductPrices(product, {
                      isWholesale: wholesale
                    })

                    return (
                      <Tr
                        key={index}
                        cursor="pointer"
                        _hover={{
                          bg: 'gray.100'
                        }}
                        onClick={() => {
                          props.onProductClick(index)
                        }}>
                        <Td>
                          <Image
                            src={getSrcFromImageData(
                              product.featuredMedia?.image.gatsbyImageData
                            )}
                            alt={product.featuredMedia?.image.altText || ''}
                            boxSize={{
                              base: '50px',
                              lg: '100px'
                            }}
                            borderRadius="md"
                            objectFit="contain"
                          />
                        </Td>
                        <Td>{product.title}</Td>
                        <Td
                          display={{
                            base: 'none',
                            lg: 'table-cell'
                          }}>
                          <TableContainer maxW="sm">
                            <Table
                              size="sm"
                              sx={{
                                'scrollbar-width': 'thin',
                                'scrollbar-color': 'gray.200 gray.100'
                              }}>
                              <Tbody>
                                {tagsTable.map((tag, index) => {
                                  return (
                                    <Tr key={index}>
                                      <Th>{tag.name}</Th>
                                      <Th>{tag.value}</Th>
                                    </Tr>
                                  )
                                })}
                              </Tbody>
                            </Table>
                          </TableContainer>
                        </Td>
                        <Td>{price.priceFormatted}</Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export const SearchModalProvider: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()

  const memoedChildren = React.useMemo(() => children, [children])

  const search = useProductSearch({
    options: {
      count: 15
    },
    persistData: false,
    metafieldIdentifiers
  })

  const onSearch = (searchTerm: string) => {
    search.onChangeFilter({
      searchTerm
    })
  }

  const onProductClick = (index: number) => {
    const product = search.products[index]

    if (product) {
      void navigate(`/products/${product.handle}`)
    }
  }

  return (
    <SearchContext.Provider value={{isOpen, onOpen, onClose}}>
      <Searchbar
        searchResultProducts={search.products}
        onSearch={onSearch}
        onProductClick={onProductClick}
      />
      {memoedChildren}
    </SearchContext.Provider>
  )
}
