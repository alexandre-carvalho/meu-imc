import styled from "styled-components";
import theme from "theme";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  padding: 16px;
  margin: 30px 0;
  border-radius: 16px;
  border: 0.5px solid ${theme.colors.secondary.n01};
  box-shadow: 2px 2px 6px ${theme.colors.secondary.n01};
  background-color: ${theme.colors.white.n0};
`;

export const ResultRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const ResultLabel = styled.span<any>`
  color: ${theme.colors.text.n0};
  letter-spacing: 0.5px;
  font-size: 15px;
  font-family: "Montserrat";
  margin-right: 5px;
  font-weight: ${(props: any) => (props.weight ? props.weight : 100)};
`;

export const ResultButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 25px;
`;
