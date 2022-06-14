import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Experience from '../pages/experience';
import About from '../pages/about';
import Project from '../pages/project';

export const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default Main;
