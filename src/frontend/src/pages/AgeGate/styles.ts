import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Card = styled.div`
  max-width: 460px;
  width: 100%;
  background: #111111;
  border: 1px solid #1f1f1f;
  border-radius: 16px;
  padding: 48px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #cfcfcf;
  margin-bottom: 16px;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;

export const YesButton = styled.button`
  background: #FCD862;
  color: #000;
  border: none;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
`;

export const NoButton = styled.button`
  background: transparent;
  color: #8a8a8a;
  border: 1px solid #2a2a2a;
  padding: 14px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
`;
