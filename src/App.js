<<<<<<< HEAD

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./component/Dashboard.js";

function App() {
  return (
    <ChakraProvider>
      <Dashboard/>
    </ChakraProvider>
=======
// App.js
import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import BusSeat from './component/BusSeat';
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <div>
       <Box bg="red" style={{width:'100vw'}}>
        <BusSeat/>
       </Box>
      
    </div>
>>>>>>> d67462027cf198cc81c0b1c2eaec55a87e21c721
  );
}

export default App;
