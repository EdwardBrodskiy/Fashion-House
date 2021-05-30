import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import { DateEntry } from '../DateEntry'

export const DatedAccordion = () => {
  return (
    <Accordion allowToggle>
      <DateEntry title='Some Title 1' />
      <DateEntry title='Some Title 2' />
    </Accordion>
  )
}
