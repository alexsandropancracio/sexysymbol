import React from "react";
import styled from "styled-components";

interface HeroProps {
  title: string;
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({ title, backgroundImage }) => {
  return (
    <HeroWrapper background={backgroundImage}>
      <Overlay>
        <Title>{title}</Title>
      </Overlay>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section<{ background: string }>`
  height: 70vh;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* efeito parallax */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem 4rem;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
  text-align: center;
`;
