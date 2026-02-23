import { useState, useRef, useEffect } from "react";
import {
  HeaderContainer,
  Logo,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  MenuLinks,
  AnuncieButton,
} from "./styles";
import { useNavigate } from "react-router-dom";
import lupaIcon from "../../assets/midia/lupa.png";
import logo from "../../assets/logo/sexysymbol - logotipo.png";
import { supabase } from "@/lib/supabase"; // client Supabase

interface HeaderProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  scrollToAds: () => void;
}

interface AdType {
  id: string;
  name: string;
}

export function Header({ selected, setSelected, scrollToAds }: HeaderProps) {
  const navigate = useNavigate();
  const [ads, setAds] = useState<AdType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  // 🔥 BUSCAR ADS DO SUPABASE
  useEffect(() => {
    async function fetchAds() {
      const { data, error } = await supabase
        .from("ads")
        .select("id, name");

      if (error) {
        console.error("Erro ao buscar anúncios:", error);
        setAds([]);
        return;
      }

      setAds(data as AdType[]);
    }

    fetchAds();
  }, []);

  // Sugestões baseadas nos anúncios
  const suggestions: string[] = ads
    .map(ad => ad.name)
    .filter(
      name =>
        name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        name !== selected
    );

  // Selecionar sugestão
  const handleSelect = (name: string) => {
    setSelected(name);
    setSearchQuery(name);
    setShowSuggestions(false);

    navigate("/");
    setTimeout(scrollToAds, 100);
  };

  // Limpar busca
  const handleClear = () => {
    setSelected("");
    setSearchQuery("");
    setShowSuggestions(false);
  };

  // Fecha autocomplete ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navigateToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
    handleClear();
  };

  return (
    <HeaderContainer>
      {/* LOGO */}
      <Logo to="/" onClick={navigateToHome} $logo={logo}>
        <div className="logo-wrapper">
          <img src={logo} alt="SexySymbol Logo" />
          <span className="shine"></span>
        </div>
      </Logo>

      {/* BUSCA */}
      <SearchWrapper ref={wrapperRef} style={{ position: "relative" }}>
        <SearchIcon htmlFor="search">
          <img src={lupaIcon} alt="Buscar" />
        </SearchIcon>

        <SearchInput
          id="search"
          value={searchQuery}
          onChange={e => {
            const value = e.target.value;
            setSearchQuery(value);
            setSelected("");
            setShowSuggestions(value.length > 0);
          }}
          onKeyDown={e => {
            if (e.key === "Enter" && searchQuery.trim()) {
              setSelected(searchQuery);
              setShowSuggestions(false);
              navigate("/");
              setTimeout(scrollToAds, 100);
            }
          }}
          placeholder="Pesquisar acompanhante..."
          style={{ paddingRight: searchQuery ? "30px" : "12px" }}
        />

        {searchQuery && (
          <span
            onClick={handleClear}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            ×
          </span>
        )}

        {/* AUTOCOMPLETE */}
        {showSuggestions && suggestions.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              width: "100%",
              background: "rgba(0,0,0,0.85)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderTop: "none",
              borderRadius: "0 0 12px 12px",
              zIndex: 1000,
              maxHeight: "200px",
              overflowY: "auto",
              marginTop: "4px",
            }}
          >
            {suggestions.map((option: string) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "10px 12px",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = "rgba(201,162,77,0.25)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </SearchWrapper>

      {/* MENU */}
      <MenuLinks>
        <AnuncieButton to="/anuncie">ANUNCIE AQUI!</AnuncieButton>
      </MenuLinks>
    </HeaderContainer>
  );
}