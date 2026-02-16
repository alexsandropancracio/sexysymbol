import { Navigate } from "react-router-dom";

interface AgeGuardProps {
  children: React.ReactNode;
}

export function AgeGuard({ children }: AgeGuardProps) {
  const isVerified = localStorage.getItem("ageVerified");

  if (!isVerified) {
    return <Navigate to="/18+" replace />;
  }

  return <>{children}</>;
}
