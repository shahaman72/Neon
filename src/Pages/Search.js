import React from "react";
import { IconButton, Box, HStack } from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";

const Search = () => {
  return (
    <HStack>
      <Sidebar />
      <Box minH="100vh" w={"100%"} ml={"400px"}>
        Search
      </Box>
    </HStack>
  );
};

export default Search;
