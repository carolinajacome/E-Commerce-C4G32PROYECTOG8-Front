import React from "react"
import {
    Box, VStack, StackDivider, Heading, Checkbox, Text, RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb,
} from "@chakra-ui/react"

import { BiSlider } from 'react-icons/bi'


export const Filters = () => (
    <VStack
        w="100%"
        maxW="300px"
        minW="150px"
        top={2}
        left={3}
        right={0}
        flexDirection="column"
        p={4}
        pb={2}
        m={2}
        rounded="sm"
        shadow="sm"
        divider={<StackDivider borderColor="gray.400" />}
        spacing={4}
    >
        <Box>
            <Heading fontSize={'xl'}>Filtrar por</Heading>
        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={5} bg="#C4C4C4" fontSize="2xl"> Categoría </Text>
            <Checkbox w="full" colorScheme="blue">
                Camisas
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Bermudas
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Jeans
            </Checkbox>

        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Marca </Text>
            <Checkbox w="full" colorScheme="blue">
                Carmel
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Color Siete
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Levi's
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Polo
            </Checkbox>

        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Talla </Text>
            <Checkbox w="full" colorScheme="blue">
                XS
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                S
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                M
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                L
            </Checkbox>

        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Tonalidad </Text>
            <Checkbox w="full">
                Azul
            </Checkbox>
            <Checkbox w="full">
                Negro
            </Checkbox>
            <Checkbox w="full">
                Amarillo
            </Checkbox>
            <Checkbox w="full">
                Rojo
            </Checkbox>

        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Precio </Text>
            <RangeSlider aria-label={["min", "max"]} defaultValue={[40, 60]}>
                <RangeSliderTrack bg="teal.100">
                    <RangeSliderFilledTrack bg="teal.700" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize={4}> <Box color="teal.700" as={BiSlider} />
                </RangeSliderThumb>
                <RangeSliderThumb index={1} boxSize={4}>
                    <Box color="teal.700" as={BiSlider} />
                </RangeSliderThumb>
            </RangeSlider>
        </Box>
    </VStack>
)

