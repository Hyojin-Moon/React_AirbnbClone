import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home'
import Main from './Detail/0_Main';


const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
`;
const App: React.FC = () => {


    return (
      <Router>
        <AppWrapper>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path='/main/:propertyId' Component={Main} /> 
          </Routes>
        </AppWrapper>
      </Router>
    );
  }


export default App;