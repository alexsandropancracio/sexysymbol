export type MetricKey =
  | "views"
  | "whatsappClicks"
  | "profileShares"
  | "imageViews";

export const METRIC_LABELS: Record<MetricKey, string> = {
  views: "Views",
  whatsappClicks: "Cliques WhatsApp",
  profileShares: "Compartilhamentos",
  imageViews: "Visualizações de Imagem",
};
