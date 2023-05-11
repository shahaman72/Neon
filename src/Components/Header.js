import React from "react";
import {
  Flex,
  Icon,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Avatar,
  useColorModeValue,
  useColorMode,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
const Header = (props) => {
  const btnRef = React.useRef();
  return (
    <VStack>
      {" "}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        w="full"
        px="4"
        // bg="white"
        position={"sticky"}
        _dark={{
          bg: "gray.800",
        }}
        borderBottomWidth="1px"
        borderColor="blackAlpha.300"
        h="14"
        bg="#403A83"
      >
        {" "}
        <IconButton
          aria-label="Menu"
          display={{
            base: "inline-flex",
            md: "none",
          }}
          onClick={props.onClick}
          icon={<FiMenu />}
          size="sm"
        />{" "}
        <IconButton
          aria-label="Menu"
          display={{
            base: "none",
            md: "inline-flex",
          }}
          onClick={props.onClickCollapse}
          _hover={{
            bg: "gray.400",
          }}
          // icon={<FiMenu />}
          size="sm"
          bg={"#403A83"}
        />{" "}
        {/* <InputGroup
          w="96"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          {" "}
          <InputLeftElement color="gray.500">
            {" "}
            <FiSearch />{" "}
          </InputLeftElement>{" "}
          <Input placeholder="Search ..." />{" "}
        </InputGroup>{" "} */}
        <Flex align="center">
          <Avatar
            ml="4"
            size="sm"
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
        </Flex>{" "}
      </Flex>{" "}
    </VStack>
  );
};
export default Header;
