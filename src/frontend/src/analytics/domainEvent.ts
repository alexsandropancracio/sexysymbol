import type { AnalyticsEvent } from "./types";
import type { AnalyticsEventName, AnalyticsPayloadMap } from "./domain";

export type DomainAnalyticsEvent<K extends AnalyticsEventName> =
  AnalyticsEvent<AnalyticsPayloadMap[K]> & {
    eventName: K;
  };

