import styled from "styled-components";

/* ===== SECTION ===== */
export const Section = styled.section`
  width: 100%;
  padding: 20px 5vw;
`;

/* ===== TITLE ===== */
export const Title = styled.h2`
  font-size: 1.7rem; /* maior */
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #C9A24D;
  text-align: center;
`;

/* ===== HEADER DA SEÇÃO ===== */
export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* título à esquerda, filtros à direita */
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

/* ===== FILTRO BOTÃO ===== */
export const FilterToggle = styled.div`
  color: #C9A24D;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.25rem;
  margin-left: auto; /* fica ao lado do título */
  user-select: none;
`;

/* ===== CONTAINER DO DROPDOWN ===== */
export const FilterDropdown = styled.div<{ open: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background: #111;
  border: 1px solid #C9A24D;
  border-radius: 8px;
  padding: 20px;
  width: 390px;
  max-height: ${({ open }) => (open ? "600px" : "0")};
  overflow-y: auto;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: 10;

  
  @media (max-width: 426px) {
    width: 360px;
  }

      @media (max-width: 375px) {
    width: 240px;
  }

    @media (max-width: 295px) {
    width: 260px;
  }
`;

/* ===== CATEGORIAS ===== */
export const FilterCategory = styled.div`
  margin-bottom: 20px;

  & > h4 {
    font-size: 0.95rem;
    color: #C9A24D;
    margin-bottom: 8px;
    font-weight: 600;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

/* ===== INPUTS ===== */
export const FilterInput = styled.input`
  padding: 6px 8px;
  border: 1px solid #C9A24D;
  border-radius: 4px;
  background: #111;
  color: #fff;
  outline: none;
  font-size: 0.85rem;

  &:focus {
    border-color: #fff;
  }
`;

/* ===== SELECT ===== */
export const FilterSelect = styled.select`
  padding: 6px 8px;
  border: 1px solid #C9A24D;
  border-radius: 4px;
  background: #111;
  color: #fff;
  font-size: 0.85rem;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #fff;
  }
`;

/* ===== RANGE SLIDER ===== */
export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    background: #333;
    border-radius: 4px;
    cursor: pointer;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      background: #C9A24D;
      border-radius: 50%;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: #C9A24D;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  span {
    font-size: 0.8rem;
    color: #fff;
    min-width: 35px;
    text-align: center;
  }
`;

/* ===== GRID ===== */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

/* ===== CARD ===== */
export const Card = styled.div`
  background: #111;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

/* ===== IMAGE WRAPPER ===== */
export const ImageWrapper = styled.div`
  width: 100%;
  height: 550px;
  overflow: hidden;
  position: relative;
`;

/* ===== IMAGE ===== */
export const Image = styled.img`
  width: 100%;
  height: 110%;
  object-fit: cover;
`;

/* ===== CONTENT ===== */
export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

/* ===== NAME, INFO, LOCATION ===== */
export const Name = styled.h3`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  font-size: 1.6rem;
  color: #e6e6e6;
  margin-bottom: 0.3rem;
  cursor: pointer;
  position: relative;
  width: fit-content;

  img {
  width: 18px;
  height: 18px;
  opacity: 0.9;

  filter: invert(63%) sepia(23%) saturate(567%) hue-rotate(7deg)
    brightness(95%) contrast(90%);

  transition: transform 0.2s ease, opacity 0.2s ease;
}

  &:hover {
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;
    width: 0;
    height: 1px;
    background: #c9a24d;
    transition: width 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Info = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

export const Location = styled.span`
  font-size: 0.9rem;
  color: #C9A24D;
  font-weight: 600;
`;

/* ===== BIO ===== */
export const Bio = styled.p`
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 6px;
  line-height: 1.4;
`;

/* ===== BUTTON ===== */
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
/* ===== PAGINATION ===== */
export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
  margin-bottom: 30px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #C9A24D;
    background: transparent;
    color: #C9A24D;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: #C9A24D;
      color: #000;
      transform: translateY(-2px);
    }

    &.active {
      background: #C9A24D;
      color: #000;
      box-shadow: 0 0px 15px rgba(201, 162, 77, 0.6);
      transform: translateY(-2px);
    }
  }
`;

/* ===== BUTTON LOAD MORE ===== */
export const ButtonLoadMore = styled.button`
  display: block;
  margin: 30px auto 30px auto;
  padding: 8px 0;
  border: none;
  background: none;
  color: #C9A24D;
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  /* Linha dourada fina abaixo do texto */
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 40%;
    height: 2px;
    background: #C9A24D;
    border-radius: 2px;
    transform: translateX(-50%);
    transition: width 0.3s ease, background 0.3s ease;
  }

  &:hover {
    color: #FFD966; /* Leve brilho no texto ao passar o mouse */
  }

  &:hover::after {
    width: 90%; /* Linha se alonga suavemente */
    background: linear-gradient(90deg, #C9A24D, #FFD966);
  }

  &:active::after {
    transform: translateX(-50%) scaleX(0.9); /* efeito de clique sutil */
  }

  @media (max-width: 640px) {
    font-size: 1rem;
  }

  @media (max-width: 426px) {
    font-size: 0.95rem;
  }
`;

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
  font-size: 20px;

  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);

  color: #fff;
  opacity: 0;
  transition: 0.35s;

  ${ImageWrapper}:hover & {  /* 🔑 aqui ajustamos para o card */
    opacity: 1;
  }

  &:hover {
    transform: translateY(-50%) scale(1.15);
  }
  
      &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;
