## Visão geral do projeto

- **Tipo de aplicação**: Portfólio de acompanhantes/garotas de programa que pagam para anunciar seus serviços.
- **Frontend**: Aplicação em React + Vite (pasta `src/frontend`) com:
  - Lista de anúncios (`Ads`, `AdsCard`, `AdsData`).
  - Página de perfil detalhado (`ProfilePage`) acessada por rota `"/perfil/:id"`.
  - Destaques na home (`highlights/mock.ts`) com garotas em destaque e preço.
  - Sistema de filtros (localização, etnia, formas de pagamento, tipo de atendimento, local do encontro, faixa de idade).
- **Dados atuais**: Totalmente mockados no frontend (arquivos TypeScript), sem integração com backend ou banco de dados.

### Estruturas de dados principais no frontend

- **Anúncio (`Ad` em `AdsData.ts`)**:
  - `id: string` (slug, ex: `"allana-lemos"`).
  - `name: string`.
  - `age: number`.
  - `locations: string` (cidade, ex: "Salvador", "Feira de Santana").
  - `bio: string`.
  - `rating: number`.
  - `images: string[]` (URLs/paths das fotos).
  - `etnia: string` (ex: "Brancas", "Negras", "Latinas"...).
  - `atendimento: string[]` (ex: "Homens", "Mulheres", "Casais", "PCD").
  - `lugar: string[]` (ex: "Com local", "Sem local", "Festas", "Jantar Romântico", "Viagens").
  - `formasPagamento: string[]` (ex: "Pix", "Dinheiro", "Cartão de Crédito").
  - `altura: number` (cm).
  - `peso: number` (kg).
  - `verified?: boolean`.
  - `reviewsCount?: number`.

- **Destaques (`highlights/mock.ts`)**:
  - `id: number`.
  - `name: string`.
  - `age: number`.
  - `location: string`.
  - `rating: number`.
  - `price: number` (valor do programa/destaque exibido).
  - `image: string`.

- **Filtros (`Filters.tsx`)**:
  - Localização: lista fixa `["Salvador", "Feira de Santana", "Lauro de Freitas"]`.
  - Atendimentos: `["Homens", "Mulheres", "Casais", "PCD"]`.
  - Lugares: `["Com local", "Sem local", "Festas", "Jantar Romântico", "Viagens"]`.
  - Etnias: `["Brancas", "Latinas", "Mulatas", "Negras", "Orientais"]`.
  - Formas de pagamento: `["Cartão de Crédito", "Cartão de Débito", "Pix", "Dinheiro"]`.
  - Faixa de idade: `idadeMin`, `idadeMax`.

---

## Proposta de backend em Java

### Stack sugerida

- **Linguagem**: Java 21 (ou 17 LTS).
- **Framework**: Spring Boot.
- **Módulos principais**:
  - Spring Web (REST API).
  - Spring Data JPA.
  - Spring Validation.
  - Spring Security (futuro painel administrativo).
  - Driver PostgreSQL.
- **Banco de dados**: PostgreSQL (modelado para os dados de anúncios e destaques).

### Entidades principais no backend

- **Profile (perfil/anúncio)** → tabela `profiles`
  - Representa cada garota que anuncia no site.
  - Campos principais:
    - `id` (PK, UUID ou bigserial).
    - `slug` (equivalente ao `Ad.id`, único).
    - `name`.
    - `age`.
    - `city` (equivalente a `locations`).
    - `bio`.
    - `rating`.
    - `ethnicity` (FK ou enum).
    - `height_cm`.
    - `weight_kg`.
    - `verified`.
    - `reviews_count`.
    - `whatsapp_number` (para geração dinâmica do link do botão **AGENDAR**).
    - `is_active`.
    - `created_at`, `updated_at`.

- **Foto de perfil** → tabela `profile_photos`
  - Campos:
    - `id` (PK).
    - `profile_id` (FK para `profiles`).
    - `url` ou `path`.
    - `position` (ordem).
    - `is_main` (se é a foto principal).

- **Opções de atendimento** → tabelas de apoio + relacionamentos N:N
  - `service_audiences` (Homens, Mulheres, Casais, PCD).
  - `profile_service_audiences` (tabela de junção `profile_id` x `service_audience_id`).

- **Locais de encontro**:
  - `meeting_places` (Com local, Sem local, Festas, Jantar Romântico, Viagens).
  - `profile_meeting_places` (junção).

- **Formas de pagamento**:
  - `payment_methods` (Cartão de Crédito, Cartão de Débito, Pix, Dinheiro).
  - `profile_payment_methods` (junção).

- **Etnias**:
  - `ethnicities` (Brancas, Latinas, Mulatas, Negras, Orientais).
  - FK em `profiles.ethnicity_id`.

- **Destaques**:
  - `highlights`:
    - `id`.
    - `profile_id` (FK para `profiles`).
    - `price` (compatível com `price` do mock).
    - `priority` (ordem).
    - `starts_at`, `ends_at` (janela de destaque paga).
    - `is_active`.

---

## Endpoints REST sugeridos

### Público (consumidos pelo frontend)

- **Anúncios / perfis**
  - `GET /api/ads`
    - Query params para filtros:
      - `location`, `ethnicity`, `paymentMethod`, `audience`, `meetingPlace`,
      - `ageMin`, `ageMax`, `name`.
    - Retorna lista paginada de anúncios mapeados para o tipo `Ad` do frontend.
  - `GET /api/ads/{slug}`
    - Retorna dados detalhados de um anúncio (usado em `ProfilePage`).
  - `GET /api/highlights`
    - Retorna lista de destaques com estrutura semelhante ao `highlights` do frontend.

- **Meta / filtros**
  - `GET /api/metadata/filters`
    - Retorna listas de:
      - Cidades (localizações ativas no banco).
      - Etnias disponíveis.
      - Formas de pagamento.
      - Tipos de atendimento.
      - Locais de encontro.
    - Permite o frontend não depender de listas fixas em código.

### Administrativo (para gerenciar anúncios pagos)

- CRUD de perfis (acessível via painel/admin):
  - `POST /api/admin/profiles`  
    - Recebe um `multipart/form-data` contendo:
      - JSON com os dados do perfil (nome, idade, cidade, bio, filtros, formas de pagamento, etc.).
      - Arquivos de mídia: múltiplas **fotos** e, opcionalmente, **vídeos**.
    - Fluxo sugerido:
      1. Salvar o perfil em `profiles`.
      2. Para cada arquivo de mídia:
         - Armazenar fisicamente (disco/local ou storage de objetos).
         - Registrar metadados em tabelas como `profile_photos` (e futura tabela de vídeos, se necessário), vinculando ao `profile_id`.
      3. Marcar o perfil como `is_active = TRUE` assim que o cadastro for concluído com sucesso.
    - Resultado: ao finalizar o cadastro, o perfil já estará disponível para listagem e visualização pela API pública.
  - `PUT /api/admin/profiles/{id}`
  - `DELETE /api/admin/profiles/{id}`
  - `POST /api/admin/profiles/{id}/highlight` (ativar destaque pago).

> Segurança: estes endpoints devem ser protegidos via Spring Security, preferencialmente com autenticação baseada em JWT ou sessão, conforme necessidade do projeto.

---

## Fluxo de uso

1. **Anunciante paga pelo anúncio/destaque** (fora do escopo técnico deste documento ou via futura integração com gateway de pagamento).
2. **Admin cadastra/ativa o perfil** no painel (backend) com:
   - Dados básicos, filtros, formas de pagamento, fotos e contato.
3. **Frontend** consome os endpoints públicos:
   - Para a home/lista (`Ads`): chama `GET /api/ads` com filtros.
   - Para o perfil (`ProfilePage`): chama `GET /api/ads/{slug}`.
   - Para destaques: `GET /api/highlights`.
4. **Banco PostgreSQL** persiste todos os anúncios, fotos, destaques e metadados.

---

## Próximos passos recomendados

- Implementar um módulo `backend` em Java (por exemplo, pasta `backend/`) com Spring Boot contendo:
  - Entidades JPA baseadas nas tabelas definidas em `documents/db-init.sql`.
  - Repositórios (`Spring Data JPA`).
  - Services com regras de negócio (ex: ativação de destaque, lógica de filtros).
  - Controllers REST para os endpoints listados.
- Ajustar o frontend:
  - Substituir dados mockados (`AdsData.ts` e `highlights/mock.ts`) por chamadas à API REST.
  - Substituir o número de WhatsApp hardcoded por valor vindo do backend.

