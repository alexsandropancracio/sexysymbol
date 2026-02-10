import { Hero } from "./Hero";
import { About } from "./About";
import { Benefits } from "./Benefits";
import { Essence } from "./Essence";
import { Guidelines } from "./Guidelines";
import { MediaStandards } from "./MediaStandards";
import { Safety } from "./Safety";
import { TargetAudience } from "./TargetAudience";
import { Verification } from "./Verification";
import { Footer } from "./Footer";

export function Anuncie() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Essence />
      <TargetAudience />
      <Verification />
      <Guidelines />
      <MediaStandards />
      <Safety />
      <Footer />
    </>
  );
}
