import { Box, Flex, ListItem, Text, UnorderedList, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

export default function Experience() {
    const [isLargerThan800] = useMediaQuery('(min-width: 900px)')
    const [isLargerThan400] = useMediaQuery('(min-width: 450px)')
  return (
    <Box
    w='100%'
    h='100%'
    align='center'
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
            fontWeight='extrabold'
            >Work Experiences</Text>
        </Flex>
        <Flex
        color='#000000'
        mt='5'
        w={isLargerThan800 ? '50%' : '90%'}
        align='center'
        justifyContent='space-between'
        >
            <Text
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            fontWeight='bold'
            >Freelance Developer</Text>
            <Text
            color='darkgray'
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            >May 2023 - Present</Text>
        </Flex>
        <Box
        mt='3'
        fontSize={isLargerThan400 ? '1rem' : '.75rem'}
        w={isLargerThan800 ? '50%' : '90%'}
        textAlign='justify'
        color='darkgray'
        >
            <UnorderedList>
                <ListItem>Develop and maintain full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</ListItem>
                <ListItem>Collaborate with clients or project managers to gather requirements, translate them into technical specifications, and deliver MERN-based solutions.</ListItem>
                <ListItem>Design and implement user-friendly front-end interfaces with React, develop server-side logic and APIs using Node.js and Express.js, and integrate MongoDB for efficient data storage and retrieval.</ListItem>
            </UnorderedList>
        </Box>
        <Flex
        color='#000000'
        mt='5'
        w={isLargerThan800 ? '50%' : '90%'}
        align='center'
        justifyContent='space-between'
        >
            <Text
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            fontWeight='bold'
            >Front-End Developer</Text>
            <Text
            color='darkgray'
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            >February 2023 – April 2023</Text>
        </Flex>
        <Flex
        w={isLargerThan800 ? '50%' : '90%'}
        color='#000000'
        fontWeight='bold'
        fontSize={isLargerThan400 ? '1rem' : '.75rem'}
        >
            Rooche digital
        </Flex>
        <Box
        color='darkgray'
        w={isLargerThan800 ? '50%' : '90%'}
        textAlign='justify'
        mt='3'
        fontSize={isLargerThan400 ? '1rem' : '.75rem'}
        >
            <UnorderedList>
                <ListItem>Develop UI and UX using React components and libraries</ListItem>
                <ListItem>Develop user interfaces and user experiences using React components and libraries</ListItem>
                <ListItem>Collaborate with other team members and integrate with back-end APIs and services</ListItem>
            </UnorderedList>
        </Box>
        <Flex
        color='#000000'
        mt='5'
        w={isLargerThan800 ? '50%' : '90%'}
        align='center'
        justifyContent='space-between'
        >
            <Text
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            fontWeight='bold'
            >Design Engineer I</Text>
            <Text
            color='darkgray'
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            >December 2021 – January 2023</Text>
        </Flex>
        <Flex
        w={isLargerThan800 ? '50%' : '90%'}
        align='center'
        color='#000000'
        justifyContent='space-between'
        >
            <Text
            fontWeight='bold'
            fontSize={isLargerThan400 ? '1rem' : '.65rem'}
            >
            Tsukiden Global Solutions, Inc.
            </Text>
            <Text
            color='darkgray'
            fontSize={isLargerThan400 ? '1rem' : '.65rem'}
            >
            Ortigas Center, Pasig City
            </Text>
        </Flex>
        <Box
        color='darkgray'
        w={isLargerThan800 ? '50%' : '90%'}
        textAlign='justify'
        mt='3'
        fontSize={isLargerThan400 ? '1rem' : '.75rem'}
        >
            <UnorderedList>
                <ListItem>Maintenance and debugging of the ticketing system</ListItem>
                <ListItem>Task delegation and team coordination</ListItem>
                <ListItem>Development of new components for the ticketing app</ListItem>
            </UnorderedList>
        </Box>
        <Flex
        color='#000000'
        mt='5'
        w={isLargerThan800 ? '50%' : '90%'}
        align='center'
        justifyContent='space-between'
        >
            <Text
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            fontWeight='bold'
            >SQA Engineer</Text>
            <Text
            color='darkgray'
            fontSize={isLargerThan400 ? '1.5rem' : '.75rem'}
            >October 2020 – November 2021</Text>
        </Flex>
        <Flex
        w={isLargerThan800 ? '50%' : '90%'}
        color='#000000'
        justifyContent='space-between'
        >
            <Text
            fontWeight='bold'
            fontSize={isLargerThan400 ? '1rem' : '.75rem'}
            >
            Metalabs, Inc.
            </Text>
            <Text
            color='darkgray'
            fontSize={isLargerThan400 ? '1rem' : '.75rem'}
            >
            Porac, Pampanga
            </Text>
        </Flex>
        <Box
        color='darkgray'
        w={isLargerThan800 ? '50%' : '90%'}
        textAlign='justify'
        mt='3'
        fontSize={isLargerThan400 ? '1rem' : '.75rem'}
        >
            <UnorderedList>
                <ListItem>Perform manual testing of software applications to identify and report defects or issues, ensuring the quality and functionality of the product.</ListItem>
                <ListItem>Create and execute test cases based on project requirements and specifications, meticulously documenting test results and reporting any identified defects.</ListItem>
                <ListItem>Collaborate with development and product teams to analyze and validate tickets, ensuring accurate and detailed reporting of bugs and enhancement requests for efficient resolution.</ListItem>
            </UnorderedList>
        </Box>
    </Box>
  )
}
