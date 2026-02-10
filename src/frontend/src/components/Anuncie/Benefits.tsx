import { Container } from "./ui/Container";
import { CheckCircle2 } from "lucide-react";

import {
  Section,
  Grid,
  TextBlock,
  Title,
  TitleHighlight,
  Description,
  BenefitsList,
  BenefitItem,
  IconWrapper,
  BenefitText,
} from "./Benefits.styles";

const benefits = [
  "Alcance digital extremamente qualificado",
  "Visibilidade estratégica em nichos de alto padrão",
  "Critérios claros de publicação",
  "Atendimento personalizado via WhatsApp",
  "Aprovação prévia e curadoria de material",
  "Layout limpo que valoriza o conteúdo",
];

export const Benefits = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {/* TEXTO */}
          <TextBlock
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              O que você contrata <br />
              <TitleHighlight>ao anunciar</TitleHighlight>
            </Title>

            <Description>
              Investir na sexysymbol é investir na sua marca pessoal. Oferecemos a
              infraestrutura necessária para que seu perfil se destaque pela
              qualidade, não pelo excesso.
            </Description>
          </TextBlock>

          {/* LISTA */}
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <IconWrapper>
                  <CheckCircle2 size={22} />
                </IconWrapper>

                <BenefitText>{benefit}</BenefitText>
              </BenefitItem>
            ))}
          </BenefitsList>
        </Grid>
      </Container>
    </Section>
  );
};
