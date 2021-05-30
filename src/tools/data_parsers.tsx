import React from 'react'
import { Text, Image } from '@chakra-ui/react'


export const parse_image_and_text_list = (text: string[], pathToImg: string) => {
  const result = text.map((section, index) => {
    if (section.match(/\.png$/)) {
      return <Image key={index} src={process.env.PUBLIC_URL + pathToImg + '/' + section} alt='picture' width='100%' mb={3} />
    } else {
      return (<Text key={index} mb={3}>
        {section}
      </Text>)
    }
  })
  return result
}
