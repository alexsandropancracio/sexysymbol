// src/admin/components/StatsCard/StatsCard.tsx

import * as S from "./StatsCards.style";

interface StatsCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
}

export function StatsCard({ title, value, subtitle }: StatsCardProps) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Value>{value}</S.Value>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Card>
  );
}
