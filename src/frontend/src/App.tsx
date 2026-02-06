import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Anuncie } from "./components/Clients/Anuncie";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anuncie" element={<Anuncie />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
