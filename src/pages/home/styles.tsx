import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;
  padding: 0 32px;
`;

export const Title = styled.text`
  display: flex;
  justify-content: center;
  font-size: 22px;
  padding: 40px 0;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const Text = styled.text`
  font-size: 16px;
  margin-bottom: 10px;
  font-family: "Montserrat";
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const CalculatorContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 50px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 22px;
  padding: 16px;
  margin-top: 25px;
  border: 0.5px solid black;
`;

export const ResultRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const ResultLabel = styled.span<any>`
  font-size: 20px;
  font-family: "Montserrat";
  margin-right: 5px;
  font-weight: ${(props: any) => (props.weight ? props.weight : 100)};
`;

export const ErrorLabel = styled(ResultLabel)`
  text-align: center;
  color: ${theme.colors.danger.n0};
  margin: 30px 0 0;
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
`;
