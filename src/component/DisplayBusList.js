
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import busData from "../component/bus-data.json";
import BusSeat from "./BusSeat.js";

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
    <div style={{ maxHeight: "1000px", overflowY: "auto" }}>
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
              // justifyContent="space-between"
              alignItems="center"
              
              wrap="wrap"
              gap="2"
              bg="white"
              p="1rem"
              m="0.5rem 0"
              borderRadius="5px"
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
              flexDirection="column"
            >
              <Box w="100%" display="flex" flexDirection="row" justifyContent="space-between">
                <Flex flexDirection="column">
                  <Box>{bus.busName}</Box>
                  <Box>Bus Number: {bus.busNumber}</Box>
                </Flex>

                <Flex flexDirection="row">
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
              </Box>
              <Box   overflowY="scroll">
                <BusSeat></BusSeat>
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
