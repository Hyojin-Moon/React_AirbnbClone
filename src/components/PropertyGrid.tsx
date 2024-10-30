import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

    const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
    padding: 20px;
    `;

    const PropertyCard = styled.div`
    border-radius: 10px;
    overflow: hidden;
    `;

    const PropertyImage = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    `;

    const PropertyInfo = styled.div`
    padding: 5px;
    `;

interface Property {
    id: number;
    image: string;
    title: string;
    price: string;
    rating: number;
}

interface PropertyGridProps {
    properties: Property[];
}

class PropertyGrid extends React.Component<PropertyGridProps> {
    render() {
        return (
        <GridWrapper>
            {this.props.properties.map(property => (
            <PropertyCard key={property.id}>
                <PropertyImage src={property.image} alt={property.title} />
                <PropertyInfo>
                <h3>{property.title}</h3>
                <p>{property.price}</p>
                <p>★ {property.rating}</p>
                </PropertyInfo>
            </PropertyCard>
            ))}
        </GridWrapper>
        );
    }
}

export default PropertyGrid;