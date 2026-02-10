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
// TYPES
// ====================
export interface Ad {
  id: string;
  name: string;
  age: number;
  locations: string;
  bio: string;
  rating: number;
  images: string[];
  etnia: string;
  atendimento: string[];
  lugar: string[];
  formasPagamento: string[];
  altura: number;      // altura em cm
  peso: number;        // peso em kg
  verified?: boolean;
  reviewsCount?: number;
}

// ====================
// DATA
// ====================
export const ads: Ad[] = [
  {
    id: "allana-lemos",
    name: "Allana Lemos",
    age: 22,
    locations: "Feira de Santana",
    bio: "Jovem, charmosa e simpática.",
    rating: 4.3,
    images: [allana3, allana1, allana2, allana4],
    etnia: "Brancas",
    atendimento: ["Homens", "Casais"],
    lugar: ["Com local"],
    formasPagamento: ["Pix", "Dinheiro"],
    altura: 168,
    peso: 55,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "lorena-quintino",
    name: "Lorena Quintino",
    age: 24,
    locations: "Salvador",
    bio: "Charmosa e elegante.",
    rating: 4.6,
    images: [lorena1, lorena2, lorena3, lorena4],
    etnia: "Brancas",
    atendimento: ["Homens"],
    lugar: ["Com local", "Jantar Romântico"],
    formasPagamento: ["Cartão de Crédito", "Pix"],
    altura: 170,
    peso: 58,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "mirela-santos",
    name: "Mirela Santos",
    age: 23,
    locations: "Feira de Santana",
    bio: "Encantadora e atenciosa.",
    rating: 4.4,
    images: [mirela1, mirela2, mirela3, mirela4],
    etnia: "Brancas",
    atendimento: ["Homens", "Mulheres"],
    lugar: ["Sem local"],
    formasPagamento: ["Pix", "Dinheiro"],
    altura: 165,
    peso: 52,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "rebeca-brito",
    name: "Rebeca Brito",
    age: 25,
    locations: "Lauro de Freitas",
    bio: "Sofisticada, encantadora e discreta.",
    rating: 4.8,
    images: [rebeca1, rebeca2, rebeca3, rebeca4],
    etnia: "Negras",
    atendimento: ["Homens", "Casais"],
    lugar: ["Com local", "Viagens"],
    formasPagamento: ["Cartão de Crédito", "Cartão de Débito", "Pix"],
    altura: 172,
    peso: 60,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "monaliza-diniz",
    name: "Monaliza Diniz",
    age: 26,
    locations: "Salvador",
    bio: "Elegante e divertida.",
    rating: 4.5,
    images: [monaliza1, monaliza2, monaliza3, monaliza4],
    etnia: "Latinas",
    atendimento: ["Homens"],
    lugar: ["Com local", "Festas"],
    formasPagamento: ["Pix", "Dinheiro"],
    altura: 167,
    peso: 56,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "melissa-santana",
    name: "Melissa Santana",
    age: 25,
    locations: "Lauro de Freitas",
    bio: "Carismática e sofisticada.",
    rating: 4.7,
    images: [melissa1, melissa2, melissa3, melissa4],
    etnia: "Brancas",
    atendimento: ["Homens", "Mulheres"],
    lugar: ["Com local"],
    formasPagamento: ["Cartão de Crédito", "Pix"],
    altura: 169,
    peso: 57,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "pietra-resende",
    name: "Pietra Resende",
    age: 24,
    locations: "Lauro de Freitas",
    bio: "Sofisticada e charmosa.",
    rating: 4.6,
    images: [pietra1, pietra2, pietra3, pietra4],
    etnia: "Negras",
    atendimento: ["Homens"],
    lugar: ["Sem local"],
    formasPagamento: ["Dinheiro"],
    altura: 168,
    peso: 55,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "mariana-biazzi",
    name: "Mariana Biazzi",
    age: 26,
    locations: "Lauro de Freitas",
    bio: "Experiência única, discreta e sofisticada.",
    rating: 4.7,
    images: [mariana1, mariana2, mariana3, mariana4],
    etnia: "Branca",
    atendimento: ["Homens", "Casais"],
    lugar: ["Com local", "Viagens"],
    formasPagamento: ["Cartão de Crédito", "Pix"],
    altura: 170,
    peso: 58,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "isadora-sampaio",
    name: "Isadora Sampaio",
    age: 22,
    locations: "Feira de Santana",
    bio: "Jovem, charmosa e cheia de energia.",
    rating: 4.4,
    images: [isadora1, isadora2, isadora3, isadora4],
    etnia: "Negras",
    atendimento: ["Homens", "Mulheres"],
    lugar: ["Sem local"],
    formasPagamento: ["Pix"],
    altura: 165,
    peso: 53,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "tiffany-bragança",
    name: "Tiffany Bragança",
    age: 23,
    locations: "Feira de Santana",
    bio: "Jovem e cativante.",
    rating: 4.5,
    images: [tiffany1, tiffany2, tiffany3, tiffany4],
    etnia: "Latinas",
    atendimento: ["Homens"],
    lugar: ["Com local", "Festas"],
    formasPagamento: ["Pix", "Dinheiro"],
    altura: 166,
    peso: 54,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "thalita-soares",
    name: "Thalita Soares",
    age: 23,
    locations: "Salvador",
    bio: "Acompanhante elegante, divertida e atenciosa.",
    rating: 4.5,
    images: [thalita1, thalita2, thalita3, thalita4],
    etnia: "Latinas",
    atendimento: ["Homens", "Casais"],
    lugar: ["Com local"],
    formasPagamento: ["Cartão de Crédito", "Pix"],
    altura: 169,
    peso: 56,
    verified: true,
    reviewsCount: 12,
  },

  {
    id: "camila-martini",
    name: "Camila Martini",
    age: 24,
    locations: "Salvador",
    bio: "Delicada, envolvente e muito carinhosa.",
    rating: 4.6,
    images: [camila1, camila2, camila3, camila4],
    etnia: "Latinas",
    atendimento: ["Homens", "Mulheres"],
    lugar: ["Jantar Romântico"],
    formasPagamento: ["Pix", "Cartão de Débito"],
    altura: 168,
    peso: 55,
    verified: true,
    reviewsCount: 12,
  },
];

