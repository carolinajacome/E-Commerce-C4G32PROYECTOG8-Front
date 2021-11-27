import React from "react"
import {
    Box, VStack, StackDivider, Heading, Checkbox, Text
} from "@chakra-ui/react"



export const Filters = () => (
    <VStack
        w="100%"
        maxW="300px"
        minW="150px"
        top={2}
        left={3}
        right={0}
        button={2}
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
                Blusas
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Jeans
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Shorts
            </Checkbox>
        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Fit </Text>
            <Checkbox w="full" colorScheme="blue">
                Bota campana
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Bota recta
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                Skinny
            </Checkbox>
        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Talla </Text>
            <Checkbox w="full" colorScheme="blue">
                06
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                08
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                12
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                14
            </Checkbox>
            <Checkbox w="full" colorScheme="blue">
                16
            </Checkbox>
        </Box>

        <Box alignItems="left" w="100%">
            <Text mb={4} bg="#C4C4C4" fontSize="2xl"> Tonalidad </Text>
            <Checkbox w="full">
                Azul claro
            </Checkbox>
            <Checkbox w="full">
                Azul medio
            </Checkbox>
            <Checkbox w="full">
                Azul oscuro
            </Checkbox>
            <Checkbox w="full">
                Negro
            </Checkbox>
            <Checkbox w="full">
                Marfil
            </Checkbox>
            <Checkbox w="full">
                Contaminado
            </Checkbox>

        </Box>
    </VStack>
)

