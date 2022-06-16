import React from 'react';
import{ Table,
    TableContainer,
    Tr,
    Th,
    Tbody,
    Td,} from '@chakra-ui/react';
    import { useSelector } from "react-redux";
const How_Long_Table = () => {
    const {data}=useSelector(state=>{return state.product});


    return (
        <>
            <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>Slow</Th>
                  <Td>{data.How_long.Slow}</Td>
                </Tr>
                <Tr>
                  <Th>Average</Th>
                  <Td>{data.How_long.Average}</Td>
                </Tr>
                <Tr>
                  <Th>Good</Th>
                  <Td>{data.How_long.Good}</Td>
                </Tr>
                <Tr>
                  <Th>Excellent</Th>
                  <Td>{data.How_long.Excellent} </Td>
                </Tr>
               
              </Tbody>
              
            </Table>
           
          </TableContainer>
        </>
    );
};

export default How_Long_Table;