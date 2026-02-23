import { useRef } from "react";
import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads"; // 🔹 Confirme que o caminho está correto
import { Helmet } from "react-helmet-async";

// 🔹 Props opcionais para filtrar anúncios
interface HomeProps {
  nameFilter?: string;
}

export function Home({ nameFilter }: HomeProps) {
  // 🔹 Cria a referência para a seção de anúncios
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

      {/* Destaques */}
      <Highlights />

      {/* Seção de anúncios */}
      <Ads nameFilter={nameFilter} adsRef={adsRef} />
    </>
  );
}