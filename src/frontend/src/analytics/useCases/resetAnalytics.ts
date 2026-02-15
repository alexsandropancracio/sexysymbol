import { ads } from "@/components/Ads/AdsData";
import { analyticsService } from "../analyticsService";

export async function resetAnalytics(): Promise<void> {
  // 🔹 Resetar views de todos os perfis
  for (const profile of ads) {
    await analyticsService.resetProfileViews(profile.id);
  }

  // 🔹 Resetar eventos
  if (typeof window !== "undefined") {
    localStorage.removeItem("analytics_events");
  }
}
