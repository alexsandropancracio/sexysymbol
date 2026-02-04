import { useState } from "react";
import {
  HeaderContainer,
  Logo,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  MenuButton,
} from "./styles";

import { MenuDrawer } from "./MenuDrawer";
import lupaIcon from "../../assets/midia/lupa.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <Logo to="/"><span className="base">sexysymbol</span>
        <span className="shine">sexysymbol</span></Logo>

        <SearchWrapper>
          <SearchIcon htmlFor="search">
            <img src={lupaIcon} alt="Buscar" />
          </SearchIcon>

          <SearchInput
            id="search"
            placeholder="Pesquisar acompanhantes..."
          />
        </SearchWrapper>

        <MenuButton onClick={() => setIsOpen(true)}>
          ☰
        </MenuButton>
      </HeaderContainer>

      <MenuDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
