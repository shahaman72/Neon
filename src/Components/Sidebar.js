import { Box, Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import axios from "axios";
import { FiHome, FiTrendingUp, FiMenu } from "react-icons/fi";
// import { FiSearch, FiMenu } from "react-icons/fi";import Link from "next/link";
const Sidebar = (props) => {
  const res = axios.get("http://127.0.0.1:8000/get_channels");
  res
    .then((res) => {
      console.log("hit", res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
  console.log("props", props);
  const LinkItems = [
    { name: "Home", icon: FiHome, path: "/home" },
    // { name: "Search", icon: FiTrendingUp, path: "/" },
  ];
  const LinkItems2 = [
    { name: "Risk Reporting", icon: FiHome, path: "/rp" },
    { name: "Revenue Reporting", icon: FiTrendingUp, path: "/rm" },
  ];
  const LinkItems3 = [
    { name: props.name, icon: props.name ? FiHome : "", path: "/nc" },
  ];

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="#fff"
      _dark={{
        bg: "gray.800",
      }}
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      {" "}
      <HStack
        justify={"space-between"}
        px="4"
        py="5"
        align="center"
        h={"56px"}
        bg={"#403A83"}
      >
        {" "}
        <Text fontSize="2xl" ml="2" color="#fff" fontWeight="semibold">
          {" "}
          Neon
        </Text>{" "}
      </HStack>{" "}
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {" "}
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} to={link.path}>
            {link.name}
          </NavItem>
        ))}
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="lg" fontWeight="bold" color={"primary.500"}>
            Channels
          </Text>
        </Flex>
        {LinkItems2.map((link) => (
          <NavItem key={link.name} icon={link.icon} to={link.path}>
            {link.name}
          </NavItem>
        ))}
        {LinkItems3.map((link) => (
          <NavItem key={link.name} icon={link.icon} to={link.path}>
            {link.name}
          </NavItem>
        ))}
      </Flex>
    </Box>
  );
};
export default Sidebar;
