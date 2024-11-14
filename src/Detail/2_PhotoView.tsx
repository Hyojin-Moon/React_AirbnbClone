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

interface PhotoViewProps {
  images: string[];
}

const PhotoView: React.FC<PhotoViewProps> = ({ images }) => {
  return (
    <PhotoGrid>
      <MainPhoto src={images[0]} alt="Main view" />
      {images.slice(1, 5).map((image, index) => (
        <SubPhoto key={index} src={image} alt={`View ${index + 1}`} />
      ))}
    </PhotoGrid>
  );
};

export default PhotoView;