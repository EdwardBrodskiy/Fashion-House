import React from 'react'
import { Box, Flex, Text, VStack, theme, useColorMode } from '@chakra-ui/react'
import { models } from './content.json'
import { parse_image_and_text_list } from '../tools'

export function Models() {
  const { colorMode } = useColorMode()
  const edgeShadowColor = colorMode === 'dark' ? theme.colors.gray[800] : 'white'
  const edgeFadeShadow = { base: '', lg: `0 0 60px 60px ${edgeShadowColor}` }
  return (
    <Box textAlign='center'>
      <Text as='h1' m={4} fontSize='4xl'>МОДЕЛИ</Text>
      <Flex direction='row'>
        <Box zIndex={500} height='fill' boxShadow={edgeFadeShadow} />
        <VStack align='stretch' spacing={20}>
          {models.map((model, index) => {
            const image_names: string[] = []
            for (let i = 0; i < model.number; i++) {
              image_names.push(model.key + String.fromCharCode(97 + i) + '.png')
            }
            return (
              <Flex align='center' overflowX='scroll' direction={{ base: 'column', lg: 'row' }} sx={{
                '::-webkit-scrollbar': { display: 'none' },
                msOverFlowStyle: 'none',
                scrollbarWidth: 'none',
                scrollSnapType: 'y manditory',
              }}>
                <Box minWidth='150px' height='full' />
                {parse_image_and_text_list(image_names, '/imgs/models', {}, { maxWidth: { base: '', lg: '37%' }, width: { base: '100%', lg: '' }, height: { base: '', lg: '40em' }, my: 2 })}
                <Box minWidth='150px' height='full' />
              </Flex>
            )
          })}

        </VStack>
        <Box zIndex={500} height='fill' boxShadow={edgeFadeShadow} />
      </Flex>


    </Box>
  )
}
