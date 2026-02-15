/* -------------------------
 * DOMÍNIO DO ANALYTICS
 * ------------------------- */

export type AnalyticsEventName =
  | "profile_view"
  | "whatsapp_click"
  | "profile_share"
  | "profile_image_view";

export interface AnalyticsPayloadMap {
  profile_view: {
    profileId: string;
    source?: string;
    device?: "mobile" | "tablet" | "desktop";
  };

  whatsapp_click: {
    profileId: string;
    source?: string;
    method?: "native" | "copy";
  };

  profile_share: {
    profileId: string;
    source?: string;
  };

  profile_image_view: {
    profileId: string;
    imageIndex: number;
  };
}
