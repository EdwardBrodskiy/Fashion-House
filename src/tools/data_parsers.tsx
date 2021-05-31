import React from 'react'
import { Text, Image, TextProps, ImageProps } from '@chakra-ui/react'


export const parse_image_and_text_list = (text: string[], pathToImg: string, textProps?: TextProps, imageProps?: ImageProps) => {
  const result = text.map((section, index) => {
    if (section.match(/\.png$/)) {
      return <Image key={index} src={process.env.PUBLIC_URL + pathToImg + '/' + section} alt='picture' width={{ base: '100%', lg: '45%' }} objectFit='cover' display={{ lg: 'inline' }} m={{ lg: 4 }} {...imageProps} />
    } else {
      return (<Text key={index} {...textProps}>
        { section}
      </Text >)
    }
  })
  return result
}
