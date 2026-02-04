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

export function Highlights() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((prev) => (prev + 1) % highlights.length);
  }

  function prev() {
    setIndex((prev) =>
      prev === 0 ? highlights.length - 1 : prev - 1
    );
  }

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
          <Image
            key={highlight.image}
            src={highlight.image}
            alt={highlight.name}
            $active={i === index}
          />
        ))}

        {highlights.map((highlight, i) => (
        <Info key={highlight.id} $active={i === index}>
            <Name>{highlight.name}</Name>
            <Meta>
            {highlight.age} anos • {highlight.location}
            </Meta>

            <Button>Ver perfil</Button>
        </Info>
        ))}
      </Card>
    </Section>
  );
}

