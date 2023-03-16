import { Grid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import CardComp from "./CardComp";

export default function Relevance() {
  const array = [
    {
      img: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/272/medium/Activa-6G.png?1666077785",
      name: "Activa 4g",
      price: 170,
    },
    {
      img: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/333/medium/YAMAHA_AEROX.png?1660656218",
      name: "Yamaha 4g",
      price: 250,
    },
    {
      img: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/301/medium/ROYAL_ENFIELD_CLASSIC_350_REBORN.png?1660734514",
      name: "Royal Enfield 4g",
      price: 500,
    },
    {
      img: "https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/321/medium/BAJAJ_PULSAR_250N.png?1660735126",
      name: "Pulsar 4g",
      price: 300,
    },
  ];
  return (
    <Stack>
      <Text textAlign={"center"} mb='1rem'>
        *All prices are exclusive of taxes and fuel. Images used for
        representation purposes only, actual color may vary.
      </Text>
      <Grid templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)"]} gap={6}>
        {array.map((ele, idx) => {
          return <CardComp {...ele} key={idx} />;
        })}
      </Grid>
    </Stack>
  );
}
