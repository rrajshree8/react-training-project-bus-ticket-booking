import {
  Stack,
  //   Flex,
  Button,
  Text,
  VStack,
  Select,
  useBreakpointValue,
} from "@chakra-ui/react";

import React, { useState } from "react";

import { Input } from "@chakra-ui/react";
import busData from "./bus-data.json";
import BusList from "./DisplayBusList.js";
import { Link } from "react-router-dom";

const SearchBar = ({ onChangeValue }) => {
  const today = new Date().toISOString().split("T")[0];
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [AC, setAC] = useState(""); // Change AC to a state variable
  const [date, setDate] = useState("");
  const [buses, setBuses] = useState(busData.buses);
  const [showBusList, setShowBusList] = useState(false);

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

  function handeSubmit(e) {
    e.preventDefault();
    console.log(from, to, date);
    setShowBusList(true);
    onChangeValue({ from, to, date, AC });
  }
  return (
    <VStack
      w={"full"}
      h={"full"}
      justify={"center"}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <form onSubmit={handeSubmit}>
        <Stack maxW={"3xl"} align={"flex-start"} spacing={8}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {/* Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor */}
          </Text>
          <Stack direction={"row"}>
            <Select
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              required
              variant="filled"
              // _hover={{ bg: "white" }}
              _focus={{ bg: "white" }}
              size="lg"
              placeholder="From"
            >
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
            </Select>
            <Select
              onChange={(e) => setTo(e.target.value)}
              value={to}
              required
              variant="filled"
              // _hover={{ bg: "white" }}
              _focus={{ bg: "white" }}
              size="lg"
              placeholder="To"
            >
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
            </Select>
            <Input
              type="date"
              min={today}
              variant="filled"
              _focus={{ bg: "white" }}
              _hover={{ bg: "white" }}
              size="lg"
              onChange={(e) => setDate(e.target.value)}
            />
            <Link to="/miniDasboard" style={{display:"flex", padding:"0px", margin:"0px" }}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                type="submit"
                backgroundColor={"red"}
                _hover={{ bg: "red.500" }}
                w={"10rem"}
                size="lg"
              >
                SEARCH BUSES
              </Button>
            </Link>
          </Stack>
        </Stack>
      </form>
      {/* {showBusList && <BusList from={from} to={to} date={date} AC={AC} buses={buses}/>} */}
    </VStack>
  );
};

export default SearchBar;
