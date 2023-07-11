import { Box } from '@chakra-ui/react';
import React from 'react';
import { Navigate, Route, Routes as Router } from 'react-router-dom';
import { Models } from './models';
import { Header } from './components/header';
import { FashionHouse } from './fashionHouse';
import { Events } from './events';

const Routes = () => {
  return (
    <>
      <Header />
      <Box mx={{ lg: '15%' }}>
        <Router>
          <Route path="/" element={<FashionHouse />} />
          <Route path="/models" element={<Models />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* TODO: add 404 page instead */}
        </Router>
      </Box>
    </>
  );
}

export default Routes;