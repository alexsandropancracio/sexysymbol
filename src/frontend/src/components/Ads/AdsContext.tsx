import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Ad } from "./AdsData";
import { supabase } from "@/lib/supabase";

const ADS_PER_PAGE = 6;

interface AdsContextType {
  shuffledAds: Ad[];
  visibleCount: number;
  loadMore: () => void;
  resetVisibleCount: () => void;
}

interface AdsProviderProps {
  children: ReactNode;
}

const AdsContext = createContext<AdsContextType | undefined>(undefined);

export function AdsProvider({ children }: AdsProviderProps) {

  const [shuffledAds, setShuffledAds] = useState<Ad[]>([]);
  const [visibleCount, setVisibleCount] = useState(ADS_PER_PAGE);

  useEffect(() => {

    async function fetchAds() {

      const { data, error } = await supabase
        .from("ads")
        .select(`
          *,
          ad_media(
            id,
            url,
            type,
            is_cover,
            order_index
          )
        `);

      if (error) {
        console.error(error);
        return;
      }

      const mappedAds: Ad[] = (data || []).map((ad: any) => {

        const media = ad.ad_media || [];

        return {

          ...ad,

          // ✅ agora media existe
          media: media,

          // ✅ somente imagens que NÃO são capa
          images: media
            .filter((m: any) =>
              m.type === "image" &&
              m.is_cover === false
            )
            .sort((a: any, b: any) =>
              (a.order_index || 0) - (b.order_index || 0)
            )
            .map((m: any) => m.url)

        };

      });

      setShuffledAds(
        mappedAds.sort(() => Math.random() - 0.5)
      );

    }

    fetchAds();

  }, []);

  const loadMore = () => {
    setVisibleCount(prev => prev + ADS_PER_PAGE);
  };

  const resetVisibleCount = () => {
    setVisibleCount(ADS_PER_PAGE);
  };

  return (

    <AdsContext.Provider
      value={{
        shuffledAds,
        visibleCount,
        loadMore,
        resetVisibleCount
      }}
    >

      {children}

    </AdsContext.Provider>

  );

}

export function useAds() {

  const context = useContext(AdsContext);

  if (!context) {
    throw new Error("useAds deve ser usado dentro de AdsProvider");
  }

  return context;

}