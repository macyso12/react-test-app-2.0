import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Box, Flex} from '@chakra-ui/react';
import {Main} from './Main';
import {Navigation} from '../components/Navigation';

export const Content = () => {
  return (
    <Router>
      <Box width="100%" height="100%">
        <Flex
          direction="column"
          align="center"
          margin="0 auto"
          width="100%"
          height="100%"
          minHeight="100vh"
          justifyContent="flex-start"
        >
          <Navigation />
          <Main />
        </Flex>
      </Box>
    </Router>
  );
};
