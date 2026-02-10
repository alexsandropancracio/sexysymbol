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

/* ===== LOGO ===== */
export const Logo = styled(Link)`
  position: relative;
  font-family: "Moglande";
  font-size: 28px;
  letter-spacing: 2px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;

  .base {
    color: #c9a24d;
    position: relative;
    z-index: 1;
  }

  .shine {
    position: absolute;
    inset: 0;
    z-index: 2;

    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255, 235, 170, 0.0) 42%,
      rgba(255, 235, 170, 0.9) 48%,
      rgba(255, 235, 170, 0.9) 52%,
      rgba(255, 235, 170, 0.0) 58%,
      transparent 100%
    );
    background-size: 300% 100%;
    background-position: 0% center;

    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    pointer-events: none;
    opacity: 0;
  }

  &:hover .shine {
    opacity: 1;
    animation: shine-pass 1s ease-out forwards;
  }

  @keyframes shine-pass {
    from {
      background-position: 0% center;
      opacity: 1;
    }
    to {
      background-position: 100% center;
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
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
