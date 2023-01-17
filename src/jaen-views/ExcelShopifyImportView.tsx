import {
  Flex,
  Button,
  ChakraProvider,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  VStack,
  FormControl,
  FormErrorMessage,
  Spinner,
  Progress,
  Text,
  Center,
  Container,
  DeepPartial,
} from "@chakra-ui/react"
import { connectView } from "@jaenjs/jaen"
import { useSteps, Steps, Step } from "chakra-ui-steps"
import { FaShopify } from "react-icons/fa"
import ExcelJS from "exceljs"
import { saveAs } from "file-saver"

import {
  shopifyValidateSecret,
  shopifyCreateProduct,
  shopifyUpdateProduct,
} from "@snek-functions/origin"

import type { ShopifyProductInput } from "@snek-functions/shopify/dist/internal/types"

import theme from "../styles/theme"

import { FileUpload } from "../components/molecules/FileUpload"
import React, { useEffect, useRef } from "react"

const shop = process.env.GATSBY_MYSHOPIFY_URL

if (!shop) {
  throw new Error("GATSBY_MYSHOPIFY_URL is not set")
}

const ExcelShopifyImportView: React.FC = props => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const [stepSuccess, setStepSuccess] = React.useState<boolean>(false)

  const [file, setFile] = React.useState<File | null>(null)
  const [secret, setSecret] = React.useState<string>("")

  const onNext = () => {
    nextStep()
    setStepSuccess(false)
  }

  const onPrev = () => {
    prevStep()
    setStepSuccess(false)
  }

  const steps = [
    {
      label: "Upload products sheet",
      content: (
        <FileUpload
          onFilesUploaded={file => {
            setFile(file[0])
            setStepSuccess(true)
          }}
        />
      ),
    },
    {
      label: "Enter Shopify secret",
      content: (
        <EnterShopifySecret
          onAuthenticated={secret => {
            setSecret(secret)
            setStepSuccess(true)
          }}
        />
      ),
    },
    {
      label: "Import products",
      content: (
        <ImportProductsFromExcel
          file={file!}
          secret={secret}
          active={activeStep === 2}
          onImported={() => {}}
        />
      ),
    },
  ]

  return (
    <Flex flexDir="column" w="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label} p={4}>
            <Container maxW="container.lg" p={4}>
              {content}
            </Container>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset} colorScheme="red">
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={onPrev}
            size="sm"
            variant="ghost"
            colorScheme={"gray"}
          >
            Prev
          </Button>
          <Button
            size="sm"
            onClick={onNext}
            colorScheme="green"
            disabled={!stepSuccess}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

const EnterShopifySecret = ({
  onAuthenticated,
}: {
  onAuthenticated: (secret: string) => void
}) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [shopifySecret, setShopifySecret] = React.useState("")

  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  const handleAuthenticate = async () => {
    try {
      await shopifyValidateSecret({
        shop,
        accessToken: shopifySecret,
      })
      onAuthenticated(shopifySecret)
      setError("")
      setSuccess(true)
    } catch (e) {
      // @ts-ignore
      setError(e.message || "Something went wrong")
    }
  }

  return (
    <FormControl isInvalid={!!error}>
      <VStack>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter your Shopify secret"
            value={shopifySecret}
            onChange={e => setShopifySecret(e.target.value)}
            disabled={success}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              colorScheme={"gray"}
              borderRadius="md"
              onClick={handleClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          onClick={handleAuthenticate}
          colorScheme="green"
          disabled={success}
        >
          Login
        </Button>

        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </VStack>
    </FormControl>
  )
}

// gvoe: get value or empty
const getValueOrEmpty = (row: ExcelJS.Row, key: string) => {
  const cell = row.getCell(key)

  // if cell is object (e.g. formula) return the result

  if (cell.value && typeof cell.value === "object") {
    if (
      (cell.value as ExcelJS.CellFormulaValue).formula ||
      (cell.value as ExcelJS.CellSharedFormulaValue).sharedFormula
    ) {
      const value = (cell.value as ExcelJS.CellFormulaValue).result

      if (!value || (value as { error: ExcelJS.CellErrorValue }).error) {
        return ""
      }

      return (cell.value as ExcelJS.CellFormulaValue).result?.toString() || ""
    }
  }

  return cell.value?.toString() || ""
}

const ImportProductsFromExcel: React.FC<{
  active: boolean
  file: File
  secret: string
  onImported: () => void
}> = ({ active, file, secret, onImported }) => {
  if (!shop) {
    throw new Error("GATSBY_MYSHOPIFY_URL is not defined")
  }

  const [loading, setLoading] = React.useState(false)

  const [fileForExport, setFileForExport] = React.useState<File | null>(null)

  const [{ currentTask, progress, total, current, error }, setProgress] =
    React.useState({
      currentTask: "",
      progress: 0,
      total: 0,
      current: 0,
      error: "",
    })

  React.useEffect(() => {
    setLoading(active)

    if (active) {
      loadProducts()
    }
  }, [active])

  const loadProducts = async () => {
    const workbook = new ExcelJS.Workbook()

    const buffer = await file.arrayBuffer()

    await workbook.xlsx.load(buffer)

    const worksheet = workbook.getWorksheet(1)

    const loadProduct = (row: ExcelJS.Row): any => {
      const buildTags = (tags: string[][]) => {
        const result: string[] = []

        for (const [key, ...value] of tags) {
          // check if every value is not empty
          if (value.every(Boolean)) {
            const tag = `${key}:${value.join(":")}`.trim().replace(/,/g, ";")

            result.push(tag)
          }
        }

        return result
      }

      const gvoe = (key: string) => {
        return getValueOrEmpty(row, key)
      }

      const product: DeepPartial<{ id: string } & ShopifyProductInput> = {
        id: gvoe("A") || undefined,
        title: gvoe("G"),
        descriptionHtml: gvoe("F"),
        vendor: gvoe("E"),
        productType: undefined,
        variants: {
          price: gvoe("Z") || undefined,
          sku: gvoe("D"),
        },
        tags: buildTags([
          ["Kategorie", gvoe("B")],
          ["Kategorie", gvoe("B"), gvoe("C")],
          ["Sortiment", gvoe("H")],
          ["Farbe", gvoe("I")],
          [
            "Größe",
            gvoe("K") === gvoe("J")
              ? gvoe("J")
              : gvoe("K") && gvoe("J")
              ? `${gvoe("J")} = ${gvoe("K")}`
              : `${gvoe("J") || gvoe("K")} `,
          ],
          [
            gvoe("B"),
            gvoe("C"),
            "Größe",
            gvoe("K") === gvoe("J")
              ? gvoe("J")
              : gvoe("K") && gvoe("J")
              ? `${gvoe("J")} = ${gvoe("K")}`
              : `${gvoe("J") || gvoe("K")} `,
          ],
          ["Form", gvoe("Q")],
          ["Druck", gvoe("R")],
          ["Divers", gvoe("S")],
          ["Thema", gvoe("AD")],
          ["Thema", gvoe("AE")],
          ["Thema", gvoe("AF")],
        ]),
        metafields: [
          {
            namespace: "details",
            key: "filling",
            value: gvoe("AC"),
            type: "single_line_text_field",
          },
          {
            namespace: "details",
            key: "available",
            value: gvoe("AB"),
            type: "single_line_text_field",
          },
          {
            namespace: "details",
            key: "bundle",
            value: gvoe("O"),
            type: "number_integer",
          },
          {
            namespace: "details",
            key: "packaging",
            value: gvoe("P"),
            type: "single_line_text_field",
          },
          {
            namespace: "details",
            key: "_SU",
            value: gvoe("Y"),
            type: "single_line_text_field",
          },
          {
            namespace: "wholesale",
            key: "_SU",
            value: gvoe("T"),
            type: "single_line_text_field",
          },
          {
            namespace: "wholesale",
            key: "price",
            value: JSON.stringify({
              amount: parseFloat(gvoe("U") || "0"),
              currency_code: "EUR",
            }),
            type: "money",
          },
        ],
      }

      return product
    }

    setProgress({
      currentTask: "",
      progress: 0,
      total: worksheet.actualRowCount - 1,
      current: 0,
      error: "",
    })

    for (let i = 4; i < worksheet.actualRowCount + 1; i++) {
      if (error || loading) {
        break
      }

      const row = worksheet.getRow(i)

      const productTitle = getValueOrEmpty(row, "G")

      if (!productTitle) {
        continue
      }

      const product = loadProduct(row)

      try {
        if (product.id) {
          await shopifyUpdateProduct({
            accessToken: secret,
            shop,
            product: JSON.stringify({
              ...product,
              variants: {
                ...product.variants,
                taxable: true,
                inventoryPolicy: "CONTINUE",
                inventoryItem: {
                  tracked: false,
                },
              },
            }),
          })
        } else {
          const productId = await shopifyCreateProduct({
            accessToken: secret,
            shop,
            product: JSON.stringify({
              ...product,
              variants: {
                ...product.variants,
                taxable: true,
                inventoryPolicy: "CONTINUE",
                inventoryItem: {
                  tracked: false,
                },
              },
            }),
          })

          // Update first column of row with product id
          row.getCell(1).value = productId
        }
      } catch (e) {
        if (e instanceof Error) {
          setProgress({
            currentTask: "",
            progress,
            total,
            current,
            error: e.message,
          })
        }
      }

      setProgress({
        currentTask: product.title,
        progress: (i / worksheet.actualRowCount) * 100,
        total: worksheet.actualRowCount - 1,
        current: i,
        error,
      })

      await new Promise(resolve => setTimeout(resolve, 150))
    }

    setLoading(false)
    // write to a new buffer
    const exportBuffer = await workbook.xlsx.writeBuffer()

    // convert exportBuffer to file
    const exportFile = new File([exportBuffer], "export.xlsx", {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })

    setFileForExport(exportFile)

    // download file

    onImported()
  }

  return (
    <Box bg="gray.50" textAlign={"center"} p={2} borderRadius="md">
      {loading ? (
        <>
          <Text>
            Importing products... {currentTask && <>({currentTask})</>}
          </Text>
          <Progress value={progress} />
        </>
      ) : (
        <>
          {fileForExport && (
            <Button
              variant={"link"}
              onClick={() => {
                saveAs(fileForExport)
              }}
            >
              Download file
            </Button>
          )}
        </>
      )}
      {error && <Text color="red.500">{error}</Text>}
    </Box>
  )
}

export default connectView(
  () => {
    return (
      <ChakraProvider theme={theme}>
        <ExcelShopifyImportView />
      </ChakraProvider>
    )
  },
  {
    path: "/excel-import",
    displayName: "Excel Import",
    description: "Import products from Excel file to Shopify",
    Icon: FaShopify,
    controls: [],
  }
)
