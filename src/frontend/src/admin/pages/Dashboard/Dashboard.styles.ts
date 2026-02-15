import styled from "styled-components";

export const Page = styled.div`
  padding: 40px;
  color: #fff;

  @media (max-width: 1024px) { // tablets
    padding: 30px;
  }

  @media (max-width: 768px) { // mobile
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 32px;
  background: #111;
  border-radius: 12px;
  overflow: hidden;

  th, td {
    padding: 14px 16px;
    text-align: left;
  }

  thead {
    background: #151515;
  }

  th {
    font-weight: 500;
    color: #c9a24d;
    cursor: pointer;
    position: relative;
  }

  th.active {
    color: #fff;
  }

  tbody tr {
    border-top: 1px solid #1f1f1f;
  }

  tbody tr:hover {
    background: #141414;
  }

  td {
    color: #ccc;
  }

  /* 🔥 RESPONSIVIDADE MOBILE */
  @media (max-width: 768px) {

    thead {
      display: none;
    }

    tbody, tr, td {
      display: block;
      width: 100%;
    }

    tr {
      margin-bottom: 16px;
      background: #111;
      border: 1px solid #1f1f1f;
      border-radius: 12px;
      padding: 12px;
    }

    td {
      text-align: right;
      padding: 8px 12px;
      position: relative;
      border: none;
    }

    td::before {
      content: attr(data-label);
      position: absolute;
      left: 12px;
      font-weight: 500;
      color: #888;
      text-transform: uppercase;
      font-size: 11px;
    }
  }
`;


export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  select {
    padding: 0.3rem;
    border-radius: 6px;
        border: 1px solid #333;
    background-color: #111;
    color: #f5f5f5;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #c9a24d;
    }

    @media (max-width: 768px) {
      padding: 0.4rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const DateFilter = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;

  label {
    display: block;
    font-size: 12px;
    color: #aaa;
    margin-bottom: 4px;
  }

  input {
    background: #111;
        border: 1px solid #333;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 13px;
    
    /* 🔹 Ícone do calendário */
    &::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
    }
  }

  .clear-date {
    background: transparent;
    border: 1px solid #c9a24d;
    color: #c9a24d;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      background: rgba(201, 162, 77, 0.1);
    }
  }
`;

export const MetricToggle = styled.div`
  margin: 24px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    font-weight: 500;
    color: #c9a24d;
  }

  select {
    background: #111;
    border: 1px solid #333;
    color: #fff;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
        transition: all 0.2s ease;

    &:hover {
      border-color: #c9a24d;
    }

    &:focus {
      outline: none;
      border-color: #c9a24d;
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  background: #111;
  border-radius: 12px;
  padding: 16px;
  margin-top: 32px;

  /* 🔥 Scroll horizontal no mobile */
  overflow-x: auto;

  /* scrollbar discreta */
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #2a2a2a;
    border-radius: 4px;
  }
`;

export const ChartScroll = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  width: 100%;

  /* scroll suave no mobile */
  -webkit-overflow-scrolling: touch;

  /* barra mais clean */
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
`;