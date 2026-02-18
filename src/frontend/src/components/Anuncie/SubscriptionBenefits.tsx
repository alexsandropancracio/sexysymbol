import { Container } from "./ui/Container";
import { CheckCircle2, Camera, Gem } from "lucide-react";

import {
  Section,
  Grid,
  TextBlock,
  Title,
  TitleHighlight,
  Description,
  ContentWrapper,
  Block,
  BlockTitle,
  BlockText,
  VoucherCard,
  VoucherTitle,
  VoucherText,
  RulesList,
  RuleItem,
  IconWrapper,
  RuleText,
} from "./SubscriptionBenefits.styles";

const rules = [
  "Valor máximo de R$ 500 por mês",
  "Caso o local custe menos, o voucher cobre apenas o valor da locação",
  "A diferença não é revertida em dinheiro",
  "O voucher não é acumulativo",
  "Caso o local custe mais, a cliente pode complementar o valor",
  "O valor complementar é de responsabilidade da cliente",
  "A cliente pode usufruir da estadia completa do local reservado",
  "Reserva sujeita à pagamento e aprovação prévia pela equipe",
];

export const SubscriptionBenefits = () => {
  return (
    <Section>
      <Container>
        <Grid>
          {/* HEADLINE */}
          <TextBlock
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Title>
              Benefícios Exclusivos da <br />
              <TitleHighlight>Assinatura</TitleHighlight>
            </Title>

            <Description>
              Investir na sua assinatura é investir na sua imagem com estrutura
              profissional, posicionamento estratégico e produção de alto nível.
            </Description>
          </TextBlock>

          <ContentWrapper>
            {/* SESSÃO DE FOTOS */}
            <Block
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <IconWrapper>
                <Camera size={22} />
              </IconWrapper>

              <div>
                <BlockTitle>Sessão de Fotos Garantida</BlockTitle>
                <BlockText>
                  Clientes que permanecem 2 semanas ativas no mês garantem 1
                  sessão de fotos profissional mensal.
                  <br />
                  <br />
                  Clientes com assinatura mensal ativa (1 mês) também garantem
                  1 sessão de fotos profissional.
                </BlockText>
              </div>
            </Block>

            {/* VOUCHER DESTACADO */}
            <VoucherCard
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Gem size={24} />
              <VoucherTitle>Voucher de até R$ 500</VoucherTitle>
              <VoucherText>
                Clientes com assinatura mensal ativa recebem um voucher de até
                R$ 500 para custear a locação do espaço da sessão.
                <br />
                <br />
                O voucher pode ser utilizado para:
                <br />• Quartos de hotel
                <br />• Casas ou apartamentos no Airbnb
                <br />• Espaços privados adequados para produção de conteúdo
                <br />
                <br />
                A cliente escolhe o local desejado e aplicamos o voucher conforme
                as regras abaixo.
              </VoucherText>
            </VoucherCard>

            {/* REGRAS */}
            <RulesList>
              {rules.map((rule, index) => (
                <RuleItem
                  key={rule}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <IconWrapper>
                    <CheckCircle2 size={18} />
                  </IconWrapper>
                  <RuleText>{rule}</RuleText>
                </RuleItem>
              ))}
            </RulesList>
          </ContentWrapper>
        </Grid>
      </Container>
    </Section>
  );
};

