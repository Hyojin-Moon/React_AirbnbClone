import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import BasicModal from './Modal'

interface HeaderProps{
  isScrolled:boolean;
}
type ListingType = 'lodging' | 'experience';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  z-index: 100;
  border-bottom: 1px solid rgb(221, 221, 221);
`;

const HeaderContent = styled.div`
  padding: 8px 20px;
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;
const SearchBarContainer = styled.div<HeaderProps>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width:30%;
  max-width: 850px;
  padding: 0 24px;
  transition: all 0.3s;
  opacity: ${props => props.isScrolled ? 1 : 0};
  pointer-events: ${props => props.isScrolled ? 'auto' : 'none'};
  top: ${props => props.isScrolled ? '10px' : '0'};
`;
const Logo = styled.div`
  color: #ff385c;
  font-weight: bold;
  font-size: 24px;
  flex: 1;
`;
const SearchTypeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex: 1;
`;

const SearchTypeButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 24px;
  position: relative;
  
  ${props => props.active && `
    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 100%;
      height: 0px;
      background: #222222;
    }
  `}
  
  &:hover {
    background: #f7f7f7;
  }
`;

const UserMenu = styled.div`
  // position: relative; // 드롭다운 메뉴 기준점
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  justify-content: flex-end;
`;

const HostLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 21px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 4px rgba(0,0,0,0.18);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  padding: 8px 0;
  min-width: 240px;
  z-index: 100;
`;

const DropdownSection = styled.div`
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

const DropdownItem = styled.a`
  display: block;
  padding: 12px 16px;
  color: #222;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f7f7f7;
  }
`;

const StrongItem = styled(DropdownItem)`
  font-weight: 600;
`;

const UserIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

const MenuIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: currentColor;
  stroke-width: 3;
  fill: none;
`;

const HostIcon = styled.svg`
  height: 16px;
  width: 16px;
  fill: currentcolor;
`;

const LogoIcon = styled.svg`
  width: 102px;
  height: 32px;
  display: block;
`;


const Header:React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [listingType, setListingType] = useState<ListingType>('lodging'); 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    return (
      <>
      <HeaderWrapper>
        <HeaderContent>
          <MainHeader>
            <Logo>airbnb
              {/* Logo<LogoIcon /> */}
            </Logo>

            <SearchTypeContainer>
              <SearchTypeButton 
                active={listingType === 'lodging'}
                onClick={() => setListingType('lodging')}
              >
                숙소
              </SearchTypeButton>
              <SearchTypeButton 
                active={listingType === 'experience'}
                onClick={() => setListingType('experience')}
              >
                체험
              </SearchTypeButton>
            </SearchTypeContainer>

            <UserMenu>
              <HostLink>당신의 공간을 에어비앤비하세요</HostLink>
              <IconButton onClick={BasicModal}>
                <HostIcon>
                <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                </HostIcon>
              </IconButton>
              <UserProfile onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <MenuIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                <g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg>
                </MenuIcon>
                <UserIcon>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path></svg>  
                </UserIcon>
              </UserProfile>
            </UserMenu>
          </MainHeader>

          {!isScrolled && (
            <SearchBar 
              searchType={listingType}
              isScrolled={false}
            />
          )}
        </HeaderContent>

        <SearchBarContainer isScrolled={isScrolled}>
          <SearchBar 
            searchType={listingType}
            isScrolled={true}
          />
        </SearchBarContainer>
          {/* 유저드롭다운옵션 */}
            {isDropdownOpen && (
            <DropdownMenu>
              <DropdownSection>
                <StrongItem href="#">회원가입</StrongItem>
                <DropdownItem href="#">로그인</DropdownItem>
              </DropdownSection>
              <DropdownSection>
                <DropdownItem href="#">당신의 공간을 에어비앤비하세요</DropdownItem>
                <DropdownItem href="#">체험 호스팅하기</DropdownItem>
                <DropdownItem href="#">도움말 센터</DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          )}
    </HeaderWrapper>
    <div style={{ height: '160px' }} />
    </>
    );
  };

export default Header;