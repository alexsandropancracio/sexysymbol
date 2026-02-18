import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================
   SECTION
========================= */

export const Section = styled.section`
  position: relative;
  padding: 140px 20px;
  background: ${({ theme }) => theme.colors.background};

  &::before {
  content: "";
  position: absolute;
  top: -100px;       /* sobe um pouco para caber melhor */
  left: -100px;      /* desloca para não causar overflow */
  width: 400px;      /* reduz o tamanho */
  height: 400px;     /* reduz o tamanho */
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary}15 0%,
    transparent 70%
  );
  filter: blur(80px);
  opacity: 0.4;
  pointer-events: none;
  max-width: 100vw;   /* garante que não ultrapasse a tela */
  max-height: 100vh;  /* garante que não ultrapasse a altura */
}


  @media (max-width: 1024px) {
    padding: 120px 18px;
  }

  @media (max-width: 768px) {
    padding: 100px 16px;
  }

  @media (max-width: 480px) {
    padding: 80px 12px;
  }
`;

/* =========================
   GRID
========================= */

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width: 1024px) {
    gap: 50px;
  }

  @media (max-width: 768px) {
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 32px;
  }
`;

/* =========================
   TEXT BLOCK
========================= */

export const TextBlock = styled(motion.div)`
  max-width: 720px;
  width: 100%;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 6vw, 3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 7vw, 2.5rem);
  }
`;

export const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

/* =========================
   CONTENT WRAPPER
========================= */

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 32px;
  }

  @media (max-width: 480px) {
    gap: 24px;
  }
`;

/* =========================
   BLOCK (Sessão de Fotos)
========================= */

export const Block = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 24px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.surface};
  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary}60;
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 12px;
  }
`;

export const BlockTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const BlockText = styled.p`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

/* =========================
   VOUCHER CARD
========================= */

export const VoucherCard = styled(motion.div)`
  position: relative;
  padding: 40px 30px;
  border-radius: 24px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary}15,
    ${({ theme }) => theme.colors.surface}
  );
  border: 1px solid ${({ theme }) => theme.colors.primary}70;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 0 60px ${({ theme }) => theme.colors.primary}20;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 0 90px ${({ theme }) => theme.colors.primary}35;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
  }
`;

export const VoucherHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    flex-shrink: 0;

    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const VoucherTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const VoucherText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

/* =========================
   RULES
========================= */

export const RulesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;

  @media (max-width: 480px) {
    gap: 12px;
    padding-top: 16px;
  }
`;

export const RuleItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 0.9rem;
  }
`;

export const RuleText = styled.span`
  line-height: 1.5;
`;

/* =========================
   ICON WRAPPER
========================= */

export const IconWrapper = styled.div`
  min-width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}15;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 480px) {
    min-width: 28px;
    height: 28px;
  }
`;
