import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

export const Content = styled.div`
  max-width: 1200px;     /* limita largura real */
  margin: 0 auto;
  padding: 0 2rem;      /* respiro lateral */

  display: flex;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1.5rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    gap: 1.5rem;
  }
`;

export const Intro = styled.div`
  flex: 0 0 320px;

  @media (max-width: 960px) {
    flex: 1;
    text-align: center;
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
  }
`;

export const Title = styled.h2`
  font-family: serif;
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.25;

  span {
    color: #d4af37;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
`;

export const Description = styled.p`
  color: #a3a3a3;
  line-height: 1.7;
  font-size: 0.95rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled(motion.div)<{
  highlight?: boolean;
  full?: boolean;
}>`
  background-color: #111111;
  padding: 2rem;
  border-top: 2px solid
    ${({ highlight }) => (highlight ? '#d4af37' : '#262626')};
  grid-column: ${({ full }) => (full ? 'span 2' : 'auto')};

  @media (max-width: 768px) {
    padding: 1.75rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    grid-column: auto;
  }
`;

export const IconWrapper = styled.div<{ highlight?: boolean }>`
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ highlight }) => (highlight ? '#d4af37' : '#d4d4d4')};

    @media (max-width: 480px) {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const CardText = styled.p`
  font-size: 0.875rem;
  color: #a3a3a3;
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
