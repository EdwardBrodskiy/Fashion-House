import { Box } from '@chakra-ui/react'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Models } from './models'
import { Header } from './components/header'
import { FashionHouse } from './fashionHouse'
import { Events } from './events'

const Routes = () => {
  return (
    <>
      <Header />
      <Box m={4} mx='10%'>
        <Switch>
          <Route exact key='route-fashion-house' path='/' component={FashionHouse} />
          <Route exact key='route-models' path='/models' component={Models} />
          <Route exact key='route-events' path='/events' component={Events} />
          <Redirect from='*' to='/' /> {/* TODO: add 404 page instead */}
        </Switch>
      </Box>
    </>
  )
}

export default Routes
