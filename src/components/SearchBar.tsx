import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import CalendarDropdown from './CalendarDropdown';
import GuestDropdown from './GuestDropdown';
import LocationDropdown from './LocationDropdown';

type ListingType = 'lodging' | 'experience';
interface SearchBarProps {
  searchType: ListingType;
  isScrolled: boolean;
}
const SearchForm = styled.div<{ isScrolled: boolean }>`

  max-width: 850px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 40px;
  background: white;
  transition: all 0.2s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05);
  
  ${props => props.isScrolled && css`
    height: 48px;
    min-width: 348px;
  `}
  
  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  }
`;

const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #e31c5f;
  }
`;
interface SearchSectionProps {
  isActive: boolean;
  width?:string;
}
const SearchSection = styled.button<SearchSectionProps>`
  flex: 1;
  padding: 14px 24px;
  text-align: left;
  background: transparent;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;

    // 구분선 추가
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 32px;
    width: 1px;
    background-color: #ddd;
  }
  &:hover {
    background-color: #f7f7f7;
  }

  ${props => props.isActive && css`
    background-color: #f7f7f7;
  `}
  ${props => props.width && css`
    flex: ${props.width};
  `}
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  padding-bottom: 2px;
`;

const Input = styled.div`
  font-size: 14px;
  color: #717171;
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 12px;
  z-index: 100;
`;

const SearchIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentColor;
  stroke-width: 4;
  overflow: visible;
`;

const SearchBar: React.FC<SearchBarProps> = ({ searchType, isScrolled }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);
    const locationDropdownRef = useRef<HTMLDivElement>(null);
    const checkinDropdownRef = useRef<HTMLDivElement>(null);
    const checkoutDropdownRef = useRef<HTMLDivElement>(null);
    const guestDropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node) &&
          !locationDropdownRef.current?.contains(event.target as Node) &&
          !checkinDropdownRef.current?.contains(event.target as Node) &&
          !checkoutDropdownRef.current?.contains(event.target as Node) &&
          !guestDropdownRef.current?.contains(event.target as Node)
        ) {
          setActiveDropdown(null);
        }
      };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SearchForm isScrolled={isScrolled} ref={dropdownRef}>
      <SearchSection
        isActive={activeDropdown === 'location'}
        onClick={() => setActiveDropdown(activeDropdown === 'location' ? null : 'location')}
      >
        <Label>여행지</Label>
        <Input>여행지 검색</Input>
        {activeDropdown === 'location' && (
          <DropdownWrapper ref={locationDropdownRef}>
            <LocationDropdown />
          </DropdownWrapper>
        )}
      </SearchSection>

      {searchType === 'lodging' ? (
        <>
          <SearchSection
            isActive={activeDropdown === 'checkin' || activeDropdown === 'checkout'}
            onClick={() => setActiveDropdown(activeDropdown === 'checkin' ? null : 'checkin')}
          >
            <Label>체크인</Label>
            <Input>날짜 추가</Input>
            {(activeDropdown === 'checkin' || activeDropdown === 'checkout') && (
              <DropdownWrapper ref={checkinDropdownRef}>
                <CalendarDropdown />
              </DropdownWrapper>
            )}
          </SearchSection>

          <SearchSection
            isActive={activeDropdown === 'checkout'}
            onClick={() => setActiveDropdown(activeDropdown === 'checkout' ? null : 'checkout')}
          >
            <Label>체크아웃</Label>
            <Input>날짜 추가</Input>
          </SearchSection>
        </>
      ) : (
        <SearchSection
          isActive={activeDropdown === 'date'}
          onClick={() => setActiveDropdown(activeDropdown === 'date' ? null : 'date')}
          width="2"
        >
          <Label>날짜</Label>
          <Input>날짜 추가</Input>
          {activeDropdown === 'date' && (
            <DropdownWrapper ref={checkoutDropdownRef}>
              <CalendarDropdown />
            </DropdownWrapper>
          )}
        </SearchSection>
      )}

      <SearchSection
        isActive={activeDropdown === 'guests'}
        onClick={() => setActiveDropdown(activeDropdown === 'guests' ? null : 'guests')}
      >
        <Label>인원</Label>
        <Input>게스트 추가</Input>
        {activeDropdown === 'guests' && (
          <DropdownWrapper ref={guestDropdownRef}>
            <GuestDropdown />
          </DropdownWrapper>
        )}
      </SearchSection>

      <SearchButton>
        <SearchIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
          </svg>
        </SearchIcon>
      </SearchButton>
    </SearchForm>
  );
};

export default SearchBar;