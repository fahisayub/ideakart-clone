import React from 'react';
import{TableContainer,Table,Thead,Tr,Th,Td,Tbody} from '@chakra-ui/react';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProductsApi } from '../../Redux/Dashboard/Dashboard.action';
const DashProducts = () => {
  const {data}=useSelector(state=>state.dashboard);
  const dispatch=useDispatch();

  console.log(data);
  useEffect(()=>{
    dispatch(getProductsApi());
  },[dispatch])
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
      {data.map(({id,name,media,your_experience,isAproved})=>{
        return <Tr key={id}>
        <Td>{name}</Td>
        <Td>{media}</Td>
        <Td >{your_experience}</Td>
        <Td >{isAproved?'Approved':'Under Review'}</Td>
      </Tr>
      }
      )}
      
     
    </Tbody>
   
  </Table>
</TableContainer>
            
        </div>
    );
};

export default DashProducts;