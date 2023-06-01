import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Grid,
    Image,
    Text,
    useDisclosure,
    useMediaQuery
} from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

export default function Header() {
    const [isLargerThan800] = useMediaQuery('(min-width: 900px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();
  return (
    <Flex
        height='10vh'
        p='1'
    >
        <Flex
            h='100%'
            w='33.33%'
            ml='3%'
        >
            <Image 
            src={logo} 
            h='90%'
            cursor='pointer'
            onClick={() => navigate('/')}
            />
        </Flex>
        <Flex
            h='100%'
            w='33.33%'
            ml='3%'
        >
        </Flex>
        <Flex
            h='100%'
            w='33.33%'
            ml='3%'
            justifyContent={isLargerThan800 ? 'space-around' : 'end'}
            align='center'
        >
            {isLargerThan800 ?
            <>
                <Grid
                    h='100%'
                    alignContent='center'
                >
                    <Text
                        fontSize='1.2rem'
                        cursor='pointer'
                        onClick={() => navigate('/aboutme')}
                    >
                        About me
                    </Text>
                </Grid>
                <Grid
                    h='100%'
                    alignContent='center'
                >
                    <Text
                        fontSize='1.2rem'
                        cursor='pointer'
                        onClick={() => navigate('/projects')}
                    >
                        Projects
                    </Text>
                </Grid>
                <Grid
                    h='100%'
                    alignContent='center'
                >
                    <Text
                        fontSize='1.2rem'
                        cursor='pointer'
                        onClick={() => navigate('/contact')}
                    >
                        Contact me
                    </Text>
                </Grid>
                </>
                :
                <Flex
                    p='5'
                    border='1px solid #8ec044'
                    mr='3'
                    borderRadius='.5rem'
                    onClick={() => onOpen()}
                    h='90%'
                >
                    <FaBars size='100%'/>
                    <Drawer onClose={onClose} isOpen={isOpen} size='full'>
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Flex
                            h='100%'
                            w='100%'
                            alignContent='center'
                            justifyContent='center'
                        >
                            <Box
                                align='center'
                                h='25%'
                                
                            >
                                <Grid
                                    alignContent='center'
                                >
                                    <Text
                                        fontSize='1.2rem'
                                        cursor='pointer'
                                        onClick={() => {
                                            navigate('/aboutme')
                                            onClose()
                                        }}
                                    >
                                        About me
                                    </Text>
                                </Grid>
                                <Grid
                                    alignContent='center'
                                >
                                    <Text
                                        fontSize='1.2rem'
                                        cursor='pointer'
                                        onClick={() => {
                                            navigate('/projects')
                                            onClose()
                                        }}
                                    >
                                        Projects
                                    </Text>
                                </Grid>
                                <Grid
                                    alignContent='center'
                                >
                                    <Text
                                        fontSize='1.2rem'
                                        cursor='pointer'
                                        onClick={() => {
                                            navigate('/contact')
                                            onClose()
                                        }}
                                    >
                                        Contact me
                                    </Text>
                                </Grid>
                            </Box>
                        </Flex>
                    </DrawerBody>
                    </DrawerContent>
                    </Drawer>
                </Flex>
                }   
        </Flex>
    </Flex>
  )
}
