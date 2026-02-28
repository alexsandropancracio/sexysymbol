// admin/components/ProtectedRoute.tsx

import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { ReactNode } from "react";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      // ❌ não está logado
      if (!session?.user) {
        setLoading(false);
        return;
      }

      // 🔹 verifica se é admin
      const { data: profileData, error } = await supabase
        .from("users")
        .select("is_admin")
        .eq("id", session.user.id)
        .single();

      if (error) {
        console.error("Erro ao verificar admin:", error);
      }

      setIsAdmin(profileData?.is_admin ?? false);
      setLoading(false);
    }

    checkUser();
  }, []);

  if (loading) {
    return <p>Verificando acesso...</p>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}