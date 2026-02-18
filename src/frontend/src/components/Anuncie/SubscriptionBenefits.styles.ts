import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================
   SECTION
========================= */

export const Section = styled.section`
  position: relative;
  padding: 140px 0;
  background: ${({ theme }) => theme.colors.background};

  /* glow sutil com a cor primária */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      ${({ theme }) => theme.colors.primary}15 0%,
      transparent 70%
    );
    filter: blur(80px);
    opacity: 0.4;
    pointer-events: none;
  }
`;

/* =========================
   GRID
========================= */

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

/* =========================
   TEXT BLOCK
========================= */

export const TextBlock = styled(motion.div)`
  max-width: 720px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  font-weight: 600;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
`;

export const TitleHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
`;

/* =========================
   CONTENT WRAPPER
========================= */

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

/* =========================
   BLOCK (Sessão)
========================= */

export const Block = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: flex-start;

  padding: 30px;
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.surface};


  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary}60;
    transform: translateY(-4px);
  }
`;

export const BlockTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const BlockText = styled.p`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
`;

/* =========================
   VOUCHER CARD (DESTAQUE)
========================= */

export const VoucherCard = styled(motion.div)`
  position: relative;
  padding: 50px 40px;
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
`;

export const VoucherHeader = styled.div`
  display: flex;          /* ícone e título lado a lado */
  align-items: center;    /* alinha verticalmente */
  gap: 0.5rem;            /* espaço entre ícone e título */

  svg {
    flex-shrink: 0;       /* impede que o ícone encolha */
  }
`;

export const VoucherTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const VoucherText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;


/* =========================
   RULES
========================= */

export const RulesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-top: 20px;
`;

export const RuleItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 14px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};

  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
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
`;
