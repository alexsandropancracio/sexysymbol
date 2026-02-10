import { BadgeCheck } from "lucide-react";
import {
  Section,
  Content,
  IconWrapper,
  Title,
  Description,
  Note,
  NoteText,
} from "./Verification.styles";

export const Verification = () => {
  return (
    <Section>
      <Content>
        <IconWrapper
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <BadgeCheck size={80} strokeWidth={1.5} />
        </IconWrapper>

        <Title>
          Selo sexysymbol <span>Verificada</span>
        </Title>

        <Description>
          O selo de verificação confere credibilidade ao seu perfil. Ele atesta
          que a administração validou sua identidade através de documentos e
          confirmação visual (foto/vídeo de rosto).
        </Description>

        <Note>
          <NoteText>
            Nota: O selo confirma a identidade, não garante conduta pessoal.
          </NoteText>
        </Note>
      </Content>
    </Section>
  );
};
