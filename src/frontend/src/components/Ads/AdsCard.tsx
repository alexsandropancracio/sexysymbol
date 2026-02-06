import { useState } from "react";
import {
  Card,
  ImageWrapper,
  Image,
  Content,
  Name,
  Info,
  Button,
  Location,
  Bio,
  PriceSelect,
} from "./styles";
import newPageIcon from "@/assets/midia/new-page.png";
import telefoneIcon from "@/assets/midia/telefone.png";
import { Link } from "react-router-dom";

interface PriceItem {
  label: string;
  value: string;
}

interface AdsCardProps {
  name: string;
  age: number;
  images: string[];
  location?: string;
  bio: string;
  prices: PriceItem[];
  rating: number; // 0 a 5
}

export function AdsCard({
  name,
  age,
  images,
  location,
  bio,
  prices,
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

        {/* Botões de navegação */}
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


        
      <PriceSelect>
        {prices.map((p, index) => (
          <option key={index} value={p.value}>
            {p.label} {p.value}
          </option>
        ))}
      </PriceSelect>
        
        <Button>
          <img src={telefoneIcon} alt="Telefone" />
          Contato
        </Button>

      </Content>
    </Card>
  );
}
