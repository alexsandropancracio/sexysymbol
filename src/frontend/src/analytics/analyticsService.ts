// src/analytics/analyticsService.ts

import type { AnalyticsProvider } from "./types";
import { localAnalyticsProvider } from "./localAnalyticsProvider";

// 🔥 amanhã troca isso por apiAnalyticsProvider
const provider: AnalyticsProvider = localAnalyticsProvider;

export interface TrafficSources {
  [source: string]: number;
}

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  payload?: Record<string, any>;
  timestamp: number;
}



export const analyticsService = {
  /* -------------------------
   * EVENTOS GENÉRICOS
   * ------------------------- */
  trackEvent(eventName: string, payload?: Record<string, any>) {
    return provider.trackEvent?.(eventName, payload);
  },

  /* -------------------------
   * PROFILE
   * ------------------------- */
  trackProfileView(profileId: string) {
    return provider.incrementProfileView(profileId);
  },

  getProfileViews(profileId: string) {
    return provider.getProfileViews(profileId);
  },

  resetProfileViews(profileId?: string) {
    return provider.resetProfileViews?.(profileId);
  },  

  /* -------------------------
   * CONVERSÃO / INTERAÇÃO
   * ------------------------- */
  trackProfileShare(profileId: string, method: "native" | "copy") {
    return provider.trackEvent?.("profile_share", {
      profileId,
      method,
    });
  },

  trackWhatsAppClick(profileId: string) {
    return provider.trackEvent?.("whatsapp_click", {
      profileId,
    });
  },

  trackImageView(profileId: string, imageIndex: number) {
    return provider.trackEvent?.("profile_image_view", {
      profileId,
      imageIndex,
    });
  },

  async trackProfileViewWithContext(profileId: string) {
    const device =
      window.innerWidth < 768
        ? "mobile"
        : window.innerWidth < 1024
        ? "tablet"
        : "desktop";

    const referrer = document.referrer || "direct";

    await provider.trackEvent?.("profile_view", {
      profileId,
      device,
      referrer,
    });
  },


  async getWhatsAppClicks(profileId: string) : Promise<number> {
    if (typeof window === "undefined") return 0;

    const raw = localStorage.getItem("analytics_events");
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];

    return events.filter(
      (event: any) =>
        event.eventName === "whatsapp_click" &&
        event.payload?.profileId === profileId
    ).length;
  },

  async getConversionRate(profileId: string) : Promise<number> {
    const views = await this.getProfileViews(profileId);
    const clicks = await this.getWhatsAppClicks(profileId);

    if (views === 0) return 0;

    return Number(((clicks / views) * 100).toFixed(2));
  },

  async getTrafficSources(profileId: string): Promise<TrafficSources> {
    if (typeof window === "undefined") return {};

    const raw = localStorage.getItem("analytics_events");
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];


    const views = events.filter(
      (event: any) =>
        event.eventName === "profile_view" &&
        event.payload?.profileId === profileId
    );

    const sources: TrafficSources = {};

    views.forEach((event: any) => {
      const ref = event.payload?.referrer || "direct";

      let source = "direct";
      if (ref.includes("instagram")) source = "instagram";
      else if (ref.includes("google")) source = "google";
      else if (ref.includes("facebook")) source = "facebook";
      else if (ref !== "") source = "other";

      sources[source] = (sources[source] || 0) + 1;
    });

    return sources;
  }

};

//quando tiver backend:
//import { apiAnalyticsProvider } from "./apiAnalyticsProvider";
//const provider = apiAnalyticsProvider;