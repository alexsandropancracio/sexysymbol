import type { ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  max-width: 80rem; /* equivalente ao max-w-7xl */
  margin: 0 auto;
  padding-left: 1.5rem;  /* px-6 */
  padding-right: 1.5rem;

  @media (min-width: 418px) {
    padding-left: 3rem; /* md:px-12 */
    padding-right: 3rem;
  }
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  );
};
