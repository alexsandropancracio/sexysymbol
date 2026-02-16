import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  background: #0f0f0f; /* mantém padrão escuro */
  color: #f5f5f5;
`;

export const Section = styled.section`
  width: 100%;
  padding: 120px 24px;

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 32px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #cfcfcf;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Highlight = styled.span`
  color: #d4af37; /* dourado elegante */
`;
