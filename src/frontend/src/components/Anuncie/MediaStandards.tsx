import React from 'react';
import { Container } from './ui/Container';
import { Camera, Video, ImagePlus } from 'lucide-react';

import {
  Section,
  Content,
  Intro,
  Title,
  Description,
  CardsGrid,
  Card,
  IconWrapper,
  CardTitle,
  CardText,
} from './MediaStandards.styles';


export const MediaStandards: React.FC = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Intro>
            <Title>
              Padrão de <br />
              <span>Fotos e Vídeos</span>
            </Title>

            <Description>
              A qualidade do material visual é o principal fator de conversão.
              Aceitamos fotos caseiras, desde que bem iluminadas, nítidas e
              produzidas com cuidado.
            </Description>
          </Intro>

          <CardsGrid>
            <Card whileHover={{ y: -6 }} highlight>
              <IconWrapper highlight>
                <ImagePlus />
              </IconWrapper>
              <CardTitle>Quantidade</CardTitle>
              <CardText>
                Mínimo de 10 fotos.<br />
                Máximo de 20 fotos.<br />
                Variedade de ângulos e produções.
              </CardText>
            </Card>

            <Card whileHover={{ y: -6 }}>
              <IconWrapper>
                <Camera />
              </IconWrapper>
              <CardTitle>Estilo</CardTitle>
              <CardText>
                Fotos profissionais são bem-vindas, mas selfies de alta qualidade
                (“caseiras premium”) geram excelente conexão.
              </CardText>
            </Card>

            <Card whileHover={{ y: -6 }} full>
              <IconWrapper>
                <Video />
              </IconWrapper>
              <CardTitle>Vídeos</CardTitle>
              <CardText>
                Vídeos curtos (até 15s) são permitidos no formato vertical.
                Devem focar na naturalidade e beleza, sem conteúdo sexualmente
                explícito.
              </CardText>
            </Card>
          </CardsGrid>
        </Content>
      </Container>
    </Section>
  );
};
