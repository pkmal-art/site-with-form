'use client';
import styled from 'styled-components';
import ContactButton from './ContactButton';
import Link from 'next/link';

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top: 0;
background: white;
z-index: 1000;
padding: 31px 24px;
border-bottom: 2px solid green;

 @media (max-width: 480px) {
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 21px;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
        <h2>Some Company</h2>
        <Link href="/contacts" passHref>
          <ContactButton>Contact us</ContactButton>
        </Link>
    </HeaderWrapper>
  );
};
