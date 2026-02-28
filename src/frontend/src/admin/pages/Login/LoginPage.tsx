// admin/pages/login/LoginPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase"; // client Supabase
import type { User } from "@supabase/supabase-js";
import styled from "styled-components";

// ===== Estilos =====
const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const LoginCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 40px 30px;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.muted};
  background-color: #1a1a1a;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primary};
  }
`;

const Button = styled.button`
  padding: 12px 15px;
  border-radius: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #000;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px #fcd86280;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4f;
  font-size: 0.9rem;
  text-align: center;
`;

// ===== LoginPage =====
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      // 🔹 Login via Supabase Auth
      const { data: authData, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      const session = authData?.session ?? null;
      const user: User | null = authData?.user ?? null;

      if (!user || !session) {
        setErrorMsg("Erro: usuário ou sessão não encontrados");
        return;
      }

      // 🔹 Verifica se o usuário é admin
      const { data: profileData, error: profileError } = await supabase
        .from("users")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Erro ao verificar admin:", profileError);
        setErrorMsg("Erro ao verificar permissões");
        return;
      }

      if (!profileData?.is_admin) {
        setErrorMsg("Acesso negado: você não tem permissão de admin");
        return;
      }

      // 🔹 Login válido e admin
      navigate("/admin/dashboard");
    } catch (err: any) {
      setErrorMsg("Erro inesperado: " + err.message);
    }
  };

  return (
    <LoginWrapper>
      <LoginCard>
        <Title>Login</Title>
        <form style={{ display: "flex", flexDirection: "column", gap: 15 }} onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </form>
        {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
      </LoginCard>
    </LoginWrapper>
  );
}