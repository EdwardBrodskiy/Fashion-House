import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'

type Props = {
  title: string
}

export const DateEntry = ({ title }: Props) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton _expanded={{ bg: 'brand.dark', color: 'brand.light' }}>
          <Box flex="1" textAlign="left" fontSize='2xl'>
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </AccordionPanel>
    </AccordionItem>
  )
}
