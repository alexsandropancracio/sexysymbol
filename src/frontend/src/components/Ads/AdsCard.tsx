import { useState } from "react";
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
  name: string;
  age: number;
  images: string[];
  location?: string;
  bio: string;
}

/* ====================
   COMPONENT
==================== */
export function AdsCard({
  name,
  age,
  images,
  location,
  bio,
}: AdsCardProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card>
      <ImageWrapper>
        <Image src={images[currentImage]} alt={name} />

        {/* Navegação das imagens */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            border: "none",
            borderRadius: "50%",
            color: "#fff",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          ‹
        </button>

        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            border: "none",
            borderRadius: "50%",
            color: "#fff",
            width: "50px",
            height: "50px",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
        >
          ›
        </button>
      </ImageWrapper>

      <Content>
        <Link
          to={`/perfil/${name.toLowerCase().replace(/\s+/g, "-")}`}
          style={{ textDecoration: "none" }}
        >
          <Name>
            {name}
            <img src={newPageIcon} alt="Abrir perfil" />
          </Name>
        </Link>

        <Info>Idade: {age} anos</Info>
        {location && <Location>Local: {location}</Location>}

        <Bio>{bio}</Bio>

        <Button>
          <img src={telefoneIcon} alt="Telefone" />
          Contato
        </Button>
      </Content>
    </Card>
  );
}
