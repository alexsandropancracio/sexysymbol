import {
  FooterContainer,
  FooterGrid,
  Column,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterBottom,
  VerticalDivider,
} from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterGrid>
        {/* ESQUERDA */}
        <Column>
          <FooterLink to="/sobre">Conheça a sexysymbol</FooterLink>
          <FooterLink to="/em-construcao">Manual de Uso de Marca</FooterLink>
          <FooterLink to="/em-construcao">Sua marca na sexysymbol</FooterLink>
          <FooterLink to="/em-construcao">Parcerias</FooterLink>
        </Column>

        <VerticalDivider />

        {/* MEIO */}
        <Column center>
          <FooterTitle>Sobre a sexysymbol</FooterTitle>
          <FooterText>
            Desde 2026 a sexysymbol conecta acompanhantes e clientes de forma
            segura e discreta, com tecnologias inovadoras e promovendo sempre
            melhorias para uma melhor experiência para o cliente e a
            acompanhante.
          </FooterText>
        </Column>

        <VerticalDivider />

        {/* DIREITA */}
        <Column alignRight>
          <FooterLink to="/contato">Fale Conosco</FooterLink>
          <FooterLink to="/em-construcao">Perguntas Frequentes</FooterLink>
          <FooterLink to="/termos">Termos de Uso</FooterLink>
          <FooterLink to="/privacidade">Política de Privacidade</FooterLink>
        </Column>
      </FooterGrid>

      <FooterBottom>
        © {new Date().getFullYear()} sexysymbol. Todos os direitos reservados.
      </FooterBottom>
    </FooterContainer>
  );
}
