import React from 'react'
import { Accordion } from '@chakra-ui/react'
import { DateEntry } from '../DateEntry'

export type eventRecord = {
  title: string
  date: string
  key: number
  content: string[]
}

type Props = {
  events: eventRecord[]
}

export const DatedAccordion = ({ events }: Props) => {
  return (
    <Accordion allowToggle>
      {events.map((event, index) => <DateEntry event={event} key={index} />)}
    </Accordion>
  )
}
