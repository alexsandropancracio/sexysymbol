import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  position: relative;
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 5rem 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

export const Texture = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
  opacity: 0.08;
  pointer-events: none;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const Quote = styled(motion.h3)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-style: italic;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 5vw, 2.2rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.4rem, 6vw, 2rem);
  }
`;

export const Values = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    gap: 1rem;
  }
`;

export const Dot = styled.span`
  opacity: 0.6;
`;
