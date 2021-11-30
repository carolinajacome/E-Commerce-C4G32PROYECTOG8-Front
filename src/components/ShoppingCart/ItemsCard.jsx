import {
    chakra, Box, Flex, useColorModeValue, Stack, NumberInput, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, NumberInputField, HStack, Icon
} from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai'


const ItemsCard = () => {
    return (
        <Flex
            direction="column"
            bg={useColorModeValue("white", "gray.200")}
            p={15}
            w="full"
            alignItems="center"
        >
            <Box
                m="3"
                bg={useColorModeValue("#fafafa", "gray.400")}
                mx={{ lg: 4 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                boxShadow={'xl'}
                w="100%"
                rounded={{ lg: "lg" }}
            >
                <Box w={{ lg: "30%" }}>
                    <Box
                        h={{ base: 64, lg: "xs" }}
                        rounded={{ lg: "lg" }}
                        bgSize="cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                        }}
                    ></Box>
                </Box>

                <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "70%" }}>
                    <HStack justifyContent="flex-start">
                        <chakra.h2
                            fontSize={{ base: "xl", md: "2xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Camiseta negra
                        </chakra.h2>
                    </HStack>

                    <HStack justifyContent="flex-end">
                    <Icon as={AiOutlineHeart} w={8} h={8} />
                        <Icon as={AiOutlineDelete} w={8} h={8} />
                    </HStack>

                    <Stack direction="row" my="5" mx="2" justifyContent="space-between">
                        <chakra.h4
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Color:
                        </chakra.h4>

                        <chakra.h4
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Talla:
                        </chakra.h4>

                        <NumberInput pl="4" size="md" maxW={24} defaultValue={1} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                    </Stack>

                    <Stack direction="row">
                        <chakra.h3
                            fontSize={{ base: "md", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="semi-bold"
                        >
                            $ 85.000
                        </chakra.h3>

                    </Stack>

                </Box>
            </Box>

            <Box
                m="3"
                bg={useColorModeValue("#fafafa", "gray.400")}
                mx={{ lg: 4 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                boxShadow={'xl'}
                w="100%"
                rounded={{ lg: "xl" }}
            >
                <Box w={{ lg: "30%" }}>
                    <Box
                        h={{ base: 64, lg: "xs" }}
                        rounded={{ lg: "lg" }}
                        bgSize="cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                        }}
                    ></Box>
                </Box>

                <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "70%" }}>
                    <HStack justifyContent="flex-start">
                        <chakra.h2
                            fontSize={{ base: "xl", md: "2xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Camiseta negra
                        </chakra.h2>
                    </HStack>

                    <HStack justifyContent="flex-end">
                    <Icon as={AiOutlineHeart} w={8} h={8} />
                        <Icon as={AiOutlineDelete} w={8} h={8} />
                    </HStack>

                    <Stack direction="row" my="5" mx="2" justifyContent="space-between">
                        <chakra.h4
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Color:
                        </chakra.h4>

                        <chakra.h4
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Talla:
                        </chakra.h4>

                        <NumberInput pl="4" size="md" maxW={24} defaultValue={1} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                    </Stack>

                    <Stack direction="row">
                        <chakra.h3
                            fontSize={{ base: "md", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="semi-bold"
                        >
                            $ 85.000
                        </chakra.h3>

                    </Stack>

                </Box>
            </Box>
        </Flex>
    )
}

export default ItemsCard


