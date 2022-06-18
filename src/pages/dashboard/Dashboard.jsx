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
      <Container maxWidth='80%' marginTop='20px'>
        <Text fontSize='x-large' textAlign='left' marginBottom='30px'>Your Dashboard</Text>
        <Tabs size="lg" orientation="vertical" index={tabIndex} onChange={handleTabsChange} variant='soft-rounded' >
          <TabList width='200px' fontSize='15px'>
            <Tab fontSize='15px'>Home</Tab>
            <Tab  fontSize='15px'>New Product</Tab>
            <Tab fontSize='15px'>Product</Tab>
            <Tab fontSize='15px'>Credit</Tab>
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
