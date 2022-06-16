import React from 'react';
import {  Text,Input,Button } from "@chakra-ui/react";
const AccountInfo = () => {
    return (
        <div>
            <Text>Account Info</Text>
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='Name' />
            <br />
            <label htmlFor="">IFSC Code</label>
            <Input type='text' placeholder='Email' />
            <br />
            <label htmlFor="">Bank Name</label>
            <Input type='text' placeholder='Phone' />
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='Address' />
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='City' />
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='State' />
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='Zip' />
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='Country' />
            <br />
            <label htmlFor="">Account Number</label>
            <Input type='text' placeholder='Password' />
            <br />
            <Button>Create Account</Button>

            
        </div>
    );
};

export default AccountInfo;