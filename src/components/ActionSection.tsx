import styled from 'styled-components';
import ContactButton from '../components/ContactButton';
import Link from 'next/link';

const ActionSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 70px 20px;
  background: #f1f1f1;

  h2 {
    font-size: 45px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      font-size: 1.5rem;
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
  )
}

