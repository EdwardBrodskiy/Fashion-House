import React from 'react'
import { Text, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import { eventRecord } from '../DatedAccordion'
import { parse_image_and_text_list } from '../../../tools'

type Props = {
  event: eventRecord
}

export const DateEntry = ({ event }: Props) => {
  return (
    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton _expanded={{ bg: 'brand.dark', color: 'brand.light' }}>
              <Box flex="1" textAlign="left" fontSize='2xl' isTruncated >

                {event.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p='0'>
            <Heading my={4}>{event.title}</Heading>
            <Text mb={10} size='sm' >{event.date}</Text>
            {parse_image_and_text_list(event.content, `/imgs/events/${event.key}`, { px: '10%', mb: 4 }, { my: 16 })}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
