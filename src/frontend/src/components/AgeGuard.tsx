import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface AgeGuardProps {
  children: ReactNode;
}

export function AgeGuard({ children }: AgeGuardProps) {
  const location = useLocation();
  const confirmed = localStorage.getItem("ageConfirmed");

  // Libera a própria página de confirmação
  if (location.pathname === "/18+") {
    return <>{children}</>;
  }

  // Bloqueia tudo se não confirmou
  if (!confirmed) {
    return <Navigate to="/18+" replace />;
  }

  return <>{children}</>;
}
