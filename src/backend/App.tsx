import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TargetAudience } from './components/TargetAudience';
import { Benefits } from './components/Benefits';
import { Guidelines } from './components/Guidelines';
import { MediaStandards } from './components/MediaStandards';
import { Safety } from './components/Safety';
import { Verification } from './components/Verification';
import { Essence } from './components/Essence';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden bg-neutral-950 text-neutral-200 selection:bg-gold-500/30 selection:text-gold-200">
      <Hero />
      <About />
      <TargetAudience />
      <Benefits />
      <Guidelines />
      <MediaStandards />
      <Safety />
      <Verification />
      <Essence />
      <Footer />
    </main>
  );
};

export default App;