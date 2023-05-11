import React from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  HStack,
  useDisclosure,
  Flex,
  SimpleGrid,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const Layout = (props) => {
  const id = new URLSearchParams(window.location.search).get("add");
  console.log("id", window.location);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      {" "}
      <Sidebar
        display={{
          base: "none",
          md: "unset",
        }}
      />
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        {" "}
        <Header
        //   onClick={sidebar.onOpen}
        //   onClickCollapse={collapseSidebar.onToggle}
        />
        <Box p="4" w={"100%"} maxH={"full"}>
          {" "}
          {/* <VStack h={"100%"}> */}
          {/* <Flex
            justify={"center"}
            align={"flex-start"}
            w={"100%"}
            maxH={"full"}
          > */}{" "}
          {props.children}
          {/* </Flex> */}
          {/* </VStack> */}
        </Box>{" "}
      </Box>{" "}
    </Box>
  );
};
export default Layout;
