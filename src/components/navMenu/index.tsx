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
      />
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='brand.dark' opacity='90%' color='white'>
          <DrawerHeader>
            <Image src={logo} width='100%' mb={6} />
          </DrawerHeader>

          <DrawerBody>
            <List spacing={4}>
              <NavItem to='/' onClick={onClose}>Fashion House</NavItem>
              <NavItem to='/models' onClick={onClose}>Models</NavItem>
              <NavItem to='/events' onClick={onClose}>Events</NavItem>
            </List>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
