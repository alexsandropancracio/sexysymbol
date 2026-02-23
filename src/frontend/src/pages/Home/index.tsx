import { useRef, useEffect } from "react";
import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads";
import { Helmet } from "react-helmet-async";

export function Home({ nameFilter }: { nameFilter?: string }) {
  const adsRef = useRef<HTMLElement | null>(null);

  // 🔥 Restaurar scroll quando a Home montar
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScrollY");

    if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
      sessionStorage.removeItem("homeScrollY");
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>sexysymbol | Acompanhantes de Luxo</title>
        <meta
          name="description"
          content="Plataforma de perfis verificados. Encontre acompanhantes com segurança e discrição."
        />
      </Helmet>

      <Highlights />

      <Ads nameFilter={nameFilter} adsRef={adsRef} />
    </>
  );
}