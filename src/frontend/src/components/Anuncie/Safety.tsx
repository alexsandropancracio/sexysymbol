import { AlertTriangle, ShieldAlert } from "lucide-react";
import {
  Section,
  Content,
  Card,
  Inner,
  Watermark,
  Row,
  IconWrapper,
  Title,
  Lists,
} from "./Safety.styles";

export const Safety = () => {
  return (
    <Section>
      <Content>
        <Card
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Inner>
            <Watermark>
              <ShieldAlert size={200} />
            </Watermark>

            <Row>
              <IconWrapper>
                <AlertTriangle size={32} />
              </IconWrapper>

              <div>
                <Title>Aviso de Segurança e Integridade</Title>

                <Lists>
                  <ul>
                    <li>Não trabalhamos com recrutadores ou agenciadores.</li>
                    <li>O contato é direto entre anunciante e plataforma.</li>
                    <li>Não aceitamos intermediários.</li>
                  </ul>

                  <ul>
                    <li>Cuidado com golpes: não pedimos senhas bancárias.</li>
                    <li>Anúncios falsos (fake) são banidos imediatamente.</li>
                    <li>Toda solicitação passa por verificação humana.</li>
                  </ul>
                </Lists>
              </div>
            </Row>
          </Inner>
        </Card>
      </Content>
    </Section>
  );
};
