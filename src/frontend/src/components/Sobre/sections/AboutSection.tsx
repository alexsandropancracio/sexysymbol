import { motion } from "framer-motion";
import * as S from "../styles";
import { fadeUp } from "../animations";
import styled from "styled-components";

const Wrapper = styled(S.Section)`
  background-color: #0b0b0b;
`;

const Text = styled.p`
  max-width: 820px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.8;
  color: #cfcfcf;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export function AboutSection() {
  return (
    <Wrapper
      as={motion.section}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <S.Content>
        <Text>
          <S.SectionTitle>O que é a sexysymbol</S.SectionTitle>
          A <S.Highlight>sexysymbol</S.Highlight> nasceu com um propósito claro:
          oferecer um ambiente sofisticado, seguro e profissional para quem
          deseja anunciar com autonomia e para quem busca experiências que vão
          além do óbvio.
          <br />
          <br />
          Aqui, cada detalhe é pensado para valorizar a imagem, a liberdade e o
          posicionamento de quem escolhe fazer parte de um marketplace elegante
          e discreto.
        </Text>
      </S.Content>
    </Wrapper>
  );
}
