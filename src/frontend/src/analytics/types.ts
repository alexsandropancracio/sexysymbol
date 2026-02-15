// src/analytics/types.ts

/* -------------------------
 * EVENTOS GENÉRICOS
 * ------------------------- */
export interface AnalyticsEvent<T = Record<string, any>> {
  id?: string;
  eventName: string;
  payload?: T;
  timestamp: number;
}

/* -------------------------
 * PROVIDER
 * ------------------------- */
export interface AnalyticsProvider {
  incrementProfileView(profileId: string): Promise<void>;
  getProfileViews(profileId: string): Promise<number>;
  resetProfileViews?(profileId?: string): Promise<void>;

  trackEvent?(
    eventName: string,
    payload?: Record<string, any>
  ): Promise<void>;
}
