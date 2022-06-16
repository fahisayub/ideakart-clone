import React from 'react';
import{TableContainer,Table,Thead,Tr,Th,Td,Tbody} from '@chakra-ui/react';
const DashProducts = () => {
    return (
        <div>
            <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Media</Th>
        <Th > How to use</Th>
        <Th >Approval Status</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>product</Td>
        <Td>img1</Td>
        <Td >open the container and mix it up</Td>
        <Td >Approved</Td>
      </Tr>
     
    </Tbody>
   
  </Table>
</TableContainer>
            
        </div>
    );
};

export default DashProducts;