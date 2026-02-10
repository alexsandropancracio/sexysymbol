import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 0 3rem;
  border-top: 1px solid #1a1a1a;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2.2rem, 4.5vw, 3.2rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  max-width: 520px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 3rem;
`;

export const CtaButton = styled(motion.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  padding: 1rem 2.25rem;
  border-radius: 4px;

  background: ${({ theme }) => theme.colors.primary};
  color: #000;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 600;
  font-size: 1.05rem;

  text-decoration: none;
  cursor: pointer;

  box-shadow: 0 0 20px rgba(201, 162, 77, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: #d6b15c;
    box-shadow: 0 0 30px rgba(201, 162, 77, 0.5);
  }

  &:after {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    pointer-events: none;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid #1a1a1a;
`;

export const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.85rem;
  color: #666;
  text-align: center;
`;
