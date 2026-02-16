import { motion, type Variants } from "framer-motion";
import * as S from "../styles";
import styled from "styled-components";

/* =========================
   ANIMAÇÕES
========================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* =========================
   STYLES
========================= */

const AudienceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const AudienceItem = styled(motion.div)`
  padding: 32px;
  background: #141414;
  border-radius: 12px;
  border: 1px solid #1f1f1f;

  transition: border-color 0.3s ease;
`;


const AudienceTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #c9a24d;
`;

const AudienceText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #cfcfcf;
`;

/* =========================
   COMPONENT
========================= */

export function AudienceSection() {
  return (
    <S.Section
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <S.Content>
        <motion.div variants={itemVariants}>
          <S.SectionTitle>Para quem é a sexysymbol</S.SectionTitle>
        </motion.div>

        <AudienceGrid variants={containerVariants}>
          <AudienceItem
            variants={itemVariants}
            whileHover={{
                y: -6,
                borderColor: "#C9A24D",
                boxShadow: "0 12px 30px rgba(201, 162, 77, 0.15)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <AudienceTitle>Perfis independentes</AudienceTitle>
            <AudienceText>
              Criada para quem entende o valor da própria imagem e busca uma
              apresentação profissional, estratégica e alinhada com um
              posicionamento premium.
            </AudienceText>
          </AudienceItem>

          <AudienceItem variants={itemVariants}
            whileHover={{
                y: -6,
                borderColor: "#C9A24D",
                boxShadow: "0 12px 30px rgba(201, 162, 77, 0.15)",
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <AudienceTitle>Público consciente</AudienceTitle>
            <AudienceText>
              Pensada para conectar perfis a pessoas que valorizam discrição,
              respeito e experiências claras, sem ruídos ou abordagens invasivas.
            </AudienceText>
          </AudienceItem>
        </AudienceGrid>
      </S.Content>
    </S.Section>
  );
}
