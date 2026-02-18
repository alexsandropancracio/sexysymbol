import { useNavigate } from "react-router-dom";

export function AgeGate() {
  const navigate = useNavigate();

  function handleConfirm() {
    localStorage.setItem("ageConfirmed", "true");

    const redirectPath =
      localStorage.getItem("redirectAfterAge") || "/";

    localStorage.removeItem("redirectAfterAge");

    navigate(redirectPath, { replace: true });
  }

  function handleDeny() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #000 0%, #111 100%)",
        color: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: 460,
          width: "100%",
          background: "#111",
          borderRadius: 12,
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "0 0 40px rgba(201,162,77,0.15)",
          border: "1px solid rgba(201,162,77,0.3)",
        }}
      >
        <h1
          style={{
            fontSize: 28,
            marginBottom: 16,
            color: "#FCD862",
          }}
        >
          Você é maior de 18 anos?
        </h1>

        <p
          style={{
            fontSize: 15,
            color: "#ccc",
            marginBottom: 32,
            lineHeight: 1.5,
          }}
        >
          Este site contém conteúdo destinado exclusivamente a adultos.
          Ao continuar, você confirma que é maior de idade.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={handleConfirm}
            style={{
              padding: "12px 24px",
              background: "#FCD862",
              color: "#000",
              border: "none",
              borderRadius: 6,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sim, sou maior de 18
          </button>

          <button
            onClick={handleDeny}
            style={{
              padding: "12px 24px",
              background: "transparent",
              color: "#ccc",
              border: "1px solid #444",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}
