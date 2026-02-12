import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Ad } from "./AdsData";
import { ads } from "./AdsData";

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

  // 🔑 embaralha APENAS uma vez (primeiro render / F5)
  useEffect(() => {
    const shuffled = [...ads].sort(() => Math.random() - 0.5);
    setShuffledAds(shuffled);
  }, []);

  // 🔽 carregar mais anúncios
  const loadMore = () => {
    setVisibleCount(prev => prev + ADS_PER_PAGE);
  };

  // 🔄 caso queira resetar manualmente (opcional / futuro)
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
