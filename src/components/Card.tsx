'use client';
import styled from 'styled-components';

const CardWrapper = styled.article`
  background: #fff;
  border-radius: 16px;
  padding: 24px 20px;
 box-shadow: 0 6px 16px rgba(0, 0, 0, 0.09), 0 -6px 16px rgba(0, 0, 0, 0.09);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 12px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--primary);
    margin: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
    margin: 0;
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
}


// 'use client';
// import styled from 'styled-components';

// const CardWrapper = styled.article`
// margin: 0;
// background: #ffffff;
// border-radius: 16px;
// padding: 20px;
// box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
// transition: all 0.3s ease;

// &:hover {
//   transform: translateY(-4px);
//   box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
// }
//   h3 {
//     font-size: 21px;
//     margin-bottom: 13px;
//   }
//   p {
//     font-size: 16px;
//     line-height: 125%;
    
//   }
// `;

// type CardProps = {
//   title: string;
//   description: string;
// };

// export default function Card({ title, description }: CardProps) {
//   return (
//     <CardWrapper>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </CardWrapper>
//   );
// };
