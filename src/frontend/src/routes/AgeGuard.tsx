import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

export function AgeGuard({ children }: { children: ReactNode }) {
  const location = useLocation();
  const confirmed = localStorage.getItem("ageConfirmed") === "true";

  if (!confirmed) {
    localStorage.setItem(
      "redirectAfterAge",
      location.pathname + location.search
    );

    return <Navigate to="/18+" replace />;
  }

  return <>{children}</>;
}
