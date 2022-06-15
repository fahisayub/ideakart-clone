import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <div>
      <Container>
        <Tabs size="md" variant="enclosed" orientation="vertical" isFitted="true">
          <TabList orientation='vertical'>
            <Tab>Home</Tab>
            <Tab>New Product</Tab>
            <Tab>Product</Tab>
            <Tab>Credit</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Home</p>
            </TabPanel>
            <TabPanel>
              <p>Add Product</p>
            </TabPanel>
            <TabPanel>
              <p>My Products</p>
            </TabPanel>
            <TabPanel>
              <p>Your credits will be shown here</p>
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
