import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface SlickMenuProps{
  isScrolled:boolean;
}
interface MenuWrapperProps {
  showGradient: boolean;
}
interface SlickMenuContainerProps {
  isScrolled: boolean;
}
interface MenuItemType {
  id: number;
  image: string;
  label: string;
}
const SlickMenuContainer = styled.div`
  position: sticky;
  top: 80px; 
  background-color: white;
  z-index: 99;
`;
const SlickMenuContent = styled.div<SlickMenuContainerProps>`
  padding: 10px 20px;
  border-bottom: ${props => props.isScrolled ? '1px solid rgb(221, 221, 221)' : 'none'};
  transition: border-bottom 0.2s ease;
`;
const MenuWrapper = styled.div<MenuWrapperProps>`
  position: relative;
  width: 80%;  
  padding-right: 100px;
  padding-left: 100px;
  
  .slick-slide {
    display: flex; !important;
    justify-content: center;
    padding: 20px 0;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-list::before,
  .slick-list::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100px;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    opacity: ${props => props.showGradient ? 1 : 0};
    transition: opacity 0.3s ease;
  }

  .slick-list::before {
    left: 0;
    background: linear-gradient(to right, white 0%, transparent 100%);
    opacity: ${props => props.showGradient ? 1 : 0};
  }

  .slick-list::after {
    right: 0;
    background: linear-gradient(to left, white 0%, transparent 100%);
    opacity: ${props => props.showGradient ? 1 : 0};
  }

  .slick-arrow {
  
    width: 32px;
    height: 32px;
    background-color: white;
    border: 1px solid #DDDDDD;
    border-radius: 50%;
    z-index: 2;
    transform-origin: center center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &::before {
      content: '';
      display: none;
    }

    &:hover {
      transform: translateY(-50%) scale(1.04);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
    }

    &.slick-disabled {
      display: none !important;
    }
  }

  .slick-prev {
    left: -15px;
    &::after {
      content: '';
      display: block;
      width: 8px; //화살표 크기
      height: 8px;
      border-left: 1px solid #222222;  //화살표 두께
      border-bottom: 1px solid #222222;
      transform: rotate(45deg);
      margin-left: 4px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -5px;
      margin-left: -3px;
    }
  }

  .slick-next {
    right: -15px;
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-right: 1px solid #222222;
      border-top: 1px solid #222222;
      transform: rotate(45deg);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -5px;
      margin-left: -7px;
    }
  }
`;
const MenuImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  transition: opacity 0.2s ease;
  margin: 0 auto;
  opacity: 0.7;
`;

const MenuLabel = styled.span`
  width: 100%;
  display: block;
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
  color: #717171;
  transition: color 0.2s ease;
  white-space: nowrap;
`;
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 60px;
  padding: 4px 0;
  position: relative;
  text-align: center;
  

  &:hover {
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 8px);
      height: 2px;
      background-color: black;
    }

    ${MenuImage} {
      opacity: 1;
    }

    ${MenuLabel} {
      color: #222222;
      font-weight: 600;
    }
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  border-radius: 12px;
  border: 1px solid rgb(221, 221, 221);
  height: 48px;
  padding: 5px 16px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -40px;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    box-shadow: 0 1px 2px rgba(0,0,0,0.18);
    background-color: #F7F7F7;
    border: 1px solid black;
  }
`;
const FilterIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentColor;
  stroke-width: 2;
  overflow: visible;
  margin-right: 8px;
`;



const SlickMenu: React.FC<SlickMenuProps> = ({isScrolled}) => {

  const [showGradient, setShowGradient] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
        const menuItems: MenuItemType[] = [
        { id: 1, image: 'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg', label: '해변 근처' },
        { id: 2, image: 'https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png', label: '컬처 아이콘' },
        { id: 3, image: 'https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg', label: '한옥' },
        { id: 4, image: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg', label: '멋진 수영장' },
        { id: 5, image: 'https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg', label: '캐슬' },
        { id: 6, image: 'https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg', label: '캠핑장' },
        { id: 7, image: 'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg', label: '한적한 시골' },
        { id: 8, image: 'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg', label: '최고의 전망' },
        { id: 9, image: 'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg', label: '해변 바로 앞' },
        { id: 10, image: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg', label: '방' },
        { id: 11, image: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg', label: '기상천외한 숙소' },
        { id: 12, image: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg', label: '국립공원' },
        { id: 13, image: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg', label: '통나무집' },
        { id: 14, image: 'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', label: '농장' },
        { id: 15, image: 'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg', label: '초소형 주택' },
        { id: 16, image: 'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg', label: '인기 급상승' },
        { id: 17, image: 'https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg', label: 'Luxe' },
        { id: 18, image: 'https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg', label: '키즈' },
        { id: 19, image: 'https://a0.muscache.com/pictures/9a2ca4df-ee90-4063-b15d-0de7e4ce210a.jpg', label: '속세를 벗어난 숙소' },
        { id: 20, image: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg', label: '호숫가' },
        { id: 21, image: 'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg', label: '호수 근처' },
        { id: 22, image: 'https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg', label: '료칸' },
        { id: 23, image: 'https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg', label: '디자인' },
        { id: 24, image: 'https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg', label: '저택' },
        { id: 25, image: 'https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg', label: '트리하우스' },
        { id: 26, image: 'https://a0.muscache.com/pictures/8eccb972-4bd6-43c5-ac83-27822c0d3dcd.jpg', label: '그랜드 피아노' },
        { id: 27, image: 'https://a0.muscache.com/pictures/60ff02ae-d4a2-4d18-a120-0dd274a95925.jpg', label: '와인 농장' },
        { id: 28, image: 'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg', label: '유서 깊은 주택' },
        { id: 29, image: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg', label: '섬' },
        { id: 30, image: 'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg', label: '상징적 도시' },
        ];
        const settings = {
          dots: false,
          infinite: false,
          speed: 280,
          slidesToShow: 12,
          slidesToScroll: 8,
          beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);
            // 첫 페이지나 마지막 페이지가 아닐 때만 그라데이션 표시
            setShowGradient(next > 0 && next < menuItems.length - settings.slidesToShow);
          },
          responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 10,
                slidesToScroll: 5,
              }
            },
            {
              breakpoint: 1128,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 4,
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 744,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            }
          ]
        };
        return (
        <SlickMenuContainer>
          <SlickMenuContent isScrolled={isScrolled}>
            <MenuWrapper showGradient={showGradient}>
              <Slider {...settings}>
            {menuItems.map((item) => (
              <MenuItem key={item.id}>
                <MenuImage src={item.image} alt={item.label} />
                <MenuLabel>{item.label}</MenuLabel>
              </MenuItem>
            ))}
              </Slider>
              <FilterButton>
                <FilterIcon  viewBox="0 0 32 32">
                  <path fill="none" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"></path>
                </FilterIcon>필터
              </FilterButton>
            </MenuWrapper>
          </SlickMenuContent>
        </SlickMenuContainer>
        );
    }


export default SlickMenu;


