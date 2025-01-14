import styled from "styled-components";
import theme from "theme";

export const Button = styled.button<any>`
  width: 180px;
  height: 45px;
  font-size: 13px;
  border-radius: 10px;
  border: 0.5px solid ${theme.colors.secondary.n01};
  background-color: ${(props: any) => {
    if (props.background === "success") return theme.colors.primary.n0;
    if (props.background === "error") return theme.colors.danger.n0;
    if (props.background === "info") return theme.colors.white.n0;
  }};
  opacity: ${(props: any) => props.opacity};
  color: ${(props: any) => {
    if (props.color === "info") return theme.colors.primary.n0;
    return theme.colors.white.n0;
  }};

  &:hover {
    box-shadow: 6px 6px 12px ${theme.colors.secondary.n01};
  }
`;
