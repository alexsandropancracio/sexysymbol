

import {
  HeaderContainer,
  Logo,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  MenuLinks,
  AnuncieButton, // botão estilizado
} from "./styles";

import lupaIcon from "../../assets/midia/lupa.png";

export function Header() {

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeaderContainer>
        <Logo to="/" onClick={handleGoToTop}>
          <span className="base">sexysymbol</span>
          <span className="shine">sexysymbol</span>
        </Logo>

        <SearchWrapper>
          <SearchIcon htmlFor="search">
            <img src={lupaIcon} alt="Buscar" />
          </SearchIcon>

          <SearchInput id="search" placeholder="Pesquisar..." />
        </SearchWrapper>

        <MenuLinks>
          <AnuncieButton to="/anuncie">ANUNCIE AQUI!</AnuncieButton>
        </MenuLinks>

      </HeaderContainer>
    </>
  );
}

