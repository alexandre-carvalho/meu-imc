import styled from "styled-components";
import theme from 'theme';

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
box-shadow: 5px 5px 10px ${theme.colors.secondary.n01};
background-color: ${theme.colors.secondary.n0};
`;

export const Label = styled.span`
font-size: 16px;
font-weight: bold;
color: ${theme.colors.secondary.n02};
`;

export const Field = styled.input`
width: 100%;
align-items: center;
font-size: 14px;
border: none;
outline: none;
border-bottom: 1px solid ${theme.colors.secondary.n02};
background-color: ${theme.colors.secondary.n0};
`;