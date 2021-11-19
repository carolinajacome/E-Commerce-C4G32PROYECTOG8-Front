import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    SimpleGrid,
    Tooltip,
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
    isNew: true,
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
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Pantalones',
    price: 49
};

const BestSellers = () => {
    return (
        <>
            <Heading as="h5" marginTop="3">
                Más vendidos
            </Heading>
            <SimpleGrid minChildWidth="300px" spacing="20px" ml="2" px="3" py="4" mr="2">
                <Box
                    transform="scale(1.0)"
                    transition="0.2s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)'
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
                        <Box d="flex" alignItems="baseline">
                            {data.isNew && (
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {data.name}
                            </Box>
                            <Tooltip
                                label="Add to cart"
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                    <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                                </chakra.a>
                            </Tooltip>
                        </Flex>

                        <Flex justifyContent="space-between" alignContent="center">
                            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="lg">
                                    $
                                </Box>
                                {data.price}
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box
                    transform="scale(1.0)"
                    transition="0.2s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)'
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
                            bg="green.500"
                        />
                    )}

                    <Image
                        src={data2.imageURL}
                        alt={`Picture of ${data2.name}`}
                        roundedTop="lg"
                    />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            {data2.isNew && (
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {data2.name}
                            </Box>
                            <Tooltip
                                label="Add to cart"
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                    <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                                </chakra.a>
                            </Tooltip>
                        </Flex>

                        <Flex justifyContent="space-between" alignContent="center">
                            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="lg">
                                    $
                                </Box>
                                {data2.price}
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box
                    transform="scale(1.0)"
                    transition="0.2s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)'
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
                            bg="green.500"
                        />
                    )}

                    <Image
                        src={data3.imageURL}
                        alt={`Picture of ${data3.name}`}
                        roundedTop="lg"
                    />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            {data3.isNew && (
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {data3.name}
                            </Box>
                            <Tooltip
                                label="Add to cart"
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                    <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                                </chakra.a>
                            </Tooltip>
                        </Flex>

                        <Flex justifyContent="space-between" alignContent="center">
                            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="lg">
                                    $
                                </Box>
                                {data3.price}
                            </Box>
                        </Flex>
                    </Box>
                </Box>

                <Box
                    transform="scale(1.0)"
                    transition="0.2s ease-in-out"
                    _hover={{
                        transform: 'scale(1.05)'
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
                            bg="green.500"
                        />
                    )}

                    <Image
                        src={data4.imageURL}
                        alt={`Picture of ${data4.name}`}
                        roundedTop="lg"
                    />

                    <Box p="6">
                        <Box d="flex" alignItems="baseline">
                            {data4.isNew && (
                                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                    New
                                </Badge>
                            )}
                        </Box>
                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                {data4.name}
                            </Box>
                            <Tooltip
                                label="Add to cart"
                                bg="white"
                                placement={'top'}
                                color={'gray.800'}
                                fontSize={'1.2em'}>
                                <chakra.a href={'#'} display={'flex'}>
                                    <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                                </chakra.a>
                            </Tooltip>
                        </Flex>

                        <Flex justifyContent="space-between" alignContent="center">
                            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                                <Box as="span" color={'gray.600'} fontSize="lg">
                                    $
                                </Box>
                                {data4.price}
                            </Box>
                        </Flex>
                    </Box>
                </Box>

            </SimpleGrid>
        </>
    );
};

export default BestSellers;


