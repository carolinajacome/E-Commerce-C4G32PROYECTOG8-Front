import { IconButton, HStack } from '@chakra-ui/react';
import { MdFacebook } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';


export const Networks = () => (
    <>
    <HStack
        mt={{ lg: 10, md: 10 }}
        spacing={5}
        px={5}
        alignItems="center"
        justifyContent="center">
        <IconButton
            aria-label="facebook"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: 'blue' }}
            icon={<MdFacebook size="35px" />}
        />
        <IconButton
            aria-label="whatsapp"
            variant="ghost"
            size="lg"
            isRound={true}
            _hover={{ bg: 'green' }}
            icon={<BsWhatsapp size="35px" />}
        />
    </HStack>
    </>
)