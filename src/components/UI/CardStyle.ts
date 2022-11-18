import styled from 'styled-components';

interface CardSectionProps {
  className?: string;
}

export const CardSection = styled.section<CardSectionProps>`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  &.cart {
    max-width: 30rem;
    background-color: #313131;
    color: white;

    h2 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
`;
