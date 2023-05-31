import { Box, Button, Flex, Image, Text, color } from '@chakra-ui/react'
import React from 'react'
import alined from '../assets/alined.png'
import rpiArd from '../assets/ard-rpi.png'
import mern from '../assets/mern.png'

export default function Summary() {
    const handleDownload = () => {
        // Replace 'google-drive-file-id' with the actual ID of your PDF file in Google Drive
        const fileId = 'google-drive-file-id';
    
        // Create the download URL using the file ID
        const downloadUrl = 'https://drive.google.com/file/d/1wLW4B5fv2nNiU4G15f2kJORU2JX9e63s/view?usp=share_link';
    
        // Open the download URL in a new tab
        window.open(downloadUrl, '_blank');
      };
  return (
    <Box
        h='100%'
        w='100%'
        p='5'
        textAlign='justify'
        overflowY='auto'
        sx={{
            '&::-webkit-scrollbar': {
              width: '.5rem',
            },
            '&::-webkit-scrollbar-track': {
              background: '#ffffff',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#8ec044',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#ffffff',
            },
        }}
    >
        <Flex
        w='100%'
        justifyContent='center'
        >
            <Text
            fontSize='2rem'
            fontWeight='bold'
            >About me</Text>
        </Flex>
        <Box
            w='25%'
            h='60%'
            align='center'
            float='left'
        >
            <Image src={alined}  h='85%'/>
            <Flex
                w='100%'
                justifyContent='center'
            >
                <Button
                bgColor = "#8ec044"
                color =  "#FFFFFF"
                border = '1px solid #8ec044'
                _hover={{
                    bgColor:'#FFFFFF',
                    color:'#8ec044',    
                    }}
                onClick={() => handleDownload()}
                >Download Resume</Button>
            </Flex>
            
        </Box>
        <Text
            color='#000000'
            fontSize='1.05rem'
        >
        Introduction:<br/>
        In today's digital age, the path to professional growth often involves embracing new technologies and adapting to the evolving demands of the market. This article delves into the personal journey of a former electronics engineer who transitioned into the world of full stack development, leveraging skills acquired from working with Arduino, Raspberry Pi, and VB.NET. Discover how this individual's expertise in hardware design and passion for programming paved the way for developing innovative solutions and empowering small entrepreneurs.<br/>
        <br/>
        From Electronics Engineering to Full Stack Development:<br/>
        As a trained electronics engineer, the foundation of the author's technical knowledge was rooted in the intricate workings of electronic circuits and systems. However, driven by a curiosity to explore software development, they embarked on a path to become a full stack developer. Starting with Arduino, a popular microcontroller platform, and Raspberry Pi, a credit card-sized computer, they gained hands-on experience in programming and prototyping.<br/>
        <br/>

        <Box
            w='25%'
            h='60%'
            align='center'
            float='right'
            ml='3'
        >
            <Image src={rpiArd}  h='75%'/>
            
        </Box>

        Arduino and Raspberry Pi: Catalysts for Learning:<br/>
        The Arduino and Raspberry Pi platforms served as catalysts for the author's initial foray into programming. With Arduino, they discovered the joy of coding and the ability to bring electronic projects to life. From simple LED blinkers to complex sensor integrations, Arduino projects nurtured their passion for software development. Raspberry Pi further expanded their capabilities, allowing them to design and deploy interactive applications and automation systems.<br/>
        <br/>
        Transition to Full Stack Development:<br/>
        Eager to embrace the vast potential of modern web development, the author delved into the MERN (MongoDB, Express, React, Node.js) stack. This comprehensive technology stack provided the tools and frameworks necessary to build dynamic and scalable web applications. By mastering JavaScript, React, and Node.js, they gained the skills to design and develop full-fledged web solutions, combining their hardware expertise with software development.<br/>
        <br/>

        <Box
            w='25%'
            h='60%'
            align='center'
            float='left'
            mr='3'
        >
            <Image src={mern}  h='75%'/>
            
        </Box>
        Empowering Entrepreneurs with Innovative Products:<br/>
        Armed with their diverse background in electronics engineering and full stack development, the author found their niche in developing custom products for small entrepreneurs. By collaborating with budding business owners, they created tailored solutions that addressed specific needs, ranging from inventory management systems to IoT (Internet of Things) applications. Their ability to bridge the gap between hardware and software allowed them to bring entrepreneurs' ideas to life, transforming their visions into practical, market-ready products.<br/>
        <br/>
        Conclusion:<br/>
        The journey from being an electronics engineer to a full stack developer has been transformative for the author, enabling them to merge their hardware expertise with software prowess. Their background in designing prototypes with Arduino and Raspberry Pi provided a solid foundation for diving into the world of web development using the MERN stack. By developing innovative products for small entrepreneurs, they have become agents of change, leveraging technology to empower businesses and fuel their growth.<br/>
        <br/>
        Through their remarkable journey, this individual exemplifies the endless possibilities that arise when combining diverse skill sets, adaptability, and a passion for learning. Their story serves as an inspiration to others who aspire to navigate their own unique path in the ever-evolving landscape of technology.
        </Text>
    </Box>
  )
}
