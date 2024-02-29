// import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
// import React,{useState} from "react";
// import { useSelector } from 'react-redux';
// // import buses from "../component/bus-data.json";
// import busData from '../component/bus-data.json'

// function BusList() {
//   // const { from, to, date, AC } = useSelector(state => state);
//   const { from, to, date, AC } = useSelector(state => state.searchBar);
//   const [buses, setBuses] = useState(busData.buses);
//   console.log(from,to,AC)

//   const filteredBuses = buses.filter((bus) => {
//     const hasValidFrom = bus.stops.some((stop) => stop.stopName === from);
//     const hasValidTo = bus.stops.some((stop) => stop.stopName === to);
//     const hasValidAC = AC === "" || bus.isAC === (AC === "AC");

//     return hasValidFrom && hasValidTo && hasValidAC;
//   });

//   return (
//     <>
//       <Flex
//         flexDirection="column"
//         bg="#f0f0f0"
//         p="1rem"
//         borderRadius="5px"
//         boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
//       >
//         {filteredBuses.map((bus) => (
//           <Flex
//             key={bus.busNumber}
//             justifyContent="space-between"
//             alignItems="center"
//             wrap="wrap"
//             gap="2"
//             bg="white"
//             p="1rem"
//             m="0.5rem 0"
//             borderRadius="5px"
//             boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
//           >
//             <Flex key={bus.busNumber} flexDirection="column">
//               <box>{bus.busName}</box>
//               <box>Bus Number: {bus.busNumber}</box>
//             </Flex>
//             <Flex flexDirection="column">
//               {bus.stops.map((stop) =>
//                 stop.stopName === from ? (
//                   <p key={stop.stopName}>
//                     <Flex flexDirection="column" wrap="wrap">
//                       <box>From: {stop.stopName}</box>
//                       <box>Arrival Time: {stop.arrivalTime}</box>
//                       <box>Departure Time: {stop.departureTime}</box>
//                     </Flex>
//                   </p>
//                 ) : null
//               )}
//             </Flex>
//             <Flex flexDirection="column">
//               {bus.stops.map((stop) =>
//                 stop.stopName === to ? (
//                   <p key={stop.stopName}>
//                     <Flex flexDirection="column" wrap="wrap">
//                       <box>To: {stop.stopName}</box>
//                       <box>Arrival Time: {stop.arrivalTime}</box>
//                       <box>Departure Time: {stop.departureTime}</box>
//                     </Flex>
//                   </p>
//                 ) : null
//               )}
//             </Flex>
//             <box>AC: {bus.isAC ? "Yes" : "No"}</box>
//             <box>
//               Available Seat:{bus.seats.filter((seat) => seat.available).length}
//             </box>
//             <Box display="flex">
//               <Spacer />
//               <Button colorScheme="red">Book Seat</Button>
//             </Box>
//           </Flex>
//         ))}
//       </Flex>
//     </>
//   );
// }

// export default BusList;

// import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useSelector } from 'react-redux';
// import busData from '../component/bus-data.json';

// function BusList() {
//   const { from, to, AC } = useSelector(state => state.searchBar);
//   const [buses, setBuses] = useState(busData.buses);
//   console.log("buses",buses)

//   const filteredBuses = buses.filter((bus) => {
//     const hasValidFrom = bus.stops.some((stop) => stop.stopName === from);
//     const hasValidTo = bus.stops.some((stop) => stop.stopName === to);
//     const hasValidAC = AC === "" || bus.isAC === (AC === "AC");

//     return hasValidFrom && hasValidTo && hasValidAC;
//   });

//   return (
//     <>
//       <Flex flexDirection="column"  bg="#f0f0f0"  p="1rem"  borderRadius="5px" boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)" >
//         {filteredBuses.map((bus) => (
//           <Flex
//             key={bus.busNumber}
//             justifyContent="space-between"
//             alignItems="center"
//             wrap="wrap"
//             gap="2"
//             bg="white"
//             p="1rem"
//             m="0.5rem 0"
//             borderRadius="5px"
//             boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
//           >
//             <Flex key={bus.busNumber} flexDirection="column">
//               <Box>{bus.busName}</Box>
//               <Box>Bus Number: {bus.busNumber}</Box>
//             </Flex>
//             <Flex flexDirection="column">
//               {bus.stops.map((stop) => (
//                 <p key={stop.stopName}>
//                   <Flex flexDirection="column" wrap="wrap">
//                     <Box>Stop: {stop.stopName}</Box>
//                     <Box>Arrival Time: {stop.arrivalTime}</Box>
//                     <Box>Departure Time: {stop.departureTime}</Box>
//                   </Flex>
//                 </p>
//               ))}
//             </Flex>
//             <Box>AC: {bus.isAC ? "Yes" : "No"}</Box>
//             <Box>Available Seats: {bus.seats.filter((seat) => seat.available).length}</Box>
//             <Box display="flex">
//               <Spacer />
//               <Button colorScheme="red">Book Seat</Button>
//             </Box>
//           </Flex>
//         ))}
//       </Flex>
//     </>
//   );
// }

// export default BusList;

import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import busData from "../component/bus-data.json";

function BusList() {
  const { from, to, AC } = useSelector((state) => state.searchBar);
  const [buses, setBuses] = useState(busData.buses);
  console.log("buses", buses);

  const selectedStartPoint = from;
  const selectedStopPoint = to;

  const filteredBuses = buses.filter((bus) => {
    const hasValidFrom = bus.stops.some((stop) => stop.stopName === from);
    const hasValidTo = bus.stops.some((stop) => stop.stopName === to);
    const hasValidAC = AC === "" || bus.isAC === (AC === "AC");

    console.log("hasValidFrom", hasValidFrom);

    return hasValidFrom && hasValidTo && hasValidAC;
  });
  // console.log("filtered Buses", filteredBuses);

  return (
    <div style={{ maxHeight: "840px", overflowY: "auto" }}>
      <Flex
        flexDirection="column"
        bg="#f0f0f0"
        p="1rem"
        borderRadius="5px"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      >
        {filteredBuses.length > 0 ? (
          filteredBuses.map((bus) => (
            <Flex
              key={bus.busNumber}
              justifyContent="space-between"
              alignItems="center"
              wrap="wrap"
              gap="2"
              bg="white"
              p="1rem"
              m="0.5rem 0"
              borderRadius="5px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
            >
              <Flex flexDirection="column">
                <Box>{bus.busName}</Box>
                <Box>Bus Number: {bus.busNumber}</Box>
              </Flex>

              <Flex flexDirection="row">
                {/* {bus.stops.map((stop) => {
              if (stop.stopName === selectedStartPoint || stop.stopName === selectedStopPoint) {
                return (
                  <Box key={stop.stopName}>
                    <Flex flexDirection="column" wrap="wrap">
                      <Box>Stop: {stop.stopName}</Box>  
                      <Box>Arrival Time: {stop.arrivalTime}</Box>
                      <Box>Departure Time: {stop.departureTime}</Box>
                    </Flex>
                  </Box>
                );
              }
              return null; // Skip rendering stops other than selectedStartingPoint and selectedStoppingPoint
            })} */}
                {bus.stops.map((stop) => {
                  if (stop.stopName === selectedStartPoint) {
                    return (
                      <Box key={stop.stopName} paddingRight={"15px"}>
                        <Flex flexDirection="column" wrap="wrap">
                          <Box>Boarding: {stop.stopName}</Box>
                          <Box>Arrival Time: {stop.arrivalTime}</Box>
                        </Flex>
                      </Box>
                    );
                  } else {
                    return null;
                  }
                })}
                {bus.stops.map((stop) => {
                  if (stop.stopName === selectedStopPoint) {
                    return (
                      <Box key={stop.stopName}>
                        <Flex flexDirection="column" wrap="wrap">
                          <Box>Destination: {stop.stopName}</Box>
                          <Box>Arrival Time: {stop.arrivalTime}</Box>
                        </Flex>
                      </Box>
                    );
                  } else {
                    return null;
                  }
                })}
              </Flex>

              <Box>AC: {bus.isAC ? "Yes" : "No"}</Box>
              <Box>
                Available Seats:{" "}
                {bus.seats.sleeper.filter((seat) => seat.available).length +
                  bus.seats.seater.filter((seat) => seat.available).length}
              </Box>
              <Box display="flex">
                <Spacer />
                <Button colorScheme="red">Book Seat</Button>
              </Box>
            </Flex>
          ))
        ) : (
          <div>No buses available</div>
        )}

        {console.log(filteredBuses ? true : false)}
      </Flex>
    </div>
  );
}

export default BusList;
