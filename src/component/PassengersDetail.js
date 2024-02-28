import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Input, Flex, Box } from '@chakra-ui/react'
import { Filter } from '@chakra-ui/react';

import React from 'react'
import { useState } from 'react'

import backgroundImage from "../assets/Hero.jpeg";


export default function PassengersDetail() {

    const [input, setInput] = useState('')
    const handleInputChange = (e) => setInput(e.target.value)
    const isError = input === ''
    return (
        // <div style={{ display: 'flex', width: '100vh', height: '100vh' }}>
            <Box  
                w='100%' 
                display="flex"
                flexDirection="column"
                // justifyContent="center"
                // alignItems="center"
                >
                
            
            <Flex
                w={"100%"}
                h={"100vh"}
                backgroundImage={`url(${backgroundImage})`}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
                filter='auto' blur='3px'
            >
            </Flex>
            <Flex
                w="25%"
                h="100vh"
                position="absolute"
                top="0"
                left="0"
                justify="center"
                align="center"
                zIndex="1"
                // background="white"
            >
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" value={input} onChange={handleInputChange} />
                    {!isError ? (
                        <FormHelperText>
                            Enter the email you'd like to receive the newsletter on.
                        </FormHelperText>
                    ) : (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    )}
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="number" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                </FormControl>
            </Flex>
            </Box>
        
    )
}
