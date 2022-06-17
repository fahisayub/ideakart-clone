import { Button,Container,Box,Text } from '@chakra-ui/react';
import React from 'react';
import { tabChangeApi } from '../../Redux/Dashboard/Dashboard.action';
import { useDispatch,useSelector } from 'react-redux';
const DashHome = () => {

    const dispatch=useDispatch();
    const {data}=useSelector(state=>state.dashboard);
    const dataLength=data.length;
    const approved=data.filter(item=>item.isAproved).length;
    const underReview=data.filter(item=>!item.isAproved&&!item.isRejected).length;
    const rejected=data.filter(item=>item.isRejected).length;
    const handleTabChange=()=>{
        dispatch(tabChangeApi(1));
    }
    return (
        <div>
            <Container maxW='90%' textAlign='left'display='flex' flexDirection='column' gap='30px'>
                <Text fontSize='xx-large' >Welcome!</Text>
                <Box padding='20px'><Button bg='blue.600' color='white'  onClick={handleTabChange} >Add New Product</Button></Box>
                <Container maxW='100%' display='flex' justifyContent='spaceBetween' gap='20px' textAlign='left'>
                    <Box textAlign='center' padding='10px' w='200px' h='150px' bg='green.600'color='white' fontSize='30px'>{`${approved}/${dataLength}`} Products Approved</Box>
                    <Box textAlign='center' padding='10px' w='200px' h='150px' bg='yellow.400'color='white' fontSize='30px'>{underReview} Under Review</Box>
                    <Box textAlign='center' padding='10px' w='200px' h='150px' bg='red.300'color='white' fontSize='30px'>{rejected} Couldn't pass Review </Box>
                </Container>
            </Container>
        </div>
    );
};

export default DashHome;