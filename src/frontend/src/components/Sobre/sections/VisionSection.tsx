import * as S from "../styles";
import styled from "styled-components";

const VisionWrapper = styled(S.Section)`
  text-align: center;
  background: #121212;
`;

const VisionText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
  color: #cfcfcf;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ClosingStatement = styled.h3`
  margin-top: 48px;
  font-size: 22px;
  font-weight: 500;
  color: #e5e5e5;
`;

export function VisionSection() {
  return (
    <VisionWrapper>
      <S.Content>
        <S.SectionTitle>Nossa visão</S.SectionTitle>

        <VisionText>
          Acreditamos que visibilidade deve caminhar junto com respeito,
          estratégia e identidade. A Sexysymbol nasce com o compromisso de
          evoluir constantemente, aprimorando tecnologia, experiência e
          posicionamento para oferecer um ambiente cada vez mais sólido,
          confiável e profissional.
        </VisionText>

        <ClosingStatement>
          "Não é sobre quantidade. É sobre <S.Highlight>qualidade,
          posicionamento e respeito."</S.Highlight>
        </ClosingStatement>
      </S.Content>
    </VisionWrapper>
  );
}
