import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import PassengersDetail from "./component/PassengersDetail.js";

import Dashboard from "./component/Dashboard.js";


function App() {
  return (
    <ChakraProvider>
       
      <Dashboard/>
      {/* <PassengersDetail></PassengersDetail> */}
    </ChakraProvider>

  );
}

export default App;
