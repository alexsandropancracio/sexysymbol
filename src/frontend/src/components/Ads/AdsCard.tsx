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
  Button
} from "./styles";

import newPageIcon from "@/assets/midia/new-page.png";
import telefoneIcon from "@/assets/midia/telefone.png";
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
    setCurrentImage((prev) => (prev + 1) % ad.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + ad.images.length) % ad.images.length);
  };

  return (
    <Card>
      <ImageWrapper>
        <Image src={ad.images[currentImage]} alt={ad.name} />

        <button onClick={prevImage}>‹</button>
        <button onClick={nextImage}>›</button>
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

        <Button>
          <img src={telefoneIcon} alt="Telefone" />
          Contato
        </Button>
      </Content>
    </Card>
  );
}
