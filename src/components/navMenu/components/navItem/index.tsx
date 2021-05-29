import React, { PropsWithChildren } from 'react'
import { Flex, ListItem, Text, Image } from '@chakra-ui/react'
import crown from '../../../../crown.svg'
import { useHistory } from 'react-router-dom'

type Props = {
  to: string
  onClick: () => void
}

export const NavItem = ({ children, to, onClick }: Props & PropsWithChildren<{}>) => {
  const history = useHistory()

  return (
    <ListItem onClick={() => {
      history.push(to)
      onClick()
    }}>
      <Flex align='center'>
        <Image src={crown} height={5} mr={4} /> <Text fontSize='1.2rem' >{children}</Text>
      </Flex>
    </ListItem>
  )
}
