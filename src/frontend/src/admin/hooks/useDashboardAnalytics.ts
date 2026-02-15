// src/admin/hooks/useDashboardAnalytics.ts

import { useCallback, useEffect, useState } from "react";
import type { ProfileStats } from "@/analytics/domainStats";
import type { DateRange } from "@/analytics/domain/dateRange";

import { buildProfileStats } from "@/analytics/useCases/buildProfileStats";
import { resetAnalytics } from "@/analytics/useCases/resetAnalytics";

export function useDashboardAnalytics(
  refreshInterval = 5000,
  dateRange?: DateRange
) {
  const [stats, setStats] = useState<ProfileStats[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Load centralizado (single source of truth)
  const loadData = useCallback(async () => {
    setLoading(true);
    const data = await buildProfileStats(dateRange);
    setStats(data);
    setLoading(false);
  }, [dateRange]);

  // 🔹 Reset (use case explícito)
  const reset = useCallback(async () => {
    await resetAnalytics();
    await loadData();
  }, [loadData]);

  // 🔹 Totais derivados (estado computado)
  const totals = stats.reduce(
    (acc, item) => {
      acc.views += item.views;
      acc.whatsapp += item.whatsappClicks;
      acc.shares += item.profileShares;
      acc.images += item.imageViews;
      return acc;
    },
    { views: 0, whatsapp: 0, shares: 0, images: 0 }
  );

  // 🔹 Ciclo de vida
  useEffect(() => {
    loadData();

    if (!refreshInterval) return;

    const interval = setInterval(loadData, refreshInterval);
    return () => clearInterval(interval);
  }, [loadData, refreshInterval]);

  return {
    stats,
    totals,
    loading,
    reload: loadData,
    reset,
  };
}
