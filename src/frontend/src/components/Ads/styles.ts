import styled from "styled-components";

/* ===== SECTION ===== */

export const Section = styled.section`
  width: 100%;
  padding: 80px 5vw;
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
`;

/* ===== IMAGE ===== */

export const ImageWrapper = styled.div`
  width: 100%;
  height: 420px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/* ===== CONTENT ===== */

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Info = styled.span`
  font-size: 0.9rem;
  color: #aaa;
`;

export const Price = styled.span`
  font-weight: 600;
  margin-top: 4px;
`;

/* ===== BUTTON ===== */

export const Button = styled.button`
  margin-top: 12px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: #000;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
