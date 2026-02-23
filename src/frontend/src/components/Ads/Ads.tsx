import { useState } from "react";
import { Section, Grid, SectionHeader, Title, ButtonLoadMore } from "./styles";
import { Filters } from "./Filters";
import type { FiltersState } from "./Filters";
import { AdsCard } from "./AdsCard";
import { useAds } from "./AdsContext";

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

  const { shuffledAds, visibleCount, loadMore } = useAds(); // 🔑 lista embaralhada do contexto

  // filtragem baseada na lista embaralhada
const filteredAds = shuffledAds.filter(ad => {
  const adLocation = ad.location || "";
  const adEtnia = ad.etnia || "";

  if (nameFilter && !ad.name.toLowerCase().includes(nameFilter.toLowerCase())) return false;
  if (filters.locations.length && !filters.locations.includes(adLocation)) return false;
  if (filters.etnia.length && !filters.etnia.includes(adEtnia)) return false;
  if (filters.atendimento.length && !ad.atendimento?.some(a => filters.atendimento.includes(a))) return false;
  if (filters.lugar.length && !ad.lugar?.some(l => filters.lugar.includes(l))) return false;
  if (filters.formasPagamento.length && !ad.formasPagamento?.some(p => filters.formasPagamento.includes(p))) return false;
  if (filters.idadeMin && ad.age < filters.idadeMin) return false;
  if (filters.idadeMax && ad.age > filters.idadeMax) return false;
  return true;
});

  return (
    <Section id="ads" ref={adsRef}>
      <SectionHeader>
        <Title>Anúncios</Title>
        <Filters filters={filters} setFilters={setFilters} />
      </SectionHeader>

      <Grid>
        {filteredAds.slice(0, visibleCount).map(ad => (
          <AdsCard key={ad.id} ad={ad} />
        ))}
      </Grid>

      {visibleCount < filteredAds.length && (
        <ButtonLoadMore onClick={loadMore}>Ver mais</ButtonLoadMore>
      )}
    </Section>
  );
}