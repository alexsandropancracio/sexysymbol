
import styled from "styled-components";

export const WhoIsItFor = () => {
  return (
    <Section>
      <SectionTitle>Para quem é o Sexysymbol</SectionTitle>
      <p>
        Sexysymbol é uma plataforma pensada para profissionais que desejam se posicionar com
        seriedade, alcançar público qualificado e crescer financeiramente de forma autônoma.
      </p>
    </Section>
  );
};

const Section = styled.section`
  padding: 6rem 2rem;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;
