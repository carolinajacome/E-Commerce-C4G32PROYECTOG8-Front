import { Box, Stack, StackDivider } from '@chakra-ui/react'
import { Copyright } from './Copyright'
import { LinkGrid } from './LinkGrid'
import { SocialMediaLinks } from './SocialMediaLinks'


export const Footer = () => (
    <Box
        as="footer"
        role="contentinfo"
        mx="auto"
        maxW="100%"
        py="12"
        px={{
            base: '4',
            md: '8',
        }}
        bg="#196B9C"
        color="white"
    >
        <Stack spacing="10" divider={<StackDivider />}>
            <Stack
                direction={{
                    base: 'column',
                    lg: 'row',
                }}
                spacing={{
                    base: '10',
                    lg: '28',
                }}

            >
                
                <Stack
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}
                    spacing={{
                        base: '10',
                        md: '20',
                    }}
                >
                    <LinkGrid
                        spacing={{
                            base: '10',
                            md: '20',
                            lg: '28',
                        }}
                        flex="1"
                    />
                    <SocialMediaLinks
                        width={{
                            base: 'full',
                            lg: 'full',
                        }}
                    />
                </Stack>
            </Stack>

            <Stack
                direction={{
                    base: 'column',
                    md: 'row',
                }}
                justifyContent="center"
                alignItems="center"
            >
                <Copyright />
                
            </Stack>
            
        </Stack>
    </Box>
);

