import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import selectedImg from "../assets/sleeper.png"
import unSelectedImg from "../assets/sleep.png"


const Sleeper = ({ item }) => {

  const [isSelect, SetSelect] = useState(!item.available);
  return (
    <Box onClick={() => SetSelect(!isSelect)} cursor={item.available ? "pointer" : "not-allowed"} pointerEvents={item.available ? "" : "none"}>
      <Image src={isSelect ? unSelectedImg : selectedImg} alt="Sleeper Image" width="100px" h="80px" />
      <Text style={{ transform: 'translate(30px,-53px)', }} fontWeight="800" color="#C32629">{item.number}</Text>
    </Box>
)}

export default Sleeper