import { Flex, Box, useMediaQuery } from '@chakra-ui/react'
import React, {useState} from 'react'
import SideNavBar from '../components/SideNavBar'
import Summary from '../components/Summary';
import Experience from '../components/Experience';
import Education from '../components/Education';

export default function AboutMe() {
  const [isLargerThan800] = useMediaQuery('(min-width: 900px)')
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
            mt={!isLargerThan800 && '10vh'}
            pb={!isLargerThan800 && '10vh'}
        >
            {selectedLink == 'summary' && <Summary/>}
            {selectedLink == 'experience' && <Experience/>}
            {selectedLink == 'education' && <Education/>}
        </Box>
    </Flex>
  )
}
