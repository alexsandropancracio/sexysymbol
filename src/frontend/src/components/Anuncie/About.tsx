import { motion } from "framer-motion";
import { Container } from "./ui/Container";

import {
  AboutContainer,
  AboutContent,
  AboutHeader,
  Title,
  Subtitle,
  Section,
  SectionTitle as StyledSectionTitle,
  Text,
  Highlight,
  Divider,
  ValuesList,
  ValueItem,
  ValueTitle,
  ValueText,
} from "./About.styles";

export const About = () => {
  return (
    <AboutContainer id="about">
      <Container>
        <AboutContent>
          {/* HEADER */}
          <AboutHeader>
            <Title>Sobre a sexysymbol</Title>

            <Subtitle>
              Um ambiente digital criado para profissionais que valorizam
              excelência, liberdade e posicionamento de alto padrão.
            </Subtitle>
          </AboutHeader>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Section>
              <StyledSectionTitle>Quem somos</StyledSectionTitle>

              <Text>
                A <Highlight>sexysymbol</Highlight> não é apenas um site de
                anúncios. É um marketplace curado, desenvolvido para conectar
                profissionais independentes a um público que valoriza discrição,
                respeito e qualidade.
              </Text>

              <Text>
                Nossa plataforma foi desenhada para oferecer liberdade financeira
                consciente, com foco em segurança, autonomia e valorização
                profissional.
              </Text>

              <Divider />

              <ValuesList>
                <ValueItem>
                  <ValueTitle>Discrição</ValueTitle>
                  <ValueText>
                    Privacidade e confidencialidade como princípios
                    inegociáveis.
                  </ValueText>
                </ValueItem>

                <ValueItem>
                  <ValueTitle>Segurança</ValueTitle>
                  <ValueText>
                    Estrutura pensada para proteger quem anuncia e quem consome.
                  </ValueText>
                </ValueItem>

                <ValueItem>
                  <ValueTitle>Qualidade</ValueTitle>
                  <ValueText>
                    Seleção, curadoria e posicionamento de alto padrão.
                  </ValueText>
                </ValueItem>

                <ValueItem>
                  <ValueTitle>Respeito</ValueTitle>
                  <ValueText>
                    Um ambiente sério, ético e profissional.
                  </ValueText>
                </ValueItem>
              </ValuesList>
            </Section>
          </motion.div>
        </AboutContent>
      </Container>
    </AboutContainer>
  );
};
