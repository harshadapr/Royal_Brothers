import React from 'react'
import { Stack,Checkbox,Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function BikeOptions() {
    const data = useSelector((store)=> store.searchReducer.cityData)
  return (
    <Stack h={"100px"} overflow="auto" border={'1px solid #c1c1c1'}p="5px 0px">
      {data.map((ele) => {
        return (
          <Flex
            alignItems={"center"}
            p="0px 25px"
            fontSize={"12px"}
            gap={3}
            h="25px"
            _hover={{
              background: "#f2f2f2",
            }}
            borderBottom="1px solid #f2f2f2"
            fontFamily={"Mulish"}
            fontWeight='light'
          >
            <Checkbox border={"grey"} bg={"white"} size={"sm"} ></Checkbox>
            {ele.model}
          </Flex>
        );
      })}
    </Stack>
  )
}
