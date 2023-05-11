import React from "react";
import { useEffect, useState } from "react";
import {
  IconButton,
  Box,
  HStack,
  Stack,
  Flex,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  VStack,
  Icon,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import Sidebar from "../Components/Sidebar";
import growth from "../assets/growth.png";
import trends from "../assets/trend.png";
import rp1 from "../assets/rp1.PNG";
import { GiGrowth } from "react-icons/gi";
import { GrLike } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import { FiHome, FiTrendingUp, FiMenu } from "react-icons/fi";
import pdf from "../assets/rr.pdf";

const RiskReporting = () => {
  const [question, setQuestion] = useState("");
  const [questionArr, setQuestionArr] = useState([]);
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    console.log("e", e.target.value);
    setQuestion(e.target.value);
  };

  const handleClick = () => {
    setQuestionArr(question);
    setCount(count + 1);
  };
  const deleteLikeCount = () => {
    setQuestionArr(question);
    setLikeCount(likeCount - 1);
  };
  const handleSubmit = (e) => {
    console.log("e", e);
    onOpen();
  };
  const handleLikeCount = () => {
    setQuestionArr(question);
    setLikeCount(likeCount + 1);
  };
  console.log("count", count);
  return (
    <HStack w={"100%"} h={"80vh"}>
      <VStack w={"80%"} h={"80vh"} bg={"#CBD5E0"}>
        <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Risk Reporting</ModalHeader>
            <ModalFooter>
              <Button bg={"#403A83"} color={"#fff"} mr={3}>
                Download
              </Button>
              <Button variant="ghost" onClick={onClose}>
                {" "}
                Close
              </Button>
            </ModalFooter>
            <ModalCloseButton />
            <ModalBody>
              {/* src="https://docs.google.com/viewer?url=${pdf}&embedded=true"> */}
              <iframe height="1100" width="850" src={pdf}></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Flex
          align="center"
          justify="space-between"
          w="100%"
          p={4}
          bg={"#403A83"}
          color={"#FFF"}
          borderRadius={"10px"}
          top={0}
        >
          Risk Reporting
        </Flex>

        <VStack w={"100%"} overflowY={"scroll"} maxH={"100%"} bg={"red"} mb={0}>
          {count >= 5 && questionArr && (
            <Box w={"100%"}>
              <HStack w={"100%"} justify={"end"}>
                <Flex
                  maxW={"50%"}
                  p={4}
                  color={"#fff"}
                  borderRadius={"10px"}
                  bg={"#403A83"}
                  mt={2}
                >
                  <Text>
                    How much is the risk weighted asset in different regions.
                  </Text>
                </Flex>
              </HStack>
              <HStack w={"100%"} justify={"start"}>
                <Flex maxW={"50%"} p={4} borderRadius={"10px"} bg={"#EDF2F7"}>
                  <HStack align={"flex-start"} spacing={4}>
                    <Box bg={"yellow"} borderRadius={"full"} p={1}>
                      <Icon as={FiHome} w={"30px"} h={"24px"} />
                    </Box>
                    <VStack justify={"start"} align={"start"}>
                      <Text
                        fontSize={"18px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Risk Reporting
                      </Text>
                      <Image
                        boxSize="250px"
                        objectFit="cover"
                        src={rp1}
                        alt="Dan Abramov"
                      />
                    </VStack>
                  </HStack>
                </Flex>
              </HStack>
            </Box>
          )}
          {count >= 4 && questionArr && (
            <Box w={"100%"}>
              <HStack w={"100%"} justify={"end"}>
                <Flex
                  maxW={"50%"}
                  p={4}
                  color={"#fff"}
                  borderRadius={"10px"}
                  bg={"#403A83"}
                  mt={2}
                >
                  <Text>How much is the RWA in different segments?</Text>
                </Flex>
              </HStack>
              <HStack w={"100%"} justify={"start"}>
                <Flex maxW={"50%"} p={4} borderRadius={"10px"} bg={"#DDDDDD"}>
                  <HStack align={"flex-start"} spacing={4}>
                    <Box bg={"yellow"} borderRadius={"full"} p={1}>
                      <Icon as={FiHome} w={"30px"} h={"24px"} />
                    </Box>
                    <VStack justify={"start"} align={"start"}>
                      <Text
                        fontSize={"18px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Risk Reporting
                      </Text>
                      {/* <Text fontSize={"10px"} color={"#275DAD"} ml={4}>
                        The Data ranges from 1 jan to 5 dec.
                      </Text> */}

                      <Image
                        boxSize="300px"
                        // objectFit="cover"
                        src={trends}
                        alt="Dan Abramov"
                      />
                    </VStack>
                  </HStack>
                </Flex>
              </HStack>
            </Box>
          )}
          {count >= 3 && questionArr && (
            <Box w={"100%"}>
              <HStack w={"100%"} justify={"end"}>
                <Flex
                  maxW={"50%"}
                  p={4}
                  color={"#fff"}
                  borderRadius={"10px"}
                  bg={"#403A83"}
                  mt={2}
                >
                  <Text>
                    What was the maximum exposure in Corporate, Commercial and
                    Institutional Banking?
                  </Text>
                </Flex>
              </HStack>
              <HStack w={"100%"} justify={"start"}>
                <Flex maxW={"50%"} p={4} borderRadius={"10px"} bg={"#DDDDDD"}>
                  <HStack align={"flex-start"} spacing={4}>
                    <Box bg={"yellow"} borderRadius={"full"} p={1}>
                      <Icon as={FiHome} w={"30px"} h={"24px"} />
                    </Box>
                    <VStack justify={"start"} align={"start"}>
                      <Text
                        fontSize={"18px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Risk Reporting
                      </Text>

                      {/* <Image boxSize="250px" src={trends} alt="Dan Abramov" /> */}
                      <Text textAlign={"left"}>183,784 $ million</Text>
                    </VStack>
                  </HStack>
                </Flex>
              </HStack>
            </Box>
          )}

          {count >= 2 && questionArr && (
            <Box w={"100%"}>
              <HStack w={"100%"} justify={"end"}>
                <Flex
                  maxW={"50%"}
                  p={4}
                  color={"#fff"}
                  borderRadius={"10px"}
                  bg={"#403A83"}
                  mt={2}
                >
                  <Text>
                    What was the maximum exposure in Consumer, Private and
                    Business Banking?
                  </Text>
                </Flex>
              </HStack>
              <HStack w={"100%"} justify={"start"}>
                <Flex maxW={"50%"} p={4} borderRadius={"10px"} bg={"#DDDDDD"}>
                  <HStack align={"flex-start"} spacing={4}>
                    <Box bg={"yellow"} borderRadius={"full"} p={1}>
                      <Icon as={FiHome} w={"30px"} h={"24px"} />
                    </Box>
                    <VStack justify={"start"} align={"start"}>
                      <Text
                        fontSize={"18px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Risk Reporting
                      </Text>

                      <Text textAlign={"left"}>136,518 $ million</Text>
                      <IconButton
                        aria-label="Search database"
                        icon={<GrLike />}
                        bg={"#DDDDDD"}
                        onClick={handleLikeCount}
                      />
                    </VStack>
                  </HStack>
                </Flex>
              </HStack>
            </Box>
          )}

          {count >= 1 && questionArr && (
            <Box w={"100%"}>
              <HStack w={"100%"} justify={"end"}>
                <Flex
                  maxW={"50%"}
                  p={4}
                  color={"#fff"}
                  borderRadius={"10px"}
                  bg={"#403A83"}
                  mt={2}
                >
                  <Text>
                    How much was the Total loans and advances to customers?
                  </Text>
                </Flex>
              </HStack>
              <HStack w={"100%"} justify={"start"}>
                <Flex maxW={"50%"} p={4} borderRadius={"10px"} bg={"#EDF2F7"}>
                  <HStack align={"flex-start"} spacing={4}>
                    <Box bg={"yellow"} borderRadius={"full"} p={1}>
                      <Icon as={FiHome} w={"30px"} h={"24px"} />
                    </Box>
                    <VStack justify={"start"} align={"start"}>
                      <Text
                        fontSize={"18px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Risk Reporting
                      </Text>
                      <Text textAlign={"left"}>285,922 $ million</Text>
                      <HStack>
                        <IconButton
                          aria-label="Search database"
                          icon={<GrLike />}
                          bg={"#DDDDDD"}
                          onClick={handleLikeCount}
                        />
                      </HStack>

                      {/* <Image boxSize="250px" src={sales} alt="Dan Abramov" /> */}
                    </VStack>
                  </HStack>
                </Flex>
              </HStack>
            </Box>
          )}
        </VStack>
        <Flex
          align="center"
          justify="space-between"
          w="68%"
          p={4}
          color={"#403A83"}
          borderRadius={"10px"}
          bottom={0}
          position={"fixed"}
        >
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={"text"}
              placeholder="Enter Here"
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                Enter
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </VStack>
      <VStack w={"20%"} h={"80vh"}>
        <Flex
          align="center"
          justify="space-between"
          w="100%"
          p={4}
          bg={"#403A83"}
          color={"#FFF"}
          borderRadius={"10px"}
          top={0}
        >
          Report Generation
        </Flex>

        <VStack
          w={"100%"}
          overflowY={"scroll"}
          // maxH={"100%"}
          h={"700px"}
          justify={"space-around"}
          boxShadow={"xl"}
          mb={2}
          // h={"30vh"}
        >
          {likeCount >= 1 && (
            <Box w={"100%"} mt={"-360px"}>
              <HStack w={"100%"} justify={"start"}>
                <Flex maxW={"100%"} p={4} borderRadius={"10px"} bg={"#DDDDDD"}>
                  <HStack align={"flex-start"} spacing={4}>
                    <Text
                      fontSize={"16px"}
                      color={"#275DAD"}
                      textAlign={"left"}
                    >
                      How much was the Total loans and advances to customers?
                    </Text>
                  </HStack>
                </Flex>
                <IconButton
                  aria-label="Search database"
                  icon={<MdDeleteOutline />}
                  bg={"#DDDDDD"}
                  onClick={deleteLikeCount}
                />
              </HStack>
            </Box>
          )}
          {likeCount >= 2 && (
            <HStack mt={"-100px"}>
              <Box w={"100%"} mt={"-380px"}>
                <HStack w={"100%"} justify={"start"}>
                  <Flex
                    maxW={"100%"}
                    p={4}
                    borderRadius={"10px"}
                    bg={"#DDDDDD"}
                  >
                    <HStack align={"flex-start"} spacing={4}>
                      <Text
                        fontSize={"16px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        What was the revenue in december?
                      </Text>
                    </HStack>
                  </Flex>
                  {/* <Icon as={GrLike} w={"20px"} h={"20px"} color="red.500" /> */}
                  <IconButton
                    aria-label="Search database"
                    icon={<MdDeleteOutline />}
                    bg={"#DDDDDD"}
                    onClick={deleteLikeCount}
                  />
                </HStack>
                <HStack w={"100%"} justify={"start"} mt={2}>
                  <Flex
                    maxW={"100%"}
                    p={4}
                    borderRadius={"10px"}
                    bg={"#DDDDDD"}
                  >
                    <HStack align={"flex-start"} spacing={4}>
                      <Text
                        fontSize={"16px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        How much was the Total loans and advances to customers?
                      </Text>
                    </HStack>
                  </Flex>
                  {/* <Icon as={GrLike} w={"20px"} h={"20px"} color="red.500" /> */}
                  <IconButton
                    aria-label="Search database"
                    icon={<MdDeleteOutline />}
                    bg={"#DDDDDD"}
                    onClick={deleteLikeCount}
                  />
                </HStack>
              </Box>
            </HStack>
          )}
          {likeCount >= 3 && (
            <HStack mt={"-100px"}>
              <Box w={"100%"} mt={"-420px"}>
                <HStack w={"100%"} justify={"start"}>
                  <Flex
                    maxW={"100%"}
                    p={4}
                    borderRadius={"10px"}
                    bg={"#DDDDDD"}
                  >
                    <HStack align={"flex-start"} spacing={4}>
                      <Text
                        fontSize={"16px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        What was the revenue in december?
                      </Text>
                    </HStack>
                  </Flex>
                  {/* <Icon as={GrLike} w={"20px"} h={"20px"} color="red.500" /> */}
                  <IconButton
                    aria-label="Search database"
                    icon={<MdDeleteOutline />}
                    bg={"#DDDDDD"}
                    onClick={deleteLikeCount}
                  />
                </HStack>
                <HStack w={"100%"} justify={"start"} mt={2}>
                  <Flex
                    maxW={"100%"}
                    p={4}
                    borderRadius={"10px"}
                    bg={"#DDDDDD"}
                  >
                    <HStack align={"flex-start"} spacing={4}>
                      <Text
                        fontSize={"16px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Display the sales by region.
                      </Text>
                    </HStack>
                  </Flex>
                  {/* <Icon as={GrLike} w={"20px"} h={"20px"} color="red.500" /> */}
                  <IconButton
                    aria-label="Search database"
                    icon={<MdDeleteOutline />}
                    bg={"#DDDDDD"}
                    onClick={deleteLikeCount}
                  />
                </HStack>
                <HStack w={"100%"} justify={"start"} mt={2}>
                  <Flex
                    maxW={"100%"}
                    p={4}
                    borderRadius={"10px"}
                    bg={"#DDDDDD"}
                  >
                    <HStack align={"flex-start"} spacing={4}>
                      <Text
                        fontSize={"16px"}
                        color={"#275DAD"}
                        textAlign={"left"}
                      >
                        Show the last 12 months trends.
                      </Text>
                    </HStack>
                  </Flex>
                  {/* <Icon as={GrLike} w={"20px"} h={"20px"} color="red.500" /> */}
                  <IconButton
                    aria-label="Search database"
                    icon={<MdDeleteOutline />}
                    bg={"#DDDDDD"}
                    onClick={deleteLikeCount}
                  />
                </HStack>
              </Box>
            </HStack>
          )}
        </VStack>
        {likeCount >= 1 && (
          <Button
            color={"#fff"}
            bg={"#403A83"}
            onClick={(e) => {
              handleSubmit(e);
            }}
            fontSize={"16px"}
            h={"50px"}
          >
            Submit
          </Button>
        )}
      </VStack>
    </HStack>
  );
};

export default RiskReporting;
