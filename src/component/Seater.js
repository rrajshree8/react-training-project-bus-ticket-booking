import { Box, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import BookedSeat from '../Assets/armchair-grey.png'
import NotBooked from '../Assets/seat.png'

const Seater = ({item}) => {
    const[isSelect,SetSelect]=useState(!item.available)
  return (
   <Box onClick={()=>SetSelect(!isSelect)} cursor={item.available?"pointer":"not-allowed"} pointerEvents={item.available?"":"none"}>
    <Image src={isSelect?BookedSeat:NotBooked} alt='Seater' width="75px" h="80px" style={{transform:'rotate(90deg)'}} />
    <Text style={{transform:'translate(8px,-50px)',}} fontSize="small" fontWeight="800" color="#C32629">{item.number}</Text>  
   </Box>
  )
}

export default Seater