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
import J4JeansLogin from '../assets/img/PortadaJ4Jeans.png';
import { EmailIcon } from '@chakra-ui/icons';
import { MdEmail } from 'react-icons/md'
import { AiFillLock } from 'react-icons/ai'

const Login = () => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        J4JeansLogin
                    }
                   /*  https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=auto&w=940 */
/>
            </Flex>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <HStack align={'center'} justify={'center'}>
                        <Box w="100px" h="90px">
                            <Image src={J4Jeans} alt="Logo J4Jeans" />
                        </Box>
                    </HStack>
                    <Heading fontSize={'2xl'}>Bienvenidos</Heading>
                    <Stack spacing={4} align={'center'} justify={'center'}>
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
                            <Input Icon={<EmailIcon />} type="password" placeholder="Password" />
                            {/* </FormControl> */}
                        </InputGroup>
                    </Stack>

                    <Stack spacing={6}>
                        <Button colorScheme={'blue'} variant={'solid'} bgGradient={'linear(to-r, blue.400, blue.500, blue.600)'}
                            color={'white'}>
                            Iniciar sesión
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </Stack>
    );
}

export default Login