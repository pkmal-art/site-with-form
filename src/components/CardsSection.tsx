'use client';
import styled from 'styled-components';
import Card from './Card';
import ContactButton from './ContactButton';
import Link from 'next/link';

const CardsSectionWrapper = styled.section`
  padding: 80px 40px 60px;
  background: #fafafa;

  @media (max-width: 768px) {
    padding: 40px 32px;
  }

`;

const TitleCardsSection = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 60px;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 30px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 40px;
  padding-bottom: 50px;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
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

