import {
    Flex,
    Circle,
    Stack,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    SimpleGrid,
    Tooltip,
    Divider,
    Button,
    Heading
} from '@chakra-ui/react';

import { FiShoppingCart } from 'react-icons/fi';

const data = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Coat',
    price: 39
};

const data2 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Conjunto',
    price: 69
};

const data3 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
    name: 'Camibusos',
    price: 29
};

const data4 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Pantalones',
    price: 49
};

const data5 = {
    isNew: false,
    imageURL:
        'https://images.pexels.com/photos/4100655/pexels-photo-4100655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Buso algodón',
    price: 69
};

const Interest = () => {
    return (
        <>
            <Box align="left" mx="10" my="3"
            >
                <Stack direction="column" mt="2" pt="4" mx="2">
                    <chakra.h3
                        fontSize={{ base: "md", md: "xl" }}
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                    >
                        También te puede interesar
                    </chakra.h3>

                    <Divider />

                    <SimpleGrid minChildWidth="200px" spacing="20px" ml="2" px="3" py="4" mr="2">
                        
                        <Box
                            transform="scale(1.0)"
                            transition="0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.01)'
                            }}
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="600px"
                            w="100%"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative">
                            {data.isNew && (
                                <Circle
                                    size="10px"
                                    position="absolute"
                                    top={2}
                                    right={2}
                                    bg="green.200"
                                />
                            )}

                            <Image
                                src={data.imageURL}
                                alt={`Picture of ${data.name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="center" alignContent="center">
                                    <Box
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        as="h5"
                                        lineHeight="tight"
                                        isTruncated>
                                        {data.name}
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" alignContent="center">
                                    <Button colorScheme="blue" size="sm" mt="2">Explorar</Button>
                                </Flex>
                            </Box>
                        </Box>

                        <Box
                            transform="scale(1.0)"
                            transition="0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.01)'
                            }}
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="600px"
                            w="100%"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative">
                            {data2.isNew && (
                                <Circle
                                    size="10px"
                                    position="absolute"
                                    top={2}
                                    right={2}
                                    bg="green.200"
                                />
                            )}

                            <Image
                                src={data2.imageURL}
                                alt={`Picture of ${data2.name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="center" alignContent="center">
                                    <Box
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        as="h5"
                                        lineHeight="tight"
                                        isTruncated>
                                        {data2.name}
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" alignContent="center">
                                    <Button colorScheme="blue" size="sm" mt="2">Explorar</Button>
                                </Flex>
                            </Box>
                        </Box>

                        <Box
                            transform="scale(1.0)"
                            transition="0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.01)'
                            }}
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="600px"
                            w="100%"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative">
                            {data3.isNew && (
                                <Circle
                                    size="10px"
                                    position="absolute"
                                    top={2}
                                    right={2}
                                    bg="green.200"
                                />
                            )}

                            <Image
                                src={data3.imageURL}
                                alt={`Picture of ${data3.name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="center" alignContent="center">
                                    <Box
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        as="h5"
                                        lineHeight="tight"
                                        isTruncated>
                                        {data3.name}
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" alignContent="center">
                                    <Button colorScheme="blue" size="sm" mt="2">Explorar</Button>
                                </Flex>
                            </Box>
                        </Box>

                        <Box
                            transform="scale(1.0)"
                            transition="0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.01)'
                            }}
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="600px"
                            w="100%"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative">
                            {data4.isNew && (
                                <Circle
                                    size="10px"
                                    position="absolute"
                                    top={2}
                                    right={2}
                                    bg="green.200"
                                />
                            )}

                            <Image
                                src={data4.imageURL}
                                alt={`Picture of ${data4.name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="center" alignContent="center">
                                    <Box
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        as="h5"
                                        lineHeight="tight"
                                        isTruncated>
                                        {data4.name}
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" alignContent="center">
                                    <Button colorScheme="blue" size="sm" mt="2">Explorar</Button>
                                </Flex>
                            </Box>
                        </Box>

                        <Box
                            transform="scale(1.0)"
                            transition="0.2s ease-in-out"
                            _hover={{
                                transform: 'scale(1.01)'
                            }}
                            bg={useColorModeValue('white', 'gray.800')}
                            maxW="600px"
                            w="100%"
                            borderWidth="1px"
                            rounded="lg"
                            shadow="lg"
                            position="relative">
                            {data5.isNew && (
                                <Circle
                                    size="10px"
                                    position="absolute"
                                    top={2}
                                    right={2}
                                    bg="green.200"
                                />
                            )}

                            <Image
                                src={data5.imageURL}
                                alt={`Picture of ${data5.name}`}
                                roundedTop="lg"
                            />

                            <Box p="6">

                                <Flex mt="1" justifyContent="center" alignContent="center">
                                    <Box
                                        fontSize="xl"
                                        fontWeight="semibold"
                                        as="h5"
                                        lineHeight="tight"
                                        isTruncated>
                                        {data5.name}
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" alignContent="center">
                                    <Button colorScheme="blue" size="sm" mt="2">Explorar</Button>
                                </Flex>
                            </Box>
                        </Box>

                    </SimpleGrid>
                </Stack>
            </Box>
        </>
    );
};

export default Interest


