import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

export default function ProjectCard({content}) {
  const [isLargerThan900] = useMediaQuery('(min-width : 900px)')
  return (
    <Box
    mt='3'
    bgColor='#8ec044'
    borderRadius='1rem'
    color='black'
    w={isLargerThan900 ? '30%' : '100%'}
    p='3'
    shadow='2xl'
    _hover={{
      transform: "scale(1.1)",
      transition: "transform 0.2s ease-in-out",
  }}
    >
      <Text
        fontSize='1rem'
        >{content.title}</Text>
        <Image src={content.image} h='25%'/>
        <Text
          fontSize='.75rem'
          textAlign='justify'
        >{content.desc}</Text>
        <Flex
        mt='4'
        w='100%'
        justifyContent='center'
        color='#8ec044'
        >
            <Button
              onClick={()=>window.open(content.link, '_blank')}
            >Visit Website</Button>
        </Flex>
    </Box>
  )
}
