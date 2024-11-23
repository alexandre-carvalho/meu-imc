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
  padding: 40px 0 20px;
  color: ${theme.colors.text.n0};
  font-family: "Montserrat";
  font-weight: bold;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 16px 32px;
`;

export const Text = styled.text`
  text-align: center;
  font-size: 15px;
  margin-bottom: 10px;
  color: ${theme.colors.text.n0};
  font-family: "Montserrat";
  letter-spacing: 0.5px;
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
  margin-top: 25px;
`;

export const CalculatorContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-radius: 22px;
  padding: 16px;
  margin-top: 30px;
  border-radius: 16px;
  border: 0.5px solid ${theme.colors.secondary.n01};
  box-shadow: 2px 2px 6px ${theme.colors.secondary.n01};
  background-color: ${theme.colors.white.n0};

  &:hover {
    border: 1px solid ${theme.colors.secondary.n01};
    box-shadow: 6px 6px 12px ${theme.colors.secondary.n01};
  }
`;

export const ResultRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const ResultLabel = styled.text<any>`
  color: ${theme.colors.text.n0};
  letter-spacing: 0.5px;
  font-size: 15px;
  font-family: "Montserrat";
  margin-right: 5px;
  font-weight: ${(props: any) => (props.weight ? props.weight : 100)};
`;

export const ErrorLabel = styled(ResultLabel)`
  text-align: center;
  color: ${theme.colors.danger.n0};
  font-family: "Montserrat";
  margin: 30px 0 0;
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
`;
