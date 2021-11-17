import { Heading, useColorModeValue } from '@chakra-ui/react'

export const FooterHeading = (props) => (
    <Heading
        as="h4"
        color={useColorModeValue('white.400', 'white')}
        fontSize="lg"
        fontWeight="semibold"
        textTransform="uppercase"
        letterSpacing="wider"
        {...props}
    />
)