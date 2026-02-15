import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import type { ProfileStats } from "@/analytics/domainStats";
import type { MetricKey } from "@/analytics/domain/metric";
import { METRIC_LABELS } from "@/analytics/domain/metric";

type Props = {
  data: ProfileStats[];
  metric: MetricKey;
};

export function AnalyticsMetricChart({ data, metric }: Props) {
  return (
    <div style={{ width: "100%", height: 360, marginTop: 32 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />

          <XAxis
            dataKey="name"
            stroke="#aaa"
            tick={{ fill: "#ccc", fontSize: 12 }}
          />

          <YAxis
            stroke="#aaa"
            tick={{ fill: "#ccc", fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#111",
              border: "1px solid #333",
              borderRadius: "8px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey={metric}
            fill="#C9A24D"
            radius={[4, 4, 0, 0]}
            animationDuration={700}
            name={METRIC_LABELS[metric]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
