'use client';
import styled from 'styled-components';

const CardWrapper = styled.article`
margin: 0;
  h3 {
    font-size: 21px;
    margin-bottom: 13px;
  }
  p {
    font-size: 16px;
    line-height: 125%;
    color: #666;
  }
`;

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <CardWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardWrapper>
  );
};
