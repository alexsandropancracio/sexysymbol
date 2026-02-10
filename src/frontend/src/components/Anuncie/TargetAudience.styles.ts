import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;



export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
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
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.35rem;        /* ↓ reduz hierarquia */
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
  line-height: 1.3;
  letter-spacing: 0.02em;
`;


export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 300;
  line-height: 1.6;
`;
