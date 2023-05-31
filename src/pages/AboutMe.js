import { Flex,Box } from '@chakra-ui/react'
import React, {useState} from 'react'
import SideNavBar from '../components/SideNavBar'
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function AboutMe() {
    const [selectedLink, setSelectedLink] = useState('summary');
  return (
    <Flex
    h='80vh'
    w='100%'
    >
        <SideNavBar selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        <Box
            h='100%'
            w='100%'
        >
            {selectedLink == 'summary' && <Summary/>}
            {selectedLink == 'experience' && <Experience/>}
            {selectedLink == 'education' && <Education/>}
        </Box>
    </Flex>
  )
}
