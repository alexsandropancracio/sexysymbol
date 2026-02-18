import styled from "styled-components";
import { Link } from "react-router-dom";

/* ===== HEADER ===== */
export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  min-height: 80px;
  padding: 0 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 1200px) {
    padding: 0 48px;
    gap: 20px;
  }

  @media (max-width: 1024px) {
    padding: 0 32px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    gap: 12px;
  }

  @media (max-width: 426px) {
    padding: 8px 12px;
    gap: 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 320px) {
    padding: 6px 8px;
    gap: 8px;
  }
`;

export const Logo = styled(Link)<{ $logo: string }>`
  display: inline-block;
  cursor: pointer;
  max-width: 100%;

  .logo-wrapper {
    position: relative;
    display: inline-block;
    max-width: 100%;

    -webkit-mask-image: url(${props => props.$logo});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    -webkit-mask-position: center;

    mask-image: url(${props => props.$logo});
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: center;

    background-color: transparent;
    will-change: transform;
    transform: translateZ(0);
  }

  img {
    height: 16px;          /* 🔥 mobile menor agora */
    width: auto;
    max-width: 100%;       /* nunca estoura o container */
    display: block;
  }

  .shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255, 235, 170, 0.9) 50%,
      transparent 100%
    );
    transform: translateX(-100%) skewX(-25deg);
    opacity: 0;
    pointer-events: none;
  }

  &:hover .shine {
    animation: shine 0.9s ease-out forwards;
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

  /* 📱 Small devices */
  @media (min-width: 426px) {
    img {
      height: 18px;
    }
  }

  /* 📱 Tablets */
  @media (min-width: 768px) {
    img {
      height: 24px;
    }
  }

  /* 💻 Laptops */
  @media (min-width: 1024px) {
    img {
      height: 32px;   /* ↓ reduzi um pouco pra não ficar exagerado */
    }
  }

  /* 🖥 Large screens */
  @media (min-width: 1440px) {
    img {
      height: 38px;   /* ↓ mais equilibrado */
    }
  }
`;



/* ===== SEARCH ===== */
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 650px;
  padding: 10px 16px;
  background-color: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 1px rgba(201, 189, 77, 0.35);
  }

  @media (max-width: 1200px) {
    width: 520px;
  }

  @media (max-width: 1024px) {
    width: 420px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 360px;
  }

  @media (max-width: 426px) {
    flex: 1;
    min-width: 0;
    padding: 6px 10px;
    height: 36px;
  }

  @media (max-width: 320px) {
    height: 32px;
    padding: 4px 8px;
  }
`;

export const SearchIcon = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: 18px;
    height: 18px;
    filter: brightness(0) saturate(100%)
      invert(67%) sepia(36%) saturate(489%)
      hue-rotate(6deg) brightness(95%) contrast(92%);
  }

  @media (max-width: 426px) {
    img {
      width: 14px;
      height: 14px;
    }
  }

  @media (max-width: 320px) {
    img {
      width: 12px;
      height: 12px;
    }
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  min-width: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 426px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

/* ===== MENU ===== */
export const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 426px) {
    gap: 8px;
  }

  @media (max-width: 320px) {
    gap: 6px;
  }
`;

/* ===== BOTÃO ANUNCIE ===== */
export const AnuncieButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.9rem;
    font-size: 13px;
  }

  @media (max-width: 426px) {
    padding: 0.45rem 0.7rem;
    font-size: 11px;
  }

  @media (max-width: 320px) {
    padding: 0.35rem 0.6rem;
    font-size: 10px;
  }
`;
