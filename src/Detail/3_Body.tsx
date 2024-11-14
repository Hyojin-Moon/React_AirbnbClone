import React from 'react';
import styled from 'styled-components';
import { Listing } from '../Main/types';

const Container = styled.div`
  padding: 32px 0;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Details = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

interface BodyProps {
  listing: Listing;
}

const Body: React.FC<BodyProps> = ({ listing }) => {
  return (
    <Container>
      <Title>{listing.title}</Title>
      <Details>
        <span>⭐ {listing.rating}</span>
        <span>후기 {listing.reviewCount}개</span>
        <span>{listing.location}</span>
      </Details>
      <div>
        <h2>숙소 정보</h2>
        <p>최대 인원 {listing.maxGuests}명 · 침실 {listing.bedrooms}개 · 침대 {listing.beds}개 · 욕실 {listing.bathrooms}개</p>
        <p>{listing.description}</p>
      </div>
    </Container>
  );
};
export default Body;