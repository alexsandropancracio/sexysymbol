import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  @media (max-width: 1024px) {
    height: auto;
    padding: 6rem 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
    height: 80vh;
  }
`;

export const BackgroundRadial = styled.div`
  position: absolute;
  inset: 0;
  background: #000000;
  opacity: 0.85;
`;

export const BackgroundTexture = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
  opacity: 0.05;
  mix-blend-mode: overlay;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  padding: 0 1.5rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const TitleLogo = styled.div<{ $logo: string }>`
  display: inline-block;
  margin-bottom: 12px;

  .logo-wrapper {
    position: relative;
    display: inline-block;
    width: fit-content;
    height: fit-content;
    overflow: hidden; /* 🔥 impede qualquer vazamento */

    -webkit-mask-image: url(${props => props.$logo});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    -webkit-mask-position: center;

    mask-image: url(${props => props.$logo});
    mask-repeat: no-repeat;
    mask-size: 100% 100%;
    mask-position: center;
  }

  img {
    height: 80px;
    width: auto;
    display: block;
  }

  @keyframes shine {
    from {
      transform: translateX(-100%) skewX(-25deg);
      opacity: 1;
    }
    to {
      transform: translateX(100%) skewX(-25deg);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 65px;
    }
  }

  @media (max-width: 426px) {
    img {
      height: 52px; /* 🔥 ajuste coerente para mobile */
    }
  }
`;


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

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 9vw, 3.5rem);
    margin-bottom: 1.5rem;
  }
`;

export const Brand = styled.span`
  display: block;
  background: linear-gradient(
    90deg,
    #f5f5f5 0%,
    #d1d1d1 50%,
    #bfbfbf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  max-width: 640px;
  margin: 0 auto 3rem;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

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

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.75rem;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.muted};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 480px) {
    bottom: 1.5rem;
  }
`;
