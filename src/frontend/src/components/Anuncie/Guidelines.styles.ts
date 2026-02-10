import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Card = styled.div`
  max-width: 900px;
  margin: 3rem auto 0;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  border: 1px solid #1f1f1f;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const Intro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding: 0.75rem 0 0.75rem 1rem;
  border-left: 2px solid rgba(140, 0, 0, 0.5);

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const FooterNote = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #222;
  text-align: center;
`;

export const FooterText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;
