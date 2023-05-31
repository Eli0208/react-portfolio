import { 
    Box, 
    Button, 
    Flex, 
    FormControl, 
    FormLabel, 
    Image, 
    Input, 
    Text, 
    Textarea,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    CircularProgress
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import map from '../assets/map.png'
import emailjs from '@emailjs/browser'

export default function ContactMe() {
    const form = useRef();
    const [message, setMessage] = useState()
    const [title, setTitle] = useState()
    const [isSending, setIsSending] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    


    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        if(form.user_name == '' || form.user_email == '' || form.message == ''){
            setTitle('Sending Failed!')
            setMessage("Please don't leave any fields blank")
            onOpen()
            setIsSending(false);
        }else{
            emailjs.sendForm('service_cecjcsv', 'template_v3198d9', form.current, 'HVP00_8O92caD3-qh')
          .then((result) => {
                setTitle('Email Sent Successfully!')
                setMessage('Thank you! I will reply to you as soon as possible')
                onOpen()
                setIsSending(false);
          }, (error) => {
            setTitle('Sending Failed!')
            setMessage('An error occured while sending the email')
            onOpen()
            setIsSending(false);
          });
        }
      };
  

  return (
    <Box
    h='80vh'
    w='100%'
    >
        <Flex
            w='100%'
            h='10%'
            justify='center'
        >
            <Text
                fontSize='2rem'
                fontWeight='bold'
            >Contact me</Text>
        </Flex>
        <Flex
        h='90%'
        w='100%'
        >
            <Flex
            w='50%'
            h='100%'
            justifyContent='center'
            alignItems='center'
            >
                <Flex
                    h='70%'
                    borderRadius='1rem'
                    bgColor='#8ce044'
                    p='3'
                    cursor='zoom-in'
                    onClick={() => window.open('https://goo.gl/maps/YnBJmofmXDBhN2mo7','_blank')}
                    shadow='2xl'
                >
                    <Image src={map}/>
                </Flex>
            </Flex>
            <Flex
            h='100%'
            w='50%'
            justifyContent='center'
            align='center'
            >
                <Box
                w='70%'
                h='70%'
                border='1px solid #8ec044'
                borderRadius='1rem'
                shadow='2xl'
                p='5'
                >
                    <form ref={form} onSubmit={sendEmail}>
                    <FormControl id="name"  mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" name="user_name" placeholder="Enter your name" required/>
                    </FormControl>

                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="user_email" placeholder="Enter your email address" required/>
                    </FormControl>

                    <FormControl id="message" mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Enter your message" name="message" required/>
                    </FormControl>
                    {isSending ?
                    <CircularProgress isIndeterminate color='#8ec044' /> :
                    <Button color='#ffffff' bgColor="#8ec044" type="submit">Submit</Button>}
                    </form>
                </Box>
            </Flex>
        </Flex>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {message}
          </ModalBody>

          <ModalFooter>
            <Button bgColor='#8ec044' color='#FFFFFF' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </Box>
  )
}
