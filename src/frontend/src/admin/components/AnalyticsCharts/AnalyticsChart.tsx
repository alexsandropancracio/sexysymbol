import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import type { MetricKey } from "@/analytics/domain/metric";

interface Props {
  data: any[];
  metric: MetricKey;
  compareMetric?: MetricKey | null;
}

export function AnalyticsChart({ data, metric, compareMetric }: Props) {
  return (
    <div
      style={{
        width: "100%",
        background: "#111",
        borderRadius: 12,
        padding: 16,
        overflowX: "auto", // 🔥 scroll nasce aqui
      }}
    >
      {/* 👇 Esse cara força o gráfico a ser grande */}
      <div
        style={{
          minWidth: 900, // 👈 ajuste fino aqui
          height: 320,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
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
                borderRadius: 8,
                color: "#fff",
              }}
              cursor={{ fill: "rgba(201,162,77,0.08)" }}
            />

            <Legend />

            {/* 🔹 BARRAS */}
            <Bar dataKey="views" fill="#C9A24D" radius={[4, 4, 0, 0]} />
            <Bar dataKey="whatsappClicks" fill="#1f7a4d" />
            <Bar dataKey="profileShares" fill="#2563eb" />
            <Bar dataKey="imageViews" fill="#9333ea" />

            {/* 🔹 LINHAS */}
            <Line
              type="monotone"
              dataKey={metric}
              stroke="#C9A24D"
              strokeWidth={3}
            />

            {compareMetric && (
              <Line
                type="monotone"
                dataKey={compareMetric}
                stroke="#4CAF50"
                strokeWidth={2}
                strokeDasharray="4 4"
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
