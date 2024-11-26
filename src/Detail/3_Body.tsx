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
const Body: React.FC= () => {
  
  return (
    <Container>
      <Title></Title>
      <Details>
        <span>★</span>
        <span>후기 개</span>
        <span>블라블라</span>
      </Details>
      <div>
        <h2>숙소 정보</h2>
        <p>최대 인원</p>
        <p>블라블라</p>
      </div>
    </Container>
  );
};
export default Body;