import React from 'react'
import { Box, Divider, Flex, Heading } from '@chakra-ui/react'
import { DatedAccordion, eventRecord } from './components/DatedAccordion'
import { events } from './content.json'

export const Events = () => {
  const grouped_events: eventRecord[][] = []
  const all_events: eventRecord[] = events
  for (let i = 0; i < all_events.length; i++) {
    if (i === 0 || getYear(all_events[i]) !== getYear(all_events[i - 1])) {
      const new_group: eventRecord[] = [all_events[i]]
      grouped_events.push(new_group)
    } else {
      grouped_events[grouped_events.length - 1].push(all_events[i])
    }

  }
  return (
    <Box textAlign='center'>
      <Heading m={4}>Events</Heading>

      {grouped_events.map((event_group) => (
        <>
          <Heading mt={12} mb={4} >{getYear(event_group[0])}</Heading>

          <DatedAccordion events={event_group} />
        </>
      ))}

    </Box>
  )
}

const getYear = (event: eventRecord) => event.date.slice(-4)
