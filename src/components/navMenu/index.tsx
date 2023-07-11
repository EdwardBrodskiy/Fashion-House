import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  Image,
  List
} from '@chakra-ui/react'
import logo from '../../logo_whole.svg'

import { HamburgerIcon } from '@chakra-ui/icons'
import { NavItem } from './components/navItem'

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        aria-label='menu'
        colorScheme='grey'
        color='white'
        isRound
        icon={<HamburgerIcon boxSize={6} />}
        onClick={onOpen}
        _focus={{
          boxShadow: '0 0 10px 1px white'
        }}
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='brand.dark' opacity='90%' color='white'>
          <DrawerHeader>
            <Image src={process.env.PUBLIC_URL + '/svgs/logo_whole.svg'} width='100%' mb={6} />
          </DrawerHeader>

          <DrawerBody>
            <List spacing={4}>
              <NavItem to='/' onClick={onClose}>МОДНЫЙ ДОМ</NavItem>
              <NavItem to='/models' onClick={onClose}>МОДЕЛИ</NavItem>
              <NavItem to='/events' onClick={onClose}>СОБЫТИЯ</NavItem>
            </List>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
