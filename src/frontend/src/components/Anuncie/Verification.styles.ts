import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted}20;
`;

export const Content = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const IconWrapper = styled(motion.div)`
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const Description = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

export const Note = styled.div`
  background: ${({ theme }) => theme.colors.surface}80;
  padding: 1rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.muted}30;
`;

export const NoteText = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.muted};
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;
