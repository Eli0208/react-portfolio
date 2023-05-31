import { Box, Flex, Image, Text, keyframes } from '@chakra-ui/react'
import React from 'react'
import iceIcon from '../assets/Ice.png'

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default function Landing() {
  return (
    <Flex
        h='80vh'
        w='100%'
    >
        <Flex
            h='100%'
            w='50%'
            align='center'
            justifyContent='center'
        >
            <Image 
                src={iceIcon} 
                h='85%' 
                animation={`${rotateAnimation} 3s linear infinite`}
                />
        </Flex>
        <Flex
            h='100%'
            w='50%'
            justifyContent='start'
            align='center'
        >
            <Box
                textAlign='center'
            >
                <Text
                    fontWeight='extrabold'
                    fontSize='2rem'
                >Elias Francis G. Vergara, EcE, EcT</Text>
                <Text
                    fontSize='1.5rem'
                >Full-Stack Developer</Text>
            </Box>
        </Flex>
    </Flex>
  )
}
