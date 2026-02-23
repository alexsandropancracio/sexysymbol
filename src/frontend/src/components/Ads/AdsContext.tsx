import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Ad } from "./AdsData";
import { supabase } from "@/lib/supabase";

// ====================
// CONFIG
// ====================
const ADS_PER_PAGE = 6;

// ====================
// TYPES
// ====================
interface AdsContextType {
  shuffledAds: Ad[];
  visibleCount: number;
  loadMore: () => void;
  resetVisibleCount: () => void;
}

interface AdsProviderProps {
  children: ReactNode;
}

// ====================
// CONTEXTO
// ====================
const AdsContext = createContext<AdsContextType | undefined>(undefined);

// ====================
// PROVIDER
// ====================
export function AdsProvider({ children }: AdsProviderProps) {
  const [shuffledAds, setShuffledAds] = useState<Ad[]>([]);
  const [visibleCount, setVisibleCount] = useState(ADS_PER_PAGE);

  // 🔑 busca os anúncios do Supabase e embaralha
  useEffect(() => {
    async function fetchAds() {
      try {
        const { data, error } = await supabase
          .from("ads")
          .select(`
            *,
            ad_media(url, type)
          `);

        if (error) {
          console.error("Erro ao buscar anúncios:", error);
          setShuffledAds([]);
          return;
        }

        // 🔹 mapear os dados para o formato que AdsCard espera
        const mappedAds: Ad[] = (data || []).map((ad: any) => ({
          ...ad,
          images: ad.ad_media?.filter((m: any) => m.type === "image").map((m: any) => m.url) || [],
        }));

        // 🔹 embaralhar
        setShuffledAds(mappedAds.sort(() => Math.random() - 0.5));
      } catch (err) {
        console.error("Erro inesperado ao buscar anúncios:", err);
      }
    }

    fetchAds();
  }, []);

  // 🔽 carregar mais anúncios
  const loadMore = () => {
    setVisibleCount(prev => prev + ADS_PER_PAGE);
  };

  // 🔄 resetar manualmente (opcional / futuro)
  const resetVisibleCount = () => {
    setVisibleCount(ADS_PER_PAGE);
  };

  return (
    <AdsContext.Provider
      value={{
        shuffledAds,
        visibleCount,
        loadMore,
        resetVisibleCount,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
}

// ====================
// HOOK
// ====================
export function useAds() {
  const context = useContext(AdsContext);
  if (!context) {
    throw new Error("useAds deve ser usado dentro de um AdsProvider");
  }
  return context;
}