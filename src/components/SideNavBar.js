import { Box, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const SideNavBar = ({setSelectedLink, selectedLink}) => {
  

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const activeLinkColor = useColorModeValue('#FFFFFF');
  const inactiveLinkColor = useColorModeValue('#8ec044');
  const bgActive = useColorModeValue('#8ec044')
  const bgInactive = useColorModeValue('#ffffff')

  return (
    <Box 
    height="100%" 
    width="15%"  
    borderRight='1px solid'
    >
      <VStack
      spacing={2}
      >
        <Box
          p={4}
          textAlign='start'
          as="button"
          width='100%'
          bgColor={selectedLink === "summary" ? bgActive : bgInactive}
          color={selectedLink === "summary" ? activeLinkColor : inactiveLinkColor}
          onClick={() => handleLinkClick("summary")}
        >
          About me
        </Box>
        <Box
          p={4}
          textAlign='start'
          as="button"
          width='100%'
          bgColor={selectedLink === "experience" ? bgActive : bgInactive}
          color={selectedLink === "experience" ? activeLinkColor : inactiveLinkColor}
          onClick={() => handleLinkClick("experience")}
        >
          Experience
        </Box>
        <Box
          p={4}
          textAlign='start'
          as="button"
          width='100%'
          bgColor={selectedLink === "education" ? bgActive : bgInactive}
          color={selectedLink === "education" ? activeLinkColor : inactiveLinkColor}
          onClick={() => handleLinkClick("education")}
        >
          Education
        </Box>
      </VStack>
    </Box>
  );
};

export default SideNavBar;
