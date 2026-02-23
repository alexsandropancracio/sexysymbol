import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scrollY = location.state?.scrollY;

    if (scrollY !== undefined) {
      // Restaurar scroll ao voltar
      setTimeout(() => {
        window.scrollTo(0, scrollY);
      }, 0);
    } else {
      // Navegação normal
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}