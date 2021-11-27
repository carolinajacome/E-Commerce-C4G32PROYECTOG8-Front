import React from "react";

import { Link as ReactLink } from "react-router-dom";

import {
    chakra,
    HStack,
    Link,
    Box,
    Flex,
    IconButton,
    useColorModeValue,
    useDisclosure,
    CloseButton,
    VStack,
    Button,
    useColorMode,
    Image
} from "@chakra-ui/react";

import { useViewportScroll } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import J4Jeans from '../assets/img/J4JEANS_Logo.jpg';


const NavBar = () => {
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const bg = useColorModeValue("white", "gray.800");
    const ref = React.useRef();
    const [y, setY] = React.useState(0);
    const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);
    const cl = useColorModeValue("gray.800", "white");
    const mobileNav = useDisclosure();


    const MobileNavContent = (
        <VStack
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
            zIndex="100"
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
            />

            <Link as={ReactLink} to="/" href="#home" style={{ textDecoration: 'none' }}>
                <Button w="full" variant="ghost">
                    INICIO
                </Button>
            </Link>

            <Link as={ReactLink} to="/ladies" href="#ladies" style={{ textDecoration: 'none' }}>
                <Button
                    w="full"
                    variant="ghost"
                >
                    DAMA
                </Button>
            </Link>

            <Link as={ReactLink} to="/gentlemen" href="#gentlemen" style={{ textDecoration: 'none' }}>
                <Button w="full" variant="ghost">
                    CABALLERO
                </Button>
            </Link>

            <Link as={ReactLink} to="/blog" href="#blog" style={{ textDecoration: 'none' }}>
                <Button w="full" variant="ghost">
                    BLOG
                </Button>
            </Link>

            <Link as={ReactLink} to="/contact" href="#contact" style={{ textDecoration: 'none' }}>
                <Button w="full" variant="ghost">
                    CONTACTO
                </Button>
            </Link>

            <Link as={ReactLink} to="/login" href="#login" style={{ textDecoration: 'none' }}>
                <Button colorScheme="pink" variant="solid" size="sm" bgGradient="linear(to-r, pink.400, pink.500, pink.600)"
                    color="white">
                    Iniciar sesión
                </Button>
            </Link>

            <Link as={ReactLink} to="/register" href="#register" style={{ textDecoration: 'none' }}>
                <Button size="sm" colorScheme="blue" variant="solid" bgGradient="linear(to-l, blue.300, blue.400, blue.500)"
                    color="white">
                    Unirse
                </Button>
            </Link>

        </VStack>
    );


    return (
        <>
            <chakra.header
                ref={ref}
                shadow={y > height ? "sm" : undefined}
                transition="box-shadow 0.2s"
                bg={bg}
                borderTop="6px solid"
                borderTopColor="brand.400"
                w="full"
                overflowY="hidden"
            >
                <chakra.div h="4.5rem" mx="auto" maxW="1200px">
                    <Flex
                        w="full"
                        h="full"
                        px="6"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Flex align="flex-start">
                            <Link as={ReactLink} to="/" href="#home">
                                <HStack>
                                    <Box w="60px" h="58px">
                                        <Image src={J4Jeans} alt="Logo J4Jeans" />
                                    </Box>
                                </HStack>
                            </Link>
                        </Flex>

                        <Flex>
                            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                                <Link as={ReactLink} to="/" href="#home" style={{ textDecoration: 'none' }}>
                                    <Button
                                        bg={bg}
                                        color="gray.500"
                                        display="inline-flex"
                                        alignItems="center"
                                        fontSize="md"
                                        _hover={{ color: cl }}
                                        _focus={{ boxShadow: "none" }}

                                    >
                                        INICIO
                                    </Button>
                                </Link>
                                <Link as={ReactLink} to="/ladies" href="#ladies" style={{ textDecoration: 'none' }}>
                                    <Button
                                        bg={bg}
                                        color="gray.500"
                                        display="inline-flex"
                                        alignItems="center"
                                        fontSize="md"
                                        _hover={{ color: cl }}
                                        _focus={{ boxShadow: "none" }}
                                    >
                                        DAMA
                                    </Button>
                                </Link>
                                <Link as={ReactLink} to="/gentlemen" href="#gentlemen" style={{ textDecoration: 'none' }}>
                                    <Button
                                        bg={bg}
                                        color="gray.500"
                                        display="inline-flex"
                                        alignItems="center"
                                        fontSize="md"
                                        _hover={{ color: cl }}
                                        _focus={{ boxShadow: "none" }}
                                    >
                                        CABALLERO
                                    </Button>
                                </Link>
                                <Button
                                    bg={bg}
                                    color="gray.500"
                                    display="inline-flex"
                                    alignItems="center"
                                    fontSize="md"
                                    _hover={{ color: cl }}
                                    _focus={{ boxShadow: "none" }}
                                >
                                    PROMOCIÓN
                                </Button>
                                <Link as={ReactLink} to="/blog" href="#blog" style={{ textDecoration: 'none' }}>
                                    <Button
                                        bg={bg}
                                        color="gray.500"
                                        display="inline-flex"
                                        alignItems="center"
                                        fontSize="md"
                                        _hover={{ color: cl }}
                                        _focus={{ boxShadow: "none" }}
                                    >
                                        BLOG
                                    </Button>
                                </Link>
                                <Link as={ReactLink} to="/contact" href="#contact" style={{ textDecoration: 'none' }}>
                                    <Button
                                        bg={bg}
                                        color="gray.500"
                                        display="inline-flex"
                                        alignItems="center"
                                        fontSize="md"
                                        _hover={{ color: cl }}
                                        _focus={{ boxShadow: "none" }}
                                    >
                                        CONTACTO
                                    </Button>
                                </Link>
                            </HStack>
                        </Flex>
                        <Flex justify="flex-end" align="center" color="gray.400">
                            <HStack spacing="5" display={{ base: "none", md: "flex" }}>

                                {/* <Button>
                                <IconButton onClick={Searching} aria-label="Search database" icon={<SearchIcon />} />
                                </Button> */}

                                <Link as={ReactLink} to="/login" href="#login" style={{ textDecoration: 'none' }}>
                                    <Button colorScheme="pink" variant="solid" size="sm" bgGradient="linear(to-r, pink.400, pink.500, pink.600)"
                                        color="white">
                                        Iniciar sesión
                                    </Button>
                                </Link>
                                <Link as={ReactLink} to="/register" href="#register" style={{ textDecoration: 'none' }}>
                                    <Button size="sm" colorScheme="blue" variant="solid" bgGradient="linear(to-l, blue.300, blue.400, blue.500)"
                                        color="white">
                                        Unirse
                                    </Button>
                                </Link>
                            </HStack>
                            <IconButton
                                size="md"
                                fontSize="lg"
                                aria-label={`Switch to ${text} mode`}
                                variant="ghost"
                                color="current"
                                ml={{ base: "0", md: "3" }}
                                onClick={toggleMode}
                                icon={<SwitchIcon />}
                            />
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />
                        </Flex>
                    </Flex>
                    {MobileNavContent}
                </chakra.div>
            </chakra.header>
        </>
    );
}

export default NavBar