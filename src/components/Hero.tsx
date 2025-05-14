'use client';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), { ssr: false });

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const HeroWrapper = styled.section`
  padding: 33px 48px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  background: #dad8d8;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const HeroText = styled.div`
  max-width: 350px;
  h1 {
    font-size: 45px;
    line-height: 125%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  p {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
`;

const HeroVideo = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 506px;
  aspect-ratio: 16 / 9;
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroText>
        <h1>
          Most important title on the page
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
        </p>
      </HeroText>
      <HeroVideo>
        <LiteYouTubeEmbed 
          id="dQw4w9WgXcQ" 
          title="Rick Astley - Never Gonna Give You Up"
        />
      </HeroVideo>
    </HeroWrapper>
  );
};