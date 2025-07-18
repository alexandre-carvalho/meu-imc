import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100dvh; /* Mais confiável que 100vh em mobile */
  padding: 16px;

  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Scroll suave em iOS */

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-height: 1000px) {
    padding: 32px;
  }
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: 22px;
  padding: 45px 0 20px;
  color: ${theme.colors.text.n0};
  font-family: "Montserrat";
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 30px 0 15px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 16px;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 12px;
  }
`;

export const Text = styled.span`
  text-align: center;
  font-family: "Montserrat";
  color: ${theme.colors.text.n0};
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: 400;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CalculatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 20px;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 12px;
  }
`;

export const CalculatorContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 50px;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ErrorLabel = styled.span<any>`
  color: ${theme.colors.danger.n0};
  letter-spacing: 0.5px;
  font-size: 15px;
  font-family: "Montserrat";
  margin: 30px 0;
  text-align: center;
  font-weight: ${(props: any) => (props.weight ? props.weight : 100)};

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 20px 0;
  }
`;
