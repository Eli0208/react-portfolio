import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import zuitt from '../assets/zuitt.jpg'
import dhvtsu from '../assets/dhvtsu.jpg'

export default function Education() {
    const [isLargerThan800] = useMediaQuery('(min-width:900px)')
    const [isLargerThan450] = useMediaQuery('(min-width:300px)')
  return (
    <Box
        w='100%'
        h='100%'
        overflowY='auto'
    >
        <Flex
        w='100%'
        justifyContent='center'
        
        >
            <Text
                mt='2'
                fontSize={isLargerThan450 ? '1.5rem' : '2rem'}
                fontWeight='extrabold'
            >
                Educational Background
            </Text>
        </Flex>
        <Flex
        w='100%'
        h='90%'
        justifyContent='center'
        display={isLargerThan800 ? 'flex' : 'inline'}
        
        >
            <Flex
                w={isLargerThan800 ? '50%' : '99%'}
                p='10'
                justifyContent='center' 
            >
                <Box
                h='100%'
                bgColor='#8ec044'
                borderRadius='1rem'   
                    _hover={{
                        transform: "scale(1.15)",
                        transition: "transform 0.2s ease-in-out",
                    }}
                >
                    <Flex
                    w='100%'
                    h='50%'
                    justifyContent='center'
                    p='3'
                    
                    >
                        <Image 
                        src={zuitt}
                        h='100%'
                        borderRadius='1rem'
                        />
                    </Flex>
                    <Box
                    w='100%'
                    justifyContent='space-between'
                    color='#000000'
                    p='3'
                    >
                        <Text
                        fontSize='1.15rem'
                        fontWeight='bold'
                        >Web Developer Program (MERN Stack)</Text>
                        <Text
                        fontSize='.8rem'
                        >Zuitt Coding Bootcamp</Text>
                        <Text
                        fontSize='.8rem'
                        >Quezon City</Text>
                        <Text>April 2023 – May 2023</Text>
                    </Box>
                    <Flex
                        w='100%'
                        justifyContent='center'
                        pt='2'
                    >
                        <Button
                            onClick={() => window.open('https://zuitt.co/', '_blank')}
                            mb='3'
                        >View Website</Button>
                    </Flex>
                </Box>
            </Flex>
            <Flex
                w={isLargerThan800 ? '50%' : '99%'}
                
                p='10'
                justifyContent='center' 
            >
                <Box
                h='100%'
                bgColor='#8ec044'
                borderRadius='1rem'   
                    _hover={{
                        transform: "scale(1.15)",
                        transition: "transform 0.2s ease-in-out",
                    }}
                >
                    <Flex
                    w='100%'
                    h='50%'
                    justifyContent='center'
                    p='3'
                    
                    >
                        <Image 
                        src={dhvtsu}
                        h='100%'
                        borderRadius='1rem'
                        />
                    </Flex>
                    <Box
                    w='100%'
                    justifyContent='space-between'
                    color='#000000'
                    p='3'
                    >
                        <Text
                        fontSize='1.15rem'
                        fontWeight='bold'
                        >BS Electronics Engineering</Text>
                        <Text
                        fontSize={isLargerThan800 ? '.8rem' : '.6rem'}
                        >Don Honorio Ventura
                        Technological State
                        University</Text>
                        <Text
                        fontSize={isLargerThan800 ? '.8rem' : '.6rem'}
                        >Bacolor, Pampanga</Text>
                        <Text>June 2013 – April 2018</Text>
                    </Box>
                    <Flex
                        w='100%'
                        justifyContent='center'

                    >
                        <Button
                            onClick={() => window.open('https://dhvsu.edu.ph/', '_blank')}
                            mb='3'
                        >View Website</Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}
