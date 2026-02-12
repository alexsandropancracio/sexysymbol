## Objetivo do documento

- **Nome**: backend-passos-java.md  
- **Propósito**: registrar, de forma incremental, todos os passos para:
  - Implementar o módulo de backend em Java (Spring Boot).
  - Integrar com o PostgreSQL definido em `db-init.sql`.
  - Expor as APIs REST usadas pelo frontend.
  - Documentar decisões técnicas, pontos de atenção e possíveis problemas.

> Importante: este arquivo deve ser atualizado sempre que algo novo for implementado ou alterado no backend.

---

## Passo 1 – Estrutura inicial do backend

- **Decisão**: criar um módulo `backend` na raiz do projeto, contendo uma aplicação Spring Boot.

```

- **Tecnologias**:
  - Java 17 ou 21.
  - Spring Boot.
  - Spring Web, Spring Data JPA, Spring Validation, Spring Security (para admin), PostgreSQL Driver.

### Como criar o projeto (recomendado)

- Usar o **Spring Initializr** (site ou plugin IDE) com:
  - Group: `com.sexysymbol`
  - Artifact: `backend`
  - Dependencies: `Spring Web`, `Spring Data JPA`, `Validation`, `Spring Security` (opcional neste primeiro momento), `PostgreSQL Driver`, `Lombok` (se desejado).

---

## Passo 2 – Configuração de banco (PostgreSQL)



- **Comentários de manutenção**:
  - `ddl-auto: validate` garante que o modelo JPA esteja consistente com o SQL existente; em desenvolvimento inicial, pode-se usar `update`, mas o ideal é manter `validate`/migrações com Flyway.
  - Verificar sempre o **schema** (`sexysymbol`) nas queries – se mudar o schema, atualizar aqui e no `db-init.sql`.

---

## Passo 3 – Mapear entidades JPA

- **Entidades principais** (ver `backend-java.md` para o desenho conceitual):
  - `Profile` ↔ tabela `profiles`.
  - `ProfilePhoto` ↔ tabela `profile_photos`.
  - `Ethnicity` ↔ tabela `ethnicities`.
  - `ServiceAudience` ↔ tabela `service_audiences`.
  - `MeetingPlace` ↔ tabela `meeting_places`.
  - `PaymentMethod` ↔ tabela `payment_methods`.
  - Tabelas de junção:
    - `profile_service_audiences`
    - `profile_meeting_places`
    - `profile_payment_methods`
  - `Highlight` ↔ tabela `highlights`.

### Boas práticas / comentários

- Usar tipos coerentes com o SQL:
  - `BIGSERIAL` → `Long`.
  - `NUMERIC(2,1)` para `rating` → `BigDecimal` ou `Double` (com cuidado).
- Manter **nomes de campos** coerentes com o banco:
  - Ex.: `height_cm` → atributo `heightCm` em Java, anotado com `@Column(name = "height_cm")`.
- Evitar carregar relacionamentos pesados por padrão:
  - Usar `FetchType.LAZY` em coleções (`List`, `Set`).

---

## Passo 4 – Repositórios e serviços

- Criar interfaces `Repository` usando Spring Data JPA, por exemplo:
  - `ProfileRepository`, `HighlightRepository`, etc.
- Nos **services**, encapsular as regras de negócio:
  - Filtros de anúncios (location, ethnicity, paymentMethod, etc.).
  - Regra de ativar/desativar `is_active`.
  - Criação de highlights, com validações de datas `starts_at` / `ends_at`.

### Comentários de manutenção

- Evitar lógica complexa diretamente nos controllers.
- Centralizar regras de negócio em `service` para facilitar testes unitários.
- Para filtros complexos de busca de anúncios, considerar:
  - Specifications (Spring Data JPA).
  - Queries customizadas com `@Query`.

---

## Passo 5 – DTOs e mapeamentos para o frontend

- Criar DTOs alinhados com o que o frontend espera:
  - `AdDto` (equivalente ao tipo `Ad` do `AdsData.ts`).
  - `ProfileDetailDto` (para a tela de perfil).
  - `HighlightDto` (equivalente a `highlights/mock.ts`).
- De/para entidade:
  - Utilizar um mapper manual ou libs como MapStruct.

### Comentários

- Não expor entidades JPA diretamente nas respostas da API.
- Garantir que o campo `slug` mapeie para `id` do frontend:
  - Rota `/api/ads/{slug}` usa o `slug` da tabela `profiles`.

---

## Passo 6 – Controllers REST

- Implementar controllers para:
  - **Público**:
    - `GET /api/ads` – lista de anúncios com filtros (query params).
    - `GET /api/ads/{slug}` – detalhes de um anúncio.
    - `GET /api/highlights` – destaques ativos.
    - `GET /api/metadata/filters` – listas de filtros (cidades, etnias, etc.).
  - **Admin**:
    - `POST /api/admin/profiles` – cadastro de perfil com mídia (multipart).
    - `PUT /api/admin/profiles/{id}` – atualização.
    - `DELETE /api/admin/profiles/{id}` – remoção/inativação.
    - `POST /api/admin/profiles/{id}/highlight` – ativar destaque.

### Tratamento de erros

- Criar um `@RestControllerAdvice` para:
  - Tratar validações (`MethodArgumentNotValidException`).
  - Tratar entidades não encontradas.
  - Padronizar mensagens de erro para o frontend.

---

## Passo 7 – Upload e armazenamento de mídia (fotos/vídeos)

- **Decisão inicial sugerida**:
  - Armazenar arquivos em disco no servidor (ex.: pasta `/uploads/profiles/{profileId}/`).
  - Salvar apenas o caminho/URL no banco (`profile_photos.url`).
- **Fluxo para `POST /api/admin/profiles`**:
  1. Receber `multipart/form-data` com:
     - Campo JSON (por ex. `profile`) com os dados do perfil.
     - Campos de arquivo (por ex. `photos[]`, `videos[]`).
  2. Persistir o `Profile`.
  3. Salvar os arquivos no filesystem (ou storage) e registrar em `profile_photos` (e, futuramente, tabela de vídeos).
  4. Marcar `is_active = TRUE` se tudo for salvo com sucesso.

### Comentários de problemas comuns

- **Problema**: caminhos de arquivo quebrados entre ambiente local e produção.
  - **Mitigação**: sempre gerar URLs relativas a uma configuração (ex.: `media.base-path`) e nunca fixar paths absolutos em código.
- **Problema**: tamanho máximo de upload.
  - **Mitigação**: configurar limites em Spring (`spring.servlet.multipart.max-file-size`, etc.) e informar restrições no painel de admin.

---

## Passo 8 – Segurança e painel administrativo

- Habilitar Spring Security:
  - Proteger rotas `/api/admin/**`.
  - Manter `/api/**` públicos para consumo do frontend público.
- Possíveis abordagens:
  - Autenticação em memória (para início).
  - Integração posterior com banco ou provedor externo.

### Comentários

- Nunca expor endpoints administrativos sem autenticação em produção.
- Logar ações administrativas sensíveis (criação/remoção de perfis, ativação de destaques).

---

## Passo 9 – Integração com o frontend

- Ajustar o frontend para:
  - Substituir `AdsData.ts` por chamadas à API `/api/ads`.
  - Substituir `highlights/mock.ts` por `/api/highlights`.
  - Carregar dados do perfil por `/api/ads/{slug}` em `ProfilePage`.
  - Substituir o número de WhatsApp fixo por campo retornado no JSON (`whatsapp_number`).

### Cuidados

- Garantir que os nomes de campos/tipos no JSON correspondam ao esperado pelo frontend.
- Tratar estados de carregando/erro no frontend para as novas chamadas.

---

## Passo 10 – Monitoramento, logs e problemas recorrentes

- Habilitar logs estruturados para:
  - Erros de banco de dados.
  - Erros de validação.
  - Erros de upload de arquivos.
- Ao encontrar problemas em produção:
  - Registrar no final deste documento:
    - **Data**.
    - **Descrição do problema**.
    - **Causa raiz**.
    - **Correção aplicada**.

### Seção de incidentes (a preencher futuramente)

- *[sem incidentes registrados ainda]*.

