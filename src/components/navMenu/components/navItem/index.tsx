import React, { PropsWithChildren } from 'react'
import { Flex, ListItem, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type Props = {
  to: string
  onClick: () => void
}

export const NavItem = ({ children, to, onClick }: Props & PropsWithChildren<{}>) => {
  return (
    <ListItem
      onClick={() => {
        onClick()
      }}
    >
      <Link to={to}>
        <Flex align='center'>
          <Image src={process.env.PUBLIC_URL + '/svgs/crown.svg'} height={5} mr={4} />{' '}
          <Text fontSize='1.2rem'>{children}</Text>
        </Flex>
      </Link>
    </ListItem>
  )
}
