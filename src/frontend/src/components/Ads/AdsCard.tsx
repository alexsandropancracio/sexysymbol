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

  // ✅ DECLARE PRIMEIRO
  const galleryImages =
    ad.media
      ?.filter((m) => !m.is_cover)
      .map((m) => m.url) || [];

  // ✅ DEPOIS use
  const nextImage = () => {
    if (galleryImages.length === 0) return;

    setCurrentImage(
      (prev) =>
        (prev + 1) %
        Math.min(galleryImages.length, 4)
    );
  };

  const prevImage = () => {
    if (galleryImages.length === 0) return;

    setCurrentImage(
      (prev) =>
        (prev - 1 + Math.min(galleryImages.length, 4)) %
        Math.min(galleryImages.length, 4)
    );
  };
  console.log("MEDIA:", ad.media);

  return (
    <Card>
      <ImageWrapper>

        {galleryImages.length > 0 && (
          <Image
            src={galleryImages.slice(0, 4)[currentImage]}
            alt={ad.name}
          />
        )}

        <ArrowButton left onClick={prevImage}>
          ‹
        </ArrowButton>

        <ArrowButton onClick={nextImage}>
          ›
        </ArrowButton>

      </ImageWrapper>
      <Content>
        <Link
          to={`/perfil/${ad.id}`}
          onClick={() => {
            sessionStorage.setItem("homeScrollY", String(window.scrollY));
          }}
        >
          <Name>
            {ad.name}
            <img src={newPageIcon} alt="Abrir perfil" />
          </Name>
        </Link>

        <Info>Idade: {ad.age} anos</Info>
        {ad.location && <Location>Estado: {ad.location}</Location>}

              {/* CTA */}
              <S.CTAButton
                onClick={() => {
                  if (!ad.contato) return;
                  
                  window.open(
                    `https://wa.me/${ad.contato}`,
                    "_blank"
                  );
                }}
              >
                <MessageCircle size={18} />
                AGENDAR
              </S.CTAButton>
      </Content>
    </Card>
  );
}