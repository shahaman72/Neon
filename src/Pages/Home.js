import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from "../Components/Sidebar";

import {
  IconButton,
  Box,
  HStack,
  VStack,
  Stack,
  StackDivider,
  Flex,
  Spacer,
  Button,
  Text,
  Input,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Select,
  Badge,
  useToast,
  Divider,
} from "@chakra-ui/react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [options, setOptions] = useState(["1", "2", "3"]);
  const [selectedOption, setSelectedOption] = useState("");

  const toast = useToast();
  const navigate = useNavigate();
  const HandleChange = (e) => {
    console.log("e", e.target.value);
    setName(e.target.value);
  };

  let postRequest = (url, data) => {
    return axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };

  const handleClick = (e) => {
    const url = "http://127.0.0.1:8000/add_channel";
    const data = {
      channel_name: name,
      database_name: selectedOption,
      metadata: {},
    };
    postRequest(url, data)
      .then((res) => {
        console.log("post api fired");
        // handle successful response data
      })
      .catch((error) => {
        // handle error
        console.log("post api fired");
      });
    e.preventDefault();
    console.log("Selected option:", selectedOption);

    console.log("clicked");
    toast({
      title: `Channel Added`,
      position: "top - left",
      isClosable: true,
      status: "success",
    });

    navigate("/home?add");
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const res = axios.get("https://jsonplaceholder.typicode.com/todos/1");
  res
    .then((res) => {
      console.log("hit", res.data);
    })
    .catch((err) => {
      console.log("err", err);
    });
  return (
    <VStack>
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        p={4}
        // bg={"#403A83"}
        color={"#000"}
        borderRadius={"10px"}
      >
        Home
      </Flex>
      <Sidebar name={name} />;
      <HStack w={"100%"} align={"flex-start"} p={4} spacing={8}>
        <VStack w={"40%"}>
          <Flex
            align="center"
            justify="space-between"
            p={4}
            bg={"#403A83"}
            color={"#FFF"}
            borderRadius={"10px"}
            w={"100%"}
          >
            Add Channel
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            p={4}
            bg={"#FFF"}
            borderRadius={"10px"}
            boxShadow={"2xl"}
            w={"100%"}
          >
            <Stack spacing={3}>
              <Divider />
              <Text fontSize="xl " color={"#403A83"}>
                Channel Name
              </Text>
              <Input
                w={"100%"}
                variant="filled"
                placeholder="Enter Channel Name"
                onChange={(e) => {
                  HandleChange(e);
                }}
              />
              <Divider />

              <Text fontSize="xl " color={"#403A83"}>
                Select DataBase
              </Text>
              <Divider />

              <Select
                placeholder="Select option"
                onChange={handleSelectChange}
                value={selectedOption}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                {/* 
                <option value="option1">Database 1</option>
                <option value="option2">Database 2</option>
                <option value="option3">Database 3</option> */}
              </Select>
              <Divider />
              <Divider />
              <Divider />
              <Button
                bg="#403A83"
                color={"#fff"}
                w={"40%"}
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                <Text fontSize="16px ">Submit</Text>
              </Button>
            </Stack>
          </Flex>
        </VStack>
        <VStack w={"60%"}>
          <Flex
            align="center"
            justify="space-between"
            w="100%"
            p={4}
            bg={"#403A83"}
            color={"#FFF"}
            borderRadius={"10px"}
          >
            Report Details
          </Flex>
          <Flex
            align="center"
            justify="space-between"
            w="100%"
            p={4}
            bg={"#d5d9e0"}
            color={"#FFF"}
            borderRadius={"10px"}
          >
            <TableContainer w={"100%"}>
              <Table variant="simple" borderTop={"1px red"}>
                <TableCaption>Report Summary</TableCaption>
                <Thead borderBottom={"1px red"}>
                  <Tr>
                    <Th>Report Name</Th>
                    <Th>Status</Th>
                    <Th>Download</Th>
                    <Th isNumeric>last Updated</Th>
                  </Tr>
                </Thead>

                <Tbody color={"#000"}>
                  <Tr>
                    <Td>Invoice Register </Td>
                    <Td>
                      <Badge colorScheme="green">Drafted</Badge>
                    </Td>
                    <Td>
                      <Button color={"#fff"} bg={"#403A83"} size={"sm"}>
                        Download
                      </Button>
                    </Td>
                    <Td isNumeric>25 Feb 2022</Td>
                  </Tr>
                  <Tr>
                    <Td>Order Status</Td>
                    <Td>
                      <Badge colorScheme="purple">Pending</Badge>
                    </Td>
                    <Td>
                      <Button
                        w={"70%"}
                        color={"#000"}
                        bg={"#E9D8FD"}
                        size={"sm"}
                      >
                        View
                      </Button>
                    </Td>
                    <Td isNumeric>18 June 2022</Td>
                  </Tr>
                  <Tr>
                    <Td>Letters of Credit</Td>
                    <Td>
                      <Badge colorScheme="green">Drafted</Badge>
                    </Td>
                    <Td>
                      <Button color={"#fff"} bg={"#403A83"} size={"sm"}>
                        Download
                      </Button>
                    </Td>
                    <Td isNumeric>04 May 2022</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Flex>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Home;
