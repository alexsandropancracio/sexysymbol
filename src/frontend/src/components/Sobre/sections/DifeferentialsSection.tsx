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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =========================
   STYLES
========================= */

const DifferentialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  padding: 32px;
  background: #141414;
  border-radius: 14px;
  border: 1px solid #1f1f1f;

  transition: border-color 0.3s ease;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const CardText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #cfcfcf;
`;

/* =========================
   COMPONENT
========================= */

export function DifferentialsSection() {
  return (
    <S.Section
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <S.Content>
        <motion.div variants={cardVariants}>
          <S.SectionTitle>O que nos diferencia</S.SectionTitle>
        </motion.div>

        <DifferentialsGrid variants={containerVariants}>
          <Card
            variants={cardVariants}
            whileHover={{
              y: -6,
              borderColor: "#C9A24D",
              boxShadow: "0 12px 32px rgba(201, 162, 77, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CardTitle>Curadoria e posicionamento</CardTitle>
            <CardText>
              Cada perfil é pensado como uma identidade própria, com foco em
              apresentação, clareza e coerência visual — sem excesso de
              informações ou abordagens genéricas.
            </CardText>
          </Card>

          <Card
            variants={cardVariants}
            whileHover={{
              y: -6,
              borderColor: "#C9A24D",
              boxShadow: "0 12px 32px rgba(201, 162, 77, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CardTitle>Experiência acima de tudo</CardTitle>
            <CardText>
              A plataforma é desenhada para oferecer uma navegação fluida,
              intuitiva e agradável, tanto para quem anuncia quanto para quem
              acessa.
            </CardText>
          </Card>

          <Card
            variants={cardVariants}
            whileHover={{
              y: -6,
              borderColor: "#C9A24D",
              boxShadow: "0 12px 32px rgba(201, 162, 77, 0.15)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <CardTitle>Tecnologia e dados</CardTitle>
            <CardText>
              Utilizamos métricas e análises para entender comportamento,
              melhorar resultados e evoluir constantemente a experiência
              oferecida.
            </CardText>
          </Card>
        </DifferentialsGrid>
      </S.Content>
    </S.Section>
  );
}
