import { supabase } from "@/lib/supabase";
import type { Ad } from "@/components/Ads/AdsData";

export async function getHighlights(): Promise<Ad[]> {

  const { data, error } = await supabase
    .from("ads")
    .select(`
      id,
      name,
      age,
      location,
      verified,
      bio,
      ad_media (
        id,
        url,
        is_cover,
        order_index
      )
    `)
    .eq("is_highlight", true)
    .limit(5);

  if (error) {
    console.error("Erro ao buscar highlights:", error);
    return [];
  }

  if (!data) return [];

const ads: Ad[] = data.map((ad: any) => {
  // 🔹 capa = primeiro item com is_cover = true
  const cover = ad.ad_media?.find((m: any) => m.is_cover)?.url || ad.ad_media?.[0]?.url || "";

  // 🔹 galeria = todas as outras imagens
  const gallery = ad.ad_media?.filter((m: any) => !m.is_cover).map((m: any) => m.url) || [];

  return {
    id: ad.id,
    name: ad.name,
    age: ad.age,
    location: ad.location,
    verified: ad.verified,
    bio: ad.bio,
    cover,       // capa garantida
    images: gallery,
    gallery,
    media: ad.ad_media || [],
    videos: [],
  };
});

  return ads;

}