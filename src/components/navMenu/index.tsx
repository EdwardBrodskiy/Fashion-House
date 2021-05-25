import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

export const NavMenu = () => {
  // const { colorMode } = useColorMode()
  // const bgColor = { light: 'gray.700', dark: 'gray.700' }

  return (
    <IconButton
      aria-label='menu'
      colorScheme='grey'
      color='white'
      isRound
      icon={<HamburgerIcon boxSize={6} />}
    />
  )
}
