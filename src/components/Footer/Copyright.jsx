import { Text } from '@chakra-ui/layout'

export const Copyright = (props) => (
    <Text fontSize="sm" {...props}>
        Cúcuta - Colombia &copy; {new Date().getFullYear()} JFOURJEANS, Inc. All rights reserved.
    </Text>
)