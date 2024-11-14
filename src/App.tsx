import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import SlickMenu from './components/SlickMenu';
import PropertyGrid from './components/PropertyGrid';
import Main from './Detail/0_Main';


const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
`;
const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    // JSON 파일을 fetch로 불러오기
      const fetchProperties = async () => {
      const response = await fetch('/Data/listings.json');
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

    return (
      <Router>
      <AppWrapper>
        <Header />
        <SlickMenu isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<PropertyGrid properties={properties} />} />
          <Route path="/main/:propertyId" element={<Main />} />
        </Routes>
      </AppWrapper>
    </Router>
    );
  }


export default App;