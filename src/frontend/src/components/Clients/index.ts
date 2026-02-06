import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #0b0b0b;
  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  transition: transform 0.2s ease-out;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
`;
