import { Container } from "./ui/Container";

import {
  Section,
  Texture,
  Content,
  Quote,
  Values,
  Dot,
} from "./Essence.styles";

export const Essence = () => {
  return (
    <Section>
      <Texture />

      <Container>
        <Content>
          <Quote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            “A verdadeira elegância não é sobre ser notada, é sobre ser lembrada.
            Na sexysymbol, criamos o palco para que sua presença seja
            inesquecível.”
          </Quote>

          <Values>
            <span>Confiança</span>
            <Dot>•</Dot>
            <span>Liberdade</span>
            <Dot>•</Dot>
            <span>Privacidade</span>
          </Values>
        </Content>
      </Container>
    </Section>
  );
};
