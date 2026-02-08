import { useRef, useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  // 🔑 estado global da busca
  const [selectedName, setSelectedName] = useState("");

  // 🔗 referência da seção de anúncios
  const adsRef = useRef<HTMLElement | null>(null);

  // ⬇️ função de scroll compartilhada
  const scrollToAds = () => {
    adsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        selected={selectedName}
        setSelected={setSelectedName}
        scrollToAds={scrollToAds}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              nameFilter={selectedName}
              adsRef={adsRef}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
