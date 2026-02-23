import type { AnalyticsEvent } from "../types";
import type { ProfileStats } from "../domainStats";
import type { DateRange } from "../domain/dateRange";

import { analyticsService } from "../analyticsService";
import { supabase } from "@/lib/supabase"; // client Supabase

export async function buildProfileStats(
  dateRange?: DateRange
): Promise<ProfileStats[]> {
  // 🔹 Buscar todos os anúncios do Supabase
  const { data: adsData, error: adsError } = await supabase
    .from("ads")
    .select("id, name");

  if (adsError) {
    console.error("Erro ao buscar anúncios do Supabase:", adsError);
    return [];
  }

  const ads = adsData || [];

  // 🔹 Views continuam vindo do provider (backend-ready)
  const allViews: Record<string, number> = {};
  for (const profile of ads) {
    allViews[profile.id] = await analyticsService.getProfileViews(profile.id);
  }

  // 🔹 Eventos brutos
  const raw = localStorage.getItem("analytics_events");
  const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];

  // 🔹 Filtro por data (domínio, não UI)
  const filteredEvents = events.filter((event) => {
    if (!dateRange?.from && !dateRange?.to) return true;

    const eventDate = new Date(event.timestamp);

    if (dateRange.from && eventDate < dateRange.from) return false;
    if (dateRange.to && eventDate > dateRange.to) return false;

    return true;
  });

  // 🔹 Construção das métricas
  return ads.map((profile) => {
    const profileEvents = filteredEvents.filter(
      (e) => e.payload?.profileId === profile.id
    );

    const sourceCounts = profileEvents.reduce<Record<string, number>>(
      (acc, e) => {
        const source = e.payload?.source;
        if (source) {
          acc[source] = (acc[source] || 0) + 1;
        }
        return acc;
      },
      {}
    );

    const topSource =
      Object.entries(sourceCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ??
      "direct";

    return {
      id: profile.id,
      name: profile.name,
      views: allViews[profile.id] || 0,
      whatsappClicks: profileEvents.filter(
        (e) => e.eventName === "whatsapp_click"
      ).length,
      profileShares: profileEvents.filter(
        (e) => e.eventName === "profile_share"
      ).length,
      imageViews: profileEvents.filter(
        (e) => e.eventName === "profile_image_view"
      ).length,
      topSource,
    };
  });
}