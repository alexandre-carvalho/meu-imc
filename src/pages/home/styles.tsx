import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  padding: 0 32px;
  background-color: aliceblue;
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
  /* width: 100%; */
  padding: 16px;
  background-color: gray;
`;

export const Text = styled.text`
  font-size: 16px;
  margin-bottom: 3px;
  font-family: "Montserrat";
  background-color: green;
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 22px;
`;

export const Result = styled.span`
  font-size: 22px;
  text-align: center;
`;
