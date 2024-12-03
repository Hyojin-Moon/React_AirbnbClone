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
/**
 * 폴더구조
 * FSD
 * 도메인방식 > 페이지별나눈다 >main, placedetail 등 
 * 
 * 문제 > 문제해결(트러블슈팅) > 개선경험
 */