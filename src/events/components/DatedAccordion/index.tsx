import React from 'react'
import { Accordion } from '@chakra-ui/react'
import { DateEntry } from '../DateEntry'
import { events } from '../../content.json'

export type eventRecord = {
  title: string
  date: string
  key: number
  content: string[]
}

export const DatedAccordion = () => {
  return (
    <Accordion allowToggle>
      {events.map((event, index) => <DateEntry event={event} key={index} />)}
    </Accordion>
  )
}
