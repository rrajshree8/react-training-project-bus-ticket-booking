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
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

// import BusSeat from "./BusSeat.js";
import Hero from "../component/Hero.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";


     


export default function Dashboard() {
  return (
    <>
      {/* <Header /> */}
      {/* <Flex height={"80vh"}>
        <Hero />
      </Flex> */}
      <ChakraProvider>
        <Grid
          templateAreas={`"header header "
        "main main "
        "footer footer "`}
        >
          <GridItem area={"header"}>
            <Header></Header>
          </GridItem>

          {/* <GridItem  area={'menu'}>
         <Menu></Menu>
         
        </GridItem>  */}

          <GridItem area={"main"}>
            <Hero/>
          </GridItem>

          <GridItem area={"footer"}>
            <Footer/>
          </GridItem>
        </Grid>

      </ChakraProvider>

    </>
  );
}
