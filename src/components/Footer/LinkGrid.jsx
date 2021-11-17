import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import { FooterHeading } from './FooterHeading'


export const LinkGrid = (props) => (
    <SimpleGrid columns={2} {...props}>
        <Box minW="130px">
            <FooterHeading mb="4">J4JEANS</FooterHeading>
            <Stack>
                <Link>Quiénes somos</Link>
                <Link>Política de tratamiento de datos personales</Link>
                <Link>Política de envíos</Link>
                <Link>Términos y condiciones</Link>
                <Link>Seguimiento orden</Link>
                <Link>PQR</Link>
                <Link>Garantía</Link>
                <Link>Contáctanos</Link>
                <Link>Mapa del sitio</Link>
            </Stack>
        </Box>
        <Box minW="130px">
            <FooterHeading mb="4">ATENCIÓN AL CLIENTE</FooterHeading>
            <Stack>
                <Link>Llamanos: (+57) 3112666269</Link>
                <Link>WhatsApp: (+57) 3223658208</Link>
                <Link>Messenger: @JFOURJEANS</Link>
                <Link>instagram: @JFOURJEANS</Link>
            </Stack>
        </Box>
    </SimpleGrid>
)