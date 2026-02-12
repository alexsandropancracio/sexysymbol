import styled from "styled-components";
import { motion } from "framer-motion";

/* ================= PAGE ================= */

export const Page = styled(motion.main)`
  min-height: 110vh;
  background: radial-gradient(
    circle at top,
    #111 0%,
    #070707 60%
  );
  color: #eaeaea;
`;

export const ImageFrame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;


/* ================= NAV ================= */

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;

  background: rgb(0, 0, 0);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const NavContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 14px;
  border-radius: 999px;

  font-size: 11px;
  letter-spacing: 0.22em;
  font-weight: 500;
  text-transform: uppercase;

  color: #a1a1aa;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);

  backdrop-filter: blur(10px);

  transition: all 0.35s ease;

  svg {
    transition: transform 0.35s ease;
  }

  &:hover {
    color: #c9a24d;
    border-color: rgba(201, 162, 77, 0.4);
    background: rgba(201, 162, 77, 0.08);
  }

  &:hover svg {
    transform: translateX(-4px);
  }

  &:active {
    transform: scale(0.96);
  }
`;


export const NavAction = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #a1a1aa;

  backdrop-filter: blur(10px);

  transition: all 0.35s ease;

  svg {
    transition: transform 0.35s ease;
  }

  &:hover {
    color: #c9a24d;
    border-color: rgba(201, 162, 77, 0.4);
    background: rgba(201, 162, 77, 0.08);
  }

  &:hover svg {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.92);
  }
`;


/* ================= GRID ================= */

export const ProfileGrid = styled.section`
  max-width: 1280px;
  margin: 48px auto;
  padding: 0 24px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media (min-width: 1024px) {
    grid-template-columns: 42% 58%;
    gap: 40px;
  }

  @media (max-width: 480px) {
    margin: 32px auto;
    padding: 0 16px;
    gap: 28px;
  }
`;



/* ================= LEFT ================= */

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 🔑 centraliza tudo */
  gap: 18px;
`;

/* ================= CAROUSEL ================= */

export const CarouselWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 420px; /* desktop */
  aspect-ratio: 3.4 / 5; /* proporção elegante */

  border-radius: 22px;
  overflow: hidden;
  background: #0b0b0b;

  box-shadow:
    0 40px 90px rgba(0, 0, 0, 0.75),
    inset 0 0 0 1px rgba(255, 255, 255, 0.06);

  @media (max-width: 1024px) {
    max-width: 380px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
    aspect-ratio: 3 / 4.5; /* proporção levemente mais alta */
  }

  @media (max-width: 480px) {
    max-width: 95%; /* ocupa toda a tela */
    aspect-ratio: 2.6 / 4; 
    border-radius: 18px;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.55)
    ),
    radial-gradient(
      circle at center,
      rgba(201, 162, 77, 0.06),
      transparent 65%
    );
  pointer-events: none;
`;



/* ================= ARROWS ================= */

export const ArrowButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: 16px;" : "right: 16px;")}
  transform: translateY(-50%);
  z-index: 5;

  width: 45px;
  height: 45px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;

  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);

  color: #fff;
  opacity: 0;
  transition: 0.35s;

  ${CarouselWrapper}:hover & {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-50%) scale(1.15);
  }

    &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

/* ================= RIGHT ================= */

export const RightColumn = styled.aside`
  position: sticky;
  top: 96px;

  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    position: static;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const InfoSection = styled.div`
  width: 90%; /* 🔑 ocupa tudo */
  display: flex;
  flex-direction: column;
  gap: 22px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;



/* ================= DETAILS ================= */

export const DetailsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;

    @media (max-width: 480px) {
    width: 100%
  }
`;

export const DetailItem = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 120px 1fr;
  align-items: center;
  gap: 24px;

  padding: 12px 16px;
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);

  overflow: hidden; /* 🔑 impede expansão lateral */

  span {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #a1a1aa;
    white-space: nowrap;
  }

  strong {
    font-size: 14px;
    font-weight: 500;
    color: #eaeaea;
    text-align: right;

    min-width: 0; /* 🔑 ESSENCIAL para grid */
    word-break: break-word;
  }

  @media (max-width: 480px) {
    grid-template-columns: 100px 1fr;
    width: 100%;
    gap: 12px;
  }
`;


/* ================= TEXT ================= */

export const NameHeading = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: clamp(30px, 7vw, 42px);
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 6px;
`;

export const Bio = styled.p`
  font-family: serif;
  font-style: italic;
  font-size: 17px;
  line-height: 1.7;
  color: #d4d4d8;

  border-left: 1px solid rgba(255, 255, 255, 0.08);
  padding-left: 14px;

  @media (max-width: 480px) {
    border-left: none;
    padding-left: 0;
    font-size: 16px;
    max-width: 100%;
  }
`;

/* ================= VERIFIED ================= */

export const BadgeVerified = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: fit-content;
  max-width: 100%;

  padding: 6px 12px;
  margin-top: 6px;
  margin-bottom: 14px;

  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;

  background: #000000;
  border-radius: 999px;
  border: 1px solid rgba(201, 162, 77, 0.45);
  color: #f5f5f5;

  svg {
    flex-shrink: 0; /* 🔑 ícone nunca estica */
  }

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 5px 10px;
    gap: 6px;
  }
`;


export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #a1a1aa;
`;

/* ================= CTA ================= */

export const CTAButton = styled.button`
  margin-top: 16px;
  width: 100%;
  padding: 18px;

  display: flex; /* 🔑 */
  align-items: center; /* 🔑 */
  justify-content: center; /* 🔑 */
  gap: 10px;

  font-size: 14px;
  letter-spacing: 0.18em;
  font-weight: 600;
  line-height: 1; /* 🔑 remove desalinhamento */

  background: linear-gradient(
    135deg,
    #d6b25e,
    #c9a24d
  );
  color: #000;

  border-radius: 14px;
  border: none;
  position: relative;
  overflow: hidden;

  transition: 0.35s;

  svg {
    display: block; /* 🔑 MUITO IMPORTANTE */
    transform: translateY(1px); /* micro ajuste fino */
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 0 25px rgba(201, 162, 77, 0.45);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    padding: 20px;
    font-size: 13px;
    letter-spacing: 0.2em;
    max-width: 100%;
  }

`;



/* ================= THUMBNAILS ================= */

export const ThumbnailsRow = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;      /* permite scroll horizontal */
  scroll-behavior: smooth; /* animação suave no scroll */
  padding-bottom: 4px;

  /* força que sempre apareçam 5 itens visíveis por vez */
  max-width: calc((68px * 5) + (12px * 4)); /* 5 thumbnails + 4 gaps */
  
  @media (max-width: 768px) {
    max-width: calc((58px * 5) + (10px * 4)); /* reduz tamanho para tablet */
    gap: 10px;
  }

  @media (max-width: 480px) {
    max-width: calc((48px * 5) + (8px * 4)); /* mobile */
    gap: 8px;
  }
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
  }
`;


export const Thumbnail = styled.button<{ active?: boolean }>`
  flex: 0 0 auto;
  width: 68px;
  height: 98px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;

  border: 1px solid
    ${({ active }) =>
      active
        ? "rgba(201, 162, 77, 0.8)"
        : "rgba(255, 255, 255, 0.08)"};

  box-shadow: ${({ active }) =>
    active
      ? "0 0 18px rgba(201, 162, 77, 0.35)"
      : "none"};

  transition: 0.3s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: ${({ active }) => (active ? "none" : "grayscale(20%)")};
    opacity: ${({ active }) => (active ? 1 : 0.75)};
    transition: 0.3s;
  }

  &:hover img {
    opacity: 1;
    filter: none;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    width: 58px;
    height: 84px;
  }

  @media (max-width: 480px) {
    width: 48px;
    height: 70px;
  }
`;

export const ThumbnailsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

// ================= ARROWS THUMBNAILS =================
export const ThumbnailsArrow = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 50%;
  ${({ left }) => (left ? "left: -8px;" : "right: -8px;")}
  transform: translateY(-50%);
  z-index: 5;

  width: 36px;
  height: 36px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 18px;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-50%) scale(1.15);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;


