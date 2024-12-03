import React from 'react';
import styled from 'styled-components';
import { FaAlignJustify } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import HeaderCopy from '../components/Header'
import CalendarDropdown from '../components/CalendarDropdown';
import GuestDropdown from '../components/GuestDropdown';
import LocationDropdown from '../components/LocationDropdown';
const Header = styled.header`
  height: 80px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
`;

const Logo = styled.div`
  color: #ff385c;
  font-weight: bold;
  font-size: 24px;
  flex: 1;
`;

const SearchBar = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
  align-items: center;
  border: 1px solid #dddddd;
  border-radius: 40px;
  padding: 8px 16px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
`;
const SearchButton = styled.button`
  background-color: #ff385c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  position:relative;
  left: 260px;
  &:hover {
    background-color: #e31c5f;
  }
`;
const SearchIcon = styled.svg`
  display: block;
  fill: none;
  height: 15px;
  width: 15px;
  stroke: currentColor;
  stroke-width: 4;
  overflow: visible;
`;
const UserMenu = styled.div`
    position: relative; 
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
const DetailHeader: React.FC = () => {

  return (
    // <HeaderCopy />
    <Header>
      <Logo>
        airbnb
      </Logo>
      <SearchBar>
        <SearchButton>
        <SearchIcon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
            <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>
          </svg>
        </SearchIcon>
        </SearchButton>
      </SearchBar>
      <UserMenu>
        <HostLink>당신의 공간을 에어비앤비하세요</HostLink>
        <IconButton >
          <HostIcon>
          </HostIcon>
        </IconButton>
        <UserProfile>
          <MenuIcon>
            <FaAlignJustify />
          </MenuIcon>
          <UserIcon>
            <FaCircleUser />
          </UserIcon>
        </UserProfile>
      </UserMenu>
    </Header>
  );
};

export default DetailHeader;