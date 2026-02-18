import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================
   SEÇÃO PRINCIPAL
========================= */
export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  overflow-x: hidden; /* previne scroll horizontal */

  @media (max-width: 768px) { padding: 4rem 0; }
  @media (max-width: 480px) { padding: 3rem 0; }
`;

/* =========================
   CONTEÚDO PRINCIPAL
========================= */
export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) { padding: 0 1.5rem; }
  @media (max-width: 480px) { padding: 0 1rem; }
`;

/* =========================
   CARD EXTERNO
========================= */
export const Card = styled(motion.div)`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.surface},
    #0b0b0b
  );
  border-radius: 1rem;
  padding: 1px;
  border: 1px solid ${({ theme }) => theme.colors.muted}30;
  box-sizing: border-box;

  @media (max-width: 480px) { border-radius: 0.8rem; }
`;

/* =========================
   CARD INTERNO
========================= */
export const Inner = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0.9rem;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) { padding: 2rem; }
  @media (max-width: 480px) { padding: 1.5rem; }
`;

/* =========================
   MARCA D'ÁGUA
========================= */
export const Watermark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
  opacity: 0.04;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;

  @media (max-width: 480px) { padding: 1rem; }
`;

/* =========================
   LINHA DE CONTEÚDO
========================= */
export const Row = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  box-sizing: border-box;

  @media (max-width: 768px) { flex-direction: column; gap: 1.5rem; }
  @media (max-width: 480px) { gap: 1rem; }
`;

/* =========================
   ÍCONE
========================= */
export const IconWrapper = styled.div`
  padding: 0.75rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.primary}15;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  box-sizing: border-box;

  @media (max-width: 480px) { padding: 0.6rem; }
`;

/* =========================
   TÍTULO
========================= */
export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.35rem; margin-bottom: 1.25rem; }
`;

/* =========================
   LISTAS
========================= */
export const Lists = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 3rem;
  color: ${({ theme }) => theme.colors.muted};
  box-sizing: border-box;

  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 1.25rem 0; }
  @media (max-width: 480px) { gap: 1rem 0; }

  ul {
    list-style: disc;
    padding-left: 1.2rem;
    margin: 0;

    li {
      margin-bottom: 0.75rem;
      box-sizing: border-box;

      &::marker { color: ${({ theme }) => theme.colors.primary}; }

      @media (max-width: 480px) { margin-bottom: 0.6rem; }
    }
  }
`;
