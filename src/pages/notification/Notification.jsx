import React from 'react';
import { Text,Container } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Notification = () => {
    return (
        <div>
            <Container maxW='80%' >
            <Text fontSize='30px' marginBottom='30px' >Notifications</Text>
            <Link  padding='20px' to='/earnmoney'>Earn Money Working from Home just by adding product reviews!</Link>
            </Container>
        </div>
    );
};

export default Notification;