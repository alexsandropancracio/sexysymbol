import { analyticsService } from "../analyticsService";
import { supabase } from "@/lib/supabase"; // client Supabase

export async function resetAnalytics(): Promise<void> {
  // 🔹 Buscar todos os anúncios do Supabase
  const { data: adsData, error: adsError } = await supabase
    .from("ads")
    .select("id, name");

  if (adsError) {
    console.error("Erro ao buscar anúncios do Supabase:", adsError);
    return;
  }

  const ads = adsData || [];

  // 🔹 Resetar views de todos os perfis
  for (const profile of ads) {
    await analyticsService.resetProfileViews(profile.id);
  }

  // 🔹 Resetar eventos locais
  if (typeof window !== "undefined") {
    localStorage.removeItem("analytics_events");
  }
}