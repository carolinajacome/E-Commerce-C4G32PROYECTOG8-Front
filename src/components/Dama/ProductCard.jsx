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
        'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    name: 'Jean Skinny',
    price: 39
};

const data2 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Jean',
    price: 69
};

const data3 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Jean bota ancha',
    price: 29
};

const data4 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
    name: 'Jean Skinny',
    price: 39
};

const data5 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Jean bota ancha',
    price: 29
};

const data6 = {
    isNew: false,
    imageURL:
        'https://images.unsplash.com/photo-1553808373-b2c5b7ddb117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'Jean',
    price: 69
};


export const ProductCard = () => {
    return (
        <>
            <SimpleGrid minChildWidth="300px" spacing="40px" px="3" py="3" mr="5" mt="4">
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

            </SimpleGrid>
        </>
    )
}





