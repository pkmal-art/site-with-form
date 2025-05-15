'use client';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const LiteYouTubeEmbed = dynamic(() => import('react-lite-youtube-embed'), { ssr: false });
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const HeroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 33px 48px;
  background: linear-gradient(135deg, #ffffff 0%, #b9cbde 100%);
  border-bottom: 1px solid #ddd;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 40px 32px;
  }
`;

const HeroText = styled.div`
  max-width: 350px;
  animation: fadeSlideIn 0.7s ease both;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 24px;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #444;
    line-height: 1.7;
  }

  @media (max-width: 768px) {   
    max-width: 100%;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroVideo = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 506px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.8s ease 0.2s both;

   @media (max-width: 768px) {   
    width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroText>
        <h1>Most important title on the page</h1>
        <p>
          We help ambitious businesses thrive through smart design, modern technology, and a tailored experience. Let us show you how.
        </p>
      </HeroText>
      <HeroVideo>
        <LiteYouTubeEmbed id="dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up" />
      </HeroVideo>
    </HeroWrapper>
  );
}

