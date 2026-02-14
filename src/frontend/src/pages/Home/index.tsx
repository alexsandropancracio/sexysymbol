import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads";
import { Helmet } from "react-helmet-async";

interface HomeProps {
  nameFilter?: string;
  adsRef: React.RefObject<HTMLElement | null>;
}

export function Home({ nameFilter, adsRef }: HomeProps) {
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

