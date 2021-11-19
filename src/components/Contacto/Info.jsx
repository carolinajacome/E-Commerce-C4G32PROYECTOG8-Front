import {
    Box,
    Heading,
    Button,
    VStack,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdShoppingBag
} from 'react-icons/md';


export const Info = () => (
    <>
        <Heading>Encuéntranos en:</Heading>
        
        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack pl={0} spacing={3} alignItems="center" justifyContent="center">
                <Button
                    size="md"
                    height="48px"
                    width="200px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #fff' }}
                    leftIcon={<MdPhone color="#fff" size="25px" />}>
                    +57 3223658208
                </Button>
                <Button
                    size="md"
                    height="48px"
                    width="300px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #fff' }}
                    leftIcon={<MdEmail color="#fff" size="25px" />}>
                    infojfourjeans@gmail.com
                </Button>
                <Button
                    size="md"
                    height="55px"
                    width="300px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #fff' }}
                    leftIcon={<MdShoppingBag color="#fff" size="25px" />}>
                    Av. 7ma cll 12/13 Local H6 <br /> Centro comercial la Estrella
                </Button>
                <Button
                    size="md"
                    height="48px"
                    width="300px"
                    variant="ghost"
                    color="#DCE2FF"
                    _hover={{ border: '2px solid #fff' }}
                    leftIcon={<MdLocationOn color="#fff" size="25px" />}>
                    Cúcuta - Norte de Santander
                </Button>
                
            </VStack>
        </Box>
    </>
)