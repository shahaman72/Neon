import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FiHome, FiTrendingUp, FiMenu } from "react-icons/fi";
import { IconType, CheckIcon } from "react-icons";
// import { Icon } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const LinkItems = [
  { name: "Home", icon: FiHome, path: "/" },
  { name: "Search", icon: FiTrendingUp, path: "/search" },
];
const LinkItems2 = [
  { name: "Risk Reporting", icon: FiHome, path: "/rp" },
  { name: "Revenue Monthly", icon: FiTrendingUp, path: "/rm" },
];
const handleClick = (link) => {
  console.log("handle clicked", link);
};

export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("props", children);
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      mt={"64px"}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 52 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, name, ...rest }) => {
  console.log("props", name);
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="lg" fontWeight="bold" color={"primary.500"}>
          Text2Sql
        </Text>
      </Flex>

      {/* <Box px={5}>
        <InputGroup>
          <Input placeholder="Search..." />
          <InputRightElement children={<Icon as={BsSearch} />} />
        </InputGroup>
      </Box> */}

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

      {/* <NavItem key={"dfdf"} icon={FiHome} to={"/newchannel"}>
        {"name"}
      </NavItem> */}
    </Box>
  );
};

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Link
      as={NavLink}
      // href="#"
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
