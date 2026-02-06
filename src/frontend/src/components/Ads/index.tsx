import { useState, useRef } from "react";
import { Section, Grid, SectionHeader, Title, Pagination } from "./styles";
import { AdsCard } from "./AdsCard";
import { Filters } from "./Filters";

// ====================
// IMAGENS
// ====================
import thalita1 from "@/assets/midia/thalita/img1.jpg";
import thalita2 from "@/assets/midia/thalita/img2.jpg";
import thalita3 from "@/assets/midia/thalita/img3.jpg";
import thalita4 from "@/assets/midia/thalita/img4.jpg";

import rebeca1 from "@/assets/midia/rebeca-brito/img1.jpg";
import rebeca2 from "@/assets/midia/rebeca-brito/img2.jpg";
import rebeca3 from "@/assets/midia/rebeca-brito/img3.jpg";
import rebeca4 from "@/assets/midia/rebeca-brito/img4.jpg";

import allana1 from "@/assets/midia/allana/img1.jpg";
import allana2 from "@/assets/midia/allana/img2.jpg";
import allana3 from "@/assets/midia/allana/img3.jpg";
import allana4 from "@/assets/midia/allana/img4.jpg";

import lorena1 from "@/assets/midia/lorena/img1.jpg";
import lorena2 from "@/assets/midia/lorena/img2.jpg";
import lorena3 from "@/assets/midia/lorena/img3.jpg";
import lorena4 from "@/assets/midia/lorena/img4.jpg";

import melissa1 from "@/assets/midia/melissa/img1.jpg";
import melissa2 from "@/assets/midia/melissa/img2.jpg";
import melissa3 from "@/assets/midia/melissa/img3.jpg";
import melissa4 from "@/assets/midia/melissa/img4.jpg";

import mirela1 from "@/assets/midia/mirela/img1.jpg";
import mirela2 from "@/assets/midia/mirela/img2.jpg";
import mirela3 from "@/assets/midia/mirela/img3.jpg";
import mirela4 from "@/assets/midia/mirela/img4.jpg";

import monaliza1 from "@/assets/midia/monaliza-diniz/img1.jpg";
import monaliza2 from "@/assets/midia/monaliza-diniz/img2.jpg";
import monaliza3 from "@/assets/midia/monaliza-diniz/img3.jpg";
import monaliza4 from "@/assets/midia/monaliza-diniz/img4.jpg";

import pietra1 from "@/assets/midia/pietra-reesende/img1.jpg";
import pietra2 from "@/assets/midia/pietra-reesende/img2.jpg";
import pietra3 from "@/assets/midia/pietra-reesende/img3.jpg";
import pietra4 from "@/assets/midia/pietra-reesende/img4.jpg";

import tiffany1 from "@/assets/midia/tiffany/img1.jpg";
import tiffany2 from "@/assets/midia/tiffany/img2.jpg";
import tiffany3 from "@/assets/midia/tiffany/img3.jpg";
import tiffany4 from "@/assets/midia/tiffany/img4.jpg";

import mariana1 from "@/assets/midia/mariana-biazzi/img1.jpg";
import mariana2 from "@/assets/midia/mariana-biazzi/img2.jpg";
import mariana3 from "@/assets/midia/mariana-biazzi/img3.jpg";
import mariana4 from "@/assets/midia/mariana-biazzi/img4.jpg";

import camila1 from "@/assets/midia/camila-martini/img1.jpg";
import camila2 from "@/assets/midia/camila-martini/img2.jpg";
import camila3 from "@/assets/midia/camila-martini/img3.jpg";
import camila4 from "@/assets/midia/camila-martini/img4.jpg";

import isadora1 from "@/assets/midia/isadora-sampaio/img1.jpg";
import isadora2 from "@/assets/midia/isadora-sampaio/img2.jpg";
import isadora3 from "@/assets/midia/isadora-sampaio/img3.jpg";
import isadora4 from "@/assets/midia/isadora-sampaio/img4.jpg";

// ====================
// CONFIG
// ====================
const ADS_PER_PAGE = 6;

// ====================
// DATA
// ====================
const ads = [
  {
    name: "Thalita Soares",
    age: 23,
    location: "Salvador",
    bio: "Acompanhante elegante, divertida e atenciosa.",
    rating: 4.5,
    prices: [
      { label: "R$ 650", value: "(1 Hora)" },
      { label: "R$ 1.200", value: "(2 Hora)" },
    ],
    images: [thalita1, thalita2, thalita3, thalita4],
  },
    {
    name: "Lorena Quintino",
    age: 24,
    location: "Salvador",
    bio: "Charmosa e elegante.",
    rating: 4.6,
    prices: [
      { label: "R$ 650", value: "(1 Hora)" },
      { label: "R$ 1.250", value: "(2 Hora)" },
    ],
    images: [lorena1, lorena2, lorena3, lorena4],
  },
    {
    name: "Mirela Santos",
    age: 23,
    location: "Feira de Santana",
    bio: "Encantadora e atenciosa.",
    rating: 4.4,
    prices: [
      { label: "R$ 600", value: "(1 Hora)" },
      { label: "R$ 1.150", value: "(2 Hora)" },
    ],
    images: [mirela1, mirela2, mirela3, mirela4],
  },
  {
    name: "Rebeca Brito",
    age: 25,
    location: "Lauro de Freitas",
    bio: "Sofisticada, encantadora e discreta.",
    rating: 4.8,
    prices: [
      { label: "R$ 700", value: "(1 Hora)" },
      { label: "R$ 1.300", value: "(2 Hora)" },
    ],
    images: [rebeca1, rebeca2, rebeca3, rebeca4],
  },
  {
    name: "Allana Lemos",
    age: 22,
    location: "Feira de Santana",
    bio: "Jovem, charmosa e simpática.",
    rating: 4.3,
    prices: [
      { label: "R$ 600", value: "(1 Hora)" },
      { label: "R$ 1.100", value: "(2 Hora)" },
    ],
    images: [allana1, allana2, allana3, allana4],
  },
  {
    name: "Melissa Santana",
    age: 25,
    location: "Lauro de Freitas",
    bio: "Carismática e sofisticada.",
    rating: 4.7,
    prices: [
      { label: "R$ 700", value: "(1 Hora)" },
      { label: "R$ 1.300", value: "(2 Hora)" },
    ],
    images: [melissa1, melissa2, melissa3, melissa4],
  },
  {
    name: "Monaliza Diniz",
    age: 26,
    location: "Salvador",
    bio: "Elegante e divertida.",
    rating: 4.5,
    prices: [
      { label: "R$ 650", value: "(1 Hora)" },
      { label: "R$ 1.250", value: "(2 Hora)" },
    ],
    images: [monaliza1, monaliza2, monaliza3, monaliza4],
  },
  {
    name: "Pietra Reesende",
    age: 24,
    location: "Lauro de Freitas",
    bio: "Sofisticada e charmosa.",
    rating: 4.6,
    prices: [
      { label: "R$ 650", value: "(1 Hora)" },
      { label: "R$ 1.250", value: "(2 Hora)" },
    ],
    images: [pietra1, pietra2, pietra3, pietra4],
  },
  {
    name: "Tiffany Bragança",
    age: 23,
    location: "Feira de Santana",
    bio: "Jovem e cativante.",
    rating: 4.5,
    prices: [
      { label: "R$ 600", value: "(1 Hora)" },
      { label: "R$ 1.200", value: "(2 Hora)" },
    ],
    images: [tiffany1, tiffany2, tiffany3, tiffany4],
  },
  {
    name: "Mariana Biazzi",
    age: 24,
    location: "Salvador",
    bio: "Delicada, envolvente e muito carinhosa.",
    rating: 4.6,
    prices: [
      { label: "R$ 650", value: "(1 Hora)" },
      { label: "R$ 1.250", value: "(2 Hora)" },
    ],
    images: [mariana1, mariana2, mariana3, mariana4],
  },
  {
    name: "Camila Martini",
    age: 26,
    location: "Lauro de Freitas",
    bio: "Experiência única, discreta e sofisticada.",
    rating: 4.7,
    prices: [
      { label: "R$ 700", value: "(1 Hora)" },
      { label: "R$ 1.300", value: "(2 Hora)" },
    ],
    images: [camila1, camila2, camila3, camila4],
  },
  {
    name: "Isadora Sampaio",
    age: 22,
    location: "Feira de Santana",
    bio: "Jovem, charmosa e cheia de energia.",
    rating: 4.4,
    prices: [
      { label: "R$ 600", value: "(1 Hora)" },
      { label: "R$ 1.150", value: "(2 Hora)" },
    ],
    images: [isadora1, isadora2, isadora3, isadora4],
  },
];

// ====================
// COMPONENT
// ====================
export function Ads() {
  const [page, setPage] = useState(0);
  const adsRef = useRef<HTMLElement | null>(null);

  const totalPages = Math.ceil(ads.length / ADS_PER_PAGE);

  const startIndex = page * ADS_PER_PAGE;
  const visibleAds = ads.slice(startIndex, startIndex + ADS_PER_PAGE);

  const handlePageChange = (index: number) => {
  setPage(index);

  setTimeout(() => {
    adsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
};

  return (
    <Section id="ads" ref={adsRef}>
      <SectionHeader>
        <Title>Anúncios</Title>
        <Filters />
      </SectionHeader>

      <Grid>
        {visibleAds.map((ad, index) => (
          <AdsCard
            key={`${ad.name}-${index}`}
            {...ad}
          />
        ))}
      </Grid>

      <Pagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            className={page === index ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </Pagination>
    </Section>
  );
}
