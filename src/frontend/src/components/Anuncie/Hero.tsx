import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";

import {
  Section,
  BackgroundRadial,
  BackgroundTexture,
  Content,
  Title,
  Brand,
  Subtitle,
  CtaButton,
  ScrollIndicator,
  TitleLogo
} from "./Hero.styles";
import logo from "../../assets/logo/sexysymbol - logo(ico).png";

export const Hero = () => {
  // Reseta o scroll para o topo ao montar a página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section>
      <BackgroundRadial />
      <BackgroundTexture />

      <Content>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
<Title>
  <TitleLogo $logo={logo}>
    <div className="logo-wrapper">
      <img src={logo} alt="SexySymbol" />
      <span className="shine" />
    </div>
  </TitleLogo>

  SEJA <br />
  <Brand>SEXYSYMBOL</Brand>
</Title>




          <Subtitle>
            Autonomia, clareza e evolução profissional. A plataforma exclusiva
            para quem entende que a imagem é o seu maior patrimônio.
          </Subtitle>

          <CtaButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open("https://wa.me/5511956197970", "_blank")
            }
          >
            INICIAR APLICAÇÃO
          </CtaButton>
        </motion.div>
      </Content>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </ScrollIndicator>
    </Section>
  );
};
