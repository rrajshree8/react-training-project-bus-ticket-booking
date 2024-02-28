import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import PassengersDetail from "./component/PassengersDetail.js";

import Dashboard from "./component/Dashboard.js";
import SearchBar from "./component/SearchBar.js";
import DisplayBusList from "./component/DisplayBusList.js";
import BusSeat from "./component/BusSeat.js";
import MiniDasboard from "./component/MiniDasboard.js";
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <ChakraProvider>
       <Provider store={store}>
      {/* <PassengersDetail></PassengersDetail> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Search" element={<SearchBar />} />
          {/* <Route path="/" exact component={SearchBar} />
        <Route path="/miniDashboard" component={MiniDashboard} /> */}
          <Route path="/Display-Bus" element={<DisplayBusList />}></Route>
          <Route path="/Seat" element={<BusSeat />} />
          <Route path="/miniDasboard" element={<MiniDasboard />} />
        </Routes>
      </Router>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
