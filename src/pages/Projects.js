import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../components/ProjectCard'
import boot from '../assets/bs_port.png'
import vought from '../assets/vought.png'

const projContent = [{
    title : 'Bootstrap Portfolio',
    desc : "This portfolio is a visually appealing and interactive website developed using HTML, CSS, and Bootstrap. It showcases the owner's work and achievements with a clean and modern design. The combination of HTML, CSS, and Bootstrap ensures responsiveness and compatibility across devices. The user-friendly interface allows visitors to easily navigate through different sections like projects, skills, and contact. Overall, this HTML, CSS, and Bootstrap-based portfolio presents a professional representation of the owner's work and skills.",
    image : boot,
    link : 'https://eli0208.github.io/webportfolio/'
},
{
    title : 'Vought International',
    desc : "The Vought International website is a dynamic platform created using the MERN stack (MongoDB, Express.js, React, and Node.js). Its backend, powered by Node.js and Express.js, provides a reliable server-side infrastructure. MongoDB ensures efficient data management, while React creates an interactive frontend interface. This website offers detailed information about the company, services, and products. With its scalability and responsiveness, the Vought International website effectively showcases the company's offerings and provides a seamless user experience.",
    image : vought,
    link : 'https://vought.vercel.app/'
}]

export default function Projects() {
    const [isLargerThan900] = useMediaQuery('(min-width : 900px)')
  return (
    <Box
    h='80vh'
    w='100%'
    overflowY='auto'
    >
        <Flex
            w='100%'
            h='10%'
            justify='center'
        >
            <Text
                fontSize='2rem'
                fontWeight='bold'
            >Projects</Text>
        </Flex>
        <Flex
        mt={isLargerThan900 ? '10' : '0' }
        p='10'
        h='70%'
        w='100%'
        display={isLargerThan900 ? 'flex' : 'block'}
        justifyContent='space-around'
        align='center'
        >
            {projContent.map(content =>(
                
                <ProjectCard key={content.title} content={content}/>
            ))}
        </Flex>
    </Box>
  )
}
