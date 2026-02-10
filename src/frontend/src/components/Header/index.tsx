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
import { ads } from "../Ads/AdsData";

interface HeaderProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  scrollToAds: () => void;
}

export function Header({
  selected,
  setSelected,
  scrollToAds,
}: HeaderProps) {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Ref para clique fora
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Sugestões baseadas nos anúncios
  const suggestions = ads
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
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Função para navegar e resetar scroll para o topo
  const navigateToHome = () => {
    navigate("/");        // vai para página principal
    window.scrollTo(0, 0); // reseta scroll para o topo
    handleClear();        // limpa busca
  };

  return (
    <HeaderContainer>
      {/* LOGO */}
      <Logo
        to="/"
        onClick={navigateToHome}
      >
        <span className="base">sexysymbol</span>
        <span className="shine">sexysymbol</span>
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
          style={{
            paddingRight: searchQuery ? "30px" : "12px",
          }}
        />

        {/* Botão limpar */}
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
            {suggestions.map(option => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                style={{
                  padding: "10px 12px",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background =
                    "rgba(201,162,77,0.25)")
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
