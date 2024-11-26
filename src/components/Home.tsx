import React, { useState, useEffect } from 'react';
import Header from './Header';
import SlickMenu from './SlickMenu';
import PropertyGrid from './PropertyGrid';

const Home: React.FC = () => {
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
        <div>
        <Header />
                  <SlickMenu isScrolled={isScrolled} />
                  <PropertyGrid properties={properties} />
        </div>
      );
    };
  
  export default Home;