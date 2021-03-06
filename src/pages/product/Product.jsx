import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  Table,
  TableContainer,
  Tr,
  Th,
  Tbody,
  Thead,
  Td,
  Link,
  Img,
} from "@chakra-ui/react";
import { SpinnerIcon } from "@chakra-ui/icons";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { productApi } from "../../Redux/Product/product.action";
import BookSpecTable from "../../components/Product/BookSpecTable";
import HowLongTable from "../../components/Product/HowLongTable";
import SearchCountTable from "../../components/Product/SearchCountTable";
import { useParams } from "react-router-dom";
import TopReads from "../../components/Product/TopReads";

const Product = () => {
const {id}=useParams();
  const {data}=useSelector(state=> state.product);
  const dispatch=useDispatch();


  useEffect(()=>{ 
    
    dispatch(productApi(id))
  },[id,dispatch]);

  if(Object.keys(data).length===0)return <Container>Loading....</Container>
  return (
    <div >
      <Container
        display="flex"
        margin="auto"
        maxWidth="80%"
        marginTop='20px'
        
      >
        <Container width="35%" >
          <Box
            margin="auto"
            padding="10px"
            borderRadius="10px"
            border=" 1px solid grey"
          >
            <Img
              margin="auto"


              src={`${data.image}`}

            />
          </Box>
          <Text textAlign='left' marginLeft='10px' fontSize='17px'>
Buy it at best price from here</Text>
          <Box display="flex" justifyContent="space-between" padding="20px">
            <Text fontSize="xx-large">{data.price}/-</Text>
            <Link href={data.ProductLink} >  <Button bgColor="orange" textDecorationLine='none'>Buy Now</Button></Link>
          </Box>
          <Box bgColor="green.300" padding="10px">
            <Link  href={data.ProductLink}>
              Get intant cashback when you pay using Amazon pay... Click Here
            </Link>
          </Box>
          <Text fontSize="xx-large" padding='10px'>Book Specification</Text>
          <BookSpecTable/>
        </Container>
        <Container maxW="70%"  padding="50px">
          <Box display="flex" justifyContent="space-between" padding="10px">
            <Text>Refresh</Text>
            <Button gap="10px" bgColor="green.400" color="white">
              Refresh Price <SpinnerIcon />
            </Button>
          </Box>
          <Box>
            <Text fontSize='xx-large' margin='10px'>{data.name}</Text>
          </Box>
          <Box
            border="1px solid "
            borderColor='gray.400'
            bgColor="gray.200"
            borderRadius="10px"
            padding="10px"
          >
            <Text fontSize='sm'>
             {data.description}
            </Text>
          </Box>
          <TableContainer borderRadius='5px'>
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
                  <Td>{data.Store}</Td>
                  <Td>{data.price}</Td>
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

      <Container maxW="80%" marginTop='30px'>
        <Text fontSize='xx-large' margin='10px'>Why you should read {data.name}, Second Edition by {data.BookSpecification.Author} </Text>
        <Box border='1px solid gray.200' borderRadius='5px' bg='gray.200'padding='10px' margin='20px 0px 50px 0px'>
          <Text> 

           {data.Why}
          </Text>
        </Box>
      </Container>

      <Container maxW="80%">
        <Text fontSize='xx-large' margin='10px'>How long would it take for you to read {data.name}, Second Edition </Text>
        <Box border="1px solid gray.200" borderRadius='5px' bg='gray.200'padding='10px' margin='20px 0px 50px 0px'>
          <Text fontSize="x-large" >

            Depending on your reading style, this is how much time you would
            take to complete reading this book.
          </Text>
          <HowLongTable/>
          
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
      <Container maxW="80%" >
        <TableContainer margin='20px 0px 50px 0px' >
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Time</Th>
                <Th>Price</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              <Tr bgColor="gray.100">
                <Td>{Date.now()}</Td>
                <Td>{data.price}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <Container maxW="80%">
       
        <SearchCountTable/>
      </Container>

      <Container textAlign='left'maxW="80%">
        <Text textAlign='left'fontSize='17px'>Top Read Books</Text>

      </Container>
      <TopReads></TopReads>
    </div>
  );
};

export default Product;
