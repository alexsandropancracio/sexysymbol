import * as S from "./styles";

export function Contato() {
  return (
    <S.Page>
      <S.Content>
        <S.Header>
          <S.Title>Fale Conosco</S.Title>
          <S.Subtitle>
            Atendimento profissional, humano e discreto.
            <br />
            Estamos aqui para ouvir você.
          </S.Subtitle>
        </S.Header>

        <S.Card>
          <S.Text>
            Na <strong>Sexysymbol</strong>, priorizamos clareza, segurança e
            respeito em todas as interações.
          </S.Text>

          <S.Text>
            Para garantir um atendimento mais ágil, organizado e
            confidencial, optamos por realizar nosso suporte exclusivamente
            por e-mail.
          </S.Text>

          <S.Divider />

          <S.ContactBlock>
            <S.Label>E-mail oficial</S.Label>
            <S.Contact>sexysymbolofficial@gmail.com</S.Contact>
          </S.ContactBlock>

          <S.ContactBlock>
            <S.Label>Horário de atendimento</S.Label>
            <S.Contact>
              Segunda a sexta, das 9h às 18h (horário de Brasília)
            </S.Contact>
          </S.ContactBlock>

          <S.ContactBlock>
            <S.Label>Tempo médio de resposta</S.Label>
            <S.Contact>Até 48 horas úteis</S.Contact>
          </S.ContactBlock>

          <S.FooterNote>
            Todas as mensagens são tratadas com confidencialidade.
            <br />
            Não utilizamos respostas automáticas.
          </S.FooterNote>
        </S.Card>
      </S.Content>
    </S.Page>
  );
}
