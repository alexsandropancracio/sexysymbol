import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads";

const seoConfig: Record<
  string,
  { title: string; description: string; h1: string; text: string }
> = {
  "acompanhantes-luxo-salvador": {
    title: "Acompanhantes de Luxo em Salvador | SexySymbol",
    description:
      "Encontre acompanhantes de luxo em Salvador com discrição, elegância e alto padrão.",
    h1: "Acompanhantes de Luxo em Salvador",
    text:
      "Perfis verificados com atendimento exclusivo nos principais bairros de Salvador como Pituba, Barra e Caminho das Árvores."
  },

  "acompanhantes-luxo-pituba": {
    title: "Acompanhantes de Luxo na Pituba | SexySymbol",
    description:
      "Acompanhantes de luxo na Pituba com atendimento exclusivo e perfis verificados.",
    h1: "Acompanhantes de Luxo na Pituba",
    text:
      "Descubra acompanhantes de luxo na Pituba com discrição e alto padrão."
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
        <link rel="canonical" href={`https://sexysymbol.com.br/${slug}`} />
      </Helmet>

      <Highlights />

      <Ads adsRef={adsRef} />

      {/* 🔎 Bloco SEO discreto */}
      <section
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "0 20px",
          fontSize: "14px",
          color: "#666",
          lineHeight: "1.6"
        }}
      >
        <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>
          {seo.h1}
        </h1>
        <p>{seo.text}</p>
      </section>
    </>
  );
}