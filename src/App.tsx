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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
    const mockProperties = [
      { id: 1, image: 'https://a0.muscache.com/im/pictures/0f52b46a-16fe-472f-a04b-eec52680f162.jpg?im_w=720', title: '한국 Yangsa-myeon, Kanghwa', price: '₩741,765 / 박', rating: 4.95 },
      { id: 2, image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1020157175962042319/original/c54a49a7-dde6-4a62-a0b4-710a5c149472.jpeg?im_w=720', title: '한국 인천', price: '₩381,153 / 박', rating: 4.96 },
      { id: 3, image: 'https://a0.muscache.com/im/pictures/02a2ca71-19f2-40ce-bca3-74467b104eb4.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 4, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/12d9d1ec-f964-4676-a666-e4ecb73c99e3.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 5, image: 'https://a0.muscache.com/im/pictures/miso/Hosting-552444398476228750/original/d223d42a-6cd8-4711-9548-b617944cca28.jpeg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 6, image: 'https://a0.muscache.com/im/pictures/69d08a53-acc0-4e17-aacb-7318dfb32e87.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 7, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/134ad7ce-9e6a-4f85-9fde-6c9a6bb04815.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 9, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 10, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 11, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 12, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 13, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 14, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 15, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 16, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 17, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
      { id: 18, image: 'https://a0.muscache.com/im/ml/photo_enhancement/pictures/f87eee99-bb37-4cbb-9f7e-93a1a5d2338a.jpg?im_w=720', title: '속초시', price: '₩79,882 / 박', rating: 4.96 },
    ];

    return (
      <AppWrapper>
        <Header />
        <SlickMenu isScrolled={isScrolled}/>
        <PropertyGrid properties={mockProperties} />
      </AppWrapper>
    );
  }


export default App;