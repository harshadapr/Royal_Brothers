import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

export default function TagComp() {
  return (
    <Tag
      size={"md"}
      borderRadius="full"
      variant="solid"
      bg={"#f2f2f2"}
      color="black"
    >
      <TagLabel fontFamily={'Mulish'} fontWeight='light' fontSize='10px'>Place</TagLabel>
      <TagCloseButton />
    </Tag>
  );
}
