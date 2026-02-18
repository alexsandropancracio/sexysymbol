import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: 6rem 0 3rem;
  border-top: 1px solid #1a1a1a;

  @media (max-width: 1024px) {
    padding: 5rem 0 2.75rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 0 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 2rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 6vw, 3.2rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.25rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 5vw, 2.8rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 6vw, 2.4rem);
  }
`;

export const Description = styled.p`
  max-width: 520px;
  width: 100%;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2.5rem;
  }
`;

export const CtaButton = styled(motion.a)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

  max-width: 100%;
  text-align: center;
  box-sizing: border-box;

  &:hover {
    background: #FCD862;
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

  @media (max-width: 768px) {
    padding: 0.95rem 2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.9rem 1.5rem;
    font-size: 0.95rem;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 2rem 2rem 0;

  border-top: 1px solid #1a1a1a;

  @media (max-width: 768px) {
    padding: 1.75rem 1.5rem 0;
    margin-top: 3.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.25rem 0;
    margin-top: 3rem;
  }
`;
