import React from 'react'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import content from './content.json'

export function FashionHouse() {
  return (
    <Box>
      <Heading as='h1' fontSize='2.5rem' mb={4}>
        Fashion House
      </Heading>

      {content.about.split('\n').map((line, index) => (
        <Text key={index} mb={3}>
          {line}
        </Text>
      ))}
    </Box>
  )
}
