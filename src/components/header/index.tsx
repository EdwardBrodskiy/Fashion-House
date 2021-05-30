import React, { useEffect, useState } from 'react'
import { Box, Flex, useColorMode, Image, Center } from '@chakra-ui/react'
import { DarkModeToggle } from '../DarkMode'
import logo_pic from '../../logo_pic_wide.svg'
import logo_name from '../../logo_name.svg'
import { NavMenu } from '../navMenu'

export const Header = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'brand.dark', dark: 'brand.dark' }

  return (
    <Box h={'12vh'} >
      <Box
        p={4}
        h={'12vh'}
        bg={bgColor[colorMode]}
        pos='fixed'
        left='0'
        right='0'
        top='0'
        width='full'
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
