import { Highlights } from "@/components/Highlights";
import { Ads } from "@/components/Ads/Ads";

interface HomeProps {
  nameFilter?: string;
  adsRef: React.RefObject<HTMLElement | null>;
}

export function Home({ nameFilter, adsRef }: HomeProps) {
  return (
    <>
      <Highlights />
      <Ads nameFilter={nameFilter} adsRef={adsRef} />
    </>
  );
}

