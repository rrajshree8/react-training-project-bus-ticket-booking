//BusList js
import { Box, Button, Flex, Spacer} from "@chakra-ui/react";
import React, { useState } from "react";
import busData from "../busdata.json";
 
function BusList() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [AC, setAC] = useState(""); // Change AC to a state variable
  const [buses, setBuses] = useState(busData.buses);
 
  const handleFrom = (stopName) => {
    setFrom(stopName);
  };
 
  const handleTo = (stopName) => {
    setTo(stopName);
  };
 
  const handleAC = (busType) => {
    // Set AC state based on selected value
    setAC(busType);
 
    if (busType === "AC") {
      setBuses(busData.buses.filter((bus) => bus.isAC));
    } else if (busType === "NonAC") {
      setBuses(busData.buses.filter((bus) => !bus.isAC));
    } else {
      // If no filter, show all buses
      setBuses(busData.buses);
    }
  };
 
  const filteredBuses = buses.filter((bus) => {
    const hasValidFrom = bus.stops.some((stop) => stop.stopName === from);
    const hasValidTo = bus.stops.some((stop) => stop.stopName === to);
    const hasValidAC = AC === "" || bus.isAC === (AC === "AC");
 
    return hasValidFrom && hasValidTo && hasValidAC;
  });
  return (
    <>
      <h1>List of Buses</h1>
      {/* need to deleted after integration */}
      <label>
        From:
        <select onChange={(e) => handleFrom(e.target.value)}>
          <option value="">Select</option>
          {buses
            .reduce((allStops, bus) => {
              bus.stops.forEach((stop) => {
                if (!allStops.includes(stop.stopName)) {
                  allStops.push(stop.stopName);
                }
              });
              return allStops;
            }, [])
            .map((stopName) => (
              <option key={stopName} value={stopName}>
                {stopName}
              </option>
            ))}
        </select>
      </label>
 
      {/* need to deleted after integration */}
      <label>
        To:
        <select onChange={(e) => handleTo(e.target.value)}>
          <option value="">Select</option>
          {buses
            .reduce((allStops, bus) => {
              bus.stops.forEach((stop) => {
                if (!allStops.includes(stop.stopName)) {
                  allStops.push(stop.stopName);
                }
              });
              return allStops;
            }, [])
            .map((stopName) => (
              <option key={stopName} value={stopName}>
                {stopName}
              </option>
            ))}
        </select>
      </label>
      {/* need to deleted after integration */}
      <label>
        AC:
        <select onChange={(e) => handleAC(e.target.value)}>
          <option value="">All Buses</option>
          <option value="AC">AC Buses</option>
          <option value="NonAC">Non-AC Buses</option>
        </select>
      </label>
 
      <Flex
        flexDirection="column"
        bg="#f0f0f0"
        p="1rem"
        borderRadius="5px"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.2)"
      >
        {filteredBuses.map((bus) => (
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
            <Flex key={bus.busNumber} flexDirection="column">
              <box>{bus.busName}</box>
              <box>Bus Number: {bus.busNumber}</box>
            </Flex>
            <Flex flexDirection="column">
              {bus.stops.map((stop) =>
                stop.stopName === from ? (
                  <p key={stop.stopName}>
                    <Flex flexDirection="column" wrap="wrap">
                      <box>From: {stop.stopName}</box>
                      <box>Arrival Time: {stop.arrivalTime}</box>
                      <box>Departure Time: {stop.departureTime}</box>
                    </Flex>
                  </p>
                ) : null
              )}
            </Flex>
            <Flex flexDirection="column">
              {bus.stops.map((stop) =>
                stop.stopName === to ? (
                  <p key={stop.stopName}>
                    <Flex flexDirection="column" wrap="wrap">
                      <box>To: {stop.stopName}</box>
                      <box>Arrival Time: {stop.arrivalTime}</box>
                      <box>Departure Time: {stop.departureTime}</box>
                    </Flex>
                  </p>
                ) : null
              )}
            </Flex>
            <box>AC: {bus.isAC ? "Yes" : "No"}</box>
            <box>Available Seat:{bus.seats.filter((seat) => seat.available).length}</box>
            <Box display="flex">
              <Spacer />
              <Button colorScheme="red">Book Seat</Button>
            </Box>
          </Flex>
        ))}
      </Flex>
    </>
  );
}
 
export default BusList;