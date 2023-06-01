import { 
  Box,
  Flex,
  Image,
  Text,
  keyframes,
  useMediaQuery
} from '@chakra-ui/react'
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
  const [isLargerThan800] = useMediaQuery('(min-width: 900px)')

  return (
    <Flex
        h='80vh'
        w='100%'
        display={isLargerThan800 ? 'flex' : 'inline'}
        align={isLargerThan800 && 'center'}
    >
        <Flex
            h={isLargerThan800 ? '100%' : '40%'}
            w={isLargerThan800 ? '50%' : "95%"}
            align='center'
            justifyContent='center'
        >
            <Image 
                src={iceIcon} 
                h={isLargerThan800 ? '85%' :'100%'}
                animation={`${rotateAnimation} 3s linear infinite`}
                />
        </Flex>
        <Flex
            h={isLargerThan800 ? '100%' : '30%'}
            w={isLargerThan800 ? '50%' : '100%'}
            justifyContent='start'
            align='center'
        >
            <Box
                textAlign='center'
                align='center'
                w='100%'
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
