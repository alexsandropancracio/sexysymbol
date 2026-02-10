import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 5rem 0;
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

export const Card = styled(motion.div)`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.surface},
    #0b0b0b
  );
  border-radius: 1rem;
  padding: 1px;
  border: 1px solid ${({ theme }) => theme.colors.muted}30;
`;

export const Inner = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0.9rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Watermark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  opacity: 0.04;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.text};
`;

export const Row = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const IconWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary}15;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

export const Lists = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 3rem;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  ul {
    list-style: disc;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.75rem;

      &::marker {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
