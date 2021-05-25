import React from 'react'
import { Box, Flex, useColorMode, Image, Center } from '@chakra-ui/react'
import { DarkModeToggle } from '../DarkMode'
import logo_pic from '../../logo_pic_wide.svg'
import logo_name from '../../logo_name.svg'
import { NavMenu } from '../navMenu'

export const Header = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: '#00152d', dark: '#00152d' }
  const height = '50vh'
  return (
    <Box h={height}>
      <Box
        p={4}
        h={height}
        bg={bgColor[colorMode]}
        pos={'fixed'}
        left='0'
        right='0'
        top='0'
        width='full'
        boxShadow='0px 20px 100px 100px #00152d'
      >
        <Flex justify='space-between' align='top' w='100%' h='100%'>
          <NavMenu />

          <Center>
            <Box>
              <Image src={logo_pic} color='white' width='100%' mb={6} />
              <Image src={logo_name} color='white' width='100%' />
            </Box>
          </Center>

          <DarkModeToggle />
        </Flex>
      </Box>
    </Box>
  )
}
