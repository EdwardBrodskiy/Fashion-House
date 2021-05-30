import React from 'react'
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import content from './content.json'
import { Section } from './components/section'

export const FashionHouse = () => {
  return (
    <Box>
      <Heading as='h1' mb={4}>
        Fashion House
      </Heading>
      <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Services</Tab>
        </TabList>

        <TabPanels px='10%'>
          <TabPanel>
            <Section text={content.about} />
          </TabPanel>
          <TabPanel>
            <Section text={content.services} />
          </TabPanel>

        </TabPanels>
      </Tabs>
    </Box>
  )
}



