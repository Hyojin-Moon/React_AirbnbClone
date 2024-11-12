import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SlickMenu from './components/SlickMenu';
import PropertyGrid from './components/PropertyGrid';

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
      <AppWrapper>
        <Header />
        <SlickMenu isScrolled={isScrolled}/>
        <PropertyGrid properties={properties} />
      </AppWrapper>
    );
  }


export default App;