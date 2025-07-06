import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin: 50px 0 30px;
  border-radius: 16px;
  border: 0.5px solid ${theme.colors.secondary.n01};
  box-shadow: 2px 2px 6px ${theme.colors.secondary.n01};
  background-color: ${theme.colors.white.n0};
  flex-wrap: wrap;
`;

export const TextArea = styled.span`
  color: ${theme.colors.text.n0};
  letter-spacing: 0.5px;
  font-size: 14px;
  font-family: "Montserrat";
  margin-right: 5px;
  font-weight: 400;
  padding: 22px;
`;
