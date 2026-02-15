// src/admin/pages/Dashboard/Dashboard.tsx

import { useState } from "react";
import { ads } from "../../../components/Ads/AdsData";
import { StatsCard } from "../../components/StatsCard/StatsCards";
import { useDashboardAnalytics } from "../../hooks/useDashboardAnalytics";
import * as S from "./Dashboard.styles";

import type { DateRange } from "@/analytics/domain/dateRange";
import type { MetricKey } from "@/analytics/domain/metric";
import { METRIC_LABELS } from "@/analytics/domain/metric";
import { AnalyticsChart } from "../../components/AnalyticsCharts/AnalyticsChart";



type SortField =
  | "views"
  | "whatsappClicks"
  | "profileShares"
  | "imageViews"
  | "topSource";

export function Dashboard() {
  // 🔹 Filtros
  const [filterProfile, setFilterProfile] = useState("all");
  const [filterSource, setFilterSource] = useState("all");

  // 🔹 Métrica do gráfico
  const [metric, setMetric] = useState<MetricKey>("views");
  const [compareMetric, setCompareMetric] = useState<MetricKey | null>(null);


  // 🔹 Ordenação da tabela
  const [sortConfig, setSortConfig] = useState<{
    field: SortField;
    order: "asc" | "desc";
  }>({
    field: "views",
    order: "desc",
  });

  // 🔹 Filtro de data
  const [dateRange, setDateRange] = useState<DateRange>({
    from: null,
    to: null,
  });

  // 🔹 Dados
  const { stats, totals, loading, reset } =
    useDashboardAnalytics(5000, dateRange);

  // 🔹 Filtro por perfil + origem
  const filteredStats = stats.filter((item) => {
    const matchProfile =
      filterProfile === "all" || item.id === filterProfile;

    const matchSource =
      filterSource === "all" || item.topSource === filterSource;

    return matchProfile && matchSource;
  });

  // 🔹 Ordenação genérica
  const sortedStats = [...filteredStats].sort((a, b) => {
    const aValue = a[sortConfig.field];
    const bValue = b[sortConfig.field];

    if (typeof aValue === "number" && typeof bValue === "number") {
      const result = aValue - bValue;
      return sortConfig.order === "asc" ? result : -result;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      const result = aValue.localeCompare(bValue);
      return sortConfig.order === "asc" ? result : -result;
    }

    return 0;
  });

  // 🔹 Clique no header
  const handleSort = (field: SortField) => {
    setSortConfig((prev) => {
      if (prev.field === field) {
        return {
          field,
          order: prev.order === "asc" ? "desc" : "asc",
        };
      }

      return { field, order: "desc" };
    });
  };

  return (
    <S.Page>
      {loading && <p>Carregando dados...</p>}

      <S.Actions>
        <button onClick={reset} className="reset-button">
          Resetar Analytics
        </button>
      </S.Actions>

      <S.Title>Dashboard de Performance</S.Title>

      {/* 🔹 FILTROS */}
      <S.Filters>
        <select
          value={filterProfile}
          onChange={(e) => setFilterProfile(e.target.value)}
        >
          <option value="all">Todos os Perfis</option>
          {ads.map((ad) => (
            <option key={ad.id} value={ad.id}>
              {ad.name}
            </option>
          ))}
        </select>

        <select
          value={filterSource}
          onChange={(e) => setFilterSource(e.target.value)}
        >
          <option value="all">Todas as Fontes</option>
          <option value="direct">Direct</option>
          <option value="instagram">Instagram</option>
          <option value="google">Google</option>
          <option value="facebook">Facebook</option>
          <option value="other">Other</option>
        </select>

        {/* 🔹 FILTRO DE DATA */}
        <S.DateFilter>
          <div>
            <label>De</label>
            <input
              type="date"
              value={
                dateRange.from
                  ? dateRange.from.toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) =>
                setDateRange((prev) => ({
                  ...prev,
                  from: e.target.value ? new Date(e.target.value) : null,
                }))
              }
            />
          </div>

          <div>
            <label>Até</label>
            <input
              type="date"
              value={
                dateRange.to
                  ? dateRange.to.toISOString().split("T")[0]
                  : ""
              }
              onChange={(e) =>
                setDateRange((prev) => ({
                  ...prev,
                  to: e.target.value ? new Date(e.target.value) : null,
                }))
              }
            />
          </div>

          {(dateRange.from || dateRange.to) && (
            <button
              className="clear-date"
              onClick={() => setDateRange({ from: null, to: null })}
            >
              Limpar período
            </button>
          )}
        </S.DateFilter>
      </S.Filters>

      {/* 🔹 TABELA */}
      <S.Table>
        <thead>
          <tr>
            <th>Perfil</th>
            {[
              { key: "views", label: "Views" },
              { key: "whatsappClicks", label: "WhatsApp" },
              { key: "profileShares", label: "Shares" },
              { key: "imageViews", label: "Imagem" },
              { key: "topSource", label: "Origem" },
            ].map(({ key, label }) => (
              <th
                key={key}
                onClick={() => handleSort(key as SortField)}
                className={sortConfig.field === key ? "active" : ""}
              >
                {label}
                {sortConfig.field === key && (
                  <span className="sort-icon">
                    {sortConfig.order === "asc" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedStats.map((item) => (
            <tr key={item.id}>
              <td data-label="Perfil">{item.name}</td>
              <td data-label="Views">{item.views}</td>
              <td data-label="WhatsApp">{item.whatsappClicks}</td>
              <td data-label="Shares">{item.profileShares}</td>
              <td data-label="Imagem">{item.imageViews}</td>
              <td data-label="Origem">{item.topSource}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>

      {/* 🔹 TOGGLE DE MÉTRICA */}
      <S.MetricToggle>
        <label>Métrica</label>
        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value as MetricKey)}
        >
          {Object.entries(METRIC_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <label>Comparar com</label>
        <select
          value={compareMetric ?? ""}
          onChange={(e) =>
            setCompareMetric(
              e.target.value ? (e.target.value as MetricKey) : null
            )
          }
        >
          <option value="">Nenhuma</option>
          {Object.entries(METRIC_LABELS)
            .filter(([key]) => key !== metric)
            .map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
        </select>
      </S.MetricToggle>
      

      {/* 🔹 GRÁFICO */}
      <S.ChartWrapper>
        <S.ChartScroll>
          <AnalyticsChart
            data={sortedStats}
            metric={metric}
            compareMetric={compareMetric}
          />
        </S.ChartScroll>
      </S.ChartWrapper>


      {/* 🔹 CARDS */}
      <S.CardsGrid>
        <StatsCard title="Total de Views" value={totals.views} />
        <StatsCard
          title="Total de Cliques WhatsApp"
          value={totals.whatsapp}
        />
        <StatsCard title="Total de Shares" value={totals.shares} />
        <StatsCard title="Total de Image Views" value={totals.images} />
      </S.CardsGrid>
    </S.Page>
  );
}
