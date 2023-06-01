import { Box, VStack, Link, useColorModeValue, useMediaQuery, Flex } from "@chakra-ui/react";
import { useState } from "react";

const SideNavBar = ({setSelectedLink, selectedLink}) => {
  

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };
  const [isLargerThan800] = useMediaQuery('(min-width: 900px)')
  const activeLinkColor = useColorModeValue('#FFFFFF');
  const inactiveLinkColor = useColorModeValue('#8ec044');
  const bgActive = useColorModeValue('#8ec044')
  const bgInactive = useColorModeValue('#ffffff')

  return (
    <>
    { isLargerThan800 ?
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
      </Box> :
      <Flex
        h='10%'
        w='99%'
        position='fixed'
        top='10vh'
      >
        <Box
            p={4}
            textAlign='center'
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
            textAlign='center'
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
            textAlign='center'
            as="button"
            width='100%'
            bgColor={selectedLink === "education" ? bgActive : bgInactive}
            color={selectedLink === "education" ? activeLinkColor : inactiveLinkColor}
            onClick={() => handleLinkClick("education")}
          >
            Education
          </Box>
      </Flex>
    }
    </>
  );
};

export default SideNavBar;
