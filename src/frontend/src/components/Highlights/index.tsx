import { useEffect, useState } from "react";
import {
  Section,
  Title,
  Card,
  Image,
  Info,
  Name,
  Meta,
  Button,
  ArrowLeft,
  ArrowRight,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { getHighlights } from "./AdsService";
import type { Ad } from "@/components/Ads/AdsData";

export function Highlights() {

  // ✅ State com dados reais do Supabase
  const [ads, setAds] = useState<Ad[]>([]);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  // ✅ Carregar highlights do Supabase
  useEffect(() => {

    async function loadHighlights() {

      const data = await getHighlights();

      if (!data || data.length === 0) return;

      setAds(data);

      // índice inicial aleatório
      const randomIndex = Math.floor(Math.random() * data.length);
      setIndex(randomIndex);

    }

    loadHighlights();

  }, []);

  // ✅ Next com proteção
  function next() {

    if (ads.length === 0) return;

    setIndex((prev) => (prev + 1) % ads.length);

  }

  // ✅ Prev com proteção
  function prev() {

    if (ads.length === 0) return;

    setIndex((prev) =>
      prev === 0 ? ads.length - 1 : prev - 1
    );

  }

  // ✅ Auto-play seguro
  useEffect(() => {

    if (ads.length === 0) return;

    const interval = setInterval(next, 5000);

    return () => clearInterval(interval);

  }, [ads]);

  // ✅ Evita renderizar vazio
  if (ads.length === 0) return null;

  return (

    <Section>

      <Title>DESTAQUES</Title>

      <Card>

        <ArrowLeft onClick={prev}>‹</ArrowLeft>
        <ArrowRight onClick={next}>›</ArrowRight>

        {/* IMAGENS */}
        {ads.map((ad, i) => (
          <picture key={ad.id}>
            {/* Mobile - podemos usar a mesma cover ou ajustar conforme necessário */}
            <source
              media="(max-width: 768px)"
              srcSet={ad.images[1]}
            />

            {/* Desktop */}
            <Image
              src={ad.cover} // 🔹 sempre usar a capa garantida
              alt={ad.name}
              $active={i === index} // controla a visibilidade do slide
            />
          </picture>
        ))}

        {/* INFO */}
        {ads.map((ad, i) => (

          <Info key={ad.id} $active={i === index}>

            <Name>{ad.name}</Name>

            <Meta>
              {ad.age} anos • {ad.location}
            </Meta>

            <Button onClick={() => navigate(`/perfil/${ad.id}`)}>
              Ver perfil
            </Button>

          </Info>

        ))}

      </Card>

    </Section>

  );

}

