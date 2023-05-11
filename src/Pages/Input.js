import React from "react";
import { IconButton, Box, HStack } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import axios from "axios";

const Input = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <HStack>
      <Sidebar />
      <Box w={"100%"}>input</Box>
    </HStack>
  );
};

export default Input;
