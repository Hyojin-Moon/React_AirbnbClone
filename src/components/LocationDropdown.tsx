import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  top: 50px; 
  left: 0; 
  width: 400px;
  background: white;
  border-radius: 32px;
  padding: 32px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 
  0 8px 16px rgb(0 0 0 / 15%);
  z-index: 100;
`;
const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const MapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 32px;
`;

const MapItem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  border: 1px solid #dddddd;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #222222;
    background-color: #F7F7F7;
  }
`;

const MapImage = styled.div`
  width: 100%;
  height: 90px;
  background-color: #F7F7F7;
  border-radius: 12px;
  margin-bottom: 8px;
`;

const MapText = styled.span`
  font-size: 14px;
  color: #222222;
`;

const SectionTitle = styled.h4`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const CityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 24px;
`;

const CityButton = styled.button`
  padding: 8px 16px;
  background: white;
  border: 1px solid #dddddd;
  border-radius: 32px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #222222;
    background-color: #F7F7F7;
  }
`;

const PopularRegions = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RegionButton = styled(CityButton)`
  white-space: nowrap;
`;

const LocationDropdown: React.FC = () => {
  const Regions = ['유연한 검색', '유럽', '일본', '동남아시아'];
  const Cities = [
    '서울', '부산', '제주도', '속초',
    '강릉', '전주', '대구', '경주',
    '여수', '서귀포', '대전', '인천'
  ];
  const popularRegions = ['전 세계', '동아시아', '동남아시아', '유럽', '아메리카'];

  return (
    <Container
    onClick={(e)=>{
      e.preventDefault();
      e.stopPropagation();
    }}>
      <Title>지역으로 검색하기</Title>
      
      {/* World Map Grid */}
      <MapGrid>
        {Regions.map((region, idx) => (
          <MapItem key={idx}>
            <MapImage />
            <MapText>{region}</MapText>
          </MapItem>
        ))}
      </MapGrid>

      {/* Korea Section */}
        <SectionTitle>한국</SectionTitle>
        <CityGrid>
          {Cities.map((city, idx) => (
            <CityButton key={idx}>
              {city}
            </CityButton>
          ))}
        </CityGrid>

      {/* Popular Regions */}
        <SectionTitle>해외 인기 지역</SectionTitle>
        <PopularRegions>
          {popularRegions.map((region, idx) => (
            <RegionButton key={idx}>
              {region}
            </RegionButton>
          ))}
        </PopularRegions>
    </Container>
  );
};

export default LocationDropdown;