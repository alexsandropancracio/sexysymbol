import { useNavigate } from "react-router-dom";

export function AgeGate() {
  const navigate = useNavigate();

  function handleConfirm() {
    localStorage.setItem("ageConfirmed", "true");
    navigate("/", { replace: true });
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "24px"
    }}>
      <div>
        <h1 style={{ fontSize: 32, marginBottom: 16 }}>
          Você é maior de 18 anos?
        </h1>

        <p style={{ maxWidth: 420, marginBottom: 32, color: "#ccc" }}>
          Este site contém conteúdo destinado exclusivamente a adultos.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
          <button onClick={handleConfirm}>
            Sim, sou maior de 18
          </button>

          <button onClick={handleDeny}>
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
