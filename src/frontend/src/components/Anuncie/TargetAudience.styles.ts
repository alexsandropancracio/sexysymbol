import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 5rem 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.muted}30;
  padding: 2.5rem;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}60;
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  line-height: 1.3;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
