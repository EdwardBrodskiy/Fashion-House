import React, { useEffect, useState } from 'react'
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
    mb: '0',
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

  const [heightMode, setHeightMode] = useState<keyof typeof style>('short')

  window.onscroll = () => {

    if (heightMode != 'short' && document.documentElement.scrollTop > 0) {
      setHeightMode('short')
    }
  }

  return (
    <Box h={style[heightMode].height} mb={style[heightMode].mb} transition='.2s ease_in' onTransitionEndCapture={() => document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })}>
      <Box
        p={4}
        h={style[heightMode].height}
        bg={bgColor[colorMode]}
        pos='fixed'
        left='0'
        right='0'
        top='0'
        width='full'
        transition='.5s ease-in-out'

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
