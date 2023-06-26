import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import {Field} from '@snek-at/jaen'
import {FC, ReactNode} from 'react'
import LinkButtonField from '../../../fields/LinkButtonField'

export interface ISortiment {
  heading: ReactNode
  text: ReactNode
}

const items: ISortiment[] = [
  {
    heading: <Field.Text name="items-heading-1" defaultValue="Latexballons" />,
    text: (
      <Field.Text
        name="items-text-1"
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
      />
    )
  },
  {
    heading: (
      <Field.Text name="items-heading-2" defaultValue="Bedruckbare Ballons" />
    ),
    text: (
      <Field.Text
        name="items-text-2"
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
      />
    )
  },
  {
    heading: (
      <Field.Text name="items-heading-3" defaultValue="Bedruckbare Ballons" />
    ),
    text: (
      <Field.Text
        name="items-text-3"
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
      />
    )
  },
  {
    heading: (
      <Field.Text name="items-heading-4" defaultValue="Bedruckbare Ballons" />
    ),
    text: (
      <Field.Text
        name="items-text-4"
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
      />
    )
  },
  {
    heading: (
      <Field.Text name="items-heading-5" defaultValue="Bedruckbare Ballons" />
    ),
    text: (
      <Field.Text
        name="items-text-5"
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
      />
    )
  },
  {
    heading: (
      <Field.Text name="items-heading-6" defaultValue="Bedruckbare Ballons" />
    ),
    text: (
      <Field.Text
        name="items-text-6"
        defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
      />
    )
  }
]

interface IRiesgesBottomSectionProps {}

const RiesgesBottomSection: FC<IRiesgesBottomSectionProps> = () => {
  return (
    <Flex flexDir={{base: 'column', xl: 'row'}} gap="10" pb="10">
      <Stack flex="1">
        <Field.Text
          as={Heading}
          fontSize={{base: 'xl', md: '3xl', lg: '4xl'}}
          fontWeight="semibold"
          name="riesgesHeading"
          defaultValue="<p>Riesiges</p>"
        />
        <Field.Text
          as={Heading}
          fontSize={{base: 'xl', md: '3xl', lg: '4xl'}}
          mt={'0 !important'}
          mb="4 !important"
          fontWeight="semibold"
          name="riesgesHeading2"
          defaultValue="<p><i>Produktsortiment</i></p>"
        />
        <Field.Text
          maxW={{base: '90%', md: '75%'}}
          fontSize={{base: 'sm', lg: 'lg'}}
          mt="-4 !important"
          mb="2 !important"
          name="riesgesText"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum."
        />
        <HStack display={{base: 'none', xl: 'flex'}}>
          <LinkButtonField
            name="button"
            defaultValue="Mehr erfahren"
            defaultUrl={`/products`}
            size="lg"
            variant="outline"
            colorScheme="red"
            borderRadius="full"
          />
        </HStack>
      </Stack>

      <Grid
        flex="2"
        gap="4"
        gridTemplateColumns={{
          base: 'repeat(auto-fit,minmax(9.375rem,1fr))',
          md: 'repeat(auto-fit,minmax(20rem,1fr))'
        }}>
        {Array.from({length: 6}).map((_, index) => (
          <Flex
            key={index}
            gap="1"
            flexDir={{base: 'column', xl: 'row'}}
            mb="5">
            <Image
              w={{base: '3.75rem', lg: '5.375rem'}}
              h={{base: '2.8125rem', lg: '4.6875rem'}}
              src="/images/home/reisges/pink_blob.svg"
              alt="pink blob"
            />
            <Stack spacing="0">
              <Field.Text
                name={`items-heading-${index}`}
                fontSize={{base: 'md', lg: 'lg'}}
                defaultValue="Latexballons"
                fontWeight="semibold"
              />

              <Field.Text
                name={`items-text-${index}`}
                fontSize={{base: 'sm', lg: 'md'}}
                defaultValue="Lorem ipsum dolor sit amet, consetetur sadipscing"
              />
            </Stack>
          </Flex>
        ))}
      </Grid>
      <HStack display={{base: 'flex', xl: 'none'}}>
        <LinkButtonField
          name="button"
          defaultValue="Mehr erfahren"
          defaultUrl={`/products`}
          variant="outline"
          size={{base: 'sm', md: 'md'}}
        />
      </HStack>
    </Flex>
  )
}
export default RiesgesBottomSection
