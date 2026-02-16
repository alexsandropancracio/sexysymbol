import * as S from "./styles";

export function Termos() {
  return (
    <S.Page>
      <S.Content>
        <S.Title>Termos de Uso</S.Title>

        {/* 1. Sobre a Plataforma */}
        <S.Section>
          <S.SectionTitle>1. Sobre a Plataforma</S.SectionTitle>

          <S.Text>
            <p>
              A sexysymbol é uma plataforma digital que atua como marketplace
              de divulgação e conexão entre perfis independentes
              (“Anunciantes”) e usuários interessados (“Clientes”).
            </p>

            <p>
              A sexysymbol não intermedia pagamentos entre usuários e não
              participa de qualquer negociação privada realizada fora da
              plataforma.
            </p>

            <p>
              A plataforma atua exclusivamente como ambiente de divulgação e
              conexão.
            </p>
          </S.Text>
        </S.Section>

        {/* 2. Aceitação dos Termos */}
        <S.Section>
          <S.SectionTitle>2. Aceitação dos Termos</S.SectionTitle>

          <S.Text>
            <p>
              Ao acessar ou utilizar a plataforma, o usuário declara que:
            </p>
          </S.Text>

          <S.List>
            <S.ListItem>Leu e compreendeu estes Termos de Uso</S.ListItem>
            <S.ListItem>Possui no mínimo 18 anos</S.ListItem>
            <S.ListItem>
              Concorda integralmente com as condições aqui estabelecidas
            </S.ListItem>
          </S.List>

          <S.Text>
            <p>
              Caso não concorde, o uso da plataforma deve ser imediatamente
              interrompido.
            </p>
          </S.Text>
        </S.Section>

        {/* 3. Elegibilidade */}
        <S.Section>
          <S.SectionTitle>3. Elegibilidade</S.SectionTitle>

          <S.Text>
            <p>É estritamente proibido o uso da plataforma por:</p>
          </S.Text>

          <S.List>
            <S.ListItem>Menores de 18 anos</S.ListItem>
            <S.ListItem>Pessoas utilizando identidade falsa</S.ListItem>
            <S.ListItem>
              Usuários com histórico de conduta abusiva na plataforma
            </S.ListItem>
          </S.List>

          <S.Text>
            <p>
              A sexysymbol poderá solicitar verificação de identidade a qualquer
              momento.
            </p>
          </S.Text>
        </S.Section>

        {/* 4. Sobre os Anunciantes */}
        <S.Section>
          <S.SectionTitle>4. Sobre os Anunciantes</S.SectionTitle>

          <S.Text>
            <strong>4.1 Responsabilidade pelo conteúdo</strong>
            <p>Os anunciantes são integralmente responsáveis por:</p>
          </S.Text>

          <S.List>
            <S.ListItem>Informações publicadas</S.ListItem>
            <S.ListItem>Fotos e vídeos</S.ListItem>
            <S.ListItem>Dados de contato</S.ListItem>
            <S.ListItem>Veracidade das informações</S.ListItem>
            <S.ListItem>Cumprimento das leis aplicáveis</S.ListItem>
          </S.List>

          <S.Text>
            <p>É proibido publicar:</p>
          </S.Text>

          <S.List>
            <S.ListItem>Conteúdo ilegal</S.ListItem>
            <S.ListItem>Conteúdo envolvendo menores</S.ListItem>
            <S.ListItem>Conteúdo sem consentimento</S.ListItem>
            <S.ListItem>
              Material protegido por direitos autorais sem autorização
            </S.ListItem>
            <S.ListItem>
              Conteúdo que incite violência, discriminação ou exploração
            </S.ListItem>
          </S.List>

          <S.Text>
            <strong>4.2 Autenticidade</strong>
            <p>
              O anunciante declara ser maior de 18 anos, atuar de forma
              independente e possuir autorização sobre todo o material publicado.
            </p>
          </S.Text>

          <S.Text>
            <strong>4.3 Suspensão ou remoção</strong>
            <p>
              A sexysymbol poderá suspender ou remover perfis que descumpram
              estes Termos, recebam denúncias consistentes ou utilizem
              informações falsas.
            </p>
          </S.Text>
        </S.Section>

        {/* 5. Sobre os Clientes */}
        <S.Section>
          <S.SectionTitle>
            5. Sobre os Clientes (Usuários)
          </S.SectionTitle>

          <S.List>
            <S.ListItem>Manter conduta respeitosa</S.ListItem>
            <S.ListItem>
              Não enviar mensagens ofensivas ou abusivas
            </S.ListItem>
            <S.ListItem>
              Não tentar negociar de forma coercitiva
            </S.ListItem>
            <S.ListItem>
              Não compartilhar dados pessoais de terceiros
            </S.ListItem>
          </S.List>
        </S.Section>

        {/* 6. Limitação de Responsabilidade */}
        <S.Section>
          <S.SectionTitle>
            6. Limitação de Responsabilidade
          </S.SectionTitle>

          <S.Text>
            <p>
              Qualquer pessoa que alegue atuar como representante ou
              intermediário da sexysymbol sem autorização deve ser considerada
              fraude.
            </p>

            <p>
              A sexysymbol não participa de encontros presenciais, não
              intermedia valores e não se responsabiliza por acordos realizados
              fora da plataforma.
            </p>
          </S.Text>
        </S.Section>

        {/* 7. Contato */}
        <S.Section>
          <S.SectionTitle>7. Contato</S.SectionTitle>
          <S.Text>
            <p>atendimento@sexysymbol.com.br</p>
          </S.Text>
        </S.Section>
      </S.Content>
    </S.Page>
  );
}
