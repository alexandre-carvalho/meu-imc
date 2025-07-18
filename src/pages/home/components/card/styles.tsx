import styled from "styled-components";
import theme from "theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 185px;
  height: 250px;
  padding: 16px;

  border-radius: 16px;
  border: 0.5px solid ${theme.colors.secondary.n01};
  box-shadow: 2px 2px 6px ${theme.colors.secondary.n01};
  background-color: ${theme.colors.white.n0};

  transition: all 0.3s ease;

  &:hover {
    border: 1px solid ${theme.colors.secondary.n01};
    box-shadow: 6px 6px 12px ${theme.colors.secondary.n01};
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 220px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 85%;
    max-width: 320px;
    height: auto;
    padding: 12px 16px;
  }
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${theme.colors.text.n0};
  font-family: "Montserrat";

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Field = styled.input`
  width: 100%;
  font-size: 12px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.colors.secondary.n01};
  background-color: ${theme.colors.white.n0};
  padding: 6px;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px;
  }
`;
