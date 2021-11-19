import {
    Box,
    Heading,
    Text,
    Stack,
    Avatar,
    SimpleGrid,
    useColorModeValue,
} from '@chakra-ui/react';

import { FaUserEdit } from 'react-icons/fa'
import ImageBlog from './ImageBlog';

const BlogPost = () => {
    return (
        <SimpleGrid minChildWidth="300px" spacing="15px" ml="2" mt="5" px="3" py="4" mr="2">
            <Box
                maxW={'xl'}
                w="100%"
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>

                <ImageBlog />

                <Stack mt={6} direction={'column'} spacing={4}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Card Title
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua.
                    </Text>
                </Stack>

                <Stack mt={6} direction={'row'} spacing={4} align={'center'} justify={'start'}>
                    <Avatar
                        src={<FaUserEdit />}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Administrador</Text>
                        <Text color={'gray.500'}>Nov, 2021 · 2min read</Text>
                    </Stack>
                </Stack>
            </Box>

            <Box
                maxW={'xl'}
                w="100%"
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>

                <ImageBlog />

                <Stack mt={6} direction={'column'} spacing={4}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Card Title
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua.
                    </Text>
                </Stack>

                <Stack mt={6} direction={'row'} spacing={4} align={'center'} justify={'start'}>
                    <Avatar
                        src={<FaUserEdit />}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Administrador</Text>
                        <Text color={'gray.500'}>Nov, 2021 · 2min read</Text>
                    </Stack>
                </Stack>
            </Box>

            <Box
                maxW={'xl'}
                w="100%"
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>

                <ImageBlog />

                <Stack mt={6} direction={'column'} spacing={4}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Card Title
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua.
                    </Text>
                </Stack>

                <Stack mt={6} direction={'row'} spacing={4} align={'center'} justify={'start'}>
                    <Avatar
                        src={<FaUserEdit />}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Administrador</Text>
                        <Text color={'gray.500'}>Nov, 2021 · 2min read</Text>
                    </Stack>
                </Stack>
            </Box>

            <Box
                maxW={'xl'}
                w="100%"
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>

                <ImageBlog />

                <Stack mt={6} direction={'column'} spacing={4}>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Card Title
                    </Heading>
                    <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua.
                    </Text>
                </Stack>

                <Stack mt={6} direction={'row'} spacing={4} align={'center'} justify={'start'}>
                    <Avatar
                        src={<FaUserEdit />}
                        alt={'Author'}
                    />
                    <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Administrador</Text>
                        <Text color={'gray.500'}>Nov, 2021 · 2min read</Text>
                    </Stack>
                </Stack>
            </Box>


        </SimpleGrid>
    );
}

export default BlogPost