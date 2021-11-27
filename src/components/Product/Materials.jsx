import { chakra, Box, useColorModeValue, Stack } from "@chakra-ui/react";

const Materials = () => {
    return (
        
        <Box align="left" mx="10" my="3"
            >
            <Stack direction="column" mt="2" pt="4" mx="2">
                <chakra.h3
                    fontSize={{ base: "xl", md: "2xl" }}
                    color={useColorModeValue("gray.800", "white")}
                    fontWeight="bold"
                >
                    Materiales
                </chakra.h3>
                <chakra.p mt={4} color={useColorModeValue("gray.600", "gray.400")}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
                    modi reprehenderit vitae exercitationem aliquid dolores ullam
                    temporibus enim expedita aperiam mollitia iure consectetur dicta
                    tenetur, porro consequuntur saepe accusantium consequatur.
                </chakra.p>
            </Stack>
        </Box>
       
    )
}

export default Materials
