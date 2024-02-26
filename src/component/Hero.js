import {
  Flex,
} from "@chakra-ui/react";

import React, { useState } from "react";
import backgroundImage from "../assets/Hero.jpeg";
import SearchBar from "./SearchBar.js";

export default function Hero() {
 

  return (
    <Flex
      w={"full"}
      h={"65vh"}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
    <SearchBar/>
    </Flex>
  );
}


