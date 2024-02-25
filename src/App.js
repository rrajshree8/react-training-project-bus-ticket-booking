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
  );
}

export default App;
