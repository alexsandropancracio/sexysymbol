import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  ArrowLeft,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  BadgeCheck
} from "lucide-react";
import * as S from "./ProfilePage.style";
import { useParams, useNavigate } from "react-router-dom";
import { ads } from "../Ads/AdsData";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


export function ProfilePage() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>(); // 🔑 FIX AQUI

  const profileData = ads.find((item) => item.id === id);

  if (!profileData) {
    return <S.Page>Perfil não encontrado</S.Page>;
  }

  const pageTitle = `${profileData.name} | sexysymbol`;
  const pageDescription = `${profileData.name} é um perfil verificado na SexySymbol. Atendimento com discrição, elegância e segurança. Confira fotos, informações e entre em contato.`;

  const pageUrl = typeof window !== "undefined" 
    ? window.location.href 
    : "";

  const imageUrl = profileData.images[0];// ajuste conforme seu campo

  const [selectedImage, setSelectedImage] = useState(
    Math.floor(Math.random() * profileData.images.length)
  );

  const next = () =>
    setSelectedImage(
      prev => (prev + 1) % profileData.images.length
    );

  const prev = () =>
    setSelectedImage(
      prev =>
        (prev - 1 + profileData.images.length) %
        profileData.images.length
    );

  useEffect(() => {
  // 🔹 Scroll para o topo quando o perfil muda
    window.scrollTo(0, 0);

    // 🔹 Função de teclado para navegar no carrossel
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);

    // 🔹 Cleanup: remove o listener ao desmontar ou trocar de perfil
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [id]); // ⚡️ depende do 'id' para resetar o scroll quando muda de perfil

  const thumbRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    thumbRef.current?.scrollBy({ left: -80, behavior: "smooth" });
  };

  const scrollRight = () => {
    thumbRef.current?.scrollBy({ left: 80, behavior: "smooth" });
  };

const handleShare = async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: pageTitle,
        text: pageDescription,
        url: pageUrl,
      });
    } else {
      await navigator.clipboard.writeText(pageUrl);
      toast.success("Link do perfil copiado!");
    }
  } catch (err) {
    toast.error("Não foi possível compartilhar o perfil");
  }
};


  return (
    
    <S.Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <Helmet>
        {/* Título */}
        <title>{pageTitle}</title>

        {/* SEO básico */}
        <meta name="description" content={pageDescription} />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph (Facebook, WhatsApp, etc.) */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

      {/* NAV */}
      <S.Nav>
        <S.NavContent>
          <S.BackButton onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
            VOLTAR
          </S.BackButton>

          <S.NavAction onClick={handleShare}>
            <Share2 size={18} />
          </S.NavAction>

        </S.NavContent>
      </S.Nav>

      {/* GRID */}
      <S.ProfileGrid>
        {/* LEFT */}
        <S.LeftColumn>
          <S.CarouselWrapper>
            
            <S.ArrowButton left onClick={prev}>
              <ChevronLeft size={16} />
            </S.ArrowButton>

            <S.ArrowButton onClick={next}>
              <ChevronRight size={16} />
            </S.ArrowButton>

            <AnimatePresence initial={false}>
              <motion.img
                key={selectedImage}
                src={profileData.images[selectedImage]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                }}
              />
            </AnimatePresence>

          </S.CarouselWrapper>
            <S.ThumbnailsWrapper>
              <div style={{ position: "relative" }}>
                <S.ThumbnailsArrow left onClick={scrollLeft}>‹</S.ThumbnailsArrow>
                <S.ThumbnailsRow ref={thumbRef}>
                  {profileData.images.map((img, index) => (
                    <S.Thumbnail
                      key={index}
                      active={index === selectedImage}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img src={img} alt="" />
                    </S.Thumbnail>
                  ))}
                </S.ThumbnailsRow>
                <S.ThumbnailsArrow onClick={scrollRight}>›</S.ThumbnailsArrow>
              </div>
            </S.ThumbnailsWrapper>

        </S.LeftColumn>

          {/* RIGHT */}
          <S.RightColumn>
            <S.InfoSection>

              {/* HEADER */}
              <div>
                <S.NameHeading>
                  {profileData.name}
                </S.NameHeading>

                <S.Meta>
                  <MapPin size={14} />
                  {profileData.locations} • {profileData.age} anos
                </S.Meta>

              {profileData.verified && (
              <S.BadgeVerified>
                <BadgeCheck size={22} strokeWidth={1.8} />
                Perfil Verificado
              </S.BadgeVerified>
            )}
              </div>

              {/* BIO */}
              <S.Bio>
                “{profileData.bio}”
              </S.Bio>

              {/* DETAILS */}
              <S.DetailsList>

                <S.DetailItem>
                  <span>Etnia:</span>
                  <strong>{profileData.etnia}</strong>
                </S.DetailItem>

                <S.DetailItem>
                  <span>Atendimento:</span>
                  <strong>{profileData.atendimento.join(", ")}</strong>
                </S.DetailItem>

                <S.DetailItem>
                  <span>Local:</span>
                  <strong>{profileData.lugar.join(", ")}</strong>
                </S.DetailItem>

                {/* NOVOS DETALHES */}
                <S.DetailItem>
                  <span>Altura:</span>
                  <strong>{profileData.altura} cm</strong>
                </S.DetailItem>

                <S.DetailItem>
                  <span>Peso:</span>
                  <strong>{profileData.peso} kg</strong>
                </S.DetailItem>

                <S.DetailItem>
                  <span>Pagamento:</span>
                  <strong>{profileData.formasPagamento.join(", ")}</strong>
                </S.DetailItem>

              </S.DetailsList>

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

            </S.InfoSection>
          </S.RightColumn>
      </S.ProfileGrid>
    </S.Page>
  );
}
