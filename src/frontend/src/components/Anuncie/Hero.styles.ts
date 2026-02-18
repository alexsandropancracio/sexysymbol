import styled from "styled-components";
import { motion } from "framer-motion";

/* =========================
   HERO SECTION
========================= */
export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  overflow-x: hidden; /* ⚡ bloqueia scroll horizontal */

  @media (max-width: 1024px) { padding: 0 1.25rem; }
  @media (max-width: 768px) { padding: 0 1.2rem; }
  @media (max-width: 480px) { padding: 0 1rem; }
`;

/* =========================
   BACKGROUNDS
========================= */
export const BackgroundRadial = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden; /* ⚡ previne overflow interno */
  box-sizing: border-box;
`;

export const BackgroundTexture = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden; /* ⚡ previne overflow interno */
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  opacity: 0.05;
  mix-blend-mode: overlay;
`;

/* =========================
   CONTENT
========================= */
export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;

/* =========================
   LOGO
========================= */
export const TitleLogo = styled.div<{ $logo: string }>`
  display: inline-block;
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  .logo-wrapper {
    position: relative;
    display: inline-block;
    width: fit-content;
    height: fit-content;

    -webkit-mask-image: url(${props => props.$logo});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    -webkit-mask-position: center;

    mask-image: url(${props => props.$logo});
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;
  }

  img {
    height: 80px;
    width: auto;
    max-width: 100%;
    display: block;
  }

  @media (max-width: 1024px) { img { height: 75px; } }
  @media (max-width: 768px) { img { height: 65px; } }
  @media (max-width: 480px) { img { height: 52px; } }
`;

/* =========================
   TITLE / BRAND / SUBTITLE
========================= */
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: clamp(2.8rem, 7.5vw, 5rem); }
  @media (max-width: 768px) { font-size: clamp(2.5rem, 8vw, 4.5rem); }
  @media (max-width: 480px) { font-size: clamp(2rem, 9vw, 3.5rem); margin-bottom: 1.5rem; }
`;

export const Brand = styled.span`
  display: block;
  background: linear-gradient(90deg, #f5f5f5 0%, #d1d1d1 50%, #bfbfbf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

/* =========================
   SUBTITLE
========================= */
export const Subtitle = styled.p`
  max-width: 640px;
  width: 100%;
  margin: 0 auto 3rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 1.05rem; }
  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; margin-bottom: 2rem; }
`;

/* =========================
   CTA BUTTON
========================= */
export const CtaButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  max-width: 100%;
  box-sizing: border-box;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }

  @media (max-width: 768px) { padding: 0.9rem 2rem; font-size: 0.8rem; }
  @media (max-width: 480px) { padding: 0.75rem 1.5rem; font-size: 0.75rem; width: 100%; }
`;

/* =========================
   SCROLL INDICATOR
========================= */
export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.3s ease;
  overflow: hidden; /* ⚡ bloqueia qualquer movimento fora do container */
  width: 32px; /* ⚡ largura fixa do chevron */
  height: 32px; /* ⚡ altura fixa do chevron */
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    bottom: 1.5rem;
  }
`;
