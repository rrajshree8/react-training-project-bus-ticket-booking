import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Dashboard from "./component/Dashboard.js";
import SearchBar from "./component/SearchBar.js";
import DisplayBusList from "./component/DisplayBusList.js";
import BusSeat from "./component/BusSeat.js";
import MiniDasboard from "./component/MiniDasboard.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/Display-Bus" element={<DisplayBusList />}></Route>
          <Route path="/Seat" element={<BusSeat />} />
          <Route path="/miniDasboard" element={<MiniDasboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
