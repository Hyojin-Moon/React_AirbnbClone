import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DetailHeader from './1_DetailHeader';
import PhotoView from './2_PhotoView';
import Body from './3_Body';
import Box from './4_Box';
import Map from './5_Map';
import Review from './6_Review';
import { Listing } from '../Main/types'

const MainContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 80px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  margin-top: 24px;
`;

const Main: React.FC = () => {
    const { propertyId } = useParams<{ propertyId: string }>();
    const [listing, setListing] = React.useState<Listing | null>(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/Data/listings.json');
          const data = await response.json();
          setListing(data);
        } catch (error) {
          console.error('Error fetching listing:', error);
        }
      };
      fetchData();
    }, []);
  
    if (!listing) return <div>Loading...</div>;
    return (
      <div>
      <DetailHeader />
      <MainContainer>
        <PhotoView images={listing.images}/>
        <ContentWrapper>
          <div>
            <Body listing={listing}/>
            <Map  />
            <Review />
          </div>
          <Box  listing={listing}/>
        </ContentWrapper>
      </MainContainer>
      </div>
    );
  };

export default Main;

