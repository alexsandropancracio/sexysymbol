import { useState, useRef, useEffect } from "react"; // adicionei useRef e useEffect
import type { Dispatch, SetStateAction } from "react";

import {
  FilterToggle,
  FilterDropdown,
  FilterCategory,
  FilterSelect,
} from "./styles";

/* =======================
   TIPOS
======================= */
export interface FiltersState {
  formasPagamento: string[];
  atendimento: string[];
  lugar: string[];
  etnia: string[];
  locations: string[]; // ✅ array real
  idadeMin?: number;
  idadeMax?: number;
}

const locationsList = [
  "Salvador",
  "Feira de Santana",
  "Lauro de Freitas",
];

interface FiltersProps {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

/* =======================
   COMPONENTE
======================= */
export function Filters({ filters, setFilters }: FiltersProps) {
  const [open, setOpen] = useState(false);
  const [locationQuery, setLocationQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false); // controle de autocomplete

  const wrapperRef = useRef<HTMLDivElement>(null); // referência para fechar ao clicar fora

  /* ======================= FUNÇÕES ======================= */
  const toggleOption = (category: keyof FiltersState, option: string) => {
    setFilters((prev) => {
      const current = prev[category] as string[];
      const updated = current.includes(option)
        ? current.filter((v) => v !== option)
        : [...current, option];
      return { ...prev, [category]: updated };
    });
  };

  const toggleLocation = (city: string) => {
    setFilters((prev) => {
      const exists = prev.locations.includes(city);
      return {
        ...prev,
        locations: exists
          ? prev.locations.filter((l) => l !== city)
          : [...prev.locations, city],
      };
    });
  };

  // Fechar autocomplete ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredLocations = locationsList.filter(
    (loc) =>
      loc.toLowerCase().includes(locationQuery.toLowerCase()) &&
      !filters.locations.includes(loc)
  );

  const handleSelect = (city: string) => {
    toggleLocation(city);
    setLocationQuery(""); // limpa input
    setShowSuggestions(false); // fecha autocomplete
  };

  const handleClear = () => {
    setLocationQuery("");
    setShowSuggestions(false);
  };

  /* =======================
     DADOS
  ======================= */
  const atendimentos = ["Homens", "Mulheres", "Casais", "PCD"];
  const lugares = ["Com local", "Sem local", "Festas", "Jantar Romântico", "Viagens"];
  const etnias = ["Brancas", "Latinas", "Mulatas", "Negras", "Orientais"];
  const formasPagamento = ["Cartão de Crédito", "Cartão de Débito", "Pix", "Dinheiro"];

  /* =======================
     JSX
  ======================= */
  return (
    <div style={{ position: "relative" }}>
      <FilterToggle onClick={() => setOpen((prev) => !prev)}>
        Filtros+
      </FilterToggle>

      <FilterDropdown open={open}>

      {/* ===== LOCALIZAÇÃO ===== */}
              <FilterCategory ref={wrapperRef}>
          <h4>Localização:</h4>

          {/* INPUT */}
          <input
            type="text"
            placeholder="Digite a cidade..."
            value={locationQuery}
            onChange={(e) => {
              setLocationQuery(e.target.value);
              setShowSuggestions(true); // mostra autocomplete ao digitar
            }}
            style={{
              marginTop: "8px",
              width: "100%",
              padding: "10px 12px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(0,0,0,0.4)",
              color: "#fff",
              outline: "none",
              fontWeight: 500,
            }}
          />

          {/* BOTÃO X PARA LIMPAR */}
          {locationQuery && (
            <span
              onClick={handleClear}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              ×
            </span>
          )}

          {/* AUTOCOMPLETE */}
          {showSuggestions && filteredLocations.length > 0 && (
            <div
              style={{
                marginTop: "4px",
                borderRadius: "8px",
                background: "rgba(0,0,0,0.85)",
                border: "1px solid rgba(255,255,255,0.15)",
                overflow: "hidden",
                position: "absolute",
                width: "100%",
                zIndex: 1000,
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              {filteredLocations.map((loc) => (
                <div
                  key={loc}
                  onClick={() => handleSelect(loc)}
                  style={{
                    padding: "10px 12px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,162,77,0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}

          {/* CIDADES SELECIONADAS */}
          {filters.locations.length > 0 && (
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {filters.locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => toggleLocation(loc)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid #C9A24D",
                    background: "rgba(201,162,77,0.4)",
                    color: "#000",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {loc}
                </button>
              ))}
            </div>
          )}
        </FilterCategory>


        {/* ===== FORMAS DE PAGAMENTO ===== */}
        <FilterCategory>
          <h4>Formas de Pagamento:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {formasPagamento.map((f) => {
              const isSelected = filters.formasPagamento.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => toggleOption("formasPagamento", f)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected
                      ? "rgba(201,162,77,0.4)"
                      : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </FilterCategory>

        {/* ===== ATENDIMENTO ===== */}
        <FilterCategory>
          <h4>Atendimento:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {atendimentos.map((a) => {
              const isSelected = filters.atendimento.includes(a);
              return (
                <button
                  key={a}
                  onClick={() => toggleOption("atendimento", a)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected
                      ? "rgba(201,162,77,0.4)"
                      : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {a}
                </button>
              );
            })}
          </div>
        </FilterCategory>

        {/* ===== LUGAR ===== */}
        <FilterCategory>
          <h4>Local do Encontro:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {lugares.map((l) => {
              const isSelected = filters.lugar.includes(l);
              return (
                <button
                  key={l}
                  onClick={() => toggleOption("lugar", l)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected
                      ? "rgba(201,162,77,0.4)"
                      : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {l}
                </button>
              );
            })}
          </div>
        </FilterCategory>

        {/* ===== ETNIA ===== */}
        <FilterCategory>
          <h4>Etnia:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {etnias.map((e) => {
              const isSelected = filters.etnia.includes(e);
              return (
                <button
                  key={e}
                  onClick={() => toggleOption("etnia", e)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected
                      ? "rgba(201,162,77,0.4)"
                      : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </FilterCategory>

        {/* ===== IDADE ===== */}
        <FilterCategory>
          <h4>Idade:</h4>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <FilterSelect
              value={filters.idadeMin ?? ""}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  idadeMin: Number(e.target.value),
                }))
              }
            >
              <option value="" disabled>Min</option>
              {Array.from({ length: 60 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </FilterSelect>

            <FilterSelect
              value={filters.idadeMax ?? ""}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  idadeMax: Number(e.target.value),
                }))
              }
            >
              <option value="" disabled>Max</option>
              {Array.from({ length: 60 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </FilterSelect>
          </div>
        </FilterCategory>

        {/* ===== AÇÕES ===== */}
        <FilterCategory style={{ marginTop: "16px", display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => {
              setFilters({
                formasPagamento: [],
                atendimento: [],
                lugar: [],
                etnia: [],
                locations: [],
                idadeMin: undefined,
                idadeMax: undefined,
              });
              setLocationQuery("");
            }}
            style={{
              padding: "10px 40px",
              borderRadius: "12px",
              border: "none",
              background: "#C9A24D",
              color: "#000",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Excluir Tudo
          </button>
        </FilterCategory>
      </FilterDropdown>
    </div>
  );
}
