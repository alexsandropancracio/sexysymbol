import { useState } from "react";
import {
  FilterToggle,
  FilterDropdown,
  FilterCategory,
  FilterSelect,
  RangeContainer,
} from "./styles";

export function Filters() {
  const [open, setOpen] = useState(false);

  // Estado para armazenar os filtros selecionados por categoria
  const [selectedOptions, setSelectedOptions] = useState({
    formasPagamento: [] as string[],
    atendimento: [] as string[],
    lugar: [] as string[],
    etnia: [] as string[],
  });

  // Função para alternar seleção de filtros por categoria
  const toggleOption = (category: keyof typeof selectedOptions, option: string) => {
    setSelectedOptions((prev) => {
      const updated = prev[category].includes(option)
        ? prev[category].filter((o) => o !== option)
        : [...prev[category], option];
      return { ...prev, [category]: updated };
    });
  };

  // Arrays de opções
  const atendimentos = ["Homens", "Mulheres", "Casais", "PCD"];
  const lugares = ["Com local", "Sem local", "Festas", "Jantar Romântico", "Viagens"];
  const etnias = ["Brancas", "Latinas", "Mulatas", "Negras", "Orientais"];
  const formasPagamento = ["Cartão de Crédito", "Cartão de Débito", "Pix", "Dinheiro"];

  return (
    <div style={{ position: "relative" }}>
      <FilterToggle onClick={() => setOpen(!open)}>Filtros+</FilterToggle>

      <FilterDropdown open={open}>
        {/* ===== PREÇO ===== */}
        <FilterCategory>
          <h4>Preço R$:</h4>
          <RangeContainer>
            {/* Futuro slider */}
          </RangeContainer>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <FilterSelect defaultValue="">
              <option value="" disabled>Min</option>
              {Array.from({ length: 33 }, (_, i) => 300 + i * 300).map((price) => (
                <option key={price} value={price}>R$ {price.toLocaleString("pt-BR")}</option>
              ))}
            </FilterSelect>

            <FilterSelect defaultValue="">
              <option value="" disabled>Max</option>
              {Array.from({ length: 33 }, (_, i) => 300 + i * 300).map((price) => (
                <option key={price} value={price}>R$ {price.toLocaleString("pt-BR")}</option>
              ))}
            </FilterSelect>
          </div>
        </FilterCategory>

        {/* ===== FORMAS DE PAGAMENTO ===== */}
        <FilterCategory>
          <h4>Formas de Pagamento:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {formasPagamento.map((f) => {
              const isSelected = selectedOptions.formasPagamento.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => toggleOption("formasPagamento", f)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected ? "rgba(201,162,77,0.4)" : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </FilterCategory>

        {/* ===== IDADE ===== */}
        <FilterCategory>
          <h4>Idade:</h4>
          <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
            <FilterSelect defaultValue="">
              <option value="" disabled>Min</option>
              {Array.from({ length: 60 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </FilterSelect>

            <FilterSelect defaultValue="">
              <option value="" disabled>Max</option>
              {Array.from({ length: 60 }, (_, i) => i + 18).map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </FilterSelect>
          </div>
        </FilterCategory>

        {/* ===== ATENDIMENTO ===== */}
        <FilterCategory>
          <h4>Atendimento:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {atendimentos.map((a) => {
              const isSelected = selectedOptions.atendimento.includes(a);
              return (
                <button
                  key={a}
                  onClick={() => toggleOption("atendimento", a)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected ? "rgba(201,162,77,0.4)" : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
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
          <h4>Lugar:</h4>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
            {lugares.map((l) => {
              const isSelected = selectedOptions.lugar.includes(l);
              return (
                <button
                  key={l}
                  onClick={() => toggleOption("lugar", l)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected ? "rgba(201,162,77,0.4)" : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
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
              const isSelected = selectedOptions.etnia.includes(e);
              return (
                <button
                  key={e}
                  onClick={() => toggleOption("etnia", e)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: isSelected ? "1px solid #C9A24D" : "none",
                    background: isSelected ? "rgba(201,162,77,0.4)" : "rgba(0,0,0,0.4)",
                    color: isSelected ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </FilterCategory>

        {/* ===== BOTÕES APLICAR E EXCLUIR ===== */}
        <FilterCategory style={{ marginTop: "16px", display: "flex", justifyContent: "center", gap: "12px" }}>
          {/* Aplicar */}
          <button
            style={{
              padding: "10px 24px",
              borderRadius: "12px",
              border: "none",
              background: "#C9A24D",
              color: "#000",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.5)",
            }}
            onClick={() => console.log("Aplicar clicado!", selectedOptions)}>
            Aplicar
          </button>

          {/* Excluir */}
          <button
            style={{
              padding: "10px 24px",
              borderRadius: "12px",
              border: "none",
              background: "#000000",
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "inset 0 -2px 4px rgb(39, 39, 39)",
            }}
            onClick={() => {
              // Reseta todos os filtros
              setSelectedOptions({
                formasPagamento: [],
                atendimento: [],
                lugar: [],
                etnia: [],
              });
            }}>
            Excluir
          </button>
        </FilterCategory>
      </FilterDropdown>
    </div>
  );
}
