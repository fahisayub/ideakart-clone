import { Text } from "@chakra-ui/react";
import React from "react";
import{Link} from 'react-router-dom'

const DashCredits = () => {
  return (
    <div>
      <Text fontSize='16px' textAlign='left'>The amount credited to your account will be shown here!</Text>
      <Text fontSize='16px' textAlign='left'>
        You can update your account Info <Link fontSize='14px' color='blue' to="/accountInfo" >here</Link>
      </Text>
    </div>
  );
};

export default DashCredits;
