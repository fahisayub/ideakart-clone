import { Button,Container,Box,Text } from '@chakra-ui/react';
import React from 'react';

const DashHome = () => {
    return (
        <div>
            <Container maxW='90%' textAlign='left'display='flex' flexDirection='column' gap='30px'>
                <Text fontSize='xx-large' >Welcome!</Text>
                <Box padding='20px'><Button bg='blue.600' color='white' >Add New Product</Button></Box>
                <Container maxW='100%' display='flex' justifyContent='spaceBetween' gap='20px' textAlign='left'>
                    <Box textAlign='center' padding='10px' w='200px' h='150px' bg='green.600'color='white' fontSize='30px'>{`0/0`} Products Approved</Box>
                    <Box textAlign='center' padding='10px' w='200px' h='150px' bg='yellow.400'color='white' fontSize='30px'>{0} Under Review</Box>
                    <Box textAlign='center' padding='10px' w='200px' h='150px' bg='red.300'color='white' fontSize='30px'>{0} Couldn't pass Review </Box>
                </Container>
            </Container>
        </div>
    );
};

export default DashHome;