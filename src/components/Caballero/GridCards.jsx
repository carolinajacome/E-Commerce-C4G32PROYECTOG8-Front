import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    SimpleGrid,
} from '@chakra-ui/react';



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
        'https://images.pexels.com/photos/4100655/pexels-photo-4100655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Buso algodón',
    price: 69
};

const data3 = {
    isNew: false,
    imageURL:
        'https://images.pexels.com/photos/457445/pexels-photo-457445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Chaqueta vaquera',
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
        'https://images.pexels.com/photos/5553712/pexels-photo-5553712.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Saco',
    price: 39
};

const data6 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Conjunto',
    price: 69
};

const data7 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
    name: 'Camibusos',
    price: 29
};

const data8 = {
    isNew: true,
    imageURL:
        'https://images.pexels.com/photos/913514/pexels-photo-913514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Tenis',
    price: 49
};

const data9 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Coat',
    price: 39
};

const data10 = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1544441893-675973e31985?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Conjunto',
    price: 69
};

const data11 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
    name: 'Camibusos',
    price: 29
};

const data12 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    name: 'Pantalones',
    price: 49
};



export const GridCards = () => {
    return (
        <>
        <SimpleGrid minChildWidth="230px" spacing="15px" px="3" py="3" mr="2" mt="4">
            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
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
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
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
                    transform: 'scale(1.02)'
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
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data2.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
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
                    transform: 'scale(1.02)'
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
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data3.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
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
                    transform: 'scale(1.02)'
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
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data4.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data4.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
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
                        bg="green.500"
                    />
                )}

                <Image
                    src={data5.imageURL}
                    alt={`Picture of ${data5.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data5.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data5.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data5.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data6.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.500"
                    />
                )}

                <Image
                    src={data6.imageURL}
                    alt={`Picture of ${data6.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data6.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data6.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data6.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data7.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.500"
                    />
                )}

                <Image
                    src={data7.imageURL}
                    alt={`Picture of ${data7.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data7.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data7.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data7.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data8.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.500"
                    />
                )}

                <Image
                    src={data8.imageURL}
                    alt={`Picture of ${data8.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data8.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data8.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data8.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data9.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.200"
                    />
                )}

                <Image
                    src={data9.imageURL}
                    alt={`Picture of ${data9.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data9.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data9.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data9.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data10.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.200"
                    />
                )}

                <Image
                    src={data10.imageURL}
                    alt={`Picture of ${data10.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data10.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data10.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data10.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data11.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.200"
                    />
                )}

                <Image
                    src={data11.imageURL}
                    alt={`Picture of ${data11.name}`}
                    roundedTop="lg"
                />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        {data11.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data11.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data11.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

            <Box
                transform="scale(1.0)"
                transition="0.2s ease-in-out"
                _hover={{
                    transform: 'scale(1.02)'
                }}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="600px"
                w="100%"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {data12.isNew && (
                    <Circle
                        size="10px"
                        position="absolute"
                        top={2}
                        right={2}
                        bg="green.200"
                    />
                )}

                <Image
                    src={data12.imageURL}
                    alt={`Picture of ${data12.name}`}
                    roundedTop="lg"
                />

                <Box p="3">
                    <Box d="flex" alignItems="baseline">
                        {data12.isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="center" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {data12.name}
                        </Box>
                        
                    </Flex>

                    <Flex justifyContent="center" alignContent="center">
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                $
                            </Box>
                            {data12.price}
                        </Box>
                    </Flex>
                </Box>
            </Box>

        </SimpleGrid>
    </>
    )
}





