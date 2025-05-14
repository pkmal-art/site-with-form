'use client';
import styled from 'styled-components';

const FooterWreapper = styled.footer`
  position: sticky;
  bottom: 0;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding: 90px 20px;
`;

export default function Footer() {
  return (
    <FooterWreapper>Some Company 2024</FooterWreapper>
  );
};