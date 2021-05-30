import React from 'react'
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import content from './content.json'
import { Section } from './components/section'

export const FashionHouse = () => {
  return (
    <Box textAlign='center'>

      <Tabs isFitted>
        <TabList>
          <Tab>About</Tab>
          <Tab>Services</Tab>
        </TabList>
        <Heading as='h1' m={4}>
          Fashion House
      </Heading>
        <TabPanels>
          <TabPanel p={0}>
            <Section text={content.about} />
          </TabPanel>
          <TabPanel p={0}>
            <Section text={content.services} />
          </TabPanel>

        </TabPanels>
      </Tabs>
    </Box>
  )
}



