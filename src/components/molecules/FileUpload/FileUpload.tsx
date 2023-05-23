import {DeleteIcon} from '@chakra-ui/icons'
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import {AiFillFileAdd} from 'react-icons/ai'

export interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void
}

export const Dropzone: React.FC<FileUploadProps> = ({onFilesUploaded}) => {
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0])

    onFilesUploaded(acceptedFiles)
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx'
      ],
      'application/vnd.ms-excel': ['.xls']
    },
    maxFiles: 1,
    multiple: false
  })

  const dropText = isDragActive
    ? 'Drop the files here ...'
    : "Drag 'n' drop .xlsx, .xls file here, or click to select files"

  const activeBg = useColorModeValue('gray.100', 'gray.600')
  const borderColor = useColorModeValue(
    isDragActive ? 'jaen.300' : 'gray.300',
    isDragActive ? 'jaen.500' : 'gray.500'
  )

  return (
    <VStack>
      {uploadedFile && (
        <Box m="4">
          <HStack>
            <Icon as={AiFillFileAdd} />
            <Box>{uploadedFile.name}</Box>

            <IconButton
              aria-label="Remove file"
              variant="ghost"
              icon={<Icon as={DeleteIcon} />}
              onClick={() => {
                setUploadedFile(null)
              }}
            />
          </HStack>
        </Box>
      )}

      <Center
        p={10}
        cursor="pointer"
        bg={isDragActive ? activeBg : 'transparent'}
        _hover={{bg: activeBg}}
        transition="background-color 0.2s ease"
        borderRadius={4}
        border="3px dashed"
        borderColor={borderColor}
        {...getRootProps()}>
        <input {...getInputProps()} />
        <Icon as={AiFillFileAdd} mr={2} />
        <p>{dropText}</p>
      </Center>
    </VStack>
  )
}

export default Dropzone
