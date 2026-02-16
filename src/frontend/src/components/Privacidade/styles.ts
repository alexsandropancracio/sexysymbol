import styled from "styled-components";

export const Page = styled.div`
  padding: 100px 24px;
  background: #0b0b0b;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 48px;
`;

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 16px;
`;

/* 🔥 AQUI ESTÁ A CHAVE */
export const Text = styled.div`
  p {
    font-size: 16px;
    line-height: 1.7;
    color: #cfcfcf;
    margin-bottom: 12px;
  }

  strong {
    color: #ffffff;
    font-weight: 600;
  }
`;


export const List = styled.ul`
  margin-left: 20px;
  margin-bottom: 16px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
  color: #cfcfcf;
`;
