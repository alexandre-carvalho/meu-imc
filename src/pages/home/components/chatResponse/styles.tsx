import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 85%;
  margin: 50px 0 30px;
  padding: 16px;

  border-radius: 16px;
  border: 0.5px solid ${theme.colors.secondary.n01};
  box-shadow: 2px 2px 6px ${theme.colors.secondary.n01};
  background-color: ${theme.colors.white.n0};

  @media (max-width: 768px) {
    width: 90%;
    margin: 30px 0 20px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 80%;
    margin: 20px 0 16px;
    border-radius: 12px;
  }
`;

export const TextArea = styled.span`
  color: ${theme.colors.text.n0};
  letter-spacing: 0.5px;
  font-size: 14px;
  font-family: "Montserrat";
  font-weight: 400;
  padding: 22px;
  text-align: justify;
  word-break: break-word;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12.5px;
    padding: 12px;
  }
`;
export const LabelContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 5px;
`;

export const Label = styled.span`
  font-style: italic;
  color: ${theme.colors.text.n0};
  letter-spacing: 0.5px;
  font-size: 10px;
  font-family: "Montserrat";

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;
