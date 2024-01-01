"use client";

      import {
        Card,
        Grid,
        Tab,
        TabGroup,
        TabList,
        TabPanel,
        TabPanels,
        Text,
        Title,
      } from "@tremor/react";
      
export default function page() {
  return (
    <section className="p-12">
      <Title>users</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabGroup className="mt-6">        
        <TabPanels>          
          <TabPanel>
            <div className="mt-6">
              <Card>
                <div className="h-96" />
              </Card>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </section>
  );
}
  