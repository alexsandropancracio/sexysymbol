import { motion } from "framer-motion";
import * as S from "../styles";
import { fadeIn } from "../animations";
import styled from "styled-components";

const HeroWrapper = styled(motion.section)`
  padding-top: 160px;
  padding-bottom: 160px;
  text-align: center;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(15, 15, 15, 1) 100%
  );
`;


const Title = styled(motion.h1)`
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled(motion.p)`
  max-width: 720px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.7;
  color: #cfcfcf;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export function HeroSection() {
  return (
      <HeroWrapper
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        >
      <S.Content>
        <Title variants={fadeIn}>
          Permita-se viver um{" "}
          <S.Highlight>alto padrão</S.Highlight>, do jeito que você merece!
        </Title>

        <Subtitle variants={fadeIn}>
          A Sexysymbol é uma plataforma criada para conectar perfis independentes
          a um público que valoriza discrição, elegância e experiências autênticas.
        </Subtitle>
      </S.Content>
    </HeroWrapper>
  );
}
