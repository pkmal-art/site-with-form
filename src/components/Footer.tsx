'use client';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: sticky;
  bottom: 0;
  padding: 60px 20px;
  background: #f8f8f8;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: #666;
  border-top: 1px solid #e1e1e1;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Some Company. All rights reserved.
    </FooterWrapper>
  );
}

