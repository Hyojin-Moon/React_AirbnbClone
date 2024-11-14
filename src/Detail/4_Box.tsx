import React from 'react';
import styled from 'styled-components';
import { Listing } from '../Main/types';

const BoxContainer = styled.div`
  position: sticky;
  top: 80px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
`;

const Button = styled.button`
  width: 100%;
  background: #e51d53;
  color: white;
  padding: 14px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

interface BoxProps {
  listing: Listing;
}

const Box: React.FC<BoxProps> = ({ listing }) => {
  return (
    <BoxContainer>
      <PriceInfo>
        <h2>₩{listing.price.toLocaleString()}</h2>
        <span>/박</span>
      </PriceInfo>
      <div>
        {/* Date picker component would go here */}
        <div>체크인/체크아웃</div>
        <div>게스트 {listing.maxGuests}명</div>
      </div>
      <Button>예약하기</Button>
    </BoxContainer>
  );
};

export default Box;