import React from 'react';
import {Box} from '@chakra-ui/react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Route, Switch} from 'react-router-dom';
import {Home} from '../pages/home';
import {Experience} from '../pages/experience';
import {About} from '../pages/about';
export const Main = () => {
  return (
    <Box flexGrow={1} width="100%">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
      </Switch>
    </Box>
  );
};

export default Main;
