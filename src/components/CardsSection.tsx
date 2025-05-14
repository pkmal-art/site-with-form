import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import ContactButton from './ContactButton';
import Link from 'next/link';

const CardsSectionWrapper = styled.section`
  padding: 55px 40px 40px 40px;
`;

const TitleCardsSection = styled.h2`
  margin: 0;
  margin-bottom: 40px;
  text-align: center;
  font-size: 44px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 40px 0 20px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  padding: 66px 24px;
  grid-template-columns: repeat(3, 1fr);
  gap: 107px 65px;

  @media (max-width: 680px) {
    padding: 0 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function CardsSection() {
  return (
    <CardsSectionWrapper>
      <TitleCardsSection>
        Also very important title
      </TitleCardsSection>
      <CardsGrid>
        <Card
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        />
        <Card
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        />
        <Card
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        />
        <Card
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        />
        <Card
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        />
        <Card
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum"
        />
      </CardsGrid>
      <ButtonWrapper>
        <Link href="/contacts" passHref>
          <ContactButton>Contact us</ContactButton>
        </Link>
      </ButtonWrapper>
      
    </CardsSectionWrapper>
  )
}

