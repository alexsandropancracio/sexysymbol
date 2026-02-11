-- Script de criação de schema PostgreSQL para o projeto SexySymbol
-- Ajustar conforme necessário antes de rodar em produção.

CREATE SCHEMA IF NOT EXISTS sexysymbol;
SET search_path TO sexysymbol;

-- ===============================
-- TABELAS DE APOIO (DOMÍNIOS)
-- ===============================

CREATE TABLE IF NOT EXISTS ethnicities (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS service_audiences (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(50) NOT NULL UNIQUE  -- Homens, Mulheres, Casais, PCD
);

CREATE TABLE IF NOT EXISTS meeting_places (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(80) NOT NULL UNIQUE  -- Com local, Sem local, Festas, Jantar Romântico, Viagens
);

CREATE TABLE IF NOT EXISTS payment_methods (
    id          SERIAL PRIMARY KEY,
    name        VARCHAR(80) NOT NULL UNIQUE  -- Pix, Dinheiro, Cartão de Crédito, etc.
);

-- ===============================
-- PERFIS / ANÚNCIOS
-- ===============================

CREATE TABLE IF NOT EXISTS profiles (
    id              BIGSERIAL PRIMARY KEY,
    slug            VARCHAR(150) NOT NULL UNIQUE,   -- equivalente a Ads.id (ex: "allana-lemos")
    name            VARCHAR(150) NOT NULL,
    age             INT CHECK (age >= 18),
    city            VARCHAR(120) NOT NULL,
    bio             TEXT,
    rating          NUMERIC(2,1),                   -- ex: 4.5
    ethnicity_id    INT REFERENCES ethnicities(id),
    height_cm       INT,                            -- altura
    weight_kg       INT,                            -- peso
    verified        BOOLEAN DEFAULT FALSE,
    reviews_count   INT DEFAULT 0,
    whatsapp_number VARCHAR(30),                    -- para o botão AGENDAR
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS profile_photos (
    id          BIGSERIAL PRIMARY KEY,
    profile_id  BIGINT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    url         TEXT NOT NULL,
    position    INT NOT NULL DEFAULT 0,
    is_main     BOOLEAN NOT NULL DEFAULT FALSE
);

-- ===============================
-- RELACIONAMENTOS N:N
-- ===============================

CREATE TABLE IF NOT EXISTS profile_service_audiences (
    profile_id          BIGINT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    service_audience_id INT    NOT NULL REFERENCES service_audiences(id),
    PRIMARY KEY (profile_id, service_audience_id)
);

CREATE TABLE IF NOT EXISTS profile_meeting_places (
    profile_id      BIGINT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    meeting_place_id INT   NOT NULL REFERENCES meeting_places(id),
    PRIMARY KEY (profile_id, meeting_place_id)
);

CREATE TABLE IF NOT EXISTS profile_payment_methods (
    profile_id       BIGINT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    payment_method_id INT  NOT NULL REFERENCES payment_methods(id),
    PRIMARY KEY (profile_id, payment_method_id)
);

-- ===============================
-- DESTAQUES
-- ===============================

CREATE TABLE IF NOT EXISTS highlights (
    id          BIGSERIAL PRIMARY KEY,
    profile_id  BIGINT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    price       NUMERIC(10,2) NOT NULL,
    priority    INT DEFAULT 0,
    starts_at   TIMESTAMP WITH TIME ZONE,
    ends_at     TIMESTAMP WITH TIME ZONE,
    is_active   BOOLEAN DEFAULT TRUE
);

-- ===============================
-- DADOS BÁSICOS (OPCIONAIS)
-- ===============================

INSERT INTO ethnicities (name) VALUES
    ('Brancas'),
    ('Latinas'),
    ('Mulatas'),
    ('Negras'),
    ('Orientais')
ON CONFLICT (name) DO NOTHING;

INSERT INTO service_audiences (name) VALUES
    ('Homens'),
    ('Mulheres'),
    ('Casais'),
    ('PCD')
ON CONFLICT (name) DO NOTHING;

INSERT INTO meeting_places (name) VALUES
    ('Com local'),
    ('Sem local'),
    ('Festas'),
    ('Jantar Romântico'),
    ('Viagens')
ON CONFLICT (name) DO NOTHING;

INSERT INTO payment_methods (name) VALUES
    ('Pix'),
    ('Dinheiro'),
    ('Cartão de Crédito'),
    ('Cartão de Débito')
ON CONFLICT (name) DO NOTHING;

