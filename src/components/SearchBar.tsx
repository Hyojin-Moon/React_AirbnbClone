import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 40px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 14px 24px;
  font-size: 14px;
  
  &:not(:nth-child(4)):not(:nth-child(5)) {
    border-right: 1px solid #ddd;
  }

  &:first-child {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  &:nth-child(3) {
    border-right: none;
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
`;
const SearchIcon = styled.svg`
  display:block;
  fill:none;
  height:16px;
  width:16px;
  stroke:currentColor;
  stroke-width:4;
  overflow:visible;
`
class SearchBar extends React.Component {
    render() {
        return (
            <SearchBarWrapper>
                <SearchForm>
                <SearchInput placeholder="여행지" />
                <SearchInput placeholder="체크인" />
                <SearchInput placeholder="체크아웃" />
                <SearchInput placeholder="게스트" />
                <SearchButton>
                  <SearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
                  <path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path>

                  </SearchIcon>
                </SearchButton>
                </SearchForm>
            </SearchBarWrapper>
        );
    }
}

export default SearchBar;