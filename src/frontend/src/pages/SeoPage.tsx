import { useRef } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Ads } from "@/components/Ads/Ads";

const seoContent: Record<
  string,
  { title: string; description: string; h1: string; text: string }
> = {
  "acompanhantes-luxo-salvador": {
    title: "Acompanhantes de Luxo em Salvador | Presença VIP",
    description:
      "Encontre acompanhantes de luxo em Salvador com discrição e alto padrão.",
    h1: "Acompanhantes de Luxo em Salvador",
    text:
      "Descubra acompanhantes de luxo em Salvador com perfis verificados e atendimento exclusivo."
  },

  "acompanhantes-luxo-pituba": {
    title: "Acompanhantes de Luxo na Pituba",
    description:
      "Acompanhantes de luxo na Pituba com atendimento discreto e alto padrão.",
    h1: "Acompanhantes de Luxo na Pituba",
    text:
      "Conheça acompanhantes de luxo na Pituba, um dos bairros mais nobres de Salvador."
  }
};

export function SeoPage() {
  const { slug } = useParams();
  const adsRef = useRef<HTMLElement | null>(null);

  const content = slug ? seoContent[slug] : null;

  if (!content) return <h1>Página não encontrada</h1>;

  return (
    <>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={`https://sexysymbol.com.br/${slug}`} />
      </Helmet>

      <section>
        <h1>{content.h1}</h1>
        <p>{content.text}</p>
      </section>

      <Ads nameFilter={undefined} adsRef={adsRef} />
    </>
  );
}