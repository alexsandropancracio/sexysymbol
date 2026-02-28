import { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Anuncie } from "./components/Anuncie";
import { ProfilePage } from "./components/Perfil/ProfilePage";
import { Dashboard } from "@/admin/pages/Dashboard";
import { Sobre } from "./components/Sobre";
import { Termos } from "./components/Termos";
import { Privacidade } from "./components/Privacidade";
import { Contato } from "./components/Contato";
import { SeoPage } from "./pages/SeoPage";

import { AgeGate } from "./pages/AgeGate";
import { AgeGuard } from "./routes/AgeGuard";

import { AdsProvider } from "./components/Ads/AdsContext";
import { Construcao } from "./components/Construcao/Construcao";
import { ProtectedRoute } from "@/admin/components/ProtectedRoute";
import LoginPage from "@/admin/pages/Login/LoginPage"

function App() {
  const [selectedName, setSelectedName] = useState("");

  const adsRef = useRef<HTMLElement | null>(null);

  const scrollToAds = () => {
    adsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AdsProvider>
      <Helmet>
        <title>sexysymbol</title>
        <meta
          name="description"
          content="SexySymbol — Plataforma de perfis verificados com discrição, segurança e elegância."
        />
      </Helmet>

      <Toaster position="top-right" />

      <Routes>
        {/* 🔞 GATE 18+ (rota isolada) */}
        <Route path="/18+" element={<AgeGate />} />

        {/* 🔐 TODAS AS ROTAS PROTEGIDAS */}
        <Route
          path="/*"
          element={
            <AgeGuard>
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
                      />
                    }
                  />

                  <Route path="/em-construcao" element={<Construcao />} />

                  <Route path="/anuncie" element={<Anuncie />} />

                  <Route path="/perfil/:id" element={<ProfilePage />} />

                  <Route path="/admin/login" element={<LoginPage />} />

                  {/* 🔐 ADMIN */}
                <Route
                    path="/admin/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />

                  <Route path="/sobre" element={<Sobre />} />
                  <Route path="/termos" element={<Termos />} />
                  <Route path="/privacidade" element={<Privacidade />} />
                  <Route path="/contato" element={<Contato />} />
                  <Route path=":slug" element={<SeoPage />} />
                </Routes>

                <Footer />
              </>
            </AgeGuard>
          }
        />
      </Routes>
    </AdsProvider>
  );
}

export default App;
