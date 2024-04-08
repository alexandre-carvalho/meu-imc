import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: hidden;
  padding: 0 32px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  justify-content: center;
  padding: 10px 0 20px;
`;

export const Title = styled.div`
font-size: 18px;
`;

export const ContainerSection = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
padding: 20px;
`;

export const InputContent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
width: 100%;
margin-bottom: 50px;
`;

export const TableContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
border: 1px solid black;
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