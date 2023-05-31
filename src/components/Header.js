import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Header() {
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
            justifyContent='space-around'
        >
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
        </Flex>
    </Flex>
  )
}
