import React from 'react'
import { Box } from '@chakra-ui/react'
import { parse_image_and_text_list } from '../../../tools'

type Props = {
  text: string[]
}

// this does not do much but may do more later
export const Section = ({ text }: Props) => {
  return (
    <Box>
      {parse_image_and_text_list(text, '/imgs/fashionHouse', { px: '10%', mb: 4 }, { my: 16 })}
    </Box>
  )
}


