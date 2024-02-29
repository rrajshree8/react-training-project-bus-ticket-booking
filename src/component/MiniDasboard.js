import React from "react";
import SearchBar from "./SearchBar.js";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";

import { ChakraProvider } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import BusList from "./DisplayBusList.js";
import DisplayBusList from './DisplayBusList.js'

export default function MiniDasboard() {
    
  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header header header"
        "main main main main"
        "nav menu menu menu"
        "footer footer footer footer"`}
      >
        <GridItem area={"header"}>
          <Header></Header>
        </GridItem>

        <GridItem area={"main"}>
          <SearchBar />
        </GridItem>

        <GridItem bg="blue" area={"nav"}>
          skdufhis
        </GridItem>

        <GridItem  area={"menu"}>
            <BusList />
        </GridItem>

        <GridItem area={"footer"}>
          <Footer></Footer>
        </GridItem>
      </Grid>
    </ChakraProvider>


// <SearchBar></SearchBar>
// <DisplayBusList/>

   
    
  );
}
