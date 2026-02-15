// src/admin/components/StatsCard/StatsCard.styles.ts

import styled from "styled-components";


export const Card = styled.div`
  /* 🔹 Visual base */
  background: #111;
  border: 1px solid #1f1f1f;
  border-radius: 12px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  /* 🔹 Animação */
  animation: fadeUp 0.4s ease forwards;

  /* 🔹 Transição suave */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  span {
    font-size: 13px;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  strong {
    font-size: 28px;
    font-weight: 700;
    color: #c9a24d;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Title = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-bottom: 6px;
`;

export const Value = styled.h2`
  font-size: 28px;
  color: #c9a24d;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  color: #666;
`;
