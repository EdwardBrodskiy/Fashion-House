import React from 'react'
import { Box, Flex, useColorMode, Image, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { DarkModeToggle } from '../DarkMode'
import { NavItem } from './NavItem'
import logo from '../../logo_pic.svg'
import { HamburgerIcon } from '@chakra-ui/icons'

export const Header = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.200', dark: 'gray.700' }
  return (
    <Box h='4rem'>
      <Box
        p={4}
        h='4rem'
        bg={bgColor[colorMode]}
        pos={'fixed'}
        left='0'
        right='0'
        top='0'
        borderBottomWidth='1px'
        width='full'
      >
        <Flex justify='space-between' align='center' w='100%' h='100%'>
          <HamburgerIcon boxSize={10}/>

          <Center>
            <Image src={logo} color='white' height='3rem'/>
          </Center>
       
          <DarkModeToggle />
        </Flex>
      </Box>
    </Box>
  )
}
