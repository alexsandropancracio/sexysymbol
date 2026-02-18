import styled from "styled-components";

/* =========================
   ABOUT CONTAINER
========================= */
export const AboutContainer = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  padding: 80px 24px;
  display: flex;
  justify-content: center;

  /* 🔹 evita scroll horizontal */
  width: 100%;
  box-sizing: border-box;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 70px 20px;
  }

  /* Mobile */
  @media (max-width: 768px) {
    padding: 60px 16px;
  }

  /* Small Mobile */
  @media (max-width: 480px) {
    padding: 40px 12px;
  }
`;

/* =========================
   ABOUT CONTENT
========================= */
export const AboutContent = styled.section`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 64px;
  box-sizing: border-box;

  @media (max-width: 1024px) { gap: 56px; }
  @media (max-width: 768px) { gap: 48px; }
  @media (max-width: 480px) { gap: 32px; }
`;

/* =========================
   ABOUT HEADER
========================= */
export const AboutHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;

  @media (max-width: 768px) { gap: 20px; }
  @media (max-width: 480px) { gap: 16px; }
`;

/* =========================
   TITLES & TEXTS
========================= */
export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.5px;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1440px) { font-size: 2.8rem; }
  @media (max-width: 1024px) { font-size: 2.5rem; }
  @media (max-width: 768px) { font-size: 2.2rem; }
  @media (max-width: 480px) { font-size: 1.8rem; }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 720px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 1.05rem; }
  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
`;

/* =========================
   SECTIONS INTERNAS
========================= */
export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 48px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 42px; gap: 22px; }
  @media (max-width: 768px) { padding: 36px; gap: 20px; }
  @media (max-width: 480px) { padding: 24px; gap: 16px; }
`;

/* =========================
   TITLES / TEXTS INTERNOS
========================= */
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 1.85rem; }
  @media (max-width: 768px) { font-size: 1.75rem; }
  @media (max-width: 480px) { font-size: 1.5rem; }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 0.98rem; }
  @media (max-width: 768px) { font-size: 0.95rem; }
  @media (max-width: 480px) { font-size: 0.9rem; }
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.colors.primary},
    transparent
  );
  opacity: 0.4;
`;

/* =========================
   VALUES LIST
========================= */
export const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { gap: 22px; }
  @media (max-width: 768px) { gap: 20px; }
  @media (max-width: 480px) {
    gap: 16px;
    grid-template-columns: 1fr;
  }
`;

export const ValueItem = styled.li`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { padding: 22px; gap: 11px; }
  @media (max-width: 768px) { padding: 20px; gap: 10px; }
  @media (max-width: 480px) { padding: 16px; gap: 8px; }
`;

export const ValueTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 1.05rem; }
  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
`;

export const ValueText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) { font-size: 0.92rem; }
  @media (max-width: 768px) { font-size: 0.9rem; }
  @media (max-width: 480px) { font-size: 0.85rem; }
`;
