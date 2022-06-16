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
const Dashboard = () => {
  return (
    <div>
      <Container maxWidth='70%' marginTop='50px'>
        <Text fontSize='xx-large' textAlign='left' marginBottom='10px'>Your Dashboard</Text>
        <Tabs size="lg" orientation="vertical"   >
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
        {/* <Link>Home</Link>
                <Link>New Product</Link>
                <Link>Products</Link>
                <Link>Credits</Link> */}
      </Container>
    </div>
  );
};

export default Dashboard;
