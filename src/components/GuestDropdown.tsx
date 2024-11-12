import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 360px;
  background: white;
  border-radius: 32px;
  padding: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 
              0 8px 16px rgb(0 0 0 / 15%);
  z-index: 100;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #222222;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #DDDDDD;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
`;

const Sublabel = styled.span`
  font-size: 14px;
  color: #717171;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button<{ disabled?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${props => props.disabled ? '#EBEBEB' : '#222222'};
  background: transparent;
  color: ${props => props.disabled ? '#EBEBEB' : '#222222'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    border-color: ${props => props.disabled ? '#EBEBEB' : '#000000'};
    color: ${props => props.disabled ? '#EBEBEB' : '#000000'};
  }
`;

const Count = styled.span`
  min-width: 20px;
  text-align: center;
  font-size: 16px;
  color: #222222;
`;

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}

const GuestDropdown: React.FC = () => {
  const [counts, setCounts] = useState<GuestCounts>({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  });

  const updateCount = (type: keyof GuestCounts, increment: boolean) => {
    setCounts(prev => ({
      ...prev,
      [type]: increment ? prev[type] + 1 : Math.max(0, prev[type] - 1)
    }));
  };
  const totalGuests = counts.adults + counts.children;
  const MAX_GUESTS = 16;
  const MAX_INFANTS = 5;
  const MAX_PETS = 5;

  return (
    <Container
      onClick={(e)=>{
        e.preventDefault();
        e.stopPropagation();
      }}
      >
      <Title>게스트 추가</Title>
      <MenuItem>
        <TextGroup>
          <Label>성인</Label>
          <Sublabel>13세 이상</Sublabel>
        </TextGroup>
        <Controls>
          <Button 
            disabled={counts.adults <= 1}
            onClick={(e) => { 
              updateCount('adults', false)
              
            }}
          >
            -
          </Button>
          <Count>{counts.adults}</Count>
          <Button 
            disabled={totalGuests >= MAX_GUESTS}
            onClick={(e) => {
              updateCount('adults', true)}}
          >
            +
          </Button>
        </Controls>
      </MenuItem>

      <MenuItem>
        <TextGroup>
          <Label>어린이</Label>
          <Sublabel>2-12세</Sublabel>
        </TextGroup>
        <Controls>
          <Button 
            disabled={counts.children <= 0}
            onClick={() => updateCount('children', false)}
          >
            -
          </Button>
          <Count>{counts.children}</Count>
          <Button 
            disabled={totalGuests >= MAX_GUESTS}
            onClick={() => updateCount('children', true)}
          >
            +
          </Button>
        </Controls>
      </MenuItem>

      <MenuItem>
        <TextGroup>
          <Label>유아</Label>
          <Sublabel>2세 미만</Sublabel>
        </TextGroup>
        <Controls>
          <Button 
            disabled={counts.infants <= 0}
            onClick={() => updateCount('infants', false)}
          >
            -
          </Button>
          <Count>{counts.infants}</Count>
          <Button 
            disabled={counts.infants >= MAX_INFANTS}
            onClick={() => updateCount('infants', true)}
          >
            +
          </Button>
        </Controls>
      </MenuItem>

      <MenuItem>
        <TextGroup>
          <Label>반려동물</Label>
          <Sublabel>보조동물을 동반하시나요?</Sublabel>
        </TextGroup>
        <Controls>
          <Button 
            disabled={counts.pets <= 0}
            onClick={() => updateCount('pets', false)}
          >
            -
          </Button>
          <Count>{counts.pets}</Count>
          <Button 
            disabled={counts.pets >= MAX_PETS}
            onClick={() => updateCount('pets', true)}
          >
            +
          </Button>
        </Controls>
      </MenuItem>
    </Container>
   
  );
};

export default GuestDropdown;