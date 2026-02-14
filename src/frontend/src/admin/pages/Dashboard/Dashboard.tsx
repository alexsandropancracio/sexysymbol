// src/admin/pages/Dashboard/Dashboard.tsx

import { useEffect, useState } from "react";
import { analyticsService } from "../../../analytics/analyticsService";
import { ads } from "../../../components/Ads/AdsData";
import { StatsCard } from "../../components/StatsCard/StatsCards";
import * as S from "./Dashboard.styles";

// 🔹 Tipagem para eventos do analytics
interface AnalyticsEvent {
  id: string;
  eventName: "whatsapp_click" | "profile_share" | "profile_image_view" | "profile_view";
  payload?: {
    profileId?: string;
    source?: string;
    method?: "native" | "copy";
    imageIndex?: number;
    device?: "mobile" | "tablet" | "desktop";
    referrer?: string;
    [key: string]: any;
  };
  timestamp: number;
}

// 🔹 Tipagem das estatísticas de cada perfil
interface ProfileStats {
  id: string;
  name: string;
  views: number;
  whatsappClicks: number;
  profileShares: number;
  imageViews: number;
  topSource: string;
}

export function Dashboard() {
  // Filtros do dashboard
  const [filterProfile, setFilterProfile] = useState<string>("all"); // Todos os perfis por padrão
  const [filterSource, setFilterSource] = useState<string>("all");    // Todas as fontes


  // Função para resetar todo o analytics
const handleResetAnalytics = async () => {
  if (!confirm("Tem certeza que deseja resetar todos os dados de analytics? Essa ação não pode ser desfeita.")) {
    return;
  }

  // 🔹 Resetar views
  for (const profile of ads) {
    await analyticsService.resetProfileViews(profile.id);
  }

  // 🔹 Resetar eventos genéricos (localStorage)
  localStorage.removeItem("analytics_events");

  // 🔹 Recarregar dados
  const allViews: Record<string, number> = {};
  for (const profile of ads) {
    allViews[profile.id] = await analyticsService.getProfileViews(profile.id);
  }

  const raw = localStorage.getItem("analytics_events");
  const loadedEvents: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];

  const updatedStats: ProfileStats[] = ads.map((profile) => {
    const views = allViews[profile.id] || 0;

    const whatsappClicks = loadedEvents.filter(
      (e) => e.eventName === "whatsapp_click" && e.payload?.profileId === profile.id
    ).length;

    const profileShares = loadedEvents.filter(
      (e) => e.eventName === "profile_share" && e.payload?.profileId === profile.id
    ).length;

    const imageViews = loadedEvents.filter(
      (e) => e.eventName === "profile_image_view" && e.payload?.profileId === profile.id
    ).length;

    return {
      id: profile.id,
      name: profile.name,
      views,
      whatsappClicks,
      profileShares,
      imageViews,
      topSource: "direct",
    };
  });

  setStats(updatedStats);
  alert("Analytics resetado com sucesso!");
};

  // ⬇️ Estados do dashboard
  const [stats, setStats] = useState<ProfileStats[]>([]);


  useEffect(() => {
    const loadData = async () => {
      // 🔹 Buscar views de cada perfil
      const allViews: Record<string, number> = {};
      for (const profile of ads) {
        allViews[profile.id] = await analyticsService.getProfileViews(profile.id);
      }

      // 🔹 Buscar eventos do localStorage
      const raw = typeof window !== "undefined" ? localStorage.getItem("analytics_events") : null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("analytics_events");
      }

      const loadedEvents: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];

      // 🔹 Montar stats de cada perfil
      const data: ProfileStats[] = ads.map((profile) => {
        const views = allViews[profile.id] || 0;

        const whatsappClicks = loadedEvents.filter(
          (e) => e.eventName === "whatsapp_click" && e.payload?.profileId === profile.id
        ).length;

        const profileShares = loadedEvents.filter(
          (e) => e.eventName === "profile_share" && e.payload?.profileId === profile.id
        ).length;

        const imageViews = loadedEvents.filter(
          (e) => e.eventName === "profile_image_view" && e.payload?.profileId === profile.id
        ).length;

        // 🔹 Contar fontes de tráfego (referrer / source)
        const sourceCounts: Record<string, number> = loadedEvents
          .filter((e) => e.payload?.profileId === profile.id && e.payload?.source)
          .reduce((acc: Record<string, number>, e) => {
            const src = e.payload!.source!;
            acc[src] = (acc[src] || 0) + 1;
            return acc;
          }, {});

        const topSource = Object.entries(sourceCounts)
          .sort((a, b) => b[1] - a[1])[0]?.[0] ?? "direct";

        return {
          id: profile.id,
          name: profile.name,
          views,
          whatsappClicks,
          profileShares,
          imageViews,
          topSource,
        };
      });

      setStats(data);
    };

    loadData();
      const interval = setInterval(() => {
    loadData();
    }, 5000); // Atualiza a cada 5s
    return () => clearInterval(interval);




  }, []);

      // Filtrar stats com base nos filtros selecionados
  const filteredStats = stats.filter((item) => {
  const matchProfile = filterProfile === "all" || item.id === filterProfile;
  const matchSource = filterSource === "all" || item.topSource === filterSource;
  
  // Se quiser filtrar por tipo de evento, podemos aplicar no loadedEvents se necessário
    return matchProfile && matchSource;
  });

  return (
    
    <S.Page>
      <S.Actions>
      <button onClick={handleResetAnalytics} className="reset-button">
      Resetar Analytics
      </button>
    </S.Actions>

      <S.Title>Dashboard de Performance</S.Title>

      <S.Filters>
        <select value={filterProfile} onChange={(e) => setFilterProfile(e.target.value)}>
          <option value="all">Todos os Perfis</option>
          {ads.map((ad) => (
            <option key={ad.id} value={ad.id}>{ad.name}</option>
          ))}
        </select>

        <select value={filterSource} onChange={(e) => setFilterSource(e.target.value)}>
          <option value="all">Todas as Fontes</option>
          <option value="direct">Direct</option>
          <option value="instagram">Instagram</option>
          <option value="google">Google</option>
          <option value="facebook">Facebook</option>
          <option value="other">Other</option>
        </select>
      </S.Filters>


      {/* TABELA DE DADOS */}
      <S.Table>
        <thead>
          <tr>
            <th>Perfil</th>
            <th>Views</th>
            <th>WhatsApp</th>
            <th>Shares</th>
            <th>Imagem</th>
            <th>Origem</th>
          </tr>
        </thead>

        <tbody>
          {filteredStats.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.views}</td>
              <td>{item.whatsappClicks}</td>
              <td>{item.profileShares}</td>
              <td>{item.imageViews}</td>
              <td>{item.topSource}</td>
            </tr>
          ))}
        </tbody>

      </S.Table>

      {/* CARDS DE RESUMO */}
      <S.CardsGrid>

      <StatsCard 
      title="Total de Perfis" 
      value={filteredStats.length} 
      />
      <StatsCard
        title="Total de Views"
        value={filteredStats.reduce((acc, item) => acc + item.views, 0)}
      />
      <StatsCard
        title="Total de Cliques WhatsApp"
        value={filteredStats.reduce((acc, item) => acc + item.whatsappClicks, 0)}
      />
      <StatsCard
        title="Total de Shares"
        value={filteredStats.reduce((acc, item) => acc + item.profileShares, 0)}
      />
      <StatsCard
        title="Total de Image Views"
        value={filteredStats.reduce((acc, item) => acc + item.imageViews, 0)}
      />

      </S.CardsGrid>
    </S.Page>
  );
}
