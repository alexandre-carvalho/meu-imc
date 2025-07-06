import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */

  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: 22px;
  padding: 45px 0 20px;
  color: ${theme.colors.text.n0};
  font-family: "Montserrat";
  font-weight: bold;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 16px;
`;

export const Text = styled.span`
  text-align: center;
  font-family: "Montserrat";
  color: ${theme.colors.text.n0};
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: 400;
  margin-bottom: 15px;
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;
`;

export const CalculatorContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
`;

export const ErrorLabel = styled.span<any>`
  color: ${theme.colors.text.n0};
  letter-spacing: 0.5px;
  font-size: 15px;
  font-family: "Montserrat";
  margin-right: 5px;
  font-weight: ${(props: any) => (props.weight ? props.weight : 100)};
  text-align: center;
  color: ${theme.colors.danger.n0};
  font-family: "Montserrat";
  margin: 30px 0 0;
`;
