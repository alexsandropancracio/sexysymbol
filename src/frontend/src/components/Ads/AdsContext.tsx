import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Ad } from "./AdsData";
import { ads } from "./AdsData";

// ====================
// TYPES
// ====================
interface AdsContextType {
  shuffledAds: Ad[];
  refreshShuffle: () => void; // opcional, caso queira embaralhar manualmente
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

  // 🔑 embaralha apenas uma vez, no primeiro render
  useEffect(() => {
    const shuffled = [...ads].sort(() => Math.random() - 0.5);
    setShuffledAds(shuffled);
  }, []);

  // função para reembaralhar manualmente (opcional)
  const refreshShuffle = () => {
    setShuffledAds([...ads].sort(() => Math.random() - 0.5));
  };

  return (
    <AdsContext.Provider value={{ shuffledAds, refreshShuffle }}>
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
