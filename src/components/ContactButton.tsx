'use client';
import styled from 'styled-components';

const ContactButton = styled.button`
  background: var(--primary);
  color: #fff;
  padding: 12px 28px;
  border: none;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--accent);
    transform: scale(1.05);
    color: var(--primary);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(100, 100, 255, 0.3);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default ContactButton;


// import styled from 'styled-components';

// const ContactButton = styled.button`
//   background: var(--primary);
//   color: #fff;
//   border: none;
//   padding: 10px 24px;
//   border-radius: 24px;
//   font-weight: 500;
//   transition: all 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     background: var(--accent);
//     transform: scale(1.05);
//     color: var(--primary);
//   }
// `;

// export default ContactButton;