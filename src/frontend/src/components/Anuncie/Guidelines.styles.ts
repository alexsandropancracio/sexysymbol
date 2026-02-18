import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================
   SECTION PRINCIPAL
========================= */
export const Section = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 5.5rem 0;
  }

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

/* =========================
   WRAPPER DO TÍTULO
========================= */
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

/* =========================
   CARD PRINCIPAL
========================= */
export const Card = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 3rem auto 0;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  border: 1px solid #1f1f1f;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 2.8rem;
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: calc(100% - 2rem);
    margin: 2rem auto 0;
  }
`;

/* =========================
   INTRODUÇÃO / PARÁGRAFO
========================= */
export const Intro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    font-size: 1.03rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

/* =========================
   GRID DE ITENS
========================= */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 1.25rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

/* =========================
   ITEM INDIVIDUAL
========================= */
export const Item = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0 0.75rem 1rem;
  border-left: 2px solid rgba(140, 0, 0, 0.5);
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;

  svg {
    width: 18px;
    height: 18px;
    min-width: 18px;
    min-height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 0.93rem;
    padding-left: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding-left: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

/* =========================
   FOOTER / NOTA FINAL
========================= */
export const FooterNote = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #222;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    margin-top: 2.75rem;
    padding-top: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
    padding-top: 1rem;
  }
`;

/* =========================
   TEXTO DO FOOTER
========================= */
export const FooterText = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.72rem;
    letter-spacing: 0.18em;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    letter-spacing: 0.15em;
  }
`;
