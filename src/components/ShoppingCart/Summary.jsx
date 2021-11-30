import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import {MdOutlineDeliveryDining, MdOutlinePriceCheck} from 'react-icons/md'


const Summary = () => {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={useColorModeValue('gray.800', 'white')}
                    align={'center'}>
                    <Text
                        fontSize={'sm'}
                        fontWeight={500}
                        bg={useColorModeValue('red.50', 'red.900')}
                        p={2}
                        px={3}
                        color={'red.500'}
                        rounded={'full'}>
                        Resumen del pedido
                    </Text>
                    <Stack direction={'row'} align={'center'} justify={'center'}>
                        <Text fontSize={'3xl'}>$</Text>
                        <Text fontSize={'6xl'} fontWeight={800}>
                            79
                        </Text>
                        <Text color={'gray.500'}>TOTAL</Text>
                    </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={MdOutlinePriceCheck} color="red.400" />
                            Subtotal 
                        </ListItem>
                        <ListItem>
                            <ListIcon as={MdOutlineDeliveryDining} color="red.400" />
                            Envío
                        </ListItem>
                    </List>

                    <Button
                        mt={10}
                        w={'full'}
                        bg={'red.400'}
                        color={'white'}
                        rounded={'xl'}
                        boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                        _hover={{
                            bg: 'red.500',
                        }}
                        _focus={{
                            bg: 'red.500',
                        }}>
                        COMPRAR
                    </Button>
                </Box>
            </Box>
        </Center>

    )
}

export default Summary
