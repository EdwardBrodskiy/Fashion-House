import React, { useState } from 'react'
import { Box, Flex, useColorMode, Image, Center } from '@chakra-ui/react'
import { DarkModeToggle } from '../DarkMode'
import logo_pic from '../../logo_pic_wide.svg'
import logo_name from '../../logo_name.svg'
import { NavMenu } from '../navMenu'

const style = {
  long: {
    mb: '10vh',
    height: '50vh',
    shadow: '0px 20px 100px 100px #00152d',
    logo_name: {
      width: '100%'
    }
  },
  short: {
    mb: '12vh',
    height: '12vh',
    shadow: '',
    logo_name: {
      width: '0'
    }
  }

}

export const Header = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: '#00152d', dark: '#00152d' }

  const [heightMode, setHeightMode] = useState<keyof typeof style>('long')

  var last_pos = 0

  window.onscroll = () => {
    const velocity = document.documentElement.scrollTop - last_pos
    last_pos = (document.documentElement.scrollTop * 2 + last_pos) / 4
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      if (heightMode != 'short') {
        // document.documentElement.scrollTo({ top: 1 })
        setHeightMode('short')

      }

    } else if (velocity < -30) {
      setHeightMode('long')
    }
  }

  return (
    <Box h={style[heightMode].height} mb={style[heightMode].mb} transition='0.5s ease-in-out'>
      <Box
        p={4}
        h={style[heightMode].height}
        bg={bgColor[colorMode]}
        pos='fixed'
        left='0'
        right='0'
        top='0'
        width='full'
        transition='inherit'
        boxShadow={style[heightMode].shadow}

      >
        <Flex justify='space-between' align='top' w='100%' h='100%'>
          <NavMenu />

          <Center height='100%'>
            <Box>
              <Image src={logo_pic} color='white' width='100%' />
              {heightMode == 'long' &&
                <Image src={logo_name} color='white' mt={6} />}
            </Box>
          </Center>

          <DarkModeToggle />
        </Flex>
      </Box>
    </Box>
  )
}
