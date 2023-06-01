import { Flex, Image, Link, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import fb from '../assets/Facebook.png'
import gh from '../assets/Github.png'
import ig from '../assets/Instagram.png'
import linked from '../assets/LinkedIn.png'
import twit from '../assets/Twitter.png'

export default function Footer() {
    const [isLargerThan800] = useMediaQuery('(min-width: 900px)')
  return (
    <Flex
        h='10vh'
        w='100%'
        justifyContent='center'
        position={!isLargerThan800 && 'fixed'}
        bottom={!isLargerThan800 && '0'}
    >
        <Flex
            p='3'
            w={isLargerThan800 ? '50%' : '90%'}
            h='100%'
            justifyContent='space-between'
        >
            <Image 
            src={fb}
            cursor='pointer'
            onClick={() => {
                window.open("https://www.facebook.com/efg.vergara", '_blank')
            }}
            />
            <Image 
            src={ig}
            cursor='pointer'
            onClick={() => {
                window.open("https://instagram.com/informalsalute?igshid=ZDdkNTZiNTM=", '_blank')
            }}
            />
            <Image
            src={twit}
            cursor='pointer'
            onClick={() => {
                window.open("https://twitter.com/EliVee0403", '_blank')
            }}
            />
            <Image
            src={linked}
            cursor='pointer'
            onClick={() => {
                window.open("https://www.linkedin.com/in/elias-francis-vergara-4b5a5b174/", '_blank')
            }}
            />
            <Image
            src={gh}
            cursor='pointer'
            onClick={() => {
                window.open("https://github.com/Eli0208", '_blank')
            }}
            />
        </Flex>
    </Flex>
  )
}