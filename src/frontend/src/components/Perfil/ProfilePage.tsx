import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ArrowLeft,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  Play
} from "lucide-react";
import * as S from "./ProfilePage.style";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export function ProfilePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const thumbRef = useRef<HTMLDivElement>(null);

  // 🔥 BUSCAR DADOS DO SUPABASE
  useEffect(() => {
    async function fetchProfile() {
      if (!id) return;

      setLoading(true);

      const { data: ad, error: adError } = await supabase
        .from("ads")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (adError) {
        console.error("Erro ao buscar anúncio:", adError);
        setLoading(false);
        return;
      }

      if (!ad) {
        setProfileData(null);
        setLoading(false);
        return;
      }

      // 🔥 AJUSTE AQUI: trazer is_cover e ordenar corretamente
      const { data: media, error: mediaError } = await supabase
        .from("ad_media")
        .select("url,type,order_index,is_cover")
        .eq("ad_id", id)
        .order("order_index", { ascending: true });

      if (mediaError) {
        console.error("Erro ao buscar mídias:", mediaError);
        setLoading(false);
        return;
      }

      // 🔥 ordenar com fallback seguro
      const sortedMedia =
        media?.sort(
          (a: any, b: any) =>
            (a.order_index || 0) - (b.order_index || 0)
        ) || [];

      // 🔥 excluir capa das imagens
      const images =
        sortedMedia
          .filter(
            (m: any) =>
              m.type === "image" &&
              m.is_cover !== true
          )
          .map(
            (m: any) => m.url
          );

      const videos =
        sortedMedia
          .filter(
            (m: any) =>
              m.type === "video"
          )
          .map(
            (m: any) => m.url
          );

      const visibleMedia =
        sortedMedia.filter(
          (m: any) => m.is_cover !== true
        );

      setProfileData({
        ...ad,
        images,
        videos,
        media: visibleMedia,
      });

      setSelectedImage(0);
      setLoading(false);
    }

    fetchProfile();
  }, [id]);

  if (loading) {
    return (
      <S.LoaderWrapper>
        Carregando...
        <S.LoaderDots>
          <div />
          <div />
          <div />
        </S.LoaderDots>
      </S.LoaderWrapper>
    );
  }

  if (!profileData) {
    return <S.Page>Perfil não encontrado</S.Page>;
  }

  const pageTitle = `${profileData.name} | sexysymbol`;
  const pageDescription = `${profileData.name} é um perfil verificado na SexySymbol. Atendimento com discrição, elegância e segurança.`;
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const imageUrl = profileData.images?.[0] || "";

  const next = () => {
    setSelectedImage(prev =>
      (prev + 1) % profileData.images.length
    );
  };

  const prev = () => {
    setSelectedImage(prev =>
      (prev - 1 + profileData.images.length) %
      profileData.images.length
    );
  };

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
    } catch {
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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

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
                src={profileData.images?.[selectedImage]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.0 }}
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
                {profileData.media?.map((m: any, index: number) => (
                  <S.Thumbnail
                    key={index}
                    active={index === selectedImage}
                    onClick={() => {
                      if (m.type === "image") {
                        const imgIndex = profileData.images.indexOf(m.url);
                        if (imgIndex >= 0) setSelectedImage(imgIndex);
                      } else {
                        // opcional: abrir modal de vídeo
                        window.open(m.url, "_blank");
                      }
                    }}
                  >
                    <img src={m.url} alt="" />
                    {m.type === "video" && (
                      <S.VideoIcon>
                        <Play size={14} />
                      </S.VideoIcon>
                    )}
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
            <div>
              <S.NameHeading>
                {profileData.name}
              </S.NameHeading>

              <S.Meta>
                <MapPin size={14} />
                {profileData.location} • {profileData.age} anos
              </S.Meta>

              {profileData.verified && (
                <S.BadgeVerified>
                  <BadgeCheck size={22} strokeWidth={1.8} />
                  Perfil Verificado
                </S.BadgeVerified>
              )}
            </div>

            <S.Bio>
              “{profileData.bio}”
            </S.Bio>

            <S.DetailsList>
              <S.DetailItem>
                <span>Etnia:</span>
                <strong>{profileData.etnia}</strong>
              </S.DetailItem>

              <S.DetailItem>
                <span>Atendimento:</span>
                <strong>{profileData.atendimento?.join(", ")}</strong>
              </S.DetailItem>

              <S.DetailItem>
                <span>Local:</span>
                <strong>{profileData.lugar?.join(", ")}</strong>
              </S.DetailItem>

              <S.DetailItem>
                <span>Altura:</span>
                <strong>{profileData.altura} cm</strong>
              </S.DetailItem>



              <S.DetailItem>
                <span>Pagamento:</span>
                <strong>{profileData.formasPagamento?.join(", ")}</strong>
              </S.DetailItem>

              <S.DetailItem>
                <span>Serviços:</span>
                <strong>{profileData.services?.join(", ")}</strong>
              </S.DetailItem>
            </S.DetailsList>

            <S.CTAButton
              onClick={() => {
                if (!profileData?.contato) return;

                window.open(
                  `https://wa.me/${profileData.contato}`,
                  "_blank"
                );
              }}
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