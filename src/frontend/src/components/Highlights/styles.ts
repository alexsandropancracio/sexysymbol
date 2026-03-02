import styled from "styled-components";

/* ===== SECTION ===== */
export const Section = styled.section`
  padding: 10px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 426px) {
    padding: 12px;
  }
`;

/* ===== TITLE ===== */
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 35px;
  font-weight: 100;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 980px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 426px) {
    font-size: 25px;
    margin-bottom: 14px;
  }
`;

/* ===== CARD / CARROSSEL ===== */
export const Card = styled.div`
  position: relative;
  width: 97.5vw;
  height: 80vh;
  min-height: 520px;
  max-height: 820px;

  overflow: hidden;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px) {
    height: 75vh;
    min-height: 480px;
  }

  @media (max-width: 768px) {
    width: 96vw;
    height: 60vh;
    min-height: 320px;
  }

  @media (max-width: 480px) {
    width: 99.8%;
    height: 75vh;
    min-height: 280px;
    max-height: none;
  }

  @media (max-width: 320px) {
    height: 50vh;
    min-height: 260px;
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

  @media (max-width: 980px) {
    object-position: center 10%;
  }

  @media (max-width: 768px) {
    object-position: center 15%;
  }

  @media (max-width: 426px) {
    object-position: center 15%;
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

  @media (max-width: 1024px) {
    padding: 32px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 426px) {
    padding: 16px;
  }
`;

export const Name = styled.h3`
  font-family: "Arial", sans-serif;
  font-size: 40px;

  @media (max-width: 980px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 426px) {
    font-size: 22px;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;

export const Meta = styled.p`
  font-size: 16px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 426px) {
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Price = styled.p`
  margin-top: 14px;
  font-size: 22px;
  font-weight: bold;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 12px;
  }

  @media (max-width: 426px) {
    font-size: 16px;
    margin-top: 10px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
  }
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

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 426px) {
    margin-top: 14px;
    padding: 10px 18px;
    font-size: 13px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    padding: 8px 16px;
  }
`;

/* ===== ARROWS ===== */
export const ArrowBase = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 48px;
  height: 48px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(252, 216, 98, 0.25);

  background: rgba(17, 17, 17, 0.65);
  backdrop-filter: blur(6px);

  color: ${({ theme }) => theme.colors.primary};

  font-size: 28px;
  cursor: pointer;
  z-index: 3;

  opacity: 0;

  will-change: transform;

  /* glow base suave */
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.45),
    inset 0 0 0 rgba(252, 216, 98, 0);

  &:hover {

    background: rgba(252, 216, 98, 0.08);

    border: 1px solid rgba(252, 216, 98, 0.65);

    color: #FCD862;
  }

  &:active {
    transform: translateY(-50%) scale(0.92);

    box-shadow:
      0 3px 10px rgba(0, 0, 0, 0.6),
      inset 0 0 6px rgba(252, 216, 98, 0.35);
  }

  &:focus-visible {
    outline: none;

    box-shadow:
      0 0 0 3px rgba(252, 216, 98, 0.45),
      0 0 24px rgba(252, 216, 98, 0.45);
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 24px;
  }

  @media (max-width: 426px) {
    width: 36px;
    height: 36px;
    font-size: 20px;
  }

  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`;

/* ========== ARROWS ========== */
export const ArrowLeft = styled(ArrowBase)`
  left: 24px;

  ${({}) => `
    ${Card}:hover & {
      opacity: 0.85;
    }
  `}

  @media (max-width: 768px) {
    left: 16px;
  }

  @media (max-width: 426px) {
    left: 10px;
  }
`;

export const ArrowRight = styled(ArrowBase)`
  right: 24px;

  ${({}) => `
    ${Card}:hover & {
      opacity: 0.85;
    }
  `}

  @media (max-width: 768px) {
    right: 16px;
  }

  @media (max-width: 426px) {
    right: 10px;
  }
`;
