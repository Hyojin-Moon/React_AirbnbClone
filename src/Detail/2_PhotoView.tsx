import React from 'react';
import styled from 'styled-components';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-gap: 8px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 24px;
`;

const MainPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-row: span 2;
`;

const SubPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
interface PhotoProps{
  id: number;
  images: string[]; 
  title: string;
  price: string;
  rating?: number;
  location?: string;
}

const PhotoView: React.FC = () => {
  return (
    <PhotoGrid>
      <MainPhoto/>
      <SubPhoto />
    </PhotoGrid>
  );
};

export default PhotoView;