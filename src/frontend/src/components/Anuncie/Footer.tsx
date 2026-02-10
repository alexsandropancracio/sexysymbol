import { Container } from "./ui/Container";
import { MessageCircle } from "lucide-react";

import {
  FooterWrapper,
  Content,
  Title,
  Description,
  CtaButton,


} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Content>
          <Title>Pronta para anunciar?</Title>

          <Description>
            Entre em contato diretamente com nossa administração.
            Análise personalizada e atendimento sigiloso.
          </Description>

          <CtaButton
            href="https://wa.me/5511956197970"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={22} />
            <span>Falar com a Administração no WhatsApp</span>
          </CtaButton>

        </Content>
      </Container>
    </FooterWrapper>
  );
};
