import {
    Box,
    Image,
} from '@chakra-ui/react';

const ImageBlog = () => {
    return (
        <Box
            h={'240px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
                h="100%"
                transform="scale(1.0)"
                w={'full'}
                src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMHBvc3R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                }
                layout={'fill'}
                transition="0.3s ease-in-out"
                _hover={{
                    transform: 'scale(1.05)',
                }}
            />
        </Box>
    )
}

export default ImageBlog

