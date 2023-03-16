import { Grid, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import CardComp from "./CardComp";
import {useDispatch, useSelector} from 'react-redux'
import { getData } from "../../Redux/search/action";
import SkeletonComp from "./SkeletonComp";
// import { sortingFunction } from "../../Redux/search/action";

export default function Relevance() {
  const cityData = useSelector((store)=> store.searchReducer.cityData)
  const loading = useSelector((store)=> store.searchReducer.isLoading)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getData())
  },[dispatch])
  return (
    <Stack>
      <Text textAlign={"center"} mb='1rem'>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6}>
        {loading && <SkeletonComp/>}
        {cityData.map((ele, idx) => {
          return <CardComp {...ele} key={idx} />;
        })}
      </Grid>
    </Stack>
  );
}

