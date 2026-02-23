import { useRef } from "react";
import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads";
import { Helmet } from "react-helmet-async";

export function Home({ nameFilter }: { nameFilter?: string }) {
  // 🔹 Cria a referência localmente
  const adsRef = useRef<HTMLElement | null>(null);

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