import {
    Button,
    Flex,
    Heading,
    InputLeftElement,
    InputGroup,
    Input,
    HStack,
    Box,
    Stack,
    Image,
} from '@chakra-ui/react';
import J4Jeans from '../assets/img/J4JEANS_Logo.jpg';
import { MdEmail, MdDriveFileRenameOutline } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'

const Register = () => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <HStack align={'center'} justify={'center'}>
                        <Box w="100px" h="90px">
                            <Image src={J4Jeans} alt="Logo J4Jeans" />
                        </Box>
                    </HStack>
                    <Heading fontSize={'2xl'}>Únete a nosotros! Regístrate</Heading>
                    <Stack spacing={4} align={'center'} justify={'center'}>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdDriveFileRenameOutline color="gray.400" />}
                            />
                            <Input type="text" placeholder="Nombres" />
                        </InputGroup>

                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdDriveFileRenameOutline color="gray.400" />}
                            />
                            <Input type="text" placeholder="Apellidos" />
                            </InputGroup>

                        <InputGroup>
                            {/* <FormControl id="email"> */}
                            {/* <FormLabel >Correo electrónico</FormLabel> */}
                            <InputLeftElement
                                pointerEvents="none"
                                children={<MdEmail color="gray.400" />}
                            />
                            <Input type="email" placeholder="Email" />
                            {/* </FormControl> */}
                        </InputGroup>

                        <InputGroup>
                            {/* <FormControl id="password"> */}
                            {/* <FormLabel>Contraseña</FormLabel> */}
                            <InputLeftElement
                                pointerEvents="none"
                                children={<AiFillLock color="gray.400" />}
                            />
                            <Input type="password" placeholder="Password" />
                            {/* </FormControl> */}
                        </InputGroup>
                    </Stack>

                    <Stack spacing={6}>
                        <Button colorScheme={'blue'} variant={'solid'} bgGradient={'linear(to-l, blue.400, blue.500, blue.600)'}
                            color={'white'}>
                            Crear Cuenta
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=auto&w=940'
                    }
                />
            </Flex>
        </Stack>
    );
}

export default Register