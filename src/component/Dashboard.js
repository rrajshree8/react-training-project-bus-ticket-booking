
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
import Header from './Header.js'
import Footer from './Footer.js'
import Hero from './Hero.js'
import { Box } from "@chakra-ui/react";
import BusSeat from './BusSeat.js'

// interface Props {
//   children: React.ReactNode
// }


export default function Dashboard() {

  return (
    <>
       <Header/>
       <Flex height={'80vh'}><Hero/></Flex>
       {/* <div>
       <Box bg="red" height={'80vh'} style={{width:'100vw'}}>
        <BusSeat/>
       </Box>
       </div> */}
      

      <Footer/>
    </>
  )
}