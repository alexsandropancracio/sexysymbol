import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { AudienceSection } from "./sections/AudienceSection";
import { DifferentialsSection } from "./sections/DifeferentialsSection";
import { VisionSection } from "./sections/VisionSection";
import * as S from "./styles";

export function Sobre() {
  return (
    <S.PageContainer>
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <DifferentialsSection />
      <VisionSection />
    </S.PageContainer>
  );
}
