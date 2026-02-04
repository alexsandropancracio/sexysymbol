import { Section, Grid } from "./styles";
import { AdsCard } from "./AdsCard";

export function Ads() {
  return (
    <Section id="ads">
      <Grid>
        <AdsCard />
        <AdsCard />
        <AdsCard />
      </Grid>
    </Section>
  );
}
