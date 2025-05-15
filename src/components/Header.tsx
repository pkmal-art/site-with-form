'use client';
import styled from 'styled-components';
import ContactButton from './ContactButton';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 20px 32px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    padding: 16px 20px;
  }
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  color: var(--primary);
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--accent);
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Link href="/" passHref>
        <Logo>Some Company</Logo>
      </Link>

      <Link href="/contacts" passHref>
        <ContactButton>Contact us</ContactButton>
      </Link>
    </HeaderWrapper>
  );
}



// 'use client';
// import styled from 'styled-components';
// import ContactButton from './ContactButton';
// import Link from 'next/link';

// const HeaderWrapper = styled.header`
// position: sticky;
// top: 0;
// z-index: 1000;
// padding: 24px 32px;
// background: #FFF;
// border-radius: 0 0 10px 10px;
// display: flex;
// justify-content: space-between;
// align-items: center;
// box-shadow: 0px 8px 9px 0px rgba(178, 193, 163, 0.6);
// transition: all 0.3s ease;

// &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     height: 4px;
//     background: var(--greenTone);
//     filter: blur(6px);
//     opacity: 0.6;
//     pointer-events: none;
//   }

//   @media (max-width: 480px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 16px 20px;
//     gap: 12px;
//   }
// `;

// const Logo = styled.h2`
//   margin: 0;
//   font-size: 26px;
//   font-weight: 700;
//   color: var(--primary);
//   letter-spacing: 1px;
//   transition: 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     color: var(--accent);
//   }

//   @media (max-width: 480px) {
//     font-size: 20px;
//   }
// `;

// export default function Header() {
//   return (
//     <HeaderWrapper>
//       <Link href="/" passHref>
//         <Logo>Some Company</Logo>
//       </Link>

//       <Link href="/contacts" passHref>
//         <ContactButton>Contact us</ContactButton>
//       </Link>
//     </HeaderWrapper>
//   );
// };
