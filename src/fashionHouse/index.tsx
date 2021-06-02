import React from 'react'
import { Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode } from '@chakra-ui/react'
import content from './content.json'
import { Section } from './components/section'

export const FashionHouse = () => {
  const { colorMode } = useColorMode()
  const tabStyles = {
    _selected: {
      boxShadow: `0 0 5px 1px ${colorMode === 'light' ? '#00152d' : 'white'}`
    }
  }
  return (
    <Box textAlign='center'>

      <Tabs isFitted>
        <TabList>
          <Tab {...tabStyles}>About</Tab>
          <Tab {...tabStyles}>Services</Tab>
        </TabList>
        <Text as='h1' m={4} fontSize='4xl'>
          МОДНЫЙ ДОМ
      </Text>
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



