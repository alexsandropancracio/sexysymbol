// src/components/Construcao/Construcao.tsx
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: #0b0b0b;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #c9a24d; // dourado
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #ccc;
  margin-bottom: 32px;
`;

const BackLink = styled(Link)`
  font-size: 16px;
  color: #fff;
  text-decoration: underline;
  &:hover {
    color: #c9a24d;
  }
`;

export function Construcao() {
  return (
    <Container>
      <Title>Página em Construção</Title>
      <Text>
        Esta página ainda está sendo desenvolvida. Por favor, volte mais tarde!
      </Text>
      <BackLink to="/">Voltar para a página inicial</BackLink>
    </Container>
  );
}
