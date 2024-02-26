
import {
  // Box,
  Flex,
  // Avatar,
  // HStack,
  // Image,
  // Text,
  // IconButton,
  // Button,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  // MenuDivider,
  // useDisclosure,
  // useColorModeValue,
  // Stack,
} from '@chakra-ui/react'

import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'



import BusSeat from './BusSeat.js'
import Hero from '../component/Hero.js';
import Header from '../component/Header.js'
import Footer from '../component/Footer.js'
// import Menu from "../component/Menu.js";
import { useState } from 'react';

import { Box } from "@chakra-ui/react";
import BusSeat from './BusSeat.js'


export default function Dashboard() {

  const [searchButton,setSearchButton]=useState(false);

  function handleButton(){
    setSearchButton(!searchButton)
  }

  return (
    <>
      {/* <Flex height={'80vh'}><Hero/></Flex>
       <div>
=======
  return (
    <>
       <Header/>
       <Flex height={'80vh'}><Hero/></Flex>
       {/* <div>
>>>>>>> 922a826a1ce6a988818575a4d72279aca4cd2f05
       <Box bg="red" height={'80vh'} style={{width:'100vw'}}>
        <BusSeat/>
       </Box>
       </div> */}

      <ChakraProvider>
        <Grid
          templateAreas={`"header header "
        "main main "
        "footer footer "`}
        >
          <GridItem area={'header'}>
            <Header></Header>
          </GridItem>

          {/* <GridItem  area={'menu'}>
         <Menu></Menu>
         
        </GridItem>  */}

          <GridItem area={'main'}>

            <Hero ></Hero>
          </GridItem>

          <GridItem area={'footer'}>
            <Footer></Footer>
          </GridItem>
        </Grid>
      </ChakraProvider>
=======
      

      <Footer/>
    </>
  )
}