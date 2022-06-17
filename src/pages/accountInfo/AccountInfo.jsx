import React from "react";
import { Text, Input, Button, Container } from "@chakra-ui/react";
import { addAccountInfoApi } from "../../Redux/AccountInfo/AcInfo.action";
import { useDispatch } from "react-redux";
import { useState } from "react";
const AccountInfo = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAccountInfoApi(form));
  };
  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <Container maxW="80%">
        <Text>Account Info</Text>
        <br />

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Account Number</label>
          <Input type="text" name="Ac_No" onChange={handleChange} />
          <br />
          <label htmlFor="">IFSC Code</label>
          <Input type="text" name="ifsc" onChange={handleChange} />
          <br />
          <label htmlFor="">Bank Name</label>
          <Input type="text" name="bankName" onChange={handleChange} />
          <br />
          <label htmlFor="">UPI Id</label>
          <Input type="text" name="upiId" onChange={handleChange} />
          <br />
          <label htmlFor="">Address1</label>
          <Input type="text" name="address1" onChange={handleChange} />
          <br />
          <label htmlFor="">Address2</label>
          <Input type="text" name="address2" onChange={handleChange} />
          <br />
          <label htmlFor="">City</label>
          <Input type="text" name="city" onChange={handleChange} />
          <br />
          <label htmlFor="">State</label>
          <Input type="text" name="state" onChange={handleChange} />
          <br />
          <label htmlFor="">Pin Code</label>
          <Input type="text" name="pincode" onChange={handleChange} />
          <br />
          <br />
          <Button type="submit">Create Account</Button>
        </form>
      </Container>
    </div>
  );
};

export default AccountInfo;
