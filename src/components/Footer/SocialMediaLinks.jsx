import { ButtonGroup, IconButton, Stack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FooterHeading } from './FooterHeading'

export const SocialMediaLinks = (props) => (
    <Stack spacing="5" alignItems="center">
        <FooterHeading>Síguenos en nuestras redes sociales</FooterHeading>
        <Stack>
            <ButtonGroup alignItems="center" justifyContent="center" variant="ghost" color="gray.600" {...props}>
                <IconButton as="a" target="_blank" href="http://Facebook.com/jfourjeans" aria-label="Facebook" icon={<FaFacebook fontSize="40px" />} />
                <IconButton as="a" target="_blank" href="http://Instagram.com/jfourjeans" aria-label="Instagram" icon={<FaInstagram fontSize="40px" />} />
                <IconButton as="a" target="_blank" href="http://Twitter.com/jfourjeans" aria-label="Twitter" icon={<FaTwitter fontSize="40px" />} />
            </ButtonGroup>
        </Stack>
    </Stack>
)