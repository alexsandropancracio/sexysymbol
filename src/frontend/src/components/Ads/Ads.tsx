import { useState, useEffect } from "react";
import { Section, Grid, SectionHeader, Title, ButtonLoadMore } from "./styles";

import { Filters } from "./Filters";
import type { FiltersState } from "./Filters";
import { AdsCard } from "./AdsCard";

import { ads } from "./AdsData"; // caminho relativo para o seu arquivo AdsData
import type { Ad } from "./AdsData";

// ====================
// CONFIG
// ====================
const ADS_PER_PAGE = 6;

interface AdsProps {
  nameFilter?: string;
  adsRef: React.RefObject<HTMLElement | null>;
}

export function Ads({ nameFilter, adsRef }: AdsProps) {
  const [filters, setFilters] = useState<FiltersState>({
    formasPagamento: [],
    atendimento: [],
    lugar: [],
    etnia: [],
    locations: [],
    idadeMin: undefined,
    idadeMax: undefined,
  });

  const [visibleCount, setVisibleCount] = useState(ADS_PER_PAGE);
  const [shuffledAds, setShuffledAds] = useState<Ad[]>([]);

  // 🔄 Sempre que filtros ou nome mudam, filtramos e embaralhamos
  useEffect(() => {
    const filtered = ads.filter(ad => {
      if (nameFilter && !ad.name.toLowerCase().includes(nameFilter.toLowerCase())) return false;
      if (filters.locations.length && !filters.locations.includes(ad.locations)) return false;
      if (filters.etnia.length && !filters.etnia.includes(ad.etnia)) return false;
      if (filters.atendimento.length && !ad.atendimento?.some(a => filters.atendimento.includes(a))) return false;
      if (filters.lugar.length && !ad.lugar?.some(l => filters.lugar.includes(l))) return false;
      if (filters.formasPagamento.length && !ad.formasPagamento?.some(p => filters.formasPagamento.includes(p))) return false;
      if (filters.idadeMin && ad.age < filters.idadeMin) return false;
      if (filters.idadeMax && ad.age > filters.idadeMax) return false;
      return true;
    });

    // 🔀 Embaralhar
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setShuffledAds(shuffled);

    // Resetar quantidade visível
    setVisibleCount(ADS_PER_PAGE);

  }, [filters, nameFilter]); // ❌ remove adsRef daqui

  // Função para carregar mais
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ADS_PER_PAGE, shuffledAds.length));
  };

  return (
    <Section id="ads" ref={adsRef}>
      <SectionHeader>
        <Title>Anúncios</Title>
        <Filters filters={filters} setFilters={setFilters} />
      </SectionHeader>

      <Grid>
        {shuffledAds.slice(0, visibleCount).map(ad => (
          <AdsCard key={ad.id} ad={ad} />
        ))}
      </Grid>

      {visibleCount < shuffledAds.length && (
        <ButtonLoadMore onClick={loadMore}>Ver mais</ButtonLoadMore>
      )}
    </Section>
  );
}
