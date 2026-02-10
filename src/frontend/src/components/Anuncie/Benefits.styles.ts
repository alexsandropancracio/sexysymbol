import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  justify-content: center;

  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const TextBlock = styled(motion.div)`
  max-width: 520px;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;


export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.5rem, 5vw, 3.2rem);
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 2rem;
`;

export const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;


export const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  transition: background 0.3s ease;
  max-width: 520px;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
  }
`;


export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  margin-top: 2px;
`;

export const BenefitText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;
