import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const Wrapper = styled.div<{ align: "left" | "center" }>`
  margin-bottom: 4rem;
  text-align: ${({ align }) => align};
`;

const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  line-height: 1.2;
  letter-spacing: 0.02em;
`;

const SubtitleLine = styled(motion.div)`
  height: 0.25rem;
  width: 6rem;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0.5rem auto 0;
  opacity: 0.7;
`;

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
}) => {
  return (
    <Wrapper align={align}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </Title>
      {subtitle && (
        <SubtitleLine
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      )}
    </Wrapper>
  );
};
