import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #0b0b0b;
  border-top: 1px solid #222;
  padding: 60px 6vw 20px;
  color: #ccc;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  gap: 80px;
  align-items: flex-start;

  /* desktop */
  grid-template-areas: "left divider1 center divider2 right";

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    grid-template-areas:
      "center center"
      "left right";
  }
`;

export const Column = styled.div<{
  center?: boolean;
  alignRight?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  grid-area: left;

  ${({ center }) =>
    center &&
    css`
      grid-area: center;
      align-items: center;
      text-align: center;
    `}

  ${({ alignRight }) =>
    alignRight &&
    css`
      grid-area: right;
      align-items: flex-end;
      text-align: right;

      @media (max-width: 900px) {
        align-items: end;
        text-align: end;
      }
    `}
`;


export const FooterTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: "Moglande";
  letter-spacing: 2px;
  color: #c9a24d;
  margin-bottom: 12px;
  
`;

export const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 420px;
`;

export const FooterLink = styled(Link)`
  position: relative;
  display: inline-block; /* 🔥 ESSENCIAL */
  width: fit-content;     /* 🔥 garante tamanho do texto */
  transform: translateY(40px);
  margin-bottom: 0.3rem;

  color: #ffffff;
  font-size: 0.95rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #c9a24d;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;


export const FooterBottom = styled.div`
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #222;
  text-align: center;
  font-size: 0.85rem;
  color: #777;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent,
    #777,
    transparent
  );

  @media (max-width: 900px) {
    display: block;
    width: 1px;
    height: 80%;
    justify-self: center;
    align-self: center;
    background: linear-gradient(
      to bottom,
      transparent,
      #ffffff,
      transparent
    );
  }
`;
