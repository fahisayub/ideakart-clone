import React from "react";
import { Text, Input,Select, Textarea ,Button} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductApi, tabChangeApi } from "../../Redux/Dashboard/Dashboard.action";
const DashnewProd = () => {
  const dispatch = useDispatch();
  const [form, setForm]=useState({})
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addProductApi(form));

  }
  const handleChange=(e)=>{
    let {name,value,files,type }=e.target;
    value=type==='file'?files[0].name:value;
    setForm({...form,[name]:value});
  }
  const handleTabChange=()=>{
    dispatch(tabChangeApi(2));
}

  return (
    <div>
      <Text fontSize="xx-large" textAlign="left">
        New Review
      </Text>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <Textarea name="name" type='text' onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="">Your Experience</label>
        <Textarea name="your_experience" type='text' onChange={handleChange} />
        <br />
        <br />
        <Input type="file" name="media" border='none' onChange={handleChange} />
        <label>Did you bought it online or offline</label>
        <br />
        <Select id="mode" name="mode" placeholder="Select" onChange={handleChange} >
          <option value='online'>Online</option>
          <option value='offline'>Offline</option>
        </Select>
        <br />
        <label>Platforms</label>
        <Select id="platform" name="platform" placeholder="Select" onChange={handleChange} >
          <option value='Amazon'>Amazon</option>
          <option value='Flipkart'>Flipkart</option>
          <option value="Snapdeal">Snapdeal</option>
        </Select>
        <br />
        <Button type='submit' onClick={handleTabChange}>Submit</Button>
      </form>
    </div>
  );
};

export default DashnewProd;
