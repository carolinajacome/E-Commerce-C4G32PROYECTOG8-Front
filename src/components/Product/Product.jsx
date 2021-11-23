import React from "react";
import {
    chakra, Box, Flex, useColorModeValue, Stack, Button, NumberInput, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, NumberInputField, CheckboxGroup, Checkbox, HStack
} from "@chakra-ui/react";
import { MdOutlineShoppingCart } from 'react-icons/md'

const Product = () => {
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.400")}
            p={15}
            w="full"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                bg={useColorModeValue("white", "gray.800")}
                mx={{ lg: 4 }}
                display={{ lg: "flex" }}
                maxW={{ lg: "5xl" }}
                rounded={{ lg: "lg" }}
            >
                <Box w={{ lg: "40%" }}>
                    <Box
                        h={{ base: 64, lg: "full" }}
                        w="100%"
                        rounded={{ lg: "lg" }}
                        bgSize="cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                        }}
                    ></Box>
                </Box>

                <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "60%" }}>
                    <chakra.h2
                        fontSize={{ base: "2xl", md: "3xl" }}
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                    >
                        Nombre de producto
                    </chakra.h2>
                    <chakra.h3
                        fontSize={{ base: "xl", md: "2xl" }}
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight="bold"
                    >
                        $ 85.000
                    </chakra.h3>
                    <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                        modi reprehenderit vitae exercitationem aliquid dolores ullam
                        temporibus enim expedita aperiam mollitia iure consectetur dicta
                        tenetur, porro consequuntur saepe accusantium consequatur.
                    </chakra.p>

                    <Stack direction="row" my="5" mx="2">
                        <chakra.h4
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Talla
                        </chakra.h4>

                        <Stack pl="4" spacing={6} direction="row">
                            <Checkbox size="lg" value="xs">XS</Checkbox>
                            <Checkbox size="lg" value="s">S</Checkbox>
                            <Checkbox size="lg" value="m">M</Checkbox>
                            <Checkbox size="lg" value="l">L</Checkbox>
                            <Checkbox size="lg" value="xl">XL</Checkbox>
                        </Stack>
                    </Stack>

                    <Stack direction="row" my="4" mx="2">
                        <chakra.h4
                            fontSize={{ base: "lg", md: "xl" }}
                            color={useColorModeValue("gray.800", "white")}
                            fontWeight="bold"
                        >
                            Items
                        </chakra.h4>

                        <NumberInput pl="4" size="md" maxW={24} defaultValue={1} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>

                    </Stack>

                    <Stack direction="row" mt="2" pt="4" mx="2">
                        <Button leftIcon={<MdOutlineShoppingCart />} colorScheme="red" variant="solid">
                            Añadir al carrito
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Flex>
    );
};

export default Product;