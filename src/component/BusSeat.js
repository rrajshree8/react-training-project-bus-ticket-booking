import { Box, Flex, Grid, GridItem, Text, Image, Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Sleeper from "./Sleeper";
import Seater from "./Seater";
import Stear from "../Assets/steering.png";
import buses from "../Assets/data";
// import { wrap } from "framer-motion";
import { Wrap, WrapItem } from '@chakra-ui/react'

const BusSeat = () => {
  const buttonSize = useBreakpointValue({ base: "large", md: "l", lg: "xl" });

  return (
    <Box bg="#F8F8F8" h="100%" p={4}>
      <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} gap={3} ml="10px">
        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Text fontSize="x-large" fontWeight="700">
            Seat Available
          </Text>
          <Text fontSize="small" color="#BABABA">
            Click on seat to select/deselect
          </Text>
        </GridItem>
        <GridItem h="10">
          <Grid templateColumns="repeat(5, 1fr)" gap={3}>
            <GridItem>
              <Flex
                minWidth="max-content"
                alignItems="center"
                gap="2"
                justifyContent="center"
                flexDirection="column"
              >
                <Box
                  h="30px"
                  w="30px"
                  style={{
                    border: "2px solid #BABABA",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                Available Seats
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                minWidth="max-content"
                alignItems="center"
                gap="2"
                justifyContent="center"
                flexDirection="column"
              >
                <Box
                  h="30px"
                  w="30px"
                  style={{
                    border: "2px solid #FF79BE",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                Available For Female
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                minWidth="max-content"
                alignItems="center"
                gap="2"
                justifyContent="center"
                flexDirection="column"
              >
                <Box
                  h="30px"
                  w="30px"
                  style={{
                    border: "2px solid #BABABA",
                    backgroundColor: "#DEDEDE",
                    borderRadius: "5px",
                  }}
                />
                Booked Seats
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                minWidth="max-content"
                alignItems="center"
                gap="2"
                justifyContent="center"
                flexDirection="column"
              >
                <Box
                  h="30px"
                  w="30px"
                  style={{
                    border: "2px solid #53B2FF",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
                Available For Male
              </Flex>
            </GridItem>
            <GridItem>
              <Flex
                minWidth="max-content"
                alignItems="center"
                gap="2"
                justifyContent="center"
                flexDirection="column"
              >
                <Box
                  h="30px"
                  w="30px"
                  style={{
                    border: "2px solid #3EBF70",
                    backgroundColor: "#D8F2E2",
                    borderRadius: "5px",
                  }}
                />
                Selected Seats
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
      <Box mt="100px" ml={{base: "0", md: "4"}}>
        <Flex flexDirection={{ base: "column", md: "row"}} gap="5">
        <Button
              color="#C32629"
              fontSize={buttonSize}
              fontWeight="600"
             background="#FEFEFE"
             _hover={{background:'#DC635B', color:'#FEFEFE'}}
            >
              All
            </Button>

                  
        <Button
              color="#C32629"
              fontSize={buttonSize}
              fontWeight="600"
             background="#FEFEFE"
             _hover={{background:'#DC635B', color:'#FEFEFE'}}
            >
              ₹ 549
            </Button>
            <Button
              color="#C32629"
              fontSize={buttonSize}
              fontWeight="600"
             background="#FEFEFE"
             _hover={{background:'#DC635B', color:'#FEFEFE'}}
            >
              ₹ 1000
            </Button>
            <Button
              color="#C32629"
              fontSize={buttonSize}
              fontWeight="600"
             background="#FEFEFE"
             _hover={{background:'#DC635B', color:'#FEFEFE'}}
            >
              ₹ 1500
            </Button>

          
        </Flex>
      </Box>

      <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"}} gap={10}>
        <GridItem colSpan={{base: 1, md: 2}}>
          <Box bg="#FFFFFF" mt="50px" ml="50px" borderRadius="10px" p="10px">
            <Flex>
              <Box>
                <Flex>
                  <Text fontWeight="bold" transform="rotate(-90deg)" mt="350px">
                    UPPER
                  </Text>
                </Flex>
              </Box>
              <Box display="flex" flexWrap="wrap" w="100%">

                <Grid  w="100%"  templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)"}} gap={5} >
                  {buses[0].seats.sleeper.map((item, ind) => {
                    return (
                      <GridItem key={ind}>
                        <Sleeper item={item} />
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
            </Flex>
          </Box>

          <Box bg="#FFFFFF" mt="50px" ml="50px" borderRadius="10px" p="10px">
            <Flex>
              <Box>
              <Flex flexDirection="column">
                  <Image src={Stear} width="50px" height="50px" />
                  <Text fontWeight="bold" mt="190px" transform="rotate(-90deg)">
                    LOWER
                  </Text>
                </Flex>
              </Box>
              <Box w="100%">
                <Grid templateColumns={{base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(5, 1fr)"}}>
                  {buses[0].seats.seater.map((item, ind) => {
                    return (
                      <GridItem key={ind}>
                        <Seater item={item} />
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
            </Flex>
          </Box>
        </GridItem>
        <Box>
       <Box bg="#FFFFFF" mt="50px" ml="50px" borderRadius="10px" p="10px" w="300px" h="300px">
       <Text fontWeight="800" fontSize="x-large" color="#C32629" textAlign="center">
        Boarding Point
       </Text>
       </Box>
       <Box bg="#FFFFFF" mt="50px" ml="50px" borderRadius="10px" p="10px" w="300px" h="300px">
       <Text fontWeight="800" fontSize="x-large" color="#C32629" textAlign="center">
        Dropping Point
       </Text>
       </Box>
       <Button mt="80px" ml="50px" w="200px" color="#FEFEFE" background="#DC635B" _hover={{background:'#541715'}}>
        Continue
       </Button>
       </Box>
        <GridItem>

        </GridItem>
      </Grid>
    </Box>
  );
};

export default BusSeat;
