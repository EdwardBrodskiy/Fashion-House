import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react'
import img from './imgs/0317b.png'

export function Models() {
  return (
    <Box>
      <Heading>Models</Heading>
      <Image src={img} objectFit='cover' />
    </Box>
  )
}
