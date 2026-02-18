import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================
   CONTAINER PRINCIPAL
========================= */
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem; /* padding seguro para mobile */
  overflow-x: hidden; /* bloqueio horizontal global */
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 0 1.5rem; }
  @media (max-width: 768px) { padding: 0 1.25rem; }
  @media (max-width: 480px) { padding: 0 1rem; }
`;

/* =========================
   SEÇÃO
========================= */
export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  overflow-x: hidden; /* prevenção extra */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) { padding: 5.5rem 0; }
  @media (max-width: 1024px) { padding: 5rem 0; }
  @media (max-width: 768px) { padding: 4rem 0; }
  @media (max-width: 480px) { padding: 3rem 0; }
`;

/* =========================
   GRID DE BENEFÍCIOS
========================= */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
  overflow-x: hidden; /* proteção contra scroll horizontal */
  box-sizing: border-box;

  @media (max-width: 1440px) { gap: 3.5rem; }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  @media (max-width: 768px) { gap: 2.5rem; }
  @media (max-width: 480px) { gap: 2rem; }
`;

/* =========================
   BLOCOS DE TEXTO
========================= */
export const TextBlock = styled(motion.div)`
  max-width: 520px;
  width: 100%;
  overflow-x: hidden; /* reforço extra */
  box-sizing: border-box;

  @media (max-width: 1024px) { margin: 0 auto; }
  @media (max-width: 480px) { max-width: 100%; }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 6vw, 3.2rem);
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 1.75rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) { font-size: clamp(1.9rem, 5.5vw, 2.8rem); }
  @media (max-width: 480px) { font-size: clamp(1.75rem, 5vw, 2.5rem); }
`;

export const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 1.03rem; }
  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; line-height: 1.6; }
`;

/* =========================
   LISTA DE BENEFÍCIOS
========================= */
export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow-x: hidden; /* prevenção extra */
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { align-items: center; }
  @media (max-width: 480px) { gap: 1rem; }
`;

export const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  transition: background 0.3s ease;

  width: 100%;
  max-width: 520px;
  box-sizing: border-box;
  overflow-x: hidden; /* reforço extra */

  &:hover { background: ${({ theme }) => theme.colors.surface}; }

  @media (max-width: 1024px) { padding: 1.2rem; }
  @media (max-width: 768px) { padding: 1.1rem; }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 0.75rem;
  }
`;

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  margin-top: 2px;

  @media (max-width: 480px) { margin-top: 0; }
`;

export const BenefitText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 1.03rem; }
  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
`;
