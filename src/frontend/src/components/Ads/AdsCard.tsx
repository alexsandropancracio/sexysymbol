import { useState } from "react";
import type { Ad } from "./AdsData";
import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Name,
  Info,
  Location,
  Bio,
  ArrowButton,
} from "./styles";
import * as S from "./styles";
import { MessageCircle } from "lucide-react";

import newPageIcon from "@/assets/midia/new-page.png";

import { Link } from "react-router-dom";

/* ====================
   TYPES
==================== */
interface AdsCardProps {
  ad: Ad;
}

/* ====================
   COMPONENT
==================== */
export function AdsCard({ ad }: AdsCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % Math.min(ad.images.length, 4));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + Math.min(ad.images.length, 4)) % Math.min(ad.images.length, 4));
  };

  return (
    <Card>
      <ImageWrapper>
        <Image src={ad.images.slice(0, 4)[currentImage]} alt={ad.name} />

        {/* Botão esquerdo */}
        <ArrowButton left onClick={prevImage}>
          ‹
        </ArrowButton>

        {/* Botão direito */}
        <ArrowButton onClick={nextImage}>
          ›
        </ArrowButton>
</ImageWrapper>
      <Content>
        <Link
          to={`/perfil/${ad.name.toLowerCase().replace(/\s+/g, "-")}`}
          style={{ textDecoration: "none" }}
        >
          <Name>
            {ad.name}
            <img src={newPageIcon} alt="Abrir perfil" />
          </Name>
        </Link>

        <Info>Idade: {ad.age} anos</Info>
        {ad.locations && <Location>Local: {ad.locations}</Location>}

        <Bio>{ad.bio}</Bio>

              {/* CTA */}
              <S.CTAButton
                onClick={() =>
                  window.open(
                    "https://wa.me/5511956197970",
                    "_blank"
                  )
                }
              >
                <MessageCircle size={18} />
                AGENDAR
              </S.CTAButton>
      </Content>
    </Card>
  );
}
