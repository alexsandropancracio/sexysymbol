import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads";

const seoConfig: Record<
  string,
  { title: string; description: string }
> = {
  "acompanhantes-luxo-goiania": {
    title: "Acompanhantes de Luxo em Goiânia | SexySymbol",
    description:
      "Encontre acompanhantes de luxo em Goiânia com discrição e alto padrão."
  },

  "acompanhantes-luxo-goias": {
    title: "Acompanhantes de Luxo em Goiás | SexySymbol",
    description:
      "Perfis verificados em Goías com atendimento exclusivo."
  }
};

export function SeoPage() {
  const { slug } = useParams();
  const adsRef = useRef<HTMLElement | null>(null);

  const seo = slug ? seoConfig[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!seo) return null;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={`https://www.sexysymbol.com.br/${slug}`} />
      </Helmet>

      <Highlights />

      <Ads adsRef={adsRef} />
    </>
  );
}