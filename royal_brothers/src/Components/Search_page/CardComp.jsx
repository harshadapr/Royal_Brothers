import React from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Button,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";

export default function CardComp() {
  return (
    <Card maxW="sm" boxShadow={"md"}>
      <CardBody>
        <Text
          fontSize={"1rem"}
          mb="10px"
          fontWeight={"bold"}
          textAlign="center"
        >
          Royal Enfield Classic 350 Reborn
        </Text>
        <Image
          h={"150px"}
          w="300px"
          src="https://imgd.aeplcdn.com/1280x720/bw/ec/26288/Royal-Enfield-Bullet-350-Twinspark-Side-86212.jpg?v=201711021421"
          textAlign={"center"}
          m="0px auto"
          mb="10px"
        ></Image>
        <Text textAlign={"center"} fontSize="14px">
          Available at
        </Text>
        {/* Select */}
        <Select
          variant="flushed"
          placeholder="Location"
          border={"none"}
          mb="10px"
          fontSize="14px"
          size={"xs"}
        >
          <option>Fully Available</option>
          <option>Ranchi</option>
          <option>Raipur</option>
          <option>Kolkata</option>
          <option>Delhi</option>
        </Select>
        <Flex justify={"space-between"} mb="10px" mt={"20px"}>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px">
              09:30 am
            </Text>
            <Text fontSize="12px">15 Mar 2023</Text>
          </Box>
          <Box>
            <Button bg="black" color={"white"} width="15px" borderRadius="50%" fontSize={'14px'}>
              to
            </Button>
          </Box>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px">
              12:00 pm
            </Text>
            <Text fontSize="12px">15 Mar 2023</Text>
          </Box>
        </Flex>
        <hr
          style={{ height: "10px", backgroundColor: "#f6f6f6", border: "none" }}
        />
        <Flex justify={"space-between"} mt='10px'>
          <Box>
            <Text fontWeight={"bold"} fontSize="14px" textAlign={"center"}>
              ₹ 210
            </Text>
            <Text fontSize="12px">(50 km included)</Text>
          </Box>
          <Box>
            <Button bg={"#fed250"} width="150px">
              Book
            </Button>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}
