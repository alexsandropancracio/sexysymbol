import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
`;


export const Content = styled.div`
  max-width: 1200px;     /* limita largura real */
  margin: 0 auto;
  padding: 0 2rem;      /* respiro lateral */

  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1.5rem;
  }
`;


export const Intro = styled.div`
  flex: 0 0 320px;

  @media (max-width: 960px) {
    flex: 1;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-family: serif;
  font-size: 2.25rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.25;

  span {
    color: #d4af37;
  }
`;

export const Description = styled.p`
  color: #a3a3a3;
  line-height: 1.7;
  font-size: 0.95rem;
`;

export const CardsGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

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

  @media (max-width: 640px) {
    grid-column: auto;
  }
`;

export const IconWrapper = styled.div<{ highlight?: boolean }>`
  margin-bottom: 1rem;

  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ highlight }) => (highlight ? '#d4af37' : '#d4d4d4')};
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 0.875rem;
  color: #a3a3a3;
  line-height: 1.6;
`;
