// src/analytics/localAnalyticsProvider.ts

import type { AnalyticsProvider } from "./types";

const VIEWS_KEY = "analytics_profile_views";
const EVENTS_KEY = "analytics_events";

function isBrowser() {
  return typeof window !== "undefined";
}

function safeParse<T>(value: string | null, fallback: T): T {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export const localAnalyticsProvider: AnalyticsProvider = {
  /* -------------------------
   * PROFILE VIEWS
   * ------------------------- */
  async incrementProfileView(profileId) {
    if (!isBrowser()) return;

    const raw = localStorage.getItem(VIEWS_KEY);
    const views = safeParse<Record<string, number>>(raw, {});

    views[profileId] = (views[profileId] || 0) + 1;

    localStorage.setItem(VIEWS_KEY, JSON.stringify(views));
  },

  async getProfileViews(profileId) {
    if (!isBrowser()) return 0;

    const raw = localStorage.getItem(VIEWS_KEY);
    const views = safeParse<Record<string, number>>(raw, {});

    return views[profileId] || 0;
  },

  async resetProfileViews(profileId) {
    if (!isBrowser()) return;

    if (!profileId) {
      localStorage.removeItem(VIEWS_KEY);
      return;
    }

    const raw = localStorage.getItem(VIEWS_KEY);
    const views = safeParse<Record<string, number>>(raw, {});

    delete views[profileId];

    localStorage.setItem(VIEWS_KEY, JSON.stringify(views));
  },

  /* -------------------------
   * GENERIC EVENTS
   * ------------------------- */
  async trackEvent(eventName, payload) {
    if (!isBrowser()) return;

    const raw = localStorage.getItem(EVENTS_KEY);
    const events = safeParse<any[]>(raw, []);

    events.push({
      id: crypto.randomUUID(),
      eventName,
      payload,
      timestamp: Date.now(),
    });

    localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
  },
};
