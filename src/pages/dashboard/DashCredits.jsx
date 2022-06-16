import { Link, Text } from "@chakra-ui/react";
import React from "react";

const DashCredits = () => {
  return (
    <div>
      <Text fontSize='16px' textAlign='left'>The amount credited to your account will be shown here!</Text>
      <Text fontSize='16px' textAlign='left'>
        You can update your account Info <Link fontSize='14px' color='blue' href="#" >here</Link>
      </Text>
    </div>
  );
};

export default DashCredits;
