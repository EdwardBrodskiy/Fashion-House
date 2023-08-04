import React, { useRef } from 'react'
import {
  Text,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from '@chakra-ui/react'
import { eventRecord } from '../DatedAccordion'
import { parse_image_and_text_list } from '../../../tools'

type Props = {
  event: eventRecord
}

export const DateEntry = ({ event }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <AccordionItem ref={ref}>
      {({ isExpanded }) => {
        if (isExpanded) {
          setTimeout(() => {
            const pos = ref.current?.getBoundingClientRect().top
            const offset = -80
            if (pos !== undefined) {
              window.scrollTo({ top: pos + window.pageYOffset + offset, behavior: 'smooth' })
            }
          }, 500)
        }
        return (
          <>
            <h2>
              <AccordionButton
                _expanded={{
                  bg: 'brand.dark',
                  color: 'brand.light',
                  boxShadow: '0 0 5px 1px white',
                }}
              >
                <Box flex='1' textAlign='left' fontSize='2xl' isTruncated>
                  {event.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p='0'>
              <Heading my={4}>{event.title}</Heading>
              <Text mb={10} size='sm'>
                {event.date}
              </Text>
              {parse_image_and_text_list(
                event.content,
                `/imgs/events/${event.key}`,
                { px: '10%', my: 12 },
                { my: 20 },
              )}
            </AccordionPanel>
          </>
        )
      }}
    </AccordionItem>
  )
}
