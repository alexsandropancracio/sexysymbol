// src/admin/pages/Dashboard/Dashboard.styles.ts

import styled from "styled-components";

export const Page = styled.div`
  padding: 40px;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    border-bottom: 1px solid #222;
    text-align: left;
  }

  th {
    color: #c9a24d;
    font-weight: 600;
  }

  tr:hover {
    background: rgba(255,255,255,0.03);
  }
`;

export const CardsGrid = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;

  .reset-button {
    background-color: #c9a24d; // dourado elegante
    color: #000;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  select {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #111;
    color: #f5f5f5;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #c9a24d;
    }
  }
`;


