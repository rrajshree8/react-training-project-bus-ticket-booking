import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Dashboard from "./component/Dashboard.js";
import SearchBar from "./component/SearchBar.js";


function App() {
  return (
    <ChakraProvider>
       
      <Dashboard/>
      <SearchBar/>
    </ChakraProvider>

  );
}

export default App;
