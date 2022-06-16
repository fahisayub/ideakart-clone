import React from "react";
import { Text, Input,Select, Textarea } from "@chakra-ui/react";
const DashnewProd = () => {
  return (
    <div>
      <Text fontSize="xx-large" textAlign="left">
        New Review
      </Text>
      <br />
      <form action="">
        <Textarea placeholder="name" type='text' />
        <br />
        <br />
        <Textarea placeholder="your experience" type='text' />
        <br />
        <br />
        <Input type="file" border='none' />
        <label>Did you bought it online or offline</label>
        <br />
        <Select id="country" placeholder="Select">
          <option>Online</option>
          <option>Offline</option>
        </Select>
        <br />
        <label>Platforms</label>
        <Select id="country" placeholder="Select">
          <option>Amazon</option>
          <option>Flipkart</option>
          <option value="">Snapdeal</option>
        </Select>
        <br />
        <Input type='submit' />
      </form>
    </div>
  );
};

export default DashnewProd;
