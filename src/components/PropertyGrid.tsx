import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
  padding-right: 100px;
  padding-left: 100px;
`;

const PropertyCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Arrow = styled.div`
  z-index: 1;
  background-color: white;
  color: black;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s ease; 
  &:hover {
    transform: translateY(-50%) scale(1.04);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

const SliderWrapper = styled(Slider)`
  position: relative;
  .slick-slide img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }
  ${Arrow} {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover ${Arrow} {
    opacity: 1;
  }
`;
const NextArrow = styled(Arrow)`
  right: 10px;
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

const PropertyInfo = styled.div`
  padding: 5px;
`;
const NextArrowComponent = (props: any) => {
  const { onClick } = props;
  const handleClick = (e:React.MouseEvent) =>{
    e.stopPropagation();
    if(onClick){
      onClick(e);
    }
  }
  return <NextArrow onClick={handleClick}>›</NextArrow>;
};

const PrevArrowComponent = (props: any) => {
  const { onClick } = props;
  const handleClick = (e:React.MouseEvent) =>{
    e.stopPropagation();
    if(onClick){
      onClick(e);
    }
  }
  return <PrevArrow onClick={handleClick}>‹</PrevArrow>;
};
interface Property {
  id: number;
  images: string[]; 
  title: string;
  price: string;
  rating?: number;
  location?: string;
}

interface PropertyGridProps {
  properties: Property[];
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties }) => {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/main/${id}`);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrowComponent />,
    prevArrow: <PrevArrowComponent />
  };

  return (
    <GridWrapper>
      {properties.map(property => (
        <PropertyCard key={property.id} onClick={() => handleCardClick(property.id)}>
          <SliderWrapper {...sliderSettings}>
            {property.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${property.title} - ${index + 1}`} />
              </div>
            ))}
          </SliderWrapper>
          <PropertyInfo>
            <h3>{property.title}</h3>
            <p>{property.price}</p>
            <p>★ {property.rating ?? "N/A"}</p>
          </PropertyInfo>
        </PropertyCard>
      ))}
    </GridWrapper>
  );
};

export default PropertyGrid;
