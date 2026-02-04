import styled from "styled-components";
import { Link } from "react-router-dom";

/* ===== HEADER ===== */

export const HeaderContainer = styled.header`
  height: 80px;
  padding: 0 64px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 16px; /* espaço entre logo, input e menu */
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

  .base {
    color: #c9a24d; /* dourado sólido */
    position: relative;
    z-index: 1;
  }

  .shine {
    position: absolute;
    inset: 0;
    z-index: 2;

    /* fio de luz fino */
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

  /* 🔹 Hover no pai, dispara animação uma vez */
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
`;


/* ===== SEARCH ===== */

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

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

  /* 🔽 abaixo de 972px */
  @media (max-width: 1002px) {
    width: 520px;
  }

    @media (max-width: 872px) {
        width: 420px;
    }

  /* 🔽 mobile */
  @media (max-width: 768px) {
    width: 320px;
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
`;


export const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    outline: none;
  }
`;


/* ===== MENU ===== */

export const MenuButton = styled.button`
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

/* ===== DRAWER ===== */

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;

  width: 300px;
  height: 100vh;

  padding: 32px;
  background-color: ${({ theme }) => theme.colors.surface};

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  font-size: 28px;

  background: none;
  border: none;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.muted};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DrawerItem = styled.a`
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  position: relative;  /* necessário para o pseudo-elemento */
  padding: 4px 0;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* linha dourada animada por baixo do texto */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0%;
    background: ${({ theme }) => theme.colors.primary}; /* dourado */
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

