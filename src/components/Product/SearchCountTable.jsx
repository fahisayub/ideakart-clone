import React from 'react';
import{ Table,
    TableContainer,
    Tr,
    Th,
    Tbody,
    Thead,Text,
    Td,} from '@chakra-ui/react';
   // import { useSelector } from "react-redux";
const SearchCountTable = () => {

   // const {data}=useSelector(state=>{return state.product});

    return (
        <>
           <TableContainer bgColor="blue.300">
           <Text>Serches in world for this book</Text>
           <hr />
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>City</Th>
                <Th>Country</Th>
                <Th > Count</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr >
                <Td>pune</Td>
                <Td>India</Td>
                <Td>
                  63
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer> 
        </>
    );
};

export default SearchCountTable;