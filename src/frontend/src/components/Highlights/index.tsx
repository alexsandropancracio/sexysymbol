import { useEffect, useState } from "react";
import { highlights } from "./mock";
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


export function Highlights() {
  // 🔄 Índice inicial aleatório
  const [index, setIndex] = useState(() => Math.floor(Math.random() * highlights.length));

  function next() {
    setIndex((prev) => (prev + 1) % highlights.length);
  }

  function prev() {
    setIndex((prev) =>
      prev === 0 ? highlights.length - 1 : prev - 1
    );
  }

  const navigate = useNavigate();

  // 🔄 Auto-play
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section>
      <Title>DESTAQUES</Title>

      <Card>
        <ArrowLeft onClick={prev}>‹</ArrowLeft>
        <ArrowRight onClick={next}>›</ArrowRight>
        
        
        {highlights.map((highlight, i) => (
          <picture key={highlight.imageDesktop}>
            <source
              media="(max-width: 768px)"
              srcSet={highlight.imageMobile}
            />
            <Image
              src={highlight.imageDesktop}
              alt={highlight.name}
              $active={i === index}
            />
          </picture>
        ))}


        {highlights.map((highlight, i) => (
          <Info key={highlight.id} $active={i === index}>
            <Name>{highlight.name}</Name>
            <Meta>
              {highlight.age} anos • {highlight.location}
            </Meta>

            <Button onClick={() => navigate(`/perfil/${highlight.id}`)}>
              Ver perfil
            </Button>

          </Info>
        ))}
      </Card>
    </Section>
  );
}
