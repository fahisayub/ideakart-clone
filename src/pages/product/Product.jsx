import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  Heading,
  Table,
  TableContainer,
  Tr,
  Th,
  Tbody,
  Thead,
  Td,
  Link,
  Img,
  TableCaption,
} from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
const Product = () => {
  return (
    <div>
      <Container
        display="flex"
        margin="auto"
        maxWidth="80%"
        border="1px solid black"
      >
        <Container width="40%" border="1px solid black">
          <Box
            margin="auto"
            padding="10px"
            borderRadius="10px"
            border=" 1px solid grey"
          >
            <Img
              margin="auto"
              src={`https://images-eu.ssl-images-amazon.com/images/I/41i4F7wRBWL.jpg`}
            />
          </Box>
          <Text></Text>
          <Box display="flex" justifyContent="space-between" padding="20px">
            <Text fontSize="xx-large">Rs:595/-</Text>
            <Button bgColor="orange">Buy Now</Button>
          </Box>
          <Box bgColor="green.300" padding="10px">
            <Link>
              Get intant cashback when you pay using Amazon pay... Click Here
            </Link>
          </Box>
          <Heading fontSize="x-large">Book Specification</Heading>
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>inches</Th>
                  <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                  <Th>feet</Th>
                  <Td>centimetres (cm)</Td>
                </Tr>
                <Tr>
                  <Th>yards</Th>
                  <Td>metres (m)</Td>
                </Tr>
                <Tr>
                  <Th>inches</Th>
                  <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                  <Th>feet</Th>
                  <Td>centimetres (cm)</Td>
                </Tr>
                <Tr>
                  <Th>yards</Th>
                  <Td>metres (m)</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
        <Container maxW="60%" border="1px solid black" padding="50px">
          <Box display="flex" justifyContent="space-between" padding="10px">
            <Text>Refresh</Text>
            <Button gap="10px" bgColor="green.400" color="white">
              Refresh Price <SpinnerIcon />
            </Button>
          </Box>
          <Box>
            <Heading>Title</Heading>
          </Box>
          <Box
            border="1px solid grey"
            bgColor="gray.200"
            borderRadius="10px"
            padding="10px"
          >
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium quos qui nisi odio eius, dignissimos in ut voluptates
              quibusdam adipisci asperiores itaque reiciendis ipsum id sed
              aliquam, error mollitia commodi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Praesentium quos qui nisi odio eius,
              dignissimos in ut voluptates quibusdam adipisci asperiores itaque
              reiciendis ipsum id sed aliquam, error mollitia commodi. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
              quos qui nisi odio eius, dignissimos in ut voluptates quibusdam
              adipisci asperiores itaque reiciendis ipsum id sed aliquam, error
              mollitia commodi.
            </Text>
          </Box>
          <TableContainer>
            <Table variant="simple">
              <Thead justifyContent="space-evenly">
                <Tr>
                  <Th>Store</Th>
                  <Th>Price</Th>
                  <Th>Buy Now</Th>
                </Tr>
              </Thead>
              <Tbody justifyContent="space-evenly">
                <Tr bgColor="gray.100">
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>
                    <Button bgColor="blue.500" color="white">
                      Buy Now
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Container>
      <Container maxW="80%">
        <Heading>Why you should read Principles of Management, Second Edition by Ramesh B Rudani </Heading>
        <Box>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            eveniet veniam quaerat magnam voluptates dicta quo iste nemo eos
            labore minus ratione expedita laboriosam inventore perspiciatis
            molestiae, natus ipsam dolore!
          </Text>
        </Box>
      </Container>
      <Container maxW="80%">
        <Heading>How long would it take for you to read Principles of Management, Second Edition </Heading>
        <Box border="1px solid black" bgColor="gray.100">
          <Text fontSize="x-large">
            Depending on your reading style, this is how much time you would
            take to complete reading this book.
          </Text>
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>inches</Th>
                  <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                  <Th>feet</Th>
                  <Td>centimetres (cm)</Td>
                </Tr>
                <Tr>
                  <Th>yards</Th>
                  <Td>metres (m)</Td>
                </Tr>
                <Tr>
                  <Th>inches</Th>
                  <Td>millimetres (mm)</Td>
                </Tr>
                <Tr>
                  <Th>feet</Th>
                  <Td>centimetres (cm)</Td>
                </Tr>
                <Tr>
                  <Th>yards</Th>
                  <Td>metres (m)</Td>
                </Tr>
              </Tbody>
              
            </Table>
           
          </TableContainer>
          
          <Text textAlign='left' padding='10px'>
              So if you are a Reader belonging in the Good category, and you
              read it daily for 1 hour, it will take you 55 days. Note: A slow
              reader usually reads 100 words per minute, an average reader 200
              words per minute, an average reader 300 words per minute and an
              excellent leader reads about 600-1000 words per minute, however
              the comprehension may vary.
            </Text>
        </Box>
      </Container>
      <Container maxW="80%">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Time</Th>
                <Th>Price</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              <Tr bgColor="gray.100">
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <Container maxW="80%">
        <Text>Serches in world for this book</Text>
        <TableContainer bgColor="blue.300">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr >
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>
                  <Button>Buy Now</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <Container>
        <Text>Top Reads</Text>
        <Box></Box>
      </Container>
    </div>
  );
};

export default Product;
