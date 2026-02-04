import styled from "styled-components";

/* ===== SECTION ===== */

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.h2`
  font-family: "Avelire", serif;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
`;


/* ===== CARD / CARROSSEL ===== */

export const Card = styled.div`
  position: relative;
  width: 97vw;
  height: 99vh;
  min-height: 520px;
  max-height: 820px;

  overflow: hidden;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px) {
    height: 80vh;
    min-height: 580px;
  }

  @media (max-width: 768px) {
    width: 94vw;
    height: 40vh;
    min-height: 320px;
  }

  @media (max-width: 480px) {
    width: 50%;
    height: 50vh;
    min-height: 360px;
  }
`;



/* ===== IMAGE ===== */

export const Image = styled.img<{ $active: boolean }>`
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 5%;

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.8s ease-in-out;

  @media (max-width: 768px) {
    object-position: center 15%;
  }

  @media (max-width: 480px) {
    object-position: center 20%;
  }
`;



/* ===== INFO OVERLAY ===== */

export const Info = styled.div<{ $active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 40px;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.45),
    transparent
  );

  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transform: ${({ $active }) =>
    $active ? "translateY(0)" : "translateY(20px)"};

  transition: opacity 0.6s ease, transform 0.6s ease;
  pointer-events: ${({ $active }) => ($active ? "auto" : "none")};

  z-index: 2;

  @media (max-width: 768px) {
    padding: 28px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;




export const Name = styled.h3`
  font-family: "Arial";
  font-size: 40px;
`;


export const Meta = styled.p`
  font-size: 16px;
  opacity: 0.9;
`;

export const Price = styled.p`
  margin-top: 14px;
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;

  border: none;
  border-radius: 999px;

  font-weight: 600;
  cursor: pointer;

  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

/* ===== ARROWS ===== */

const ArrowBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 48px;
  height: 48px;

  border-radius: 50%;
  border: none;

  background: rgba(0, 0, 0, 0.55);
  color: #fff;

  font-size: 32px;
  cursor: pointer;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(-50%) scale(1.05);
  }
`;

export const ArrowLeft = styled(ArrowBase)`
  left: 24px;
`;

export const ArrowRight = styled(ArrowBase)`
  right: 24px;
`;
