import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { DatedAccordion } from './components/DatedAccordion'

export const Events = () => {
  return (
    <Box>
      <Heading mx='10%' mb={4}>Events</Heading>
      <DatedAccordion />
    </Box>
  )
}
