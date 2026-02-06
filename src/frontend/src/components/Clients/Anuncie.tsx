import  { useEffect, useState } from "react";
import { Section, Title, Content } from "./styles";

export function Anuncie() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Section>
      <Title style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        Anuncie
      </Title>
      <Content>
        {/* Aqui entram as seções do formulário ou explicações sobre anunciar */}
        <p>
          Bem-vindo(a) à página de anúncios do SexySymbol! Aqui você encontra todas as informações para anunciar com segurança, profissionalismo e visibilidade.
        </p>
      </Content>
    </Section>
  );
}
