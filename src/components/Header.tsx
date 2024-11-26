import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import BasicModal from './Modal'
import { FaAlignJustify } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import SlickMenu from './SlickMenu';

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
  margin-right: 15px;
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
  top: 40%;
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

const UserIcon = styled(FaCircleUser)`
  width: 32px;
  height: 28px;
  margin-right: 4px;
  margin-left: 8px;
  fill: currentColor;
`;

const MenuIcon = styled(FaAlignJustify)`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  stroke: currentColor;
  stroke-width: 3;
  fill: currentColor;
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

const SlickMenuWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #ddd;
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
                </HostIcon>
              </IconButton>
              <UserProfile onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <MenuIcon>
                  <FaAlignJustify />
                </MenuIcon>
                <UserIcon>
                  <FaCircleUser />
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
          {/* {
            const loginLabelData = {
              signUp: '회원가입',
              login: '로그인',
              guideComment: '당신의 공간을 에어비앤비하세요',
              hostingExp: '체험 호스팅하기',
              helpCenter: '도움말 센터',

            }
          } */}

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