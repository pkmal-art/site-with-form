'use client';
import styled from 'styled-components';
import ContactButton from '../components/ContactButton';
import Link from 'next/link';

const ActionSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  background: #cad5e1;
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;

  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 40px;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

export default function ActionSection() {
  return (
    <ActionSectionWrapper>
      <h2>Less important title</h2>
      <Link href="/contacts" passHref>
        <ContactButton>Contact us</ContactButton>
      </Link>
    </ActionSectionWrapper>
  );
}


// import styled from 'styled-components';
// import ContactButton from '../components/ContactButton';
// import Link from 'next/link';

// const ActionSectionWrapper = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   padding: 70px 20px;
//   background: #f1f1f1;

//   h2 {
//     font-size: 45px;
//     margin-bottom: 50px;

//     @media (max-width: 768px) {
//       font-size: 1.5rem;
//     }
//   }
// `;

// export default function ActionSection() {
//   return (
//   <ActionSectionWrapper>
//     <h2>Less important title</h2>
//     <Link href="/contacts" passHref>
//       <ContactButton>Contact us</ContactButton>
//     </Link>
//   </ActionSectionWrapper>
//   )
// }

