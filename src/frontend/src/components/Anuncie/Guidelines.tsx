import { Container } from "./ui/Container";
import { SectionTitle } from "./ui/SectionTitle";
import { XCircle } from "lucide-react";

import {
  Section,
  Card,
  Intro,
  Grid,
  Item,
  FooterNote,
  FooterText,
  TitleWrapper,
} from "./Guidelines.styles";

const prohibitions = [
  "Símbolos religiosos, militares ou políticos",
  "Locais públicos ou impróprios para o contexto",
  "Animais ou presença de terceiros (clientes)",
  "Temática infantil ou sugestiva a menores",
  "Fotos com baixa resolução ou iluminação precária",
  "Uso de entorpecentes ou armas",
];

export const Guidelines = () => {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <SectionTitle
            title="Diretrizes para Publicação"
            subtitle="Regras obrigatórias para aprovação"
          />
        </TitleWrapper>

        <Card>
          <Intro>
            Para manter o padrão de excelência, algumas regras são inegociáveis.
            A violação destas diretrizes impede a veiculação do anúncio.
          </Intro>

          <Grid>
            {prohibitions.map((item, index) => (
              <Item
                key={item}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <XCircle size={18} color="#8c1d18" />
                <span>{item}</span>
              </Item>
            ))}
          </Grid>

          <FooterNote>
            <FooterText>Padrão mínimo de qualidade exigido</FooterText>
          </FooterNote>
        </Card>
      </Container>
    </Section>
  );
};
