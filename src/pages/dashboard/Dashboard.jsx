import React from "react";
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,Text
} from "@chakra-ui/react";
import DashHome from "./DashHome";
import DashnewProd from "./DashnewProd";
import DashProducts from "./DashProducts";
import DashCredits from "./DashCredits";
import { useSelector,useDispatch } from "react-redux";
import { tabChangeApi } from "../../Redux/Dashboard/Dashboard.action";
const Dashboard = () => {
  const {tabIndex}=useSelector(state=>state.dashboard);
const dispatch=useDispatch();
  const handleTabsChange = (index) => {
    dispatch(tabChangeApi(index))
  }
  return (
    <div>
      <Container maxWidth='70%' marginTop='50px'>
        <Text fontSize='xx-large' textAlign='left' marginBottom='10px'>Your Dashboard</Text>
        <Tabs size="lg" orientation="vertical" index={tabIndex} onChange={handleTabsChange} >
          <TabList width='200px' >
            <Tab>Home</Tab>
            <Tab  >New Product</Tab>
            <Tab>Product</Tab>
            <Tab>Credit</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DashHome/>
            </TabPanel>
            <TabPanel>
              <DashnewProd/>
            </TabPanel>
            <TabPanel>
              <DashProducts/>
            </TabPanel>
            <TabPanel>
              <DashCredits/>
            </TabPanel>
          </TabPanels>
        </Tabs>
       
      </Container>
    </div>
  );
};

export default Dashboard;
