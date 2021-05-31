import React from 'react'
import { Box, Flex, useColorMode, Image, Center } from '@chakra-ui/react'
import { DarkModeToggle } from '../DarkMode'
import logo_pic from '../../logo_pic_wide.svg'
import { NavMenu } from '../navMenu'

export const Header = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'brand.dark', dark: 'brand.dark' }
  const height = 20
  return (
    <Box h={height} >
      <Box
        p={4}
        h={height}
        bg={bgColor[colorMode]}
        pos='fixed'
        left='0'
        right='0'
        top='0'
        width='full'
        zIndex='1000'
      >
        <Flex justify='space-between' align='center' w='100%' h='100%'>
          <NavMenu />
          <Center height='100%'>
            <Image src={logo_pic} color='white' height='100%' />
          </Center>
          <DarkModeToggle />
        </Flex>
      </Box>
    </Box>
  )
}
